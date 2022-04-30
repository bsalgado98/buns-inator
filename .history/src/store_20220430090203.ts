import { configureStore } from "@reduxjs/toolkit"
import wordModifiersReducer from "./slices/wordModifiersSlice"
import wordListReducer from './slices/wordListSlice'

export const store = configureStore({
    reducer: {
        wordModifiers: wordModifiersReducer,
        words: 
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})