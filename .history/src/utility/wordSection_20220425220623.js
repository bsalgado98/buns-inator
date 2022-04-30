import WordCard from "../components/WordCard/WordCard";

function createWordSection(words, wordColor) {
    return words.map(word => <WordCard text={word} color={wordColor} />)
}

export default createWordSection