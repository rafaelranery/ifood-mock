/* npm */
import {configureStore} from '@reduxjs/toolkit'
/* reducers */
import restaurantReducer from './reducers/Restaurants.ts'

export const store = configureStore({
  reducer: {
    currentRestaurant: restaurantReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>