import './App.css';
import WordBank from './components/WordBank/WordBank'
import WordBuilder from './components/WordBuilder/WordBuilder'
import BunsButton from './components/BunsButton/BunsButton'
import { useSelector } from 'react-redux'
import { COLOR } from './utility/constants'
import WordInfoInterface from './interfaces/WordInfo.interface';
import WordCardInterface from './interfaces/WordCard.interface';
import { useCallback, useEffect, useState } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

function App() {

    const { prefixes, suffixes }
        : { prefixes: WordInfoInterface[], suffixes: WordInfoInterface[] }
        = useSelector((state: any) => state.wordList)
    
    const ps = useSelector((state: any) => state.wordModifiers.prefixes) as WordCardInterface[]
    const [socketUrl, setSocketUrl] = useState('ws://localhost:8000')
    const [messageHistory, setMessageHistory] = useState([])
    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl)
    const callback = useCallback

    useEffect(() => {
        if (!lastMessage) return

        setMessageHistory(prev => prev.concat(lastMessage))
    }, [lastMessage, setMessageHistory])

    useEffect(() => {
        if (!ps) return

        ps.forEach(prefix => {
            const message = {
                event: 'lobby:add_player',
                payload: prefix.text
            }
            callback(() => sendMessage(JSON.stringify(message)), [])
        })
    }, [ps])

    return (
        <div className="App">
            <div className="word-bank">
                <WordBank bankTitle='Prefixes' color={COLOR.PREFIX_POWERUPS} wordCollection={prefixes} />
            </div>
            <div className="subject-card-container">
                <WordBuilder />
            </div>
            <div className="buns-button-container">
                <BunsButton />
            </div>
            <div className="word-bank">
                <WordBank bankTitle='Suffixes' color={COLOR.SUPER_SUFFIXES} wordCollection={suffixes} />
            </div>
        </div>
    );
}

export default App;
