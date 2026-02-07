import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { GlassPanel } from '@/components/GlassPanel';
import { useMicrositeFlowStore } from '@/state/micrositeFlowStore';

export default function Page3BouquetBuilder() {
  const [roseCount, setRoseCount] = useState(0);
  const { bouquetWrapped, setBouquetWrapped, next } = useMicrositeFlowStore();

  const addRose = () => {
    if (roseCount < 12) {
      setRoseCount(roseCount + 1);
    }
  };

  const wrapBouquet = () => {
    setBouquetWrapped(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <GlassPanel className="max-w-3xl w-full p-8 md:p-12 text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-serif text-rose-700 animate-fade-in">
          Virtual Bouquet Builder
        </h2>

        <div className="relative min-h-[400px] flex items-center justify-center">
          {!bouquetWrapped ? (
            <div className="relative w-full h-full flex items-center justify-center">
              {Array.from({ length: roseCount }).map((_, index) => (
                <div
                  key={index}
                  className="absolute animate-float-gentle"
                  style={{
                    left: `${45 + Math.cos((index * 2 * Math.PI) / 12) * 15}%`,
                    top: `${45 + Math.sin((index * 2 * Math.PI) / 12) * 15}%`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5C2,5.42,4.42,3,7.5,3c1.74,0,3.41,0.81,4.5,2.09C13.09,3.81,14.76,3,16.5,3C19.58,3,22,5.42,22,8.5c0,3.78-3.4,6.86-8.55,11.54L12,21.35z"
                      fill="oklch(0.70 0.22 15)"
                    />
                  </svg>
                </div>
              ))}
              {roseCount === 0 && (
                <p className="text-charcoal/60 text-lg">Start adding roses to build your bouquet</p>
              )}
            </div>
          ) : (
            <div className="animate-fade-in space-y-6">
              <img
                src="/assets/flower.png"
                alt="Wrapped bouquet"
                className="w-64 h-64 md:w-80 md:h-80 object-contain mx-auto animate-float-gentle"
              />
              <p className="text-xl md:text-2xl font-serif text-rose-600">
                This bouquet is for you
              </p>
            </div>
          )}
        </div>

        {!bouquetWrapped ? (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={addRose}
              size="lg"
              variant="outline"
              className="border-rose-300 text-rose-600 hover:bg-rose-50 font-medium px-8 py-4 rounded-full transition-all duration-300"
              disabled={roseCount >= 12}
            >
              Add a Rose
            </Button>
            <Button
              onClick={wrapBouquet}
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-medium px-8 py-4 rounded-full shadow-glow transition-all duration-300"
              disabled={roseCount === 0}
            >
              Wrap the Bouquet
            </Button>
          </div>
        ) : (
          <Button
            onClick={next}
            size="lg"
            className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-medium px-8 py-4 text-lg rounded-full shadow-glow transition-all duration-300"
          >
            Next
          </Button>
        )}
      </GlassPanel>
    </div>
  );
}
