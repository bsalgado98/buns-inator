import SubjectCard from "../SubjectCard/SubjectCard"

const WordBuilder = () => {
    const styles = {
        container: {
            style: {
                display: 'flex',
                background: 'black',
                width: '100%',
                alignContent: 'center'
            }
        }
    }
    return (
        <div style={styles.container.style}>
            <SubjectCard text="BUNS" />
        </div>
    )
}

export default WordBuilder