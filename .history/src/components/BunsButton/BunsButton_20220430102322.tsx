import './BunsButton.css'
import { useSelector, useDispatch } from 'react-redux'
import { addPrefix, addSuffix } from '../../slices/wordModifiersSlice'
import WordInfoInterface from '../../interfaces/WordInfo.interface'
import WordCardInterface from '../../interfaces/WordCard.interface'

const BunsButton = () => {
    const { prefixes, suffixes }
        : { prefixes: WordInfoInterface[], suffixes: WordInfoInterface[] }
        = useSelector((state: any) => state.wordList)
    const dispatch = useDispatch()
    /* Usage notes for API Refactor:
    *   - This logic may not be the kind of random we want
    *   - We're doing random of outer list [{}, {}, {}], then random of those inner lists {}.words[word, word, word]
    *   - We may instead want to take all the words in one unified array, then randomly take from that
    *   - TODO: Find if these two methods are logically equivalent
    */ 
    function createRandomBunzination() {
        function getRandomArrayItem<T>(arr: T[]): T { return [...arr][Math.floor(Math.random() * arr.length)] }
        const randomPrefixWordList = getRandomArrayItem(prefixes)
        const randomSuffixWordList = getRandomArrayItem(suffixes)
        console.log({ randomPrefixWordList })
        console.log({ randomSuffixWordList })

        const randomPrefix = getRandomArrayItem(randomPrefixWordList.words)
        const randomSuffix = getRandomArrayItem(randomSuffixWordList.words)
        console.log({ randomPrefix })
        console.log({ randomSuffix })

        const prefixCard: WordCardInterface = {
            text: randomPrefix,
            color: randomPrefixWordList.color,
            partOfSentence: randomPrefixWordList.partOfSentence,
        }

        const createRandomWord = ({ words, color, partOfSentence }: WordInfoInterface) => {
            const randomWord = getRandomArrayItem(words)
        }
    }

    return (
        <button className="buns-button" onClick={createRandomBunzination}>
            BUNS ME UP SCOTTY
        </button>
    )
}

export default BunsButton