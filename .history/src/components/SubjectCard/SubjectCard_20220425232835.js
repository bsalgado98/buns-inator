const SubjectCard = ({ text, color }) => {
    const styles = {
        container: {
            style: {

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
            <h1 style={styles.text.style}>{text</h1>
        </div>
    )
}

export default SubjectCard