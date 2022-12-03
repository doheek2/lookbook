import { configureStore } from '@reduxjs/toolkit'

import menuSlice from './menu-slice'
import authSlice from './auth-slice'

const store = configureStore({
  reducer: { menu: menuSlice.reducer, auth: authSlice.reducer },
})

export type storeType = ReturnType<typeof store.getState>
export type dispatchType = typeof store.dispatch
export default store
