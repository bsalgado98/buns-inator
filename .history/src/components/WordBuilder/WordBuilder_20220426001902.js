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
    return (
        <div style={styles.container.style}>
            <SubjectCard text="BUNS" />
        </div>
    )
}

export default WordBuilder