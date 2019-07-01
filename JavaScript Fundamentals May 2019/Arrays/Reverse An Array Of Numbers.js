function reverseAnArrayOfNumbers(numberOfElementsForNewArr, firstArr) {
    let secondArr = ``;

    for (let i = numberOfElementsForNewArr - 1; i >= 0; i--) {
        secondArr += firstArr[i] + ` `;
        
    }

    console.log(secondArr);
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])