function addOrSubtract(numbersArray) {
    let number = 0;
    let newArrayFromOld = [];
    let oldSum = 0;
    let newSum = 0;

    for (let i = 0; i < numbersArray.length; i++) {
        number = Number(numbersArray[i]);
        oldSum += number;

        if (number % 2 == 0) {
            number += i;
            newArrayFromOld.push(number);
        }
        else{
            number -= i;
            newArrayFromOld.push(number);
        }  
        newSum += number;
    }

    console.log(newArrayFromOld);
    console.log(oldSum);
    console.log(newSum);
}
addOrSubtract([5, 15, 23, 56, 35])