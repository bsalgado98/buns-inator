import { createSlice } from "@reduxjs/toolkit"
import WordCardInterface from "../interfaces/WordCard.interface"

const initialState
    : {
        prefixes: WordCardInterface[],
        suffixes: WordCardInterface[]
    }
    = {
    prefixes: [],
    suffixes: []
}

export const wordModifiersSlice = createSlice({
    name: 'word-modifiers',
    initialState,
    reducers: {
        addPrefix(state, { payload }: { payload: WordCardInterface }) {
            state.prefixes.push({...payload, id: `${payload.text}-${state.prefixes.length}`})
        },
        addSuffix(state, { payload }: { payload: WordCardInterface }) {
            state.suffixes.push({...payload, id: `${payload.text}-${state.suffixes.length}`})
        },
        removePrefix(state, { payload }: { payload: WordCardInterface }) {
            state.prefixes = state.prefixes.filter(prefix => prefix.id !== payload.id)
        },
        removeSuffix(state, { payload }: { payload: WordCardInterface }) {
            state.suffixes = state.suffixes.filter(suffix => suffix.id !== payload.id)
        }
    }
})

export const { addPrefix, addSuffix, removePrefix, removeSuffix } = wordModifiersSlice.actions

export default wordModifiersSlice.reducer