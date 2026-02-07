import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { GlassPanel } from '@/components/GlassPanel';
import { HeartConfetti } from '@/components/HeartConfetti';
import { useMicrositeFlowStore } from '@/state/micrositeFlowStore';

export default function Page4AcceptMyFlower() {
  const { acceptedFlower, setAcceptedFlower, next } = useMicrositeFlowStore();
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showConfetti, setShowConfetti] = useState(false);

  const handleYes = () => {
    setAcceptedFlower(true);
    setShowConfetti(true);
    setTimeout(() => {
      next();
    }, 3000);
  };

  const handleNoHover = () => {
    const newX = Math.random() * 200 - 100;
    const newY = Math.random() * 100 - 50;
    setNoButtonPosition({ x: newX, y: newY });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {showConfetti && <HeartConfetti />}

      <GlassPanel className="max-w-2xl w-full p-8 md:p-12 text-center space-y-8">
        {!acceptedFlower ? (
          <>
            <img
              src="/assets/one.png"
              alt="Offering flower"
              className="w-48 h-48 md:w-64 md:h-64 object-contain mx-auto animate-fade-in"
            />

            <h2 className="text-2xl md:text-4xl font-serif text-rose-700 animate-slide-up">
              Will you accept this flower from me?
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4 relative min-h-[100px]">
              <Button
                onClick={handleYes}
                size="lg"
                className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-medium px-12 py-6 text-lg rounded-full shadow-glow transition-all duration-300"
              >
                YES
              </Button>

              <Button
                onMouseEnter={handleNoHover}
                onTouchStart={handleNoHover}
                size="lg"
                variant="outline"
                className="border-rose-300 text-rose-600 hover:bg-rose-50 font-medium px-12 py-6 text-lg rounded-full transition-all duration-300"
                style={{
                  transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                  transition: 'transform 0.3s ease-out',
                }}
              >
                NO
              </Button>
            </div>
          </>
        ) : (
          <div className="animate-fade-in space-y-6">
            <img
              src="/assets/second.png"
              alt="Thank you"
              className="w-48 h-48 md:w-64 md:h-64 object-contain mx-auto"
            />
            <h2 className="text-3xl md:text-5xl font-serif text-rose-700">
              Thank you 🤍
            </h2>
          </div>
        )}
      </GlassPanel>
    </div>
  );
}
