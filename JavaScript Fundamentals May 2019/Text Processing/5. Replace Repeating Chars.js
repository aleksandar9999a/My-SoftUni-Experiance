function replaceRepeatingChars(text) {
    let arr = [];

    for (let i = 0; i < text.length; i++) {
        
        if (text[i] != text[i - 1]) {
            arr.push(text[i])
        }
    }

    console.log(arr.join(''));
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')