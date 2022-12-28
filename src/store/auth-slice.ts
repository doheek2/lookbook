import { createSlice } from '@reduxjs/toolkit'

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
