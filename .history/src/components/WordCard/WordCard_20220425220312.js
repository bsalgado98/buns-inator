const WordCard = ({ text = "N/A", color = "#000000" }) => {
    const styles = {
        container: {
            style: {
                background: `${color}88`
            }
        }
    }
    return (
        <div style={styles.container.style}>
            <h1>{text}</h1>
        </div>
    )
}

export default WordCard