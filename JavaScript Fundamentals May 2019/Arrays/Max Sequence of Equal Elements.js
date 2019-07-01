function maxSequenceOfEqualElements(arrFromElements) {
    let elementCounter = 0;
    let maxCount = 0;
    let element = 0;
    let result = ``;

    for (let i = 0; i <= arrFromElements.length; i++) {
        let num = Number(arrFromElements[i]);

        if (num == arrFromElements[i - 1]) {
            elementCounter++;
        }
        else if (num != arrFromElements[i - 1]) {

            if (elementCounter > maxCount) {
                maxCount = elementCounter;
                element = arrFromElements[i - 1];
            }
            
            elementCounter = 1;
        }
    }

    for (let x = 0; x < maxCount; x++) {
        result += element + ` `;
        
    }

    console.log(result);
}
maxSequenceOfEqualElements(["1 1 1 2 3 1 3 3"])