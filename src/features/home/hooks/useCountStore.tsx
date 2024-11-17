import { create } from "zustand";

type CountStoreState = {
  count: number;
};

type CountStoreActions = {
  inc: () => void;
};

export const useCountStore = create<CountStoreState & CountStoreActions>(
  (set) => ({
    count: 1,
    inc: () => set((state: any) => ({ count: state.count + 1 })),
  })
);
