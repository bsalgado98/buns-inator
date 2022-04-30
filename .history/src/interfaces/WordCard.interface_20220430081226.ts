export interface Word {
    text: string
    color: string
    partOfSentence: 'prefix' | 'suffix'
    applied: boolean
    id?: string
}