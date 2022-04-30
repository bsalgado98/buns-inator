import { useDispatch } from "react-redux"
import { addPrefix, addSuffix, removePrefix, removeSuffix } from "../../slices/wordModifiersSlice"
import { PART_OF_SENTENCE } from "../../utility/constants"
import WordCardInterface from "../../interfaces/WordCard.interface"

const WordCard = (wordCard: WordCard) => {
    const { text, color, partOfSentence, id, applied } = wordCard
    const styles = {
        container: {
            style: {
                background: `${color}44`,
                display: 'flex',
                border: `2px dashed ${color}`,
                margin: '5px',
                padding: '5px',
                borderRadius: '5px',
                height: '30%',
                alignItems: 'center'
            }
        },
        text: {
            style: {
                color: color,
                fontSize: '16px'
            }
        }
    }
    const dispatch = useDispatch()

    const handleWordClick = () => {
        if (partOfSentence === PART_OF_SENTENCE.PREFIX) {
            if (applied) {
                dispatch(removePrefix({ text, color, partOfSentence, id }))
            }
            else {
                dispatch(addPrefix({ text, color, partOfSentence}))
            }
        }
        else {
            if (applied) {
                dispatch(removeSuffix({ text, color, partOfSentence, id }))
            }
            else {
                dispatch(addSuffix({ text, color, partOfSentence}))
            }
        }
    }
    return (
        <div style={styles.container.style} onClick={handleWordClick}>
            <h1 style={styles.text.style}>{text}</h1>
        </div>
    )
}

export default WordCard