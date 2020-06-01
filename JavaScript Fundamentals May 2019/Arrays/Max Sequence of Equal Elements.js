function maxSequenceOfEqualElements(arrFromElements) {
    let elementCounter = 0;
    let maxCount = 0;
    let element = 0;

    for (let i = 0; i < arrFromElements.length; i++) {
        let num = arrFromElements[i];

        if (num == arrFromElements[i - 1]) {
            elementCounter++;
        }
        else {
            if (elementCounter > maxCount) {
                maxCount = elementCounter;
                element = arrFromElements[i - 1];
            }

            elementCounter = 1;
        }
    }

    console.log(`${element} `.repeat(maxCount));
}
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3])