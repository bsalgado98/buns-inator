export default interface WordCardInterface {
    text: string
    color: string
    partOfSentence: 'prefix' | 'suffix'
    applied?: boolean 
    id?: string
}