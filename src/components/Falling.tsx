import FallingText from './ui/Fallingtext/Fallingtext';
import FuzzyText from './ui/Fallingtext/Fuzzytext';
import './ui/Fallingtext/FallingText.css';

const FallingComponent = () => {
  return (
    <div className="relative w-full pt-16 sm:pt-20 overflow-hidden">
       <div className="container mx-auto px-4 relative">
        {/* 主要内容区域 - 包含FuzzyText和FallingText的重叠区域 */}
        <div className="relative h-48 sm:h-64 md:h-80 flex items-center justify-center">
          {/* FuzzyText作为背景层 */}
          <div className="relative z-10">
            <FuzzyText
              fontSize="clamp(6rem, 18vw, 25rem)"
              fontWeight={900}
              color="#05f"
              baseIntensity={0.05}
              hoverIntensity={0.5}
              enableHover={true}
            >
              CNAI.ART
            </FuzzyText>
          </div>
          
          {/* FallingText作为前景层，覆盖在FuzzyText上方 */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-auto">
            <div className="w-full max-w-5xl h-full relative">
              <FallingText
                text={`FaceAI Developers | EntrepreneursOpen SourceAI Application Framework.`}
                highlightWords={["FaceAI", "SourceAI", "Application Framework"]}
                highlightClass="highlighted"
                trigger="auto"
                backgroundColor="transparent"
                wireframes={false}
                gravity={0.3}
                fontSize="2.8rem"
                mouseConstraintStiffness={0.6}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FallingComponent;
