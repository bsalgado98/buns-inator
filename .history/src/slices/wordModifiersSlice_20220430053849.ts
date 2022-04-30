import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    prefixes: [],
    suffixes: []
}

export const wordModifiersSlice = createSlice({
    name: 'word-modifiers',
    initialState,
    reducers: {
        addPrefix(state, { payload }) {
            state.prefixes.push({...payload, id: `${payload.text}-${state.prefixes.length}`})
        },
        addSuffix(state, { payload }) {
            state.suffixes.push({...payload, id: `${payload.text}-${state.suffixes.length}`})
        },
        removePrefix(state, { payload }) {
            state.prefixes = state.prefixes.filter(prefix => prefix.id !== payload.id)
        },
        removeSuffix(state, { payload }) {
            state.suffixes = state.suffixes.filter(suffix => suffix.id !== payload.id)
        }
    }
})

export const { addPrefix, addSuffix, removePrefix, removeSuffix } = wordModifiersSlice.actions

export default wordModifiersSlice.reducer