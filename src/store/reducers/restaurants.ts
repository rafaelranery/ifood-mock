import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Restaurant from "../../models/Restaurant";
import RestaurantsFakeAPI from "../../utils/FakeRestaurants";
/* img */

type RestaurantState = {
  item: Restaurant | undefined
}
const initialState: RestaurantState = {
  item: undefined
}


export const RestaurantsSlice = createSlice({
  name: 'currentRestaurant',
  initialState,
  reducers: {
    setCurrentRestaurant: (state, action: PayloadAction<Omit<Restaurant, 'name' | 'category' | 'img' | 'rating' | 'highlight' | 'description' | 'dishes'>>) => {
      
      const selectedRestaurant = RestaurantsFakeAPI.find((i) => {
        return i.id === action.payload.id
      })
      state.item = selectedRestaurant;
    }
  }
})

export const {setCurrentRestaurant} = RestaurantsSlice.actions;
export default RestaurantsSlice.reducer