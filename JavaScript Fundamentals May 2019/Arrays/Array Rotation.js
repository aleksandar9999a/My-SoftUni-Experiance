function arrayRotation (numberArr, rotation) {
    
    for (let i = 0; i < rotation; i++) {
        let number = numberArr.shift();
        numberArr.push(number);
    }

    console.log(numberArr.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2)