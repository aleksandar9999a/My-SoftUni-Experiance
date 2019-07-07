function wordsTracker(wordArr) {
    let map = new Map();
    let wordForSearch = wordArr.shift().split(` `);

    for (let i = 0; i < wordForSearch.length; i++) {
        let currentWord = wordForSearch[i];
        let wordCounter = 0;

        for (let x = 0; x < wordArr.length; x++) {
            let currentWordFromArr = wordArr[x];
            
            if (currentWord === currentWordFromArr) {
                wordCounter++;
            }
        }
        
        map.set(currentWord, wordCounter);
    }

    let sorted = [...map].sort((a, b) => b[1] - a[1]);

    for (const [word, count] of sorted) {
        console.log(`${word} - ${count}`);
    }
}
wordsTracker([
    'this sentence', 'In','this','this','you','sentence','to','count','this','occurances','of','the'
    ,'sentence','this','and','sentence','because','this','is','your',''
    ]
    )