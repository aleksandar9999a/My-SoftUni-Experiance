function commonElements (firstArr, secondArr) {
    let elements = [];

    for (let i = 0; i < firstArr.length; i++) {
        let firstArrElements = firstArr[i];
        for (let j = 0; j < secondArr.length; j++) {
            let secondArrElements = secondArr[j];

            if (firstArrElements == secondArrElements && firstArrElements === secondArrElements) {
                elements.push(firstArrElements);
            }  
        }  
    }

    for (let i = 0; i < elements.length; i++) {
        console.log(elements[i]);
    }
}
commonElements(["S", "o", "f", "t", "U", "n", "i", " "],
["s", "o", "c", "i", "a", "l"])