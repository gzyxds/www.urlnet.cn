// 新闻文件索引 - 使用Vite的import.meta.glob自动生成
// 这个文件会在构建时自动扫描所有markdown文件

// 使用Vite的glob导入功能获取所有markdown文件
const newsFiles = import.meta.glob('/src/content/news/*.md', { 
  eager: false,
  query: '?url',
  import: 'default'
});

// 提取文件名列表
export const getAvailableNewsFiles = (): string[] => {
  const files: string[] = [];
  
  for (const path in newsFiles) {
    // 从路径中提取文件名（不包含扩展名）
    const filename = path.replace('/src/content/news/', '').replace('.md', '');
    files.push(filename);
  }
  
  // 按数字排序（数字文件在前，字母文件在后）
  files.sort((a, b) => {
    const aNum = parseInt(a);
    const bNum = parseInt(b);
    if (!isNaN(aNum) && !isNaN(bNum)) {
      return aNum - bNum;
    }
    if (!isNaN(aNum)) return -1;
    if (!isNaN(bNum)) return 1;
    return a.localeCompare(b);
  });
  
  return files;
};

// 检查特定文件是否存在
export const checkFileExists = async (filename: string): Promise<boolean> => {
  const availableFiles = getAvailableNewsFiles();
  return availableFiles.includes(filename);
};

// 获取文件的导入函数
export const getFileImporter = (filename: string) => {
  const path = `/src/content/news/${filename}.md`;
  return newsFiles[path];
};

// 导出所有可用文件的详细信息
export const getAllFileInfo = () => {
  const files = getAvailableNewsFiles();
  return files.map(filename => ({
    filename,
    path: `/src/content/news/${filename}.md`,
    exists: true,
    importer: getFileImporter(filename)
  }));
};

// 监听文件变化（通过定期检查）
let lastKnownFiles: string[] = [];
let changeListeners: ((files: string[]) => void)[] = [];

export const watchFileChanges = (callback: (files: string[]) => void) => {
  changeListeners.push(callback);
  
  // 立即执行一次
  const currentFiles = getAvailableNewsFiles();
  callback(currentFiles);
  lastKnownFiles = [...currentFiles];
  
  // 定期检查变化
  const checkInterval = setInterval(() => {
    const currentFiles = getAvailableNewsFiles();
    
    // 比较文件列表
    if (JSON.stringify(currentFiles.sort()) !== JSON.stringify(lastKnownFiles.sort())) {
      console.log('检测到文件变化:', {
        previous: lastKnownFiles,
        current: currentFiles
      });
      
      // 通知所有监听器
      changeListeners.forEach(listener => listener(currentFiles));
      lastKnownFiles = [...currentFiles];
    }
  }, 5000); // 5秒检查一次
  
  // 返回清理函数
  return () => {
    clearInterval(checkInterval);
    changeListeners = changeListeners.filter(listener => listener !== callback);
  };
};

// 强制刷新文件列表（在开发环境中可能需要）
export const refreshFileIndex = () => {
  // 在Vite环境中，这会触发热重载
  if (import.meta.hot) {
    import.meta.hot.invalidate();
  }
};