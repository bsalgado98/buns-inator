import './App.css';
import WordBank from './components/WordBank/WordBank'
import WordBuilder from './components/WordBuilder/WordBuilder'
import BunsButton from './components/BunsButton/BunsButton'
import { useDispatch, useSelector } from 'react-redux'
import { setPrefixes, setSuffixes } from './slices/wordsSlice';
import { RARITY, PART_OF_SENTENCE, COLOR } from './utility/constants'
import WordInfo from './interfaces/WordInfo.interface';

function App() {

    const wordList: {prefixes: WordInfo[], suffixes: WordInfo[]} = useSelector((state: any) => state.wordList)
    console.log('what the heck is in here', wordList)
    const dispatch = useDispatch()

    const prefixes = new Set()
    wordList.prefixes.forEach(({ words }) => words.forEach(word => prefixes.add(word)))
    dispatch(setPrefixes(prefixes))
    
    const suffixes = new Set()
    wordList.suffixes.forEach(({ words }) => words.forEach(word => suffixes.add(word)))
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
