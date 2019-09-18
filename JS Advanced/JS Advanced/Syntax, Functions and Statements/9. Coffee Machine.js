function coffeeMachine(arr) {
    const typesOfCoffee = {
        'caffeine': 0.8,
        'decaf': 0.9
    }

    let totalMoney = 0;

    for (let currentOrder of arr) {
        let price = 0;

        currentOrder = currentOrder.split(', ');

        let coins = Number(currentOrder[0]);
        let typeOfDrink = currentOrder[1];

        if (typeOfDrink === 'coffee') {
            price += typesOfCoffee[currentOrder[2]];
        }
        else{
            price += 0.8;
        }

        if (currentOrder.includes('milk')) {
            price *= 1.1;
            price = Number(price.toFixed(1));
            
        }

        let quantityOfSugar = currentOrder[currentOrder.length - 1];

        if (quantityOfSugar > 0) {
            price += 0.1;
        }

        printResult(price, typeOfDrink, coins);
    }

    function printResult(price, typeOfDrink, coins) {
        if (coins >= price) {
            let change = coins - price;
            totalMoney += price;
            console.log(`You ordered ${typeOfDrink}. Price: $${price.toFixed(2)} Change: $${change.toFixed(2)}`);
        }
        else{
            let moneyNeeded = price - coins;
            console.log(`Not enough money for ${typeOfDrink}. Need $${moneyNeeded.toFixed(2)} more.`);
        }
    }

    console.log(`Income Report: $${totalMoney.toFixed(2)}`);
}

let test1 = [`1.40, tea, milk, 2`];
let test2 = ['8.00, coffee, decaf, 4', '1.00, tea, 2'];

coffeeMachine(test1);