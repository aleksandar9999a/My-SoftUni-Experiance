function springVacationTrip(commandArr) {
    let day = Number(commandArr.shift());
    let budget = Number(commandArr.shift());
    let peopleCount = Number(commandArr.shift());
    let fuelPerKilometer = Number(commandArr.shift());
    let foodExpensivePerCount = Number(commandArr.shift());
    let roomPriceForNigth = Number(commandArr.shift());
    let expenses = 0;
    let isReached = true;

    if (peopleCount > 10) {
        roomPriceForNigth -= roomPriceForNigth * 0.25;
    }

    expenses = (peopleCount * roomPriceForNigth * day) + (peopleCount * foodExpensivePerCount * day);

    for (let i = 1; i <= day; i++) {
        let currentFuelPrice = Number(commandArr[(i - 1)]) * fuelPerKilometer;
        expenses += currentFuelPrice;

        if (i % 3 === 0 || i % 5 === 0) {
            expenses += expenses * 0.4;
        }

        if (i % 7 === 0) {
            expenses -= expenses / peopleCount;
        }

        if (expenses > budget) {
            isReached = false;
            break;
        }
    }

    if (isReached) {
        let budgetLeft = budget - expenses;
        console.log(`You have reached the destination. You have ${budgetLeft.toFixed(2)}$ budget left.`);
    }
    else{
        let neededMoney = expenses - budget;
        console.log(`Not enough money to continue the trip. You need ${neededMoney.toFixed(2)}$ more.`);
    }
}
springVacationTrip(
    [ '10',
    '20500',
    '11',
    '1.2',
    '8',
    '13',
    '100',
    '150',
    '500',
    '400',
    '600',
    '130',
    '300',
    '350',
    '200',
    '300' ]
)