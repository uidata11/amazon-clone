import { create } from "zustand";

export interface Props {
  products: ProductProps[];
}
export const store = create<Props>(() => ({}));
