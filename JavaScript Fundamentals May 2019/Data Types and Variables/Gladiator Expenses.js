function solve(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetCounter = 0;
    let swordCounter = 0;
    let shieldCounter = 0;
    let armorCounter = 0;

    for (let index = 1; index <= lostFightsCount; index++) {
        let isSwordBroken = false;
        let isHelmetBroken = false;

        if(index % 2 == 0){
            helmetCounter++;
            isHelmetBroken = true;
        }
        
        if (index % 3 == 0) {
            swordCounter++;
            isSwordBroken = true;
        }

        if (isSwordBroken && isHelmetBroken) {
            shieldCounter++;
            if (shieldCounter % 2 == 0) {
                armorCounter++;
            }
        }
    }

    let fullPrice = helmetCounter * helmetPrice + swordCounter * swordPrice + shieldCounter * shieldPrice + armorCounter * armorPrice;
    console.log(`Gladiator expenses: ${fullPrice.toFixed(2)} aureus`);
}
solve(23, 12.50, 21.50, 40, 200)