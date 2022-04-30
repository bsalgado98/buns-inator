import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    prefixes: new Set(),
    suffixes: new Set()
}

export const wordsSlice = createSlice({
    name: 'words',
    initialState,
    reducers: {
        set{ffixes(state, { payload }) {
            state.prefixes = payload
        },
        set
    }
})