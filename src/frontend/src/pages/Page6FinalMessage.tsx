import { Button } from '@/components/ui/button';
import { GlassPanel } from '@/components/GlassPanel';
import { useMicrositeFlowStore } from '@/state/micrositeFlowStore';

export default function Page6FinalMessage() {
  const next = useMicrositeFlowStore((state) => state.next);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <GlassPanel className="max-w-3xl w-full p-8 md:p-12 text-center space-y-8">
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-serif text-rose-700 mb-8">
            Happy Rose Day, Jansi
          </h2>

          <p className="text-lg md:text-xl text-charcoal leading-relaxed whitespace-pre-line">
            This little garden may be digital,
            <br />
            but the feelings behind it are real.
            <br />
            <br />
            Thank you for being someone my heart smiles for.
          </p>

          <p className="text-base md:text-lg font-serif italic callback-line animate-fade-in-gentle mt-8">
            Somewhere in this little garden, Jansi, there's a piece of my heart.
          </p>
        </div>

        <Button
          onClick={next}
          size="lg"
          className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-medium px-8 py-4 text-lg rounded-full shadow-glow transition-all duration-300 mt-8"
        >
          Next
        </Button>
      </GlassPanel>
    </div>
  );
}
