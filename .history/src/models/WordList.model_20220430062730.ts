import { WordInfo } from "../interfaces/WordInfo.interface";

export default class WordList {
    wordList: WordInfo[]
    constructor(wordList: WordInfo[]) {
        this.wordList = wordList
    }
}