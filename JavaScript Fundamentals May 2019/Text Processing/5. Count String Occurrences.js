function countStringOccurrences(text, word) {
    let textArr = text.split(` `);
    let count = 0;

    for (const currWord of textArr) {
        if (currWord === word) {
            count++;
        }
    }

    console.log(count);
}
countStringOccurrences("This is a word and it also is a sentence",
"is");