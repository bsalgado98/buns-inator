import './App.css';
import WordCard from './components/WordCard/WordCard'
import WordBank from './components/WordBank/WordBank'

function App() {

    return (
        <div className="App">
            <WordBank bankTitle='Prefix Powerups' color="salmon" />
        </div>
    );
}

export default App;
