import SubjectCard from "../SubjectCard/SubjectCard"
import { useSelector, useDispatch } from 'react-redux'
import WordCard from "../WordCard/WordCard"

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

    const dispatch = useDispatch()
    const prefixes = useSelector(state => state.wordModifiers.prefixes)
    const suffixes = useSelector(state => state.wordModifiers.suffixes)
    return (
        <div style={styles.container.style}>
            {
                prefixes.map((wordInfo, i) => <WordCard text={wordInfo.text} color={wordInfo.color} />)
            }
            <SubjectCard text="BUNS" />
        </div>
    )
}

export default WordBuilder