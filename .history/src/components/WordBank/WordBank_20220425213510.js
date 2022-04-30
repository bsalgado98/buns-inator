const WordBank = ({ bankTitle = "N/A", color = "gray", wordCollection = [] }) => {
    const containerStyle = {
        backgroundColor: color
    }
    return (
        <div style={containerStyle}>
            <h1>{bankTitle}</h1>
        </div>
    )
}

export default WordBank;