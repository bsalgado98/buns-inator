import PartOfSentence from "./PartOfSentence.interface"

export interface WordInfo {
    name: string
    words: string[]
    color: string
    partOfSentence: "prefix" | "suffix"
}