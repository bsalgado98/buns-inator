import './BunsButton.css'
import { useSelector } from 'react-redux'

const BunsButton = () => {
    const createRandomBunzination = () => {

    }

    return (
        <button className="buns-button" onClick={createRandomBunzination}>
            BUNS ME UP SCOTTY
        </button>
    )
}

export default BunsButton