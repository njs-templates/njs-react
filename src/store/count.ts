import { create } from "zustand";
import { devtools } from "zustand/middleware";

const countStore = devtools((set) => ({
	count: 0,
	increase: () => set((state: any) => ({ count: state.count + 1 })),
}));

const useCount = create(countStore);
export default useCount;
