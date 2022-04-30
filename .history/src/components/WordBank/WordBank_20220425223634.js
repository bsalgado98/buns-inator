import createWordSection from "../../utility/wordSection"

const WordBank = ({ bankTitle = "N/A", color = "#000000", wordCollection = [] }) => {
    const styles = {
        container: {
            style: {
                backgroundColor: `${color}88`,
                display: 'flex',
                flexDirection: 'column'
            }
        },
        title: {
            style: {
                color: color
            },
            container: {
                style: {
                    display: 'flex',
                    width: '100%'
                }
            }
        },
        collectionArea: {
            style: {
                display: 'flex'
            },
            section: {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    width: '30%'
                },
                wordArea: {
                    style: {
                        display: 'flex'
                    }
                }
            }
        }
    }
    return (
        <div style={styles.container.style}>
            <div style={styles.title.container.style}>
                <h1 style={styles.title.style}>{bankTitle}</h1>
            </div>
            <div style={styles.collectionArea.style}>
                {wordCollection.map((section, i) => {
                    console.log(section.sectionTitle)
                    return (
                        <div key={`section-${i}`} style={styles.collectionArea.section.style}>
                            <div style={styles.collectionArea.section.wordArea.style}>
                                {createWordSection(section.words, section.color)}
                            </div>
                            <h6>{section.sectionTitle}</h6>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default WordBank