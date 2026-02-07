import { create } from 'zustand';

interface MicrositeFlowState {
  currentPage: number;
  bouquetWrapped: boolean;
  acceptedFlower: boolean;
  next: () => void;
  goTo: (page: number) => void;
  replay: () => void;
  setBouquetWrapped: (wrapped: boolean) => void;
  setAcceptedFlower: (accepted: boolean) => void;
}

export const useMicrositeFlowStore = create<MicrositeFlowState>((set) => ({
  currentPage: 1,
  bouquetWrapped: false,
  acceptedFlower: false,
  next: () => set((state) => ({ currentPage: Math.min(state.currentPage + 1, 7) })),
  goTo: (page: number) => set({ currentPage: page }),
  replay: () =>
    set({
      currentPage: 1,
      bouquetWrapped: false,
      acceptedFlower: false,
    }),
  setBouquetWrapped: (wrapped: boolean) => set({ bouquetWrapped: wrapped }),
  setAcceptedFlower: (accepted: boolean) => set({ acceptedFlower: accepted }),
}));
