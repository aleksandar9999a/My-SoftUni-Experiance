function firstAndLastKNumbers (numberArr) {
    let kElement = numberArr.shift();
    let firstResult = ``;
    let secondResult = ``;

    for (let x = 0; x < numberArr.length; x++) {
        let currentElement = numberArr[x];
        
        if (x < kElement) {
            firstResult += currentElement + ` `;
        }

        if (x > numberArr.length - 1 - kElement) {
            secondResult += currentElement + ` `;
        }
    }

    console.log(firstResult);
    console.log(secondResult);
}
firstAndLastKNumbers([2, 7, 8, 9])