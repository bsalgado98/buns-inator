import { createSlice } from 'react-redux'
import PartOfSentence from '../interfaces/PartOfSentence.interface'
import { WordInfo } from '../interfaces/WordInfo.interface'
import WordList from '../models/WordList.model'
import { COLOR, PART_OF_SENTENCE, RARITY } from '../utility/constants'

const initialState = {
    prefixes: [
        {
            name: RARITY.COMMON,
            words: ['very'],
            color: COLOR.COMMON,
        },
        {

        }
    ] as WordInfo[]
}