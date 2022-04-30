import SubjectCard from "../SubjectCard/SubjectCard"
import { useSelector } from 'react-redux'
import WordCard from "../WordCard/WordCard"
import { Store } from "@reduxjs/toolkit"

const WordBuilder = () => {
    const styles = {
        container: {
            style: {
                display: 'flex',
                width: '100%',
                background: 'rgba(0, 0, 0, 0.8)',
                justifyContent: 'center',
                alignItems: 'center'
            }
        }
    }

    const prefixes = useSelector((state: any) => state.wordModifiers.prefixes)
    const suffixes = useSelector((state: any) => state.wordModifiers.suffixes)
    return (
        <div style={styles.container.style}>
            {
                prefixes?.map((wordInfo, i) => {
                    return (
                        <WordCard
                            key={`prefix-${i}`}
                            id={wordInfo.id}
                            text={wordInfo.text}
                            color={wordInfo.color}
                            partOfSentence={wordInfo.partOfSentence}
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