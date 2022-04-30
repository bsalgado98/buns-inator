import createWordSection from "../../utility/wordSection"
import "./WordBank.css"

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
                },
                title: {
                    style: {
                        opacity: '0.5',
                        fontStyle: 'italic'
                    }
                }
            }
        },
        divider: {
            style: {
                height: '100px',
                width: '0px',
                border: '1px dashed black',
                opacity: '0.2'
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
                    return (
                        <>
                            {i !== 0 ? <span style={styles.divider.style}></span> : null}
                            <div key={`section-${i}`} style={styles.collectionArea.section.style}>
                                <div style={styles.collectionArea.section.wordArea.style}>
                                    {createWordSection(section.words, section.color, section.partOfSentence)}
                                </div>
                                <h5 style={styles.collectionArea.section.title.style}>{section.sectionTitle}</h5>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default WordBank