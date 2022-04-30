const WordCard = ({ text = "N/A", color = "#000000" }) => {
    const styles = {
        container: {
            style: {
                background: `${color}88`,
                display: 'flex'
            }
        },
        text: {
            style: {
                color: color
            }
        }
    }
    return (
        <div style={styles.container.style}>
            <h1 style={styles.text.style}>{text}</h1>
        </div>
    )
}

export default WordCard