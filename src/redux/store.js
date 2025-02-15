import { configureStore } from '@reduxjs/toolkit'
import filasReducer from './filasSlice'

const store = configureStore({
    reducer: {
        filas: filasReducer
    }
})

export default store
