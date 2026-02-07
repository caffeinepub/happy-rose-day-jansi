import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { GlassPanel } from '@/components/GlassPanel';
import { useMicrositeFlowStore } from '@/state/micrositeFlowStore';

interface Rose {
  image: string;
  color: string;
  message: string;
  textColor: string;
}

const roses: Rose[] = [
  {
    image: '/assets/red.png',
    color: 'Red',
    message: 'This one carries my love for you — quietly and sincerely.',
    textColor: 'text-red-600',
  },
  {
    image: '/assets/purple.png',
    color: 'Purple',
    message: 'For the magic you bring into my life — the kind that makes ordinary moments feel special.',
    textColor: 'text-purple-600',
  },
  {
    image: '/assets/white.png',
    color: 'White',
    message: 'For the calm you bring to my chaos.',
    textColor: 'text-gray-600',
  },
  {
    image: '/assets/yellow.png',
    color: 'Yellow',
    message: 'For the smile you bring without even trying.',
    textColor: 'text-yellow-600',
  },
  {
    image: '/assets/peach.png',
    color: 'Peach',
    message: 'For the gentle affection and sweetness you give so effortlessly.',
    textColor: 'text-orange-400',
  },
  {
    image: '/assets/pink.png',
    color: 'Pink',
    message: 'For the grace and joy you carry with you everywhere.',
    textColor: 'text-pink-500',
  },
];

export default function Page2MeaningOfRoses() {
  const [selectedRose, setSelectedRose] = useState<number | null>(null);
  const next = useMicrositeFlowStore((state) => state.next);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-5xl font-serif text-rose-700 text-center mb-12 animate-fade-in">
          The Language of Roses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {roses.map((rose, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <GlassPanel
                className="p-6 cursor-pointer hover:shadow-glow transition-all duration-300 transform hover:scale-[1.02]"
                onClick={() => setSelectedRose(selectedRose === index ? null : index)}
              >
                <div className="flex flex-col items-center space-y-4">
                  <img
                    src={rose.image}
                    alt={`${rose.color} rose`}
                    className="w-48 h-48 object-contain"
                  />
                  <h3 className="text-xl font-serif text-charcoal">{rose.color} Rose</h3>
                </div>

                {selectedRose === index && (
                  <div className="mt-4 pt-4 border-t border-rose-200/30 animate-slide-up">
                    <p className={`text-base md:text-lg leading-relaxed ${rose.textColor}`}>
                      {rose.message}
                    </p>
                  </div>
                )}
              </GlassPanel>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-8">
          <Button
            onClick={next}
            size="lg"
            className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-medium px-8 py-4 text-lg rounded-full shadow-glow transition-all duration-300"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
