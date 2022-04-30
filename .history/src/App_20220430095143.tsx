import './App.css';
import WordBank from './components/WordBank/WordBank'
import WordBuilder from './components/WordBuilder/WordBuilder'
import BunsButton from './components/BunsButton/BunsButton'
import { useSelector } from 'react-redux'
import { COLOR } from './utility/constants'
import WordInfoInterface from './interfaces/WordInfo.interface';

function App() {

    const {prefixes, suffixes}: {prefixes: WordInfoInterface[], suffixes: WordInfoInterface[]} = useSelector((state: any) => state.wordList)

    return (
        <div className="App">
            <div className="word-bank">
                <WordBank bankTitle='Prefix Powerups' color={COLOR.PREFIX_POWERUPS} wordCollection={prefixes} />
            </div>
            <div className="subject-card-container">
                <WordBuilder />
            </div>
            <div className="buns-button-container">
                <BunsButton />
            </div>
            <div className="word-bank">
                <WordBank bankTitle='Super Suffixes' color={COLOR.SUPER_SUFFIXES} wordCollection={suffixes} />
            </div>
        </div>
    );
}

export default App;