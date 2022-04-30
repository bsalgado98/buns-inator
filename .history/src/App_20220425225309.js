import './App.css';
import WordBank from './components/WordBank/WordBank'
import { RARITY, PART_OF_SENTENCE } from './utility/constants'

function App() {
    const wordList = {
        prefixPowerups: [
            {
                sectionTitle: RARITY.COMMON,
                words: ['very', 'mega'],
                color: "#6b6867",
                partOfSentence: PART_OF_SENTENCE.PREFIX
            },
            {
                sectionTitle: RARITY.RARE,
                words: ['super'],
                color: "#614cd9",
                partOfSentence: PART_OF_SENTENCE.PREFIX
            },
            {
                sectionTitle: RARITY.LEGENDARY,
                words: ['dangerously'],
                color: "#f50fde",
                partOfSentence: PART_OF_SENTENCE.PREFIX
            }
        ],
        superSuffixes: [
            {
                sectionTitle: RARITY.COMMON,
                words: ['very', 'mega'],
                color: "#6b6867",
                partOfSentence: PART_OF_SENTENCE.SUFFIX
            },
            {
                sectionTitle: RARITY.RARE,
                words: ['super'],
                color: "#614cd9",
                partOfSentence: PART_OF_SENTENCE.SUFFIX
            },
            {
                sectionTitle: RARITY.LEGENDARY,
                words: ['city'],
                color: "#f50fde",
                partOfSentence: PART_OF_SENTENCE.SUFFIX
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
