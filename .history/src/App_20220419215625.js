import './App.css';
import Card from './components/Card/Card';

function App() {
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
