import './BunsButton.css'
import { useSelector } from 'react-redux'

const BunsButton = () => {
    const CreateRandomBunzination = () => {
        const prefixes = useSelector(state => state.words.prefixes)
        const suffixes = useSelector(state => state.words.suffixes)
        console.log({ prefixes })
        console.log({ suffixes })

    }

    return (
        <button className="buns-button" onClick={CreateRandomBunzination}>
            BUNS ME UP SCOTTY
        </button>
    )
}

export default BunsButton