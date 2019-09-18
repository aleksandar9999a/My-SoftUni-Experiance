function cookingByNumbers(arr) {
    let number = Number(arr.shift());
    let finishArr = [];

    for (let i = 0; i < arr.length; i++) {
        let currCommand = arr[i];
        number = processCommand(currCommand, number);
        finishArr.push(number);
    }

    function processCommand(command, number) {
        if (command == 'chop') {
            return number / 2;
        }
        else if (command == 'dice') {
            return Math.sqrt(number);
        }
        else if (command == 'spice') {
            return number + 1;
        }
        else if (command == 'bake') {
            return number * 3;
        }
        else if (command == 'fillet') {
            return number - number * 0.2;
        }
    }

    console.log(finishArr.join('\n'));
}
//cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop'])
cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])