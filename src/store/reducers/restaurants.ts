import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Restaurant } from "../../models/Restaurant";
import RestaurantsFakeAPI from "../../utils/FakeRestaurants";
/* img */

type RestaurantState = {
  allRestaurants: Restaurant[]
  item: Restaurant | null
}
const initialState: RestaurantState = {
  item: null,
  allRestaurants: []
}


export const RestaurantsSlice = createSlice({
  name: 'currentRestaurant',
  initialState,
  reducers: {
    setCurrentRestaurant: (state, action: PayloadAction<Omit<Restaurant, 'name' | 'category' | 'img' | 'rating' | 'highlight' | 'description' | 'dishes'>>) => {
      const selectedRestaurant = RestaurantsFakeAPI.find((i) => {
        return i.id === action.payload.id
      })
      state.item = selectedRestaurant as Restaurant;
    },
    setRestaurants: (state, action: PayloadAction<Restaurant[]>) => {
      state.allRestaurants = action.payload
    }
  }
})

export const { setCurrentRestaurant, setRestaurants } = RestaurantsSlice.actions;
export default RestaurantsSlice.reducer