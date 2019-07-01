function distinctArray(integerArr) {
    for (let i = 0; i < integerArr.length; i++) {
        for (let x = 0; x < i; x++) {
            if (integerArr[i] === integerArr[x]) {
                integerArr.splice(i, 1);
                i--;
            }
        }
    }

    console.log(integerArr.join(` `));
}
distinctArray([20, 8, 12, 13, 4, 4, 8, 5])