const Card = ({ text }) => {
    const [{ opacity }, dragRef] = useDrag(() => ({
        type: "Card",
        item: { text },
            collect: (monitor) => ({
                opacity: monitor.isDragging() ? 0.5 : 1
        })
    }), [])
    return (
        <div ref={dragRef} style={{opacity}}>
            <h1>{text}</h1>
        </div>
    )
}

export default Card