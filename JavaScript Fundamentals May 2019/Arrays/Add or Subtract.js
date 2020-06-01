function addOrSubtract(arr) {
    const updatedArr = arr.map((x, i) => x % 2 === 0 ? x + i : x - i);
    const sumOfArr = arr.reduce((acc, x) => acc+=x);
    const sumOfUpdated = updatedArr.reduce((acc, x) => acc+=x);
    console.log(updatedArr);
    console.log(sumOfArr);
    console.log(sumOfUpdated);
}
addOrSubtract([5, 15, 23, 56, 35])