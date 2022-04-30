const SubjectCard = ({ text }) => {
    const styles = {
        container: {
            style: {

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