import { Button } from '@/components/ui/button';
import { GlassPanel } from '@/components/GlassPanel';
import { useMicrositeFlowStore } from '@/state/micrositeFlowStore';

export default function Page7Replay() {
  const replay = useMicrositeFlowStore((state) => state.replay);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <GlassPanel className="max-w-2xl w-full p-8 md:p-12 text-center space-y-8">
        <div className="space-y-8 animate-fade-in">
          <img
            src="/assets/flower.png"
            alt="Bouquet"
            className="w-48 h-48 md:w-64 md:h-64 object-contain mx-auto animate-float-gentle"
          />

          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif text-rose-700">
              Until we meet again
            </h2>
            <p className="text-lg text-charcoal/80">
              The roses will always be here, waiting for you
            </p>
          </div>

          <div className="closing-message animate-slide-up-slow">
            <p className="text-lg md:text-xl font-serif text-rose-600 leading-relaxed">
              If today made you smile even a little,
              <br />
              then it was worth making.
            </p>
          </div>

          <Button
            onClick={replay}
            size="lg"
            className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-medium px-8 py-4 text-lg rounded-full shadow-glow transition-all duration-300"
          >
            Visit My Rose Garden Again
          </Button>
        </div>
      </GlassPanel>
    </div>
  );
}
