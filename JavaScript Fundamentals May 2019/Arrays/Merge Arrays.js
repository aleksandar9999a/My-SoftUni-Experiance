function mergeArrays(firstArr, secondArr) {
    let thirdArr = [];
    let number = ``;

    for (let i = 0; i < firstArr.length; i++) {
        if (i % 2 == 0) {
            number = Number(firstArr[i]) + Number(secondArr[i]);
            thirdArr.push(number);
        }
        else{
            number = firstArr[i] + secondArr[i];
            thirdArr.push(number);
        }
    }

    console.log(thirdArr.join(' - '));
}
mergeArrays(["5", "15", "23", "56", "35"],
["17", "22", "87", "36", "11"])