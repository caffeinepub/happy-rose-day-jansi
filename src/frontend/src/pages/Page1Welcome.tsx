import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { GlassPanel } from '@/components/GlassPanel';
import { useMicrositeFlowStore } from '@/state/micrositeFlowStore';
import { useGlobalAudio } from '@/audio/GlobalAudioProvider';

export default function Page1Welcome() {
  const [showOverlay, setShowOverlay] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const next = useMicrositeFlowStore((state) => state.next);
  const { play } = useGlobalAudio();

  useEffect(() => {
    const overlayTimer = setTimeout(() => {
      setShowOverlay(false);
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(overlayTimer);
  }, []);

  const handleMusicStart = () => {
    play();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      {showOverlay && (
        <div className="absolute inset-0 flex items-center justify-center z-20 animate-fade-out">
          <p className="text-2xl font-serif text-rose-600 animate-pulse">
            Preparing something special for you…
          </p>
        </div>
      )}

      {showContent && (
        <GlassPanel className="max-w-2xl w-full p-8 md:p-12 text-center space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-serif text-rose-700 animate-slide-up">
            Happy Rose Day, Jansi 🌹
          </h1>

          <p className="text-lg md:text-xl text-charcoal leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Some feelings are too soft to be said out loud…
            <br />
            so I wrapped mine in roses for you today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button
              onClick={next}
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-medium px-8 py-6 text-lg rounded-full shadow-glow transition-all duration-300"
            >
              Enter My Rose Garden
            </Button>

            <Button
              onClick={handleMusicStart}
              size="lg"
              variant="outline"
              className="border-rose-300 text-rose-600 hover:bg-rose-50 font-medium px-8 py-6 text-lg rounded-full transition-all duration-300"
            >
              Let the roses sing for us 🎶
            </Button>
          </div>
        </GlassPanel>
      )}
    </div>
  );
}
