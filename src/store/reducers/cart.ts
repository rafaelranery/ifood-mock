import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Dish from "../../models/Dishes";

type CartState = {
  itens: Dish[]
  isOpen: boolean
}

const initialState: CartState = {
  itens: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    add: (state, action: PayloadAction<Dish>) => {
      state.itens.push(action.payload)
    },
    remove: (state, action: PayloadAction<Dish>) => {
      state.itens = state.itens.filter((item) => item.name != action.payload.name)
    },
  }
})

export const { open, close, add, remove } = cartSlice.actions
export default cartSlice.reducer