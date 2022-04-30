import { useDispatch } from "react-redux"
import { addPrefix, addSuffix } from "../../slices/wordModifiersSlice"
import { PART_OF_SENTENCE } from "../../utility/constants"

const WordCard = ({ text = "N/A", color = "#000000", partOfSentence }) => {
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
    partOfSentence = partOfSentence
    const dispatch = useDispatch()

    const handleWordClick = () => {
        console.log(this.partOfSentence)
        if (this.partOfSentence === PART_OF_SENTENCE.PREFIX) {
            console.log('adding prefix')
            dispatch(addPrefix({ text, color, partOfSentence: this.partOfSentence }))
        }
        else {
            console.log('adding suffix')
            dispatch(addSuffix({ text, color, partOfSentence: this.partOfSentence }))
        }
    }
    return (
        <div style={styles.container.style} onClick={handleWordClick}>
            <h1 style={styles.text.style}>{text}</h1>
        </div>
    )
}

export default WordCard