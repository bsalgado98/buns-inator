const WordCard = ({ text = "N/A", color = "#000000" }) => {
    const styles = {
        container: {
            style: {
                background: `${color}88`,
                display: 'block'
            }
        },
        text: {
            style: {
                color: color,
                fontSize: '16px'
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