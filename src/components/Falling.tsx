import FallingText from './ui/Fallingtext/Fallingtext';
import FuzzyText from './ui/Fallingtext/Fuzzytext';
import './ui/Fallingtext/FallingText.css';
import { useMobile } from '../hooks/use-mobile';

const FallingComponent = () => {
  // 使用移动端检测hook
  const isMobile = useMobile();

  return (
    <div className="relative w-full pt-12 sm:pt-16 md:pt-20 overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative">
        {/* 主要内容区域 - 包含FuzzyText和FallingText的重叠区域 */}
        <div className={`relative flex items-center justify-center ${
          isMobile ? 'h-40 sm:h-48' : 'h-48 sm:h-64 md:h-80'
        }`}>
          {/* FuzzyText作为背景层 */}
          <div className="relative z-10">
            <FuzzyText
              fontSize={isMobile ? "clamp(3rem, 15vw, 8rem)" : "clamp(6rem, 18vw, 25rem)"}
              fontWeight={900}
              color="#05f"
              baseIntensity={isMobile ? 0 : 0}
              hoverIntensity={isMobile ? 0.3 : 0.5}
              enableHover={!isMobile} // 移动端禁用hover效果以提升性能
            >
              CNAI.ART
            </FuzzyText>
          </div>
          
          {/* FallingText作为前景层，覆盖在FuzzyText上方 */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-auto">
            <div className={`w-full h-full relative ${
              isMobile ? 'max-w-sm px-2' : 'max-w-5xl'
            }`}>
              <FallingText
                text={isMobile 
                  ? `FaceAI Developers | Entrepreneurs Open Source AI Framework.` // 移动端简化文本
                  : `FaceAI Developers | EntrepreneursOpen SourceAI Application Framework.`
                }
                highlightWords={["FaceAI", "SourceAI", "Application Framework"]}
                highlightClass="highlighted"
                trigger="auto"
                backgroundColor="transparent"
                wireframes={false}
                gravity={isMobile ? 0.2 : 0.3} // 移动端降低重力效果
                fontSize={isMobile ? "1.2rem" : "2.8rem"} // 移动端使用更小的字体
                mouseConstraintStiffness={isMobile ? 0.4 : 0.6} // 移动端降低交互强度
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FallingComponent;
