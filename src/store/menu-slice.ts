import { createSlice } from '@reduxjs/toolkit'

export interface IMenuState {
  isOpen: boolean
}

const initialState: IMenuState = {
  isOpen: false,
}

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    isOpenMenu: (state) => {
      state.isOpen = !state.isOpen
    },
  },
})

export const menuActions = menuSlice.actions
export default menuSlice
