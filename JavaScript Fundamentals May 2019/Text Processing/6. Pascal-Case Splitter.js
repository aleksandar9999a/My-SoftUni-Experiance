function pascalCaseSplitter(text) {
    arr = [];
    text = text.split('');
    let currWord = '';

    for (let i = 0; i < text.length; i++) {
        let nextChar = text[(i+1)];
        currWord += text[i];

        if (i === text.length - 1 || nextChar.charCodeAt(0) > 64 && nextChar.charCodeAt(0) < 91) {
            arr.push(currWord);
            currWord = '';
            if (i === text.length - 1) {
                break;
            }
        }
    }

    console.log(arr.join(', '));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')