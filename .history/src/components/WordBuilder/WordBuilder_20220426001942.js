import SubjectCard from "../SubjectCard/SubjectCard"
import { useSelector, useDispatch } from 'react-redux'

const WordBuilder = () => {
    const styles = {
        container: {
            style: {
                display: 'flex',
                background: 'black',
                width: '100%',
                justifyContent: 'center'
            }
        }
    }

    const prefixes = useSelector(state => {
        console.log('whats in state', state)
    })
    return (
        <div style={styles.container.style}>
            <SubjectCard text="BUNS" />
        </div>
    )
}

export default WordBuilder