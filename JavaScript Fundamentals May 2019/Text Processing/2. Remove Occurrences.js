function removeOccurrences(word, text) {
    let oldText;

    while (oldText !== text) {
        oldText = text;
        text = text.replace(word, '');
    }

    console.log(text);
}
removeOccurrences('ice', 'kicegiciceeb')