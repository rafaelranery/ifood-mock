import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Dish from '../../models/Dishes';

type ModalState = {
  isOpen: boolean,
  item: Dish | null
}

const initialState: ModalState = {
  isOpen: false,
  item: null
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<Dish>) => {
      state.item = action.payload
      state.isOpen = true;
    },
    close: (state) => {
      state.item = null
      state.isOpen = false;
    },
  }
})

export const { open, close } = modalSlice.actions

export default modalSlice.reducer