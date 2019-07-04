function wordOccurrences(wordArr) {
    let map = new Map();

    for (let i = 0; i < wordArr.length; i++) {
        let currentWord = wordArr[i];

        if (!map.has(currentWord)) {
            map.set(currentWord, 1);
        }
        else{
            let currQuantity = map.get(currentWord);
            let newQuantity = currQuantity += 1;
            map.set(currentWord, newQuantity);
        }
    }

    let sorted = [...map].sort((a, b) => b[1] - a[1]);

    for (const [currentWord, count] of sorted) {
        console.log(`${currentWord} -> ${count} times`);
    }
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])