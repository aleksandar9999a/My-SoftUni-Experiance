function rotateArray (myArr) {
    let step = Number(myArr.pop());
    let myArrToString = ``;
    
    for (let i = myArr.length - 1; i >= 0; i--) {
        myArrToString += myArr[i] + ` `;
    }

    let newArr = myArrToString.split(" ");
    newArr.pop();

    let myRotatedElements = ``;

    if (newArr.length < step){
        for (let i = step - 1; i < newArr.length; i += step) {
            myRotatedElements+= newArr[i] + ` `;
            myRotatedElements += newArr[i - 1] + ` `;
        }
    }
    console.log(newArr);
}
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])