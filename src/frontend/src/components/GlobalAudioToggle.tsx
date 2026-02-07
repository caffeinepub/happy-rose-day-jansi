import { Music, VolumeX } from 'lucide-react';
import { useGlobalAudio } from '../audio/GlobalAudioProvider';
import { Button } from './ui/button';

export function GlobalAudioToggle() {
  const { isPlaying, toggle } = useGlobalAudio();

  return (
    <Button
      onClick={toggle}
      variant="outline"
      size="icon"
      className="fixed top-6 right-6 z-50 glass-panel border-rose-200/30 hover:border-rose-300/50 hover:bg-rose-50/20 transition-all duration-300"
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
    >
      {isPlaying ? (
        <Music className="h-5 w-5 text-rose-600" />
      ) : (
        <VolumeX className="h-5 w-5 text-rose-400" />
      )}
    </Button>
  );
}
