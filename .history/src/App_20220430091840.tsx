import './App.css';
import WordBank from './components/WordBank/WordBank'
import WordBuilder from './components/WordBuilder/WordBuilder'
import BunsButton from './components/BunsButton/BunsButton'
import { useDispatch, useSelector } from 'react-redux'
import { RARITY, PART_OF_SENTENCE, COLOR } from './utility/constants'
import WordInfo from './interfaces/WordInfo.interface';

function App() {

    const wordList: {prefixes: WordInfo[], suffixes: WordInfo[]} = useSelector((state: any) => state.wordList)
    console.log('what the heck is in here', wordList)

    return (
        <div className="App">
            <div className="word-bank">
                <WordBank bankTitle='Prefix Powerups' color={COLOR.PREFIX_POWERUPS} wordCollection={wordList.prefixes} />
            </div>
            <div className="subject-card-container">
                <WordBuilder />
            </div>
            <div className="buns-button-container">
                <BunsButton />
            </div>
            <div className="word-bank">
                <WordBank bankTitle='Super Suffixes' color={COLOR.SUPER_SUFFIXES} wordCollection={wordList.suffixes} />
            </div>
        </div>
    );
}

export default App;
