import { create } from "zustand";

export type DialogType = "questionDialog";

interface DialogStore {
	type: DialogType | null;
	// biome-ignore lint/suspicious/noExplicitAny: <>
	data: any;
	isOpen: boolean;
	// biome-ignore lint/suspicious/noExplicitAny: <>
	onOpen: (type: DialogType, data?: any) => void;
	onClose: () => void;
}

export const useDialog = create<DialogStore>((set) => ({
	type: null,
	data: {},
	isOpen: false,
	onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
	onClose: () => set({ type: null, isOpen: false }),
}));
