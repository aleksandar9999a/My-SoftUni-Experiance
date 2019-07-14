function modernTimesOfHashTag(textWithHashTag) {
    let arr = textWithHashTag.split(' ');
    let wordForPrint = [];

    for (const word of arr) {
        if (word[0] === '#' && word.length > 1) {
            let subWord = word.substring(1, word.length);
            let isContainNumber = false;
            
            for (const char of subWord) {
                if (char == Number(char)) {
                    isContainNumber = true;
                }
            }

            if (!isContainNumber) {
                wordForPrint.push(subWord);
            }
        }
    }

    wordForPrint.forEach(word => console.log(word));
}
modernTimesOfHashTag('Nowadays everyone uses # to tag a #special1 word in #socialMedia')