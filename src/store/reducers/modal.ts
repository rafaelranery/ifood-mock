import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../../models/Restaurant';

type ModalState = {
  isOpen: boolean,
  item: Item | null
}

const initialState: ModalState = {
  isOpen: false,
  item: null
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<Item>) => {
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