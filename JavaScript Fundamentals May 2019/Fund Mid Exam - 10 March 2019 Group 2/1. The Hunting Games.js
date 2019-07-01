function huntingGames(commandArr) {
    commandArr = commandArr.map(Number);
    let daysOfAdventure = commandArr.shift();
    let playersCount = commandArr.shift();
    let groupsEnergy = commandArr.shift();
    let waterPerDayPerMen = commandArr.shift();
    let foodPerDayPerMen = commandArr.shift();

    let totalWater = daysOfAdventure * playersCount * waterPerDayPerMen;
    let totalFood = daysOfAdventure * playersCount * foodPerDayPerMen;

    for (let i = 1; i <= daysOfAdventure; i++) {
        let currentEnergy = commandArr.shift();
        groupsEnergy -= currentEnergy;

        if (groupsEnergy <= 0) {
            break;
        }

        if (i % 2 === 0) {
            groupsEnergy *= 1.05;
            totalWater *= 0.7;
        }

        if (i % 3 === 0) {
            groupsEnergy *= 1.1;
            totalFood -= totalFood / playersCount;
        }
    }
    
    if (groupsEnergy <= 0) {
        console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
    }
    else{
        console.log(`You are ready for the quest. You will be left with - ${groupsEnergy.toFixed(2)} energy!`);
    }
}
huntingGames([ '10',
'7',
'5035.5',
'11.3',
'7.2',
'942.3',
'500.57',
'520.68',
'540.87',
'505.99',
'630.3',
'784.20',
'321.21',
'456.8',
'330',
'' ])