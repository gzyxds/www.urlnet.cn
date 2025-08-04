// 自动更新管理器
import { FileScanner } from './fileScanner';
import { watchFileChanges } from './newsFileIndex';

export interface AutoUpdateConfig {
  // 检查间隔（毫秒）
  checkInterval: number;
  // 是否启用自动更新
  enabled: boolean;
  // 最大重试次数
  maxRetries: number;
  // 是否在页面可见时更频繁检查
  useVisibilityAPI: boolean;
}

export interface FileChangeEvent {
  type: 'added' | 'removed' | 'modified';
  filename: string;
  timestamp: Date;
}

export class AutoUpdater {
  private static instance: AutoUpdater;
  private config: AutoUpdateConfig;
  private intervalId: NodeJS.Timeout | null = null;
  private lastFileList: string[] = [];
  private lastCheckTime: Date = new Date();
  private retryCount: number = 0;
  private listeners: Array<(files: string[], changes: FileChangeEvent[]) => void> = [];
  private fileIndexWatcher: (() => void) | null = null;
  private isChecking: boolean = false;

  private constructor(config: Partial<AutoUpdateConfig> = {}) {
    this.config = {
      checkInterval: 15000, // 15秒
      enabled: true,
      maxRetries: 3,
      useVisibilityAPI: true,
      ...config
    };

    this.setupVisibilityListener();
  }

  // 单例模式
  static getInstance(config?: Partial<AutoUpdateConfig>): AutoUpdater {
    if (!AutoUpdater.instance) {
      AutoUpdater.instance = new AutoUpdater(config);
    }
    return AutoUpdater.instance;
  }

  // 启动自动更新
  start(): void {
    if (!this.config.enabled) {
      console.log('自动更新已禁用');
      return;
    }

    console.log('启动自动文件更新监控...');
    
    // 设置文件索引监听器
    this.fileIndexWatcher = watchFileChanges((files) => {
      console.log('文件索引检测到变化:', files);
      
      const changes: FileChangeEvent[] = [];
      const timestamp = new Date();

      // 检测新增文件
      for (const file of files) {
        if (!this.lastFileList.includes(file)) {
          changes.push({
            type: 'added',
            filename: file,
            timestamp
          });
        }
      }

      // 检测删除文件
      for (const file of this.lastFileList) {
        if (!files.includes(file)) {
          changes.push({
            type: 'removed',
            filename: file,
            timestamp
          });
        }
      }

      if (changes.length > 0) {
        console.log('文件索引检测到变化:', changes);
        this.lastFileList = [...files];
        this.lastCheckTime = timestamp;
        this.notifyListeners(files, changes);
      }
    });
    
    // 立即执行一次检查
    this.checkForUpdates();
    
    // 设置定期检查
    this.intervalId = setInterval(() => {
      this.checkForUpdates();
    }, this.config.checkInterval);
  }

  // 停止自动更新
  stop(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      console.log('自动更新监控已停止');
    }

    // 清除文件索引监听器
    if (this.fileIndexWatcher) {
      this.fileIndexWatcher();
      this.fileIndexWatcher = null;
    }
  }

  // 手动触发检查
  async forceCheck(): Promise<void> {
    await this.checkForUpdates(true);
  }

  // 添加监听器
  addListener(callback: (files: string[], changes: FileChangeEvent[]) => void): void {
    this.listeners.push(callback);
  }

  // 移除监听器
  removeListener(callback: (files: string[], changes: FileChangeEvent[]) => void): void {
    const index = this.listeners.indexOf(callback);
    if (index > -1) {
      this.listeners.splice(index, 1);
    }
  }

  // 获取当前配置
  getConfig(): AutoUpdateConfig {
    return { ...this.config };
  }

  // 更新配置
  updateConfig(newConfig: Partial<AutoUpdateConfig>): void {
    this.config = { ...this.config, ...newConfig };
    
    // 如果更新了检查间隔，重启定时器
    if (newConfig.checkInterval && this.intervalId) {
      this.stop();
      this.start();
    }
  }

  // 获取最后检查时间
  getLastCheckTime(): Date {
    return this.lastCheckTime;
  }

  // 获取当前文件列表
  getCurrentFiles(): string[] {
    return [...this.lastFileList];
  }

  // 检查更新的核心方法
  private async checkForUpdates(force: boolean = false): Promise<void> {
    if (this.isChecking && !force) {
      return; // 避免重复检查
    }

    this.isChecking = true;
    
    try {
      console.log('检查文件更新...', new Date().toLocaleTimeString());
      
      // 检测变化
      const changes = await this.detectChanges();
      
      if (changes.length > 0 || force) {
        console.log('检测到文件变化:', changes);
        
        // 更新时间
        this.lastCheckTime = new Date();
        this.retryCount = 0; // 重置重试计数
        
        // 通知所有监听器
        this.notifyListeners(this.lastFileList, changes)
      } else {
        console.debug('没有检测到文件变化');
      }
      
    } catch (error) {
      console.error('检查文件更新时出错:', error);
      
      // 重试机制
      if (this.retryCount < this.config.maxRetries) {
        this.retryCount++;
        console.log(`重试检查文件更新 (${this.retryCount}/${this.config.maxRetries})`);
        
        // 延迟重试
        setTimeout(() => {
          this.checkForUpdates(force);
        }, 5000 * this.retryCount); // 递增延迟
      }
    } finally {
      this.isChecking = false;
    }
  }

  // 检测文件变化
  private async detectChanges(): Promise<FileChangeEvent[]> {
    try {
      // 清除缓存以确保获取最新的文件列表
      FileScanner.clearCache();
      
      const currentFiles = await FileScanner.scanNewsMarkdownFiles();
      const changes: FileChangeEvent[] = [];
      
      if (this.lastFileList.length === 0) {
        // 首次扫描，所有文件都是新增的
        for (const file of currentFiles) {
          changes.push({
            type: 'added',
            filename: file,
            timestamp: new Date()
          });
        }
      } else {
        // 检测新增文件
        for (const file of currentFiles) {
          if (!this.lastFileList.includes(file)) {
            changes.push({
              type: 'added',
              filename: file,
              timestamp: new Date()
            });
          }
        }
        
        // 检测删除文件
        for (const file of this.lastFileList) {
          if (!currentFiles.includes(file)) {
            changes.push({
              type: 'removed',
              filename: file,
              timestamp: new Date()
            });
          }
        }
        
        // 暂时禁用修改时间检测以减少网络请求
        // 文件修改检测可以通过文件索引的变化来间接检测
        // 如果需要精确的修改时间检测，可以在后续版本中重新启用
        
        // 检测修改文件（基于修改时间）- 暂时禁用
        // for (const file of currentFiles) {
        //   if (this.lastFileList.includes(file)) {
        //     const modTime = await FileScanner.getFileModificationTime(file);
        //     if (modTime) {
        //       changes.push({
        //         type: 'modified',
        //         filename: file,
        //         timestamp: new Date()
        //       });
        //     }
        //   }
        // }
      }
       
       // 更新已知文件列表
       this.lastFileList = [...currentFiles];
       
       return changes;
    } catch (error) {
      console.error('检测文件变化时出错:', error);
      return [];
    }
  }

  // 通知所有监听器
  private notifyListeners(files: string[], changes: FileChangeEvent[]): void {
    for (const listener of this.listeners) {
      try {
        listener(files, changes);
      } catch (error) {
        console.error('监听器执行出错:', error);
      }
    }
  }



  // 设置页面可见性监听
  private setupVisibilityListener(): void {
    if (!this.config.useVisibilityAPI || typeof document === 'undefined') {
      return;
    }

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        // 页面变为可见时，立即检查一次
        console.log('页面变为可见，检查文件更新...');
        this.checkForUpdates(true);
        
        // 如果自动更新被暂停，重新启动
        if (this.config.enabled && !this.intervalId) {
          this.start();
        }
      } else {
        // 页面不可见时，可以选择暂停检查以节省资源
        // 这里保持运行，但可以根据需要调整
      }
    });
  }

  // 智能检查间隔调整
  adjustCheckInterval(): void {
    const now = new Date();
    const timeSinceLastChange = now.getTime() - this.lastCheckTime.getTime();
    
    // 如果长时间没有变化，可以降低检查频率
    if (timeSinceLastChange > 300000) { // 5分钟
      this.updateConfig({ checkInterval: 30000 }); // 增加到30秒
    } else {
      this.updateConfig({ checkInterval: 15000 }); // 保持15秒
    }
  }

  // 获取统计信息
  getStats(): {
    totalFiles: number;
    lastCheckTime: Date;
    retryCount: number;
    isRunning: boolean;
    checkInterval: number;
  } {
    return {
      totalFiles: this.lastFileList.length,
      lastCheckTime: this.lastCheckTime,
      retryCount: this.retryCount,
      isRunning: this.intervalId !== null,
      checkInterval: this.config.checkInterval
    };
  }
}

// 导出默认实例
export const autoUpdater = AutoUpdater.getInstance();