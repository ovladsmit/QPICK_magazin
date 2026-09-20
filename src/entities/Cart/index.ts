import { cartReducer } from "./model/slice/cartSlice";
import { addItem, removeItem, incrementCount, decrementCount } from "./model/slice/cartSlice";
import { selectCartTotalCount } from "./model/selectors/cartSelectors";
import { selectCartItems } from "./model/selectors/cartSelectors";
import { selectCartTotalPrice } from "./model/selectors/cartSelectors";
import { CartItem } from "./ui/CartItem";
import type { CartItem as CartItemType } from "./model/types/cart";
export {cartReducer, addItem, removeItem, incrementCount, decrementCount,selectCartTotalCount, selectCartItems, selectCartTotalPrice, CartItem }
export type {CartItemType}