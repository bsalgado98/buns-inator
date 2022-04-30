import './BunsButton.css'
import { useSelector, useDispatch } from 'react-redux'
import { addPrefix, addSuffix } from '../../slices/wordModifiersSlice'

const BunsButton = () => {
    const prefixes = useSelector((state: any) => state.words.prefixes)
    const suffixes = useSelector((state: any) => state.words.suffixes)
    const dispatch = useDispatch()
    function createRandomBunzination() {
        const getRandomSetItem = set => [...set][Math.floor(Math.random() * set.size)]
        const randomPrefix = getRandomSetItem(prefixes)
        const randomSuffix = getRandomSetItem(suffixes)
        console.log({ randomPrefix })
        console.log({randomSuffix})

        dispatch(addPrefix(randomPrefix))
        dispatch(addSuffix(randomSuffix))
    }

    return (
        <button className="buns-button" onClick={createRandomBunzination}>
            BUNS ME UP SCOTTY
        </button>
    )
}

export default BunsButton