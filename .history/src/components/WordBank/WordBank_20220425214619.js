const WordBank = ({ bankTitle = "N/A", color = "#000000", wordCollection = [] }) => {
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
        },
        collectionArea: {
            style: {
                
            }
        }
    }
    return (
        <div style={styles.containerStyle}>
            <div style={styles.title.container.style}>
                <h1>{bankTitle}</h1>
            </div>
            <div>

            </div>
        </div>
    )
}

export default WordBank