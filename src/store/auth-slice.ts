import { createSlice } from '@reduxjs/toolkit'
import { IUserState } from 'types/firebaseAuth'

export interface IAuthState {
  user: null | IUserState
}

const initialState = {
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    user: (state, action) => {
      state.user = action.payload
    },
  },
})

export const authActions = authSlice.actions
export default authSlice
