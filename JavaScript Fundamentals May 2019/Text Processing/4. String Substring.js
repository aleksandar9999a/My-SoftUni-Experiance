function stringSubstring(word, text) {
    text = text.split(' ');
    let isContain = false;

    for (const currWord of text) {
        if (currWord.toLowerCase() === word.toLowerCase()) {
            isContain = true;
            break;
        }
    }
    
    if (isContain) {
        console.log(word);
    }
    else{
        console.log(`${word} not found!`);
    }
}
stringSubstring('javascript',
'JavaScript is the best programming language')