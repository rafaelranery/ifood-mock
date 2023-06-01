/* npm */
import {configureStore} from '@reduxjs/toolkit'
/* reducers */
import restaurantsReducer from './reducers/restaurants'
import cartReducer from './reducers/cart'
import modalReducer from './reducers/modal'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    cart: cartReducer,
    modal: modalReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>