import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartState } from "../types/cart";
import type { Product } from "@/entities/Product";

const initialState: CartState = {
  items: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const have = state.items.find(
        (item) => item.product.id === action.payload.id,
      );
      if (have) {
        have.count += 1;
      } else {
        state.items.push({ product: action.payload, count: 1 });
      }
    },

    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload,
      );
    },

    incrementCount: (state, action: PayloadAction<string>) => {
      const item = state.items.find(
        (item) => item.product.id === action.payload,
      );
      if (item) {
        item.count += 1;
      }
    },

    decrementCount: (state, action: PayloadAction<string>) => {
      const item = state.items.find(
        (item) => item.product.id === action.payload,
      );
      if(!item) return
      if(item.count > 1){
        item.count -= 1
      } else {
        state.items = state.items.filter((i) => i.product.id !== action.payload);
      }
    },
  },
});

export const { addItem, removeItem, incrementCount, decrementCount } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;