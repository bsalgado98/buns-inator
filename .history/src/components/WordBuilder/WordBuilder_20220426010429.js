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
            {console.log(prefixes)}
            {
                prefixes?.map((wordInfo, i) => {
                    console.log(wordInfo)
                    return (
                        <WordCard
                            key={`prefix-${i}`}
                            text={wordInfo.text}
                            color={wordInfo.color}
                            partOfSentence={wordInfo.partOfSentence}
                        />
                    )
                })
            }
            <SubjectCard text="BUNS" />
            {
                suffixes.map((wordInfo, i) =>
                    <WordCard
                        key={`suffix-${i}`}
                        text={wordInfo.text}
                        color={wordInfo.color}
                        partOfSentence={wordInfo.partOfSentence}
                    />)
            }
        </div>
    )
}

export default WordBuilder