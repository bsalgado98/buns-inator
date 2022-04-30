import { createSlice } from '@reduxjs/toolkit'
import WordInfo from '../interfaces/WordInfo.interface'
import { COLOR, PART_OF_SENTENCE, RARITY } from '../utility/constants'

const initialState = {
    prefixes: [
        {
            name: RARITY.COMMON,
            words: ['very'],
            color: COLOR.COMMON,
            partOfSentence: PART_OF_SENTENCE.PREFIX
        },
        {
            name: RARITY.RARE,
            words: ['mega', 'super'],
            color: COLOR.RARE,
            partOfSentence: PART_OF_SENTENCE.PREFIX
        },
        {
            name: RARITY.LEGENDARY,
            words: ['dangerously'],
            color: COLOR.LEGENDARY,
            partOfSentence: PART_OF_SENTENCE.PREFIX
        }
    ] as WordInfo[],
    suffixes: [
        {
            name: RARITY.COMMON,
            words: ['city'],
            color: COLOR.COMMON,
            partOfSentence: PART_OF_SENTENCE.SUFFIX
        },
        {
            name: RARITY.RARE,
            words: ['metropolis'],
            color: COLOR.RARE,
            partOfSentence: PART_OF_SENTENCE.SUFFIX
        },
        {
            name: RARITY.LEGENDARY,
            words: ['on a stick', 'in a box'],
            color: COLOR.LEGENDARY,
            partOfSentence: PART_OF_SENTENCE.SUFFIX
        }
    ] as WordInfo[]
}

export const wordListSlice = createSlice({
    name: 'word-list',
    initialState,
    reducers: {
        setPrefixes(state, { payload }) {
            state.prefixes = payload
        }
    }
})