import React, { useEffect, useRef } from "react";
/**
 * FuzzyText组件的属性接口
 */
interface FuzzyTextProps {
  children: React.ReactNode;      // 要渲染的文本内容
  fontSize?: number | string;     // 字体大小
  fontWeight?: string | number;   // 字体粗细
  fontFamily?: string;           // 字体族
  color?: string;                // 文本颜色
  enableHover?: boolean;         // 是否启用悬停效果
  baseIntensity?: number;        // 基础模糊强度
  hoverIntensity?: number;       // 悬停时的模糊强度
}
/**
 * FuzzyText组件 - 创建具有模糊动画效果的文本
 */
const FuzzyText: React.FC<FuzzyTextProps> = ({
  children,
  fontSize = "clamp(2rem, 8vw, 8rem)",  // 响应式字体大小
  fontWeight = 900,                      // 默认粗体
  fontFamily = "inherit",                // 继承父元素字体
  color = "#fff",                        // 默认白色
  enableHover = true,                    // 默认启用悬停
  baseIntensity = 0.18,                 // 默认基础模糊强度
  hoverIntensity = 0.5,                 // 默认悬停模糊强度
}) => {
  // 创建canvas引用，并添加清理函数类型
  const canvasRef = useRef<HTMLCanvasElement & { cleanupFuzzyText?: () => void}>(null);
  useEffect(() => {
    let animationFrameId: number;
    let isCancelled = false;
    const canvas = canvasRef.current;
    if (!canvas) return;
    // 初始化函数
    const init = async () => {
      // 等待字体加载完成
      if (document.fonts?.ready) {
        await document.fonts.ready;
      }
      if (isCancelled) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      // 计算实际使用的字体族
      const computedFontFamily =
        fontFamily === "inherit"
          ? window.getComputedStyle(canvas).fontFamily || "sans-serif"
          : fontFamily;
      // 处理字体大小
      const fontSizeStr =
        typeof fontSize === "number" ? `${fontSize}px` : fontSize;
      let numericFontSize: number;
      if (typeof fontSize === "number") {
        numericFontSize = fontSize;
      } else {
        // 通过临时元素计算实际像素大小
        const temp = document.createElement("span");
        temp.style.fontSize = fontSize;
        document.body.appendChild(temp);
        const computedSize = window.getComputedStyle(temp).fontSize;
        numericFontSize = parseFloat(computedSize);
        document.body.removeChild(temp);
      }
      // 将children转换为文本
      const text = React.Children.toArray(children).join("");
      // 创建离屏canvas用于文本渲染
      const offscreen = document.createElement("canvas");
      const offCtx = offscreen.getContext("2d");
      if (!offCtx) return;
      // 设置字体并测量文本尺寸
      offCtx.font = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`;
      offCtx.textBaseline = "alphabetic";
      const metrics = offCtx.measureText(text);
      // 计算文本边界框
      const actualLeft = metrics.actualBoundingBoxLeft ?? 0;
      const actualRight = metrics.actualBoundingBoxRight ?? metrics.width;
      const actualAscent = metrics.actualBoundingBoxAscent ?? numericFontSize;
      const actualDescent =
        metrics.actualBoundingBoxDescent ?? numericFontSize * 0.2;
      // 计算文本尺寸
      const textBoundingWidth = Math.ceil(actualLeft + actualRight);
      const tightHeight = Math.ceil(actualAscent + actualDescent);
      // 设置离屏canvas尺寸
      const extraWidthBuffer = 10;
      const offscreenWidth = textBoundingWidth + extraWidthBuffer;
      offscreen.width = offscreenWidth;
      offscreen.height = tightHeight;
      // 在离屏canvas上绘制文本
      const xOffset = extraWidthBuffer / 2;
      offCtx.font = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`;
      offCtx.textBaseline = "alphabetic";
      offCtx.fillStyle = color;
      offCtx.fillText(text, xOffset - actualLeft, actualAscent);
      // 设置主canvas尺寸和位置
      const horizontalMargin = 50;
      const verticalMargin = 0;
      canvas.width = offscreenWidth + horizontalMargin * 2;
      canvas.height = tightHeight + verticalMargin * 2;
      ctx.translate(horizontalMargin, verticalMargin);
      // 计算交互区域
      const interactiveLeft = horizontalMargin + xOffset;
      const interactiveTop = verticalMargin;
      const interactiveRight = interactiveLeft + textBoundingWidth;
      const interactiveBottom = interactiveTop + tightHeight;
      // 动画相关变量
      let isHovering = false;
      const fuzzRange = 30;
      // 动画循环函数
      const run = () => {
        if (isCancelled) return;
        ctx.clearRect(
          -fuzzRange,
          -fuzzRange,
          offscreenWidth + 2 * fuzzRange,
          tightHeight + 2 * fuzzRange
        );
        const intensity = isHovering ? hoverIntensity : baseIntensity;
        for (let j = 0; j < tightHeight; j++) {
          const dx = Math.floor(intensity * (Math.random() - 0.5) * fuzzRange);
          ctx.drawImage(
            offscreen,
            0,
            j,
            offscreenWidth,
            1,
            dx,
            j,
            offscreenWidth,
            1
          );
        }
        animationFrameId = window.requestAnimationFrame(run);
      };
      run();
      // 判断鼠标是否在文本区域内
      const isInsideTextArea = (x: number, y: number) =>
        x >= interactiveLeft &&
        x <= interactiveRight &&
        y >= interactiveTop &&
        y <= interactiveBottom;
      // 鼠标事件处理函数
      const handleMouseMove = (e: MouseEvent) => {
        if (!enableHover) return;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;