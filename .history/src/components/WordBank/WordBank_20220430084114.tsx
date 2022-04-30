import { Fragment } from "react"
import createWordSection from "../../utility/wordSection"

const WordBank = ({ bankTitle = "N/A", color = "#000000", wordCollection = [] }) => {
    const styles = {
        container: {
            style: {
                backgroundColor: `${color}88`,
                display: 'flex',
                flexDirection: 'column',
                padding: '10px'
            }
        },
        title: {
            style: {
                color: color,
                backgroundColor: 'white'
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
                    width: '30%',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    backdropFilter: 'blur(100px)',
                    margin: '5px',
                    borderRadius: '5px'
                },
                wordArea: {
                    style: {
                        display: 'flex'
                    }
                },
                title: {
                    style(color) {
                        return {
                            opacity: '0.5',
                            fontStyle: 'italic',
                            color
                        }
                    }
                }
            }
        },
        divider: {
            style: {
                height: '100px',
                width: '0px',
                border: '1px dashed black',
                opacity: '0.8'
            }
        }
    }
    return (
        <div style={styles.container.style as React.CSSProperties}>
            <div style={styles.title.container.style}>
                <h1 style={styles.title.style}>{bankTitle}</h1>
            </div>
            <div style={styles.collectionArea.style}>
                {wordCollection.map((section, i) => {
                    return (
                        <Fragment key={`word-bank-frag-${i}`}>
                            {i !== 0 ? <span style={styles.divider.style}></span> : null}
                            <div key={`section-${i}`} style={styles.collectionArea.section.style as React.CSSProperties} className="section">
                                <div style={styles.collectionArea.section.wordArea.style}>
                                    {createWordSection(section.words, section.color, section.partOfSentence)}
                                </div>
                                <h5 style={styles.collectionArea.section.title.style(section.color)}>{section.sectionTitle}</h5>
                            </div>
                        </Fragment>
                    )
                })}
            </div>
        </div>
    )
}

export default WordBank