import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './features/filterSlice'
import dataSlice from './features/dataSlice'

const store = configureStore({
    reducer: {
        filterSlice,
        dataSlice
    }
})

export default store;