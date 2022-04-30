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
            <div className="word-bank">
                <WordBank bankTitle='Prefix Powerups' color={COLOR.PREFIX_POWERUPS} wordCollection={wordList.prefixPowerups} />
            </div>
            <div className="subject-card-container">
                hi
            </div>
            <div className="word-bank">
                <WordBank bankTitle='Super Suffixes' color={COLOR.SUPER_SUFFIXES} wordCollection={wordList.superSuffixes} />
            </div>
        </div>
    );
}

export default App;
