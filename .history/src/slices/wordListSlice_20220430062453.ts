import { createSlice } from 'react-redux'
import WordList from '../models/WordList.model'

const initialState = {
    prefixPowerups: new WordList(),
    superSuffixes: new WordList()
}