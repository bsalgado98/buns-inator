const SubjectCard = ({ text = "N/A"}) => {
    const styles = {
        container: {
            style: {
                background: 'rgba(255, 255, 255, 0.5)',
                display: 'flex',
                border: '2px solid white',
                margin: '5px',
                padding: '5px',
                borderRadius: '5px',
                height: '30%',
                alignItems: 'center'
            }
        },
        text: {
            style: {
                color: "white"
            }
        }
    }
    return (
        <div style={styles.container.style}>
            <h1 style={styles.text.style}>{text}</h1>
        </div>
    )
}

export default SubjectCard