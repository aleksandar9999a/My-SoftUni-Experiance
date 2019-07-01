function solve(startingYield) {
    let dayCounter = 0;
    let spice = startingYield;
    let miningCrewSpice = spice;
    let totalSpice = 0;
     
    while (spice >= 100) {
        totalSpice += miningCrewSpice - 26;
        spice -= 10;
        miningCrewSpice = spice;

        dayCounter++;
    }

    if (startingYield >= 100) {
        totalSpice -=26;
    }
    console.log(dayCounter);
    console.log(totalSpice);
    
}
solve(111)