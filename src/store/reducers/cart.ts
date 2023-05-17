import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {Item} from "../../models/Restaurant";

type CartState = {
  itens: Item[]
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
    add: (state, action: PayloadAction<Item>) => {
      state.itens.push(action.payload)
    },
    remove: (state, action: PayloadAction<Item>) => {
      state.itens = state.itens.filter((item) => item.nome != action.payload.nome)
    },
  }
})

export const { open, close, add, remove } = cartSlice.actions
export default cartSlice.reducer