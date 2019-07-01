function printCharactersInRange(firstChar, secondChar) {
    let result = checkCharactersInRange(firstChar, secondChar);

    console.log(result);
    
    function checkCharactersInRange(firstChar, secondChar) {
        let charInRange = ``;

        firstChar = firstChar.charCodeAt();
        secondChar = secondChar.charCodeAt();

        if (firstChar < secondChar) {
            for (let i = firstChar + 1; i < secondChar; i++) {
                let numberToString = String.fromCharCode(i);
                charInRange += numberToString + ` `;
            }
        }
        else if (firstChar > secondChar) {
            for (let i = secondChar + 1; i < firstChar; i++) {
                let numberToString = String.fromCharCode(i);
                charInRange += numberToString + ` `;
            }
        }

        return charInRange;
    }
}

printCharactersInRange('C', '#')