function wordsUppercase(str) {
    return str.match(/\w+/gim)
        .map(x => x.toUpperCase()).join(', ');
}
console.log(wordsUppercase('Hi, how are you?'))