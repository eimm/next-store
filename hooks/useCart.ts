import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from "@/models";
import toast from "react-hot-toast";

interface CartStore {
  items: Product[];
  add: (item: Product) => void;
  empty: () => void;
  remove: (item: Product) => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      add: (item: Product) => {
        const prev = get().items;
        const has = prev.find((i) => item.id === i.id);
        if (has)
          return toast(
            "Oops! It looks like this item is already in your cart. 😊"
          );
        set({ items: [...prev, item] });
        toast.success("Added");
      },
      remove: (item: Product) => {
        set({ items: [...get().items.filter((i) => i.id !== item.id)] });
        toast.success("Removed");
      },
      empty: () => set({ items: [] }),
    }),
    { name: "cart-storage", storage: createJSONStorage(() => localStorage) }
  )
);

export default useCart;
