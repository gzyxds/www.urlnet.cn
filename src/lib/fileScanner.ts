import { getAvailableNewsFiles, checkFileExists as indexCheckFileExists } from './newsFileIndex';

// 文件扫描工具类
export class FileScanner {
  private static readonly NEWS_CONTENT_PATH = '/src/content/news';
  
  // 缓存已扫描的文件列表
  private static cachedFiles: string[] | null = null;
  private static lastScanTime: number = 0;
  private static readonly CACHE_DURATION = 2000; // 2秒缓存，更快响应
  
  // 获取新闻目录下的所有markdown文件
  static async scanNewsMarkdownFiles(): Promise<string[]> {
    try {
      // 检查缓存
      const now = Date.now();
      if (this.cachedFiles && (now - this.lastScanTime) < this.CACHE_DURATION) {
        return this.cachedFiles;
      }

      // 方法1: 使用文件索引进行扫描（最可靠）
      const indexFiles = this.scanWithFileIndex();
      if (indexFiles.length > 0) {
        this.cachedFiles = indexFiles;
        this.lastScanTime = now;
        console.log(`文件索引扫描发现 ${indexFiles.length} 个markdown文件:`, indexFiles);
        return indexFiles;
      }

      // 方法2: 如果文件索引失败，使用智能检测
      const detectedFiles = await this.intelligentFileDetection();
      this.cachedFiles = detectedFiles;
      this.lastScanTime = now;
      console.log(`智能检测发现 ${detectedFiles.length} 个markdown文件:`, detectedFiles);
      return detectedFiles;
      
    } catch (error) {
      console.error('扫描文件时出错:', error);
      // 返回缓存的文件或空数组
      return this.cachedFiles || [];
    }
  }

  // 使用文件索引进行扫描
  private static scanWithFileIndex(): string[] {
    try {
      const files = getAvailableNewsFiles();
      console.log('文件索引返回的文件:', files);
      return files;
    } catch (error) {
      console.debug('文件索引扫描失败:', error);
      return [];
    }
  }

  // 智能文件检测（后备方案）
  private static async intelligentFileDetection(): Promise<string[]> {
    const validFiles: string[] = [];
    
    // 减少扫描范围，只检测1-20的数字文件和已知存在的文件
    const potentialNumericFiles = Array.from({length: 20}, (_, i) => (i + 1).toString());
    const potentialNamedFiles = [
      'ai-digital-human-3-0-release',
      'ai-future-trends', 
      'ai-education-personalization',
      'ai-data-security-privacy',
      'test-news',
      'tech-innovation',
      'news-update',
      'article-latest',
      'auto-update-final-test'
    ];
    
    const allPotentialFiles = [...potentialNumericFiles, ...potentialNamedFiles];
    
    // 并行检测所有潜在文件
    const checkPromises = allPotentialFiles.map(async (filename) => {
      try {
        const exists = await this.checkFileExists(filename);
        if (exists) {
          return filename;
        }
      } catch (error) {
        console.debug(`文件 ${filename} 不存在或无法访问`);
      }
      return null;
    });
    
    const results = await Promise.all(checkPromises);
    
    // 过滤出存在的文件
    for (const result of results) {
      if (result) {
        validFiles.push(result);
      }
    }
    
    // 按数字排序（数字文件在前，字母文件在后）
    validFiles.sort((a, b) => {
      const aNum = parseInt(a);
      const bNum = parseInt(b);
      if (!isNaN(aNum) && !isNaN(bNum)) {
        return aNum - bNum;
      }
      if (!isNaN(aNum)) return -1;
      if (!isNaN(bNum)) return 1;
      return a.localeCompare(b);
    });
    
    return validFiles;
  }
  
  // 检查文件是否存在 - 优化的检测方法
  private static async checkFileExists(filename: string): Promise<boolean> {
    try {
      // 方法1: 优先使用文件索引检查（最可靠，无网络请求）
      const indexResult = await indexCheckFileExists(filename);
      return indexResult;
      
    } catch (error) {
      console.debug(`文件索引检查失败 ${filename}:`, error);
      
      // 方法2: 检查是否匹配已知模式（避免网络请求）
      if (!this.isLikelyValidFile(filename)) {
        return false;
      }

      // 方法3: 仅在必要时进行网络请求
      try {
        const response = await fetch(`${this.NEWS_CONTENT_PATH}/${filename}.md`, {
          method: 'HEAD',
          cache: 'no-cache'
        });
        
        return response.ok;
      } catch (fetchError) {
        console.debug(`网络请求失败 ${filename}:`, fetchError);
        return false;
      }
    }
  }

  // 检查文件名是否符合已知的有效模式
  private static isLikelyValidFile(filename: string): boolean {
    const patterns = [
      // 数字文件 1-50
      /^\d+$/,
      // AI相关文件
      /^ai-/,
      // 技术相关文件
      /^tech-/,
      // 新闻相关文件
      /^news-/,
      // 日期格式文件
      /^\d{4}-\d{2}-\d{2}/,
      // 其他常见模式
      /^(article|post|blog|update|release|test)-/
    ];
    
    return patterns.some(pattern => pattern.test(filename));
  }
  
  // 清除缓存，强制重新扫描
  static clearCache(): void {
    this.cachedFiles = null;
    this.lastScanTime = 0;
  }
  
  // 获取文件的最后修改时间（如果可能的话）
  static async getFileModificationTime(filename: string): Promise<Date | null> {
    try {
      // 先检查文件是否存在，避免对不存在的文件发起请求
      const exists = await indexCheckFileExists(filename);
      if (!exists) {
        return null;
      }

      const response = await fetch(`${this.NEWS_CONTENT_PATH}/${filename}.md`, {
        method: 'HEAD'
      });
      
      if (response.ok) {
        const lastModified = response.headers.get('Last-Modified');
        if (lastModified) {
          return new Date(lastModified);
        }
      }
    } catch (error) {
      console.debug(`无法获取文件 ${filename} 的修改时间:`, error);
    }
    return null;
  }
  
  // 监听文件变化（在支持的环境中）
  static watchNewsFiles(callback: (files: string[]) => void): void {
    // 定期检查文件变化
    const checkInterval = 30000; // 30秒检查一次
    
    let lastFileList: string[] = [];
    
    const checkFiles = async () => {
      try {
        const currentFiles = await this.scanNewsMarkdownFiles();
        
        // 比较文件列表是否有变化
        if (JSON.stringify(currentFiles.sort()) !== JSON.stringify(lastFileList.sort())) {
          console.log('检测到文件变化:', {
            previous: lastFileList,
            current: currentFiles
          });
          lastFileList = currentFiles;
          callback(currentFiles);
        }
      } catch (error) {
        console.error('检查文件变化时出错:', error);
      }
    };
    
    // 立即执行一次
    checkFiles();
    
    // 设置定期检查
    setInterval(checkFiles, checkInterval);
  }
}