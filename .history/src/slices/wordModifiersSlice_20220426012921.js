import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    prefixes: [],
    suffixes: []
}

export const wordModifiersSlice = createSlice({
    name: 'word-modifiers',
    initialState,
    reducers: {
        addPrefix(state, action) {
            state.prefixes.push(action.payload)
        },
        addSuffix(state, action) {
            state.suffixes.push(action.payload)
        },
        removePrefix(state, action) {
            state.prefixes = state.prefixes.filter(prefix => prefix.key !== action.payload.key)
        },
        removeSuffix(state, action) {
            state.suffixes = state.suffixes.filter(suffix => suffix.key !== action.payload.key)
        }
    }
})

export const { addPrefix, addSuffix, removePrefix, removeSuffix } = wordModifiersSlice.actions

export default wordModifiersSlice.reducer