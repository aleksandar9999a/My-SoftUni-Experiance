function oddOccurrences(words) {
    let wordWithOddCounter = [];
    let wordArr = words.split(` `);

    while (wordArr.length > 0) {
        let currentWord = wordArr.shift();
        let counter = 1;

        for (let i = 0; i < wordArr.length; i++) {
            if (wordArr[i].toLowerCase() === currentWord.toLowerCase()) {
                counter++;
                wordArr.splice(i, 1);
                i--;
            }
        }

        if (counter % 2 != 0) {
            wordWithOddCounter.push(currentWord.toLowerCase());
        }
    }

    console.log(wordWithOddCounter.join(` `));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')