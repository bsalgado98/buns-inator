const WordBank = ({ bankTitle = "N/A", color = "gray", wordCollection = [] }) => {
    const styles = {
        containerStyle: {
            backgroundColor: color
        },
        title: {
            style: {

            },
            container: {
                style: {
                    display: 'flex'
                }
            }
        }
    }
    return (
        <div style={styles.containerStyle}>
            <div style={styles.title.container.style}>
                <h1>{bankTitle}</h1>
            </div>
        </div>
    )
}

export default WordBank