function easterGifts(commandsArr) {
    let myGifts = commandsArr.shift().split(` `);

    for (let i = 0; i < commandsArr.length; i++) {
        let currentCommand = commandsArr[i].split(` `);
        
        if (currentCommand[0] === `No Money`) {
            break;
        }
        else if (currentCommand[0] === `OutOfStock`) {
            while (myGifts.includes(currentCommand[1])) {
                let index = myGifts.indexOf(currentCommand[1]);
                myGifts[index] = `None`
            }
        }
        else if (currentCommand[0] === `Required`) {
            if (currentCommand[2] >= 0 && currentCommand[2] < myGifts.length) {
                myGifts.splice(currentCommand[2], 1, currentCommand[1]);
            }
        }
        else if (currentCommand[0] === `JustInCase`) {
            myGifts[myGifts.length - 1] = currentCommand[1];
        }
    }

    while (myGifts.includes(`None`)) {
        let index = myGifts.indexOf(`None`);
        myGifts.splice(index, 1);
    }

    console.log(myGifts.join(` `));
}
easterGifts([ 'Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes',
'OutOfStock Eggs',
'Required Spoon 2',
'JustInCase ChocolateEgg',
'No Money' ])