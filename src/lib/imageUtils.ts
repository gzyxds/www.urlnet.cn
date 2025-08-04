// 图片工具类
export class ImageUtils {
  // 可用的图片列表
  private static readonly AVAILABLE_PICTURES = [
    'picture.jpg',
    'picture1.jpg', 
    'picture2.jpg',
    'picture3.jpg',
    'picture4.jpg',
    'picture5.jpg',
    'picture6.jpg',
    'picture7.jpg'
  ];

  // 获取随机图片
  static getRandomPicture(): string {
    const randomIndex = Math.floor(Math.random() * this.AVAILABLE_PICTURES.length);
    const selectedPicture = this.AVAILABLE_PICTURES[randomIndex];
    return `/picture/${selectedPicture}`;
  }

  // 根据文章ID获取固定但看起来随机的图片（确保同一文章总是显示相同图片）
  static getPictureByArticleId(articleId: string): string {
    // 使用简单的哈希算法确保同一文章ID总是返回相同图片
    let hash = 0;
    for (let i = 0; i < articleId.length; i++) {
      const char = articleId.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // 转换为32位整数
    }
    
    const index = Math.abs(hash) % this.AVAILABLE_PICTURES.length;
    const selectedPicture = this.AVAILABLE_PICTURES[index];
    return `/picture/${selectedPicture}`;
  }

  // 获取所有可用图片列表
  static getAllPictures(): string[] {
    return this.AVAILABLE_PICTURES.map(pic => `/picture/${pic}`);
  }

  // 检查图片是否存在
  static async checkPictureExists(picturePath: string): Promise<boolean> {
    try {
      const response = await fetch(picturePath, {
        method: 'HEAD',
        cache: 'no-cache'
      });
      return response.ok;
    } catch (error) {
      console.debug(`图片 ${picturePath} 检查失败:`, error);
      return false;
    }
  }
}