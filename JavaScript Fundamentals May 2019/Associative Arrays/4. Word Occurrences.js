function wordOccurrences(wordArr) {
    let map = new Map();

    for (let i = 0; i < wordArr.length; i++) {
        let currentWord = wordArr[i];

        if (!map.has(currentWord)) {
            map.set(currentWord, 1);
        }
        else{
            
        }
        
    }

    for (const [currentWord, grades] of map) {
        console.log(`${currentWord}: ${grades}`);
    }
    
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])