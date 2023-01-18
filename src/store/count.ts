import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface countState {
	count: number;
	increase: () => void;
}

const useCount = create<countState>()(
	devtools((set) => ({
		count: 0,
		increase: () => set((state) => ({ count: state.count + 1 })),
	}))
);

// const useCount = create(countStore);
export default useCount;
