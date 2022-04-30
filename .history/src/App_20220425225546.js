import './App.css';
import WordBank from './components/WordBank/WordBank'
import { RARITY, PART_OF_SENTENCE, COLOR } from './utility/constants'

function App() {
    const wordList = {
        prefixPowerups: [
            {
                sectionTitle: RARITY.COMMON,
                words: ['very', 'mega'],
                color: COLOR.COMMON,
                partOfSentence: PART_OF_SENTENCE.PREFIX
            },
            {
                sectionTitle: RARITY.RARE,
                words: ['super'],
                color: COLOR.RARE,
                partOfSentence: PART_OF_SENTENCE.PREFIX
            },
            {
                sectionTitle: RARITY.LEGENDARY,
                words: ['dangerously'],
                color: COLOR.LEGENDARY,
                partOfSentence: PART_OF_SENTENCE.PREFIX
            }
        ],
        superSuffixes: [
            {
                sectionTitle: RARITY.COMMON,
                words: ['very', 'mega'],
                color: COLOR.COMMON,
                partOfSentence: PART_OF_SENTENCE.SUFFIX
            },
            {
                sectionTitle: RARITY.RARE,
                words: ['super'],
                color: COLOR.RARE,
                partOfSentence: PART_OF_SENTENCE.SUFFIX
            },
            {
                sectionTitle: RARITY.LEGENDARY,
                words: ['city'],
                color: COLOR.LEGENDARY,
                partOfSentence: PART_OF_SENTENCE.SUFFIX
            }
        ]
    }

    return (
        <div className="App">
            <WordBank bankTitle='Prefix Powerups' color="#d12711" wordCollection={wordList.prefixPowerups} />
            <WordBank bankTitle='Super Suffixes' color="#f59d0f" wordCollection={wordList.superSuffixes} />
        </div>
    );
}

export default App;
