/* npm */
import {configureStore} from '@reduxjs/toolkit'
/* reducers */
import restaurantReducer from '../../src/store/reducers/restaurants'

export const store = configureStore({
  reducer: {
    currentRestaurant: restaurantReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>