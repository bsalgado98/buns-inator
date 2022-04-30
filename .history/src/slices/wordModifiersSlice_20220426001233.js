import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    prefixes: [],
    suffixes: []
}

export const wordModifiersSlice = createSlice({
    name: 'word-modifiers',
    initialState,
    reducers: {
        addPrefix: (state, word) => state.prefixes.push(word),
        addSuffix: (state, word) => state.suffixes.push(word),
        removeLastPrefix: state => state.prefixes.pop(),
        removeLastSuffix: state => state.suffixes.pop(),
        removePrefix: (state, word) => state.prefixes.filter(prefix => prefix !== word),
        removeSuffix: (state, word) => state.suffixes.filter(suffix => suffix !== word)
    }
})