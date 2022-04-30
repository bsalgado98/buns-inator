import WordCard from "../components/WordCard/WordCard";

function createWordSection(words: string[], wordColor: string, partOfSentence: string) {
    return words.map((word, i) => <WordCard key={`${partOfSentence}-${i}`} text={word} color={wordColor} partOfSentence={partOfSentence}/>)
}

export default createWordSection