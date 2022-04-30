import './BunsButton.css'
import { useSelector } from 'react-redux'

const BunsButton = () => {
    const prefixes = useSelector(state => state.words.prefixes)
    const suffixes = useSelector(state => state.words.suffixes)
    function createRandomBunzination() {
        console.log({ prefixes })
        console.log({ suffixes })
        const getRandomSetItem = set => [...set][Math.floor(Math.random() * set.size)]
        console.log('random prefix', getRandomSetItem(prefixes))
        console.log('random suffix', getRandomSetItem(suffixes))

    }

    return (
        <button className="buns-button" onClick={createRandomBunzination}>
            BUNS ME UP SCOTTY
        </button>
    )
}

export default BunsButton