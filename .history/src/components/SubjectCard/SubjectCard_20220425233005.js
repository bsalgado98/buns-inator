const SubjectCard = ({ text }) => {
    const styles = {
        container: {
            style: {
                background: `${color}44`,
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