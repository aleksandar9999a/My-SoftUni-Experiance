function passwordValidator(password) {
    let isBetweenSixAndTen = (a) => a.length >= 6 && a.length <= 10;

    function checkLettersAndDigits(password) {
        for (let i = 0; i < password.length; i++) {
            let charNumber = password[i].charCodeAt();
            
            if (((charNumber < 48) || (charNumber > 57 && charNumber < 65) || (charNumber > 90 && charNumber < 96) || (charNumber >122))) {
                return false;
            }
        }

        return true;
    }

    function checkForDigits(password) {
        let digitsCounter = 0;
        let isHaveMoreDigits = (a) => a >= 2;

        for (let i = 0; i < password.length; i++) {
            let charNumber = password[i].charCodeAt();

            if (charNumber > 47 && charNumber < 58) {
                digitsCounter++;
            }
        }

        return isHaveMoreDigits(digitsCounter);
    }

 
    if (isBetweenSixAndTen(password) && checkLettersAndDigits(password) && checkForDigits(password)) {
        console.log(`Password is valid`);
    }
    else {
        if (!isBetweenSixAndTen(password)) {
            console.log(`Password must be between 6 and 10 characters`);
        }

        if (!checkLettersAndDigits(password)) {
            console.log(`Password must consist only of letters and digits`);
        }

        if (!checkForDigits(password)) {
            console.log(`Password must have at least 2 digits`);
        }
    }
}
passwordValidator('logIn');