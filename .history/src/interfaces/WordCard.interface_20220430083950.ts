export default interface WordCard {
    text: string
    color: string
    partOfSentence: 'prefix' | 'suffix'
    applied: boolean
    id?: string
}