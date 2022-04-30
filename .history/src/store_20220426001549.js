import { configureStore } from "@reduxjs/toolkit"
import wordModifiersReducer from "./slices/wordModifiersSlice"

export const store = configureStore({
    reducer: {
        wordModifiers: wordModifiersReducer
    }
})