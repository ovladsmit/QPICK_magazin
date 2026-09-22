import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from '@/entities/Cart';
import { checkoutReducer } from '@/features/CheckoutForm';
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    checkout: checkoutReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;