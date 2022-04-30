const WordBank = ({ bankTitle = "N/A", color = "#000000", wordCollection = [] }) => {
    const styles = {
        container: {
            style: {
                backgroundColor: `${color}88`
            }
        },
        title: {
            style: {
                color: color
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
        <div style={styles.container.style}>
            <div style={styles.title.container.style}>
                <h1 style={styles.title.style}>{bankTitle}</h1>
            </div>
            <div>

            </div>
        </div>
    )
}

export default WordBank