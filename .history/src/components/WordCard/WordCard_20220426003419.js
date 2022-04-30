import { useDispatch } from "react-redux"
import { addPrefix, addSuffix } from "../../slices/wordModifiersSlice"

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
    const dispatch = useDispatch()

    const handleWordClick = () => {
        if (partOfSentence === "prefix") {
            dispatch()
        }
    }
    return (
        <div style={styles.container.style} onClick={handleWordClick}>
            <h1 style={styles.text.style}>{text}</h1>
        </div>
    )
}

export default WordCard