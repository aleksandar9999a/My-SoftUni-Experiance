function revealWords(word, text) {
    word = word.split(', ');
    let uncensoredText = text;

    for (let i = 0; i < word.length; i++) {
        let censoredWord = '*'.repeat(word[i].length);

        if (uncensoredText.includes(censoredWord)) {
            uncensoredText = uncensoredText.replace(censoredWord, word[i]);
        }
    }

    console.log(uncensoredText);
}
//revealWords('great', 'softuni is ***** place for learning new programming languages');
//revealWords('learning, great', 'softuni is ***** place for ******** new programming languages' )