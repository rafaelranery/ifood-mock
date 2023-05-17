import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {Item} from "../../models/Restaurant";

import { generateId } from "../../utils/functions/generateId";

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
      const cartItem: Item = {...action.payload, id: generateId()}
      state.itens.push(cartItem)
    },
    remove: (state, action: PayloadAction<Item>) => {
      state.itens = state.itens.filter((item) => item.id != action.payload.id)
    },
  }
})

export const { open, close, add, remove } = cartSlice.actions
export default cartSlice.reducer