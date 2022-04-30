import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    prefixes: [],
    suffixes: []
}

export const wordModifiersSlice = createSlice({
    name: 'word-modifiers',
    initialState,
    reducers: {
        addPrefix: (state, wordInfo) => state.prefixes.push(wordInfo),
        addSuffix: (state, wordInfo) => state.suffixes.push(wordInfo),
        removeLastPrefix: state => state.prefixes.pop(),
        removeLastSuffix: state => state.suffixes.pop(),
        removePrefix: (state, word) => state.prefixes.filter(prefix => prefix.text !== word),
        removeSuffix: (state, word) => state.suffixes.filter(suffix => suffix.text !== word)
    }
})

export const { addPrefix, addSuffix, removeLastPrefix, removeLastSuffix, removePrefix, removeSuffix } = wordModifiersSlice.actions

export default wordModifiersSlice.reducer