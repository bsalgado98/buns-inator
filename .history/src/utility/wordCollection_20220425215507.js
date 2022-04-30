import WordCard from "../components/WordCard/WordCard";

function createWordCollection(words, wordColor) {
    return words.map(word => <WordCard text={word} color={wordColor} />)
}

export default createWordCollection