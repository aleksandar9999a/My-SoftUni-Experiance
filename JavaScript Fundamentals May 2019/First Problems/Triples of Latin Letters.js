function solve(number) {
    for (let firstDigit = 0; firstDigit < number; firstDigit++) {
        for (let secondDigit = 0; secondDigit < number; secondDigit++) {
            for (let thirdDigit = 0; thirdDigit < number; thirdDigit++) {
                let myKey = String.fromCharCode(firstDigit + 97) + String.fromCharCode(secondDigit + 97) +String.fromCharCode(thirdDigit + 97);
                console.log(myKey)
            }
        }
    }
}
solve(3)