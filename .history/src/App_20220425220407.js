import './App.css';
import WordBank from './components/WordBank/WordBank'
import createWordCollection from './utility/wordCollection';

function App() {
    const wordList = {
        prefixPowerups: [
            {
                sectionTitle: "Common",
                words: ['very', 'mega'],
                color: "#6b6867"
            },
            {
                sectionTitle: "Rare",
                words: ['super'],
                color: "#614cd9"
            },
            {
                sectionTitle: "Legendary",
                words: ['dangerously'],
                color: "#f50fde"
            }
        ]
    }

    return (
        <div className="App">
            <WordBank bankTitle='Prefix Powerups' color="#d12711" wordCollection={wordList.prefixPowerups}/>
        </div>
    );
}

export default App;
