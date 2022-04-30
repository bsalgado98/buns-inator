import './App.css';
import Card from './components/Card/Card';
import { useDrag } from 'react-dnd'
import {ItemTypes} from 'constants'

function App() {
    const [{ opacity }, dragRef] = useDrag(() => ({
        type: "Card",
        item: { text },
            collect: (monitor) => ({
                opacity: monitor.isDragging() ? 0.5 : 1
        })
    }), [])
    const buns = "buns"

    return (
        <div className="App">
            <div ref={dragRef} style={{opacity}}>
                <Card text={buns}/>
            </div>
        </div>
    );
}

export default App;
