import './App.css';
import WordBank from './components/WordBank/WordBank'
import WordBuilder from './components/WordBuilder/WordBuilder'
import BunsButton from './components/BunsButton/BunsButtons'
import { useDispatch, useSelector } from 'react-redux'
import { setPrefixes, setSuffixes } from './slices/wordsSlice';
import { RARITY, PART_OF_SENTENCE, COLOR } from './utility/constants'

function App() {

    // select supersuffixes and prefixpowerups
    const wordList = {prefixPowerups: [], superSuffixes: []}
    const dispatch = useDispatch()

    const prefixes = new Set()
    wordList.prefixPowerups.forEach(({ words }) => words.forEach(word => prefixes.add(word)))
    dispatch(setPrefixes(prefixes))
    
    const suffixes = new Set()
    wordList.superSuffixes.forEach(({ words }) => words.forEach(word => suffixes.add(word)))
    dispatch(setSuffixes(suffixes))

    return (
        <div className="App">
            <div className="word-bank">
                <WordBank bankTitle='Prefix Powerups' color={COLOR.PREFIX_POWERUPS} wordCollection={wordList.prefixPowerups} />
            </div>
            <div className="subject-card-container">
                <WordBuilder />
            </div>
            <div className="buns-button-container">
                <BunsButton />
            </div>
            <div className="word-bank">
                <WordBank bankTitle='Super Suffixes' color={COLOR.SUPER_SUFFIXES} wordCollection={wordList.superSuffixes} />
            </div>
        </div>
    );
}

export default App;
