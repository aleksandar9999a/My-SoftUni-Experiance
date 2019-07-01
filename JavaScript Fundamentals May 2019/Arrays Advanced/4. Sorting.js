function sorting(numberArr) {
    let sortNumber = (a, b) => a - b;
    numberArr.sort(sortNumber);
    let sortedArr = [];

    function timeToSort(sortedArr) {
        while (numberArr.length > 0) {
            let bigNumber = numberArr.pop();
            let smallNumber = numberArr.shift();
    
            sortedArr.push(bigNumber);
            sortedArr.push(smallNumber);
        }

        return sortedArr.join(` `);
    }

    console.log(timeToSort(sortedArr));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])