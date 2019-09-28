function negativePositiveNumbers(arr) {
    let numberArr = [];
    arr.map(x => x < 0 ? numberArr.unshift(x): numberArr.push(x));
    return numberArr.join('\n');
}
negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);