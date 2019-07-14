function censoredWords(text, word) {
    let censoredWord = text;

    while (censoredWord.includes(word)) {
        censoredWord = censoredWord.replace(word, '*'.repeat(word.length));
    }

    console.log(censoredWord);
}
censoredWords("A small sentence with some words", "small")