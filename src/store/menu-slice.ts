import { createSlice } from '@reduxjs/toolkit'

export interface IMenuState {
  isMenuOpen: boolean
  isDarkModeBtnClicked: boolean
}

const initialState: IMenuState = {
  isMenuOpen: false,
  isDarkModeBtnClicked: false,
}

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    isOpenMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen
    },
    isDarkModeBtnClicked: (state) => {
      state.isDarkModeBtnClicked = !state.isDarkModeBtnClicked
    },
  },
})

export const menuActions = menuSlice.actions
export default menuSlice
