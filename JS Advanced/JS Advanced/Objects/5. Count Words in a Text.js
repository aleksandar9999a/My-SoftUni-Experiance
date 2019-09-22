function wordsText(str) {
    let data = str.match(/\w+/gim);
    let obj = {};

    for (let i = 0; i < data.length; i++) {
        if (!obj.hasOwnProperty(data[i])) {
            obj[data[i]] = 0;
        }
        obj[data[i]]++;
    }

    return obj;
}
console.log(wordsText('JS devs use Node.js for server-side JS.-- JS for devs'));
