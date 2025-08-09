/// <reference types="vite/client" />

// 扩展Window接口以支持百度统计
declare global {
  interface Window {
    /**
     * 百度统计的全局变量
     * 用于推送统计事件到百度统计
     */
    _hmt?: Array<any[]>;
  }
}

// 确保模块声明生效
export {};

// 扩展ImportMeta接口以支持Vite特有的功能
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
  readonly hot?: {
    readonly data: any
    accept(): void
    accept(cb: (mod: any) => void): void
    accept(dep: string, cb: (mod: any) => void): void
    accept(deps: readonly string[], cb: (mods: any[]) => void): void
    dispose(cb: (data: any) => void): void
    decline(): void
    invalidate(): void
    on(event: string, cb: (...args: any[]) => void): void
  }
  readonly glob: {
    (pattern: string, options?: {
      eager?: boolean
      import?: string
      query?: string
      as?: string
    }): Record<string, () => Promise<any>>
    (pattern: string, options: {
      eager: true
      import?: string
      query?: string
      as?: string
    }): Record<string, any>
  }
}