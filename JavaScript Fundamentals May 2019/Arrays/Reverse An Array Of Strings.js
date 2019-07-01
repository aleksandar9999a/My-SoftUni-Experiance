function reverseAnArrayOfStrings (whatIsYourArr) {
    let secondArr = ``;

    for (let i = whatIsYourArr.length - 1; i >= 0; i--) {
        secondArr += whatIsYourArr[i] + ` `;
        
    }

    console.log(secondArr);
}
reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e'])