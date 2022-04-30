const WordCard = ({ text = "N/A", color = "#000000" }) => {
    const styles = {
        container: {
            style: {
                background: `${color}88`,
                display: 'flex',
                border: `4px dashed ${color}`,
                margin: '5px',
                padding: '5px',
                borderRadius: '5px',
                height: '50%',
                justifyText: 'center'
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