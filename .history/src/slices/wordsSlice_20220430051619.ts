import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    prefixes: new Set(),
    suffixes: new Set()
}

export const wordsSlice = createSlice({
    name: 'words',
    initialState,
    reducers: {
        setPrefixes(state, { payload }) {
            state.prefixes = payload
        },
        setSuffixes(state, { payload }) {
            state.suffixes = payload
        }
    }
})

export const { setPrefixes, setSuffixes } = wordsSlice.actions

export default wordsSlice.reducer