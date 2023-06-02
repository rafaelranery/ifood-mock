import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {Item} from "../../models/Restaurant";

import { generateId } from "../../utils/functions/generateId";
import { PurchasePayload } from "../../services/api";

type CartState = {
  itens: Item[]
  isOpen: boolean,
  checkout: {
    isActive: boolean
    checkoutPhase: 'delivery' | 'payment' | 'done',
    payload: PurchasePayload
  }
}

const initialState: CartState = {
  itens: [],
  isOpen: false,
  checkout: {
    isActive: false,
    checkoutPhase: 'delivery',
    payload: {
      products: [
        {
          id: 1,
          price: 0
        },
      ],
      delivery: {
        receiver: '',
        adress: {
          description: '',
          city:'',
          zipCode: '',
          number: 0,
          complement: ''
        }
      },
      payment: {
        card: {
          name: '',
          number: '',
          code: '',
          expires: {
            month: 0,
            year: 0
          }
        }
      }
    }
  }
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
    displayCheckout: (state, action: PayloadAction<boolean>) => {
      state.checkout.isActive = action.payload
      state.checkout.checkoutPhase = 'delivery'
    },
    goToPayment: (state) => {
      state.checkout.checkoutPhase = 'payment'
    },
    returnFromPayment: (state) => {
      state.checkout.checkoutPhase = 'delivery'
    },
    endCheckout: (state) => {
      state.checkout.checkoutPhase = 'done'
      state.itens = []
    },
    payloadBuilder: (state, action: PayloadAction<PurchasePayload>) => {
      state.checkout.payload = action.payload
    }
  }
})

export const { open, close, add, remove, displayCheckout, goToPayment, returnFromPayment, endCheckout, payloadBuilder } = cartSlice.actions
export default cartSlice.reducer