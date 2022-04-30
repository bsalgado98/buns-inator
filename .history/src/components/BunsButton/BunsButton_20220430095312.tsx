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
        const getRandomArrayItem = (arr: any[]) => [...arr][Math.floor(Math.random() * arr.length)]
        const randomPrefixWordList = getRandomArrayItem(prefixes)
        const randomSuffixWordList = getRandomArrayItem(suffixes)


    }

    return (
        <button className="buns-button" onClick={createRandomBunzination}>
            BUNS ME UP SCOTTY
        </button>
    )
}

export default BunsButton