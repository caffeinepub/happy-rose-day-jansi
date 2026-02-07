import { Button } from '@/components/ui/button';
import { GlassPanel } from '@/components/GlassPanel';
import { useMicrositeFlowStore } from '@/state/micrositeFlowStore';

export default function Page5Music() {
  const next = useMicrositeFlowStore((state) => state.next);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <GlassPanel className="max-w-2xl w-full p-8 md:p-12 text-center space-y-8">
        <div className="space-y-6 animate-fade-in">
          <div className="flex justify-center">
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-rose-500 animate-pulse"
            >
              <path
                d="M9 18V5l12-2v13M9 18c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm12-2c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <p className="text-xl md:text-2xl font-serif text-charcoal leading-relaxed">
            Some songs feel like they were written for moments like this.
          </p>

          <p className="text-base text-charcoal/70">
            Use the music toggle in the top right to play or pause
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
