import SubjectCard from "../SubjectCard/SubjectCard"
import { useSelector } from 'react-redux'
import WordCard from "../WordCard/WordCard"
import WordCardInterface from "../../interfaces/WordCard.interface"

const WordBuilder = () => {
    const styles = {
        container: {
            style: {
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            }
        }
    }

    const prefixes = useSelector((state: any) => state.wordModifiers.prefixes) as WordCardInterface[]
    const suffixes = useSelector((state: any) => state.wordModifiers.suffixes) as WordCardInterface[]
    return (
        <div style={styles.container.style}>
            {
                prefixes?.map((wordCard, i) => {
                    return (
                        <WordCard
                            key={`prefix-${i}`}
                            id={wordCard.id}
                            text={wordCard.text}
                            color={wordCard.color}
                            partOfSentence={wordCard.partOfSentence}
                            applied={true}
                        />
                    )
                })
            }

            <SubjectCard text="BUNS" />
            {
                suffixes.map((wordInfo, i) =>
                    <WordCard
                        key={`suffix-${i}`}
                        id={wordInfo.id}
                        text={wordInfo.text}
                        color={wordInfo.color}
                        partOfSentence={wordInfo.partOfSentence}
                        applied={true}
                    />)
            }
        </div>
    )
}

export default WordBuilder