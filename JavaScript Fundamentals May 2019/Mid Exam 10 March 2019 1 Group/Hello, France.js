function helloFrance(itemsAndBudget) {
    let items = itemsAndBudget.shift().split(`|`);
    let budget = Number(itemsAndBudget);
    let profit = 0;
    let newFullPrices = 0;
    let arrFromSellingItems = [];

    for (let i = 0; i < items.length; i++) {
        let currentItem = items[i];
        let typeOfItemAndPrice = currentItem.split(`->`);
        let currentPrice = Number(typeOfItemAndPrice[1]);

        if (budget >= currentPrice) {

            if (typeOfItemAndPrice[0] == `Clothes` && currentPrice <= 50) {
                checkingPrices(budget, profit, newFullPrices, arrFromSellingItems, typeOfItemAndPrice, currentPrice);
            }
            else if (typeOfItemAndPrice[0] == `Shoes` && currentPrice <= 35){
                checkingPrices(budget, profit, newFullPrices, arrFromSellingItems, typeOfItemAndPrice, currentPrice);
            }
            else if (typeOfItemAndPrice[0] == `Accessories` && currentPrice <= 20.50){
                checkingPrices(budget, profit, newFullPrices, arrFromSellingItems, typeOfItemAndPrice, currentPrice);
            }
        }
    }

    if (newFullPrices + budget >= 150) {
        console.log(arrFromSellingItems.join(` `));
        console.log(`Profit: ${profit.toFixed(2)}`);
        console.log(`Hello, France!`);
    }
    else{
        console.log(arrFromSellingItems.join(` `));
        console.log(`Profit: ${profit.toFixed(2)}`);
        console.log(`Time to go.`);
    }
}

function checkingPrices(budget, profit, newFullPrices, arrFromSellingItems, typeOfItemAndPrice, currentPrice) {
    budget -= currentPrice;
    profit += currentPrice * 0.4;
    let profitPriceOfItem = currentPrice + currentPrice * 0.4;
    newFullPrices += profitPriceOfItem;
    arrFromSellingItems.push(profitPriceOfItem.toFixed(2));
}
helloFrance(
[ `Shoes->41.20|Clothes->20.30|Accessories->40|Shoes->15.60|Shoes->33.30|Clothes->48.60`, 90 ])