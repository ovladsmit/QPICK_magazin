import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CheckoutState } from "../types/checkout";



const initialState: CheckoutState = {
  name: '',
  phone: '',
  address: '',
  status: 'idle'
}

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers : {
    setField: (state, action: PayloadAction<{field: 'name' | 'phone' | 'address'; value: string}>) => {
      state[action.payload.field] = action.payload.value
    },
    submitOrder: (state) => {
      state.status = 'success'
    },
    resetForm: () => initialState
  }
})

export const {setField, submitOrder, resetForm} = checkoutSlice.actions
export const checkoutReducer = checkoutSlice.reducer