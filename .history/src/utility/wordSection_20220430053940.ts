import WordCard from "../components/WordCard/WordCard";

function createWordSection(words, wordColor, partOfSentence) {
    return words.map((word, i) => <typeof WordCard key={`${partOfSentence}-${i}`} text={word} color={wordColor} partOfSentence={partOfSentence}/>)
}

export default createWordSection