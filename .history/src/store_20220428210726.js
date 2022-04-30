import { configureStore } from "@reduxjs/toolkit"
import wordModifiersReducer from "./slices/wordModifiersSlice"
import wordsReducer from "./slices/wordsSlice"

export const store = configureStore({
    reducer: {
        wordModifiers: wordModifiersReducer,
        words: wordsReducer
    }
})