import WordCard from "../components/WordCard/WordCard";

function createWordSection(words, wordColor, partOfSentence) {
    return words.map((word, i) => <WordCard key={`word-${i}`} text={word} color={wordColor} />)
}

export default createWordSection