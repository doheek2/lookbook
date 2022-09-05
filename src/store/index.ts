import { configureStore } from '@reduxjs/toolkit'

import menuSlice from './menu-slice'

const store = configureStore({
  reducer: { menu: menuSlice.reducer },
})

export type storeType = ReturnType<typeof store.getState>
export type dispatchType = typeof store.dispatch
export default store
