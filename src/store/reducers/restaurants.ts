import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Restaurant } from "../../models/Restaurant";

type RestaurantState = {
  allRestaurants: Restaurant[]
  item: Restaurant | undefined
}
const initialState: RestaurantState = {
  item: undefined,
  allRestaurants: []
}


export const RestaurantsSlice = createSlice({
  name: 'currentRestaurant',
  initialState,
  reducers: {
    setCurrentRestaurant: (state, action: PayloadAction<number>) => {
      const selectedRestaurant = state.allRestaurants.find((i) => {
        return i.id === action.payload
      })
      state.item = selectedRestaurant;
    },
    setRestaurants: (state, action: PayloadAction<Restaurant[]>) => {
      state.allRestaurants = action.payload
    }
  }
})

export const { setCurrentRestaurant, setRestaurants } = RestaurantsSlice.actions;
export default RestaurantsSlice.reducer