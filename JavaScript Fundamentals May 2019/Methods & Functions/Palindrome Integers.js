function palindromeIntegers(palindromeArr) {
    let isReverse = (a, b) => a == b;

    for (let i = 0; i < palindromeArr.length; i++) {
        let currentNumber = palindromeArr[i];
        let reverseNumber = currentNumber.toString().split(``).reverse().join(``);
        
        console.log(isReverse(currentNumber, reverseNumber));
    }
}
palindromeIntegers([123,323,421,121])