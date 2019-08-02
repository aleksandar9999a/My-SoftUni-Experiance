function starEnigma(input) {
    let messagesCount = input.shift();
    let attackedPlanetsArr = [];
    let destroyedPlanetsArr = [];
    processInput(input, messagesCount);
    printingPlanets(attackedPlanetsArr, destroyedPlanetsArr);
    

    function processInput(input, messagesCount) {
        for (let i = 0; i < messagesCount; i++) {
            let currMessage = input[i];
            let starCounts = starCount(currMessage)
            let encryptedMessage = encryption(currMessage, starCounts);
            let pattern = /.*@(?<planetName>[A-Za-z]+)[^@\-!:>]*:(?<planetPopulation>\d+)[^@\-!:>]*!(?<atackOrDestruction>[AD])![^@\-!:>]*->(?<soldierCount>[\d]+)/g;
            let validMessage = null;
    
            while ((validMessage = pattern.exec(encryptedMessage)) !== null) {
                validMessage.shift();
                let name = validMessage[0];
                let aOrD = validMessage[2];
    
                if (aOrD === 'A') {
                    attackedPlanetsArr.push(name);
                }
                else if(aOrD === 'D'){
                    destroyedPlanetsArr.push(name);
                }
            }
        }
    }
    
    function printingPlanets(attackedPlanetsArr, destroyedPlanetsArr) {
        console.log(`Attacked planets: ${attackedPlanetsArr.length}`);
        if (attackedPlanetsArr.length > 0) {
            attackedPlanetsArr.sort((a, b) => a.localeCompare(b));
            attackedPlanetsArr.forEach(e => console.log(`-> ${e}`));
        }
        
        console.log(`Destroyed planets: ${destroyedPlanetsArr.length}`);
        if (destroyedPlanetsArr.length > 0) {
            destroyedPlanetsArr.sort((a, b) => a.localeCompare(b));
            destroyedPlanetsArr.forEach(e => console.log(`-> ${e}`));
        }
    }
    
    function starCount(message) {
        let count = 0;
        let pattern = /[starSTAR]/g;
        let validMessage = null;
    
        while ((validMessage = pattern.exec(message)) !== null) {
            count++;
        }
    
        return count;
    }
    
    function encryption(currMessage, starCounts) {
        let realMessage = '';
    
        for (let char of currMessage) {
            let charIndex = char.charCodeAt(0) - starCounts;
            realMessage += String.fromCharCode(charIndex);
        }
    
        return realMessage;
    }
}

starEnigma([ '2',
'STCDoghudd4=63333$D$0A53333',
'EHfsytsnhf?8555&I&2C9555SR' ])