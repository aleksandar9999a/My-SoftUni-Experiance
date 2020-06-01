function condenseArrayToNumber(arr) {
    let newArr = [...arr];
    while (newArr.length > 1) {
        newArr = newArr.reduce((acc, x, i) => {
            if (newArr[i + 1] != undefined) {
                const number = x + newArr[i + 1];
                acc.push(number);
            }
            return acc;
        }, []);
    }
    return newArr.join("");
}
console.log(condenseArrayToNumber([5, 0, 4, 1, 2]));
console.log(condenseArrayToNumber([2, 10, 3]));
condenseArrayToNumber([2, 10, 3])