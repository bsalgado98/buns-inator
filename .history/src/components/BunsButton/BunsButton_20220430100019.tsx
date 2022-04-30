import './BunsButton.css'
import { useSelector, useDispatch } from 'react-redux'
import { addPrefix, addSuffix } from '../../slices/wordModifiersSlice'
import WordInfoInterface from '../../interfaces/WordInfo.interface'

const BunsButton = () => {
    const { prefixes, suffixes }
        : { prefixes: WordInfoInterface[], suffixes: WordInfoInterface[] }
        = useSelector((state: any) => state.wordList)
    const dispatch = useDispatch()
    function createRandomBunzination() {
        function getRandomArrayItem<T>(arr: T[]): T { return [...arr][Math.floor(Math.random() * arr.length)] }
        const randomPrefixWordList = getRandomArrayItem(prefixes)
        const randomSuffixWordList = getRandomArrayItem(suffixes)

        const randomPrefix = getRandomArrayItem(randomPrefixWordList.words)
        const randomSuffix = getRandomArrayItem(randomSuffixWordList.words)
    }

    return (
        <button className="buns-button" onClick={createRandomBunzination}>
            BUNS ME UP SCOTTY
        </button>
    )
}

export default BunsButton