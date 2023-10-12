const readline = require('readline');

class SentenceReverser {
    static reverseWordsInSentence(sentence) {
        if (sentence === null) {
            throw new Error("Input cannot be null.");
        }

        const words = sentence.split(" ");
        const reversedWords = words.map(word => WordReverser.reverseWord(word));
        return reversedWords.join(" ");
    }
}

class WordReverser {
    static reverseWord(word) {
        return word.split("").reverse().join("");
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a sentence: ", (sentence) => {
    try {
        const reversedSentence = SentenceReverser.reverseWordsInSentence(sentence);
        console.log("Reversed sentence: " + reversedSentence);
    } catch (error) {
        console.error("Error: " + error.message);
    }
    
    rl.close();
});
