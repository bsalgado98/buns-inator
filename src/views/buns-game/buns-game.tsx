import './buns-game.css'
import WordBank from '../../components/WordBank/WordBank'
import WordBuilder from '../../components/WordBuilder/WordBuilder'
import BunsButton from '../../components/BunsButton/BunsButton'
import { useSelector } from 'react-redux'
import { COLOR } from '../../utility/constants'
import WordInfoInterface from '../../interfaces/WordInfo.interface';

const BunsGame = () => {
    const { prefixes, suffixes }
        : { prefixes: WordInfoInterface[], suffixes: WordInfoInterface[] }
        = useSelector((state: any) => state.wordList)

    return (
        <div className="buns-game">
            <div className="prefixes">
                <WordBank bankTitle='Prefixes' color={COLOR.PREFIX_POWERUPS} wordCollection={prefixes} />
            </div>
            <div className="subject-card-container">
                <WordBuilder />
            </div>
            <div className="buns-button-container">
                <BunsButton />
            </div>
            <div className="suffixes">
                <WordBank bankTitle='Suffixes' color={COLOR.SUPER_SUFFIXES} wordCollection={suffixes} />
            </div>
        </div>
    )
}

export default BunsGame