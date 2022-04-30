import './BunsButton.css'
import { useSelector, useDispatch } from 'react-redux'
import { addPrefix, addSuffix } from '../../slices/wordModifiersSlice'

const BunsButton = () => {
    const prefixes = useSelector((state: any) => state.words.prefixes)
    const suffixes = useSelector((state: any) => state.words.suffixes)
    const dispatch = useDispatch()
    function createRandomBunzination() {
        const getRandomArrayItem = (arr: []) => [...arr][Math.floor(Math.random() * arr.length)]
        const randomPrefix = getRandomArrayItem(prefixes)
        const randomSuffix = getRandomArrayItem(suffixes)
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