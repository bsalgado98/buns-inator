import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    prefixes: [],
    suffixes: []
}

export const wordModifiersSlice = createSlice({
    name: 'word-modifiers',
    initialState,
    reducers: {
        addPrefix: (state, word) => {
            state.prefixes.push(word)
        },
        addSuffix: (state, word) => {
            state.suffixes.push(word)
        }
    }
})