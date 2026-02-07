import { create } from 'zustand';

type MoodMode = 'day' | 'night';

interface MoodStore {
  mode: MoodMode;
  toggle: () => void;
}

const getInitialMode = (): MoodMode => {
  const stored = sessionStorage.getItem('mood-mode');
  return (stored === 'night' ? 'night' : 'day') as MoodMode;
};

export const useMoodStore = create<MoodStore>((set) => ({
  mode: getInitialMode(),
  toggle: () =>
    set((state) => {
      const newMode = state.mode === 'day' ? 'night' : 'day';
      sessionStorage.setItem('mood-mode', newMode);
      return { mode: newMode };
    }),
}));
