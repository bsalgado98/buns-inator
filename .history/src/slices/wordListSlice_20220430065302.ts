import { createSlice } from 'react-redux'
import { WordInfo } from '../interfaces/WordInfo.interface'
import WordList from '../models/WordList.model'
import { COLOR, PART_OF_SENTENCE, RARITY } from '../utility/constants'

const initialState = {
    prefixes: [
        {
            name: RARITY.COMMON,
            words: ['very'],
            color: COLOR.COMMON,
            partOfSentence: "prefix"
        },
    ] as WordInfo[]
}