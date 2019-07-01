function solve(distance, passengers , priceForOneLitreDiesel){
    let neededFuel = (distance / 100) * 7;
    neededFuel += passengers * 0.100;
    let fullFuelPrice = neededFuel * priceForOneLitreDiesel;
    console.log(`Needed money for that trip is ${fullFuelPrice}lv.`)
}
solve(90, 14, 2.88)