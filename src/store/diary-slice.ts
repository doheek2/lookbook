import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isModalOpen: false,
  title: '',
  content: '',
  comment: '',
  labelColor: '#F47272',
  isdiaryOpens: [true, false],
}

const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    isModalOpen: (state, action) => {
      state.isModalOpen = action.payload
    },
    title: (state, action) => {
      state.title = action.payload
    },
    content: (state, action) => {
      state.content = action.payload
    },
    comment: (state, action) => {
      state.comment = action.payload
    },
    labelColor: (state, action) => {
      state.labelColor = action.payload
    },
    isdiaryOpens: (state, action) => {
      state.isdiaryOpens = action.payload
    },
  },
})

export const diaryActions = diarySlice.actions
export default diarySlice
