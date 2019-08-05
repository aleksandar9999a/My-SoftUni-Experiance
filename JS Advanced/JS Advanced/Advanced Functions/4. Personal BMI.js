function personalBMI(pName, pAge, pWeight, pHeight) {
    let pI = {
        age: pAge,
        weight: pWeight,
        height: pHeight
    }

    let person = {
        name: pName,
        personalInfo: pI,
        BMI: Number(calculateBMI(pI).toFixed()),
        status: chechStatus(calculateBMI(pI).toFixed())
    }

    function calculateBMI(personalInfo){
        let myBMI = personalInfo[`weight`]/Math.pow(personalInfo[`height`]/100, 2);
        return myBMI;
    }

    function chechStatus(myBMI){
        if (myBMI < 18.5) {
            return `underweight`;
        }
        else if (myBMI < 25) {
            return `normal`
        }
        else if (myBMI < 30) {
            return `overweight`;
        }
        else if (myBMI >= 30) {
            return `obese`;
        }
    }

    if (person[`status`] === `obese`) {
        person[`recommendation`] = 'admission required';
    }

    return person;
}
personalBMI(`Peter`, 29, 75, 182)
personalBMI(`Honey Boo Boo`, 9, 57, 137)
