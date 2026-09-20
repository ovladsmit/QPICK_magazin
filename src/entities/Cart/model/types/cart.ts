import type { Product } from "@/entities/Product";

export interface CartItem {
  product: Product;
  count: number;
}

export interface CartState {
  items: CartItem[]
}