function partyProfit(commandsArr) {
    let partySize = Number(commandsArr.shift());
    let days = Number(commandsArr.shift());
    let myMoney = 0;

    for (let currentDay = 1; currentDay <= days; currentDay++) {
        if (currentDay % 10 === 0) {
            partySize -= 2;
        }

        if (currentDay % 15 === 0) {
            partySize += 5;
        }

        myMoney += 50 - partySize * 2;

        if (currentDay % 3 === 0) {
            myMoney -= 3 * partySize;
        }
        
        if (currentDay % 5 === 0) {
            myMoney += 20 * partySize;

            if (currentDay % 3 === 0) {
                myMoney -= 2 * partySize;
            }
        }
    }

    let moneyPerCompanion = Math.floor(myMoney / partySize);

    console.log(`${partySize} companions received ${moneyPerCompanion} coins each.`); 
}
partyProfit([ '15', '30' ])