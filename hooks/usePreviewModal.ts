import { create } from "zustand";

import { Product } from "@/models";

interface PreviewModalStore {
  data?: Product;
  isOpen: boolean;
  onOpen: (data: Product) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Product) => set({ data, isOpen: true }),
  onClose: () => set({ data: undefined, isOpen: false }),
}));

export default usePreviewModal;
