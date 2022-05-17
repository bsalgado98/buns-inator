import styles from './BunsGame.module.css'
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
        <div className={styles.bunsGame}>
            <div className={styles.prefixes}>
                <WordBank bankTitle='Prefixes' color={COLOR.PREFIX_POWERUPS} wordCollection={prefixes} />
            </div>
            <div className={styles.subjectCardContainer}>
                <WordBuilder />
            </div>
            <div className={styles.bunsButtonContainer}>
                <BunsButton />
            </div>
            <div className={styles.suffixes}>
                <WordBank bankTitle='Suffixes' color={COLOR.SUPER_SUFFIXES} wordCollection={suffixes} />
            </div>
        </div>
    )
}

export default BunsGame