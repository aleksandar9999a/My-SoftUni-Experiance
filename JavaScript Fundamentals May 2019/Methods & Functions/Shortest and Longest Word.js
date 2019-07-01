function shortestAndLongestWord(text) {
    let textArr = text.split(/[.!, ]+/);
    let longestWordLength = -1;
    let longestWord = ``;
    let shortestWordLength = 1000;
    let shortestWord = ``;

    for (let i = 0; i < textArr.length; i++) {
        let currentText = textArr[i];

        if (currentText.length > longestWordLength) {
            longestWordLength = currentText.length;
            longestWord = currentText;
        }

        if (currentText.length < shortestWordLength) {
            shortestWordLength = currentText.length;
            shortestWord = currentText;
        }
    }

    console.log(`Longest -> ${longestWord}`);
    console.log(`Shortest -> ${shortestWord}`);
}
shortestAndLongestWord(`Hello people, are you familiar with the terms of application at the software university?`)