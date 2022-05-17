import BunsGame from '../components/BunsGame/BunsGame';
import WordInfoInterface from '../interfaces/WordInfo.interface';
import WordCardInterface from '../interfaces/WordCard.interface';
import { useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { useWebSocket } from 'react-use-websocket/dist/lib/use-websocket';

function App() {
    // const { prefixes, suffixes }
    //     : { prefixes: WordInfoInterface[], suffixes: WordInfoInterface[] }
    //     = useSelector((state: any) => state.wordList)

    const ps = useSelector((state: any) => state.wordModifiers.prefixes) as WordCardInterface[]
    const [socketUrl, setSocketUrl] = useState('ws://localhost:8000')
    const [messageHistory, setMessageHistory] = useState([])
    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl)
    const callback = useCallback

    useEffect(() => {
        if (!lastMessage) return

        setMessageHistory((prev: any) => prev.concat(lastMessage))
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

    const style = {
        fontFamily: 'Menlo'
    }
    return (
        <div style={style}>
            <BunsGame/>
        </div>
    );
}

export default App;
