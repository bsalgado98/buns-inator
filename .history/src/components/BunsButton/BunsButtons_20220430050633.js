import './BunsButton.css'
import { useSelector, useDispatch } from 'react-redux'
import { addPrefix, addSuffix } from '../../slices/wordModifiersSlice'

const BunsButton = () => {
    const prefixes = useSelector(state => state.words.prefixes)
    const suffixes = useSelector(state => state.words.suffixes)
    const dispatch = useDispatch()
    function createRandomBunzination() {
        const getRandomSetItem = set => [...set][Math.floor(Math.random() * set.size)]
        const randomPrefix = getRandomSetItem(prefixes)
        const randomSuffix = getRandomSetItem(suffixes)
    }

    return (
        <button className="buns-button" onClick={createRandomBunzination}>
            BUNS ME UP SCOTTY
        </button>
    )
}

export default BunsButton