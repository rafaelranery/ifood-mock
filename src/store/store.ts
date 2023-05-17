/* npm */
import {configureStore} from '@reduxjs/toolkit'
/* reducers */
import restaurantsReducer from './reducers/restaurants'
import cartReducer from './reducers/cart'
import modalReducer from './reducers/modal'

export const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    cart: cartReducer,
    modal: modalReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>