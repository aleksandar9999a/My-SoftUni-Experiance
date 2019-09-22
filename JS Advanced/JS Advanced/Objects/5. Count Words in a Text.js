function addPropIfMissing(a, b) {
    if (!a.hasOwnProperty(b)) {
        a[b] = 0;
    }
    return a
}

function wordsText2(str) {
    return str
        .match(/\w+/gim)
        .reduce((a, b) => {
            addPropIfMissing(a, b);
            a[b]++;
            return a;
        }, {})
}
console.log(wordsText2('JS devs use Node.js for server-side JS.-- JS for devs'));