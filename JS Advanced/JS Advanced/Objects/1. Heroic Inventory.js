const trimMyStr = str => str.trim();
const createObject = x => {
    let myItemsInArr = [];
    
    if (x.length > 2) {
        myItemsInArr = x[2].split(', ');
    }
    
    return {name: x[0],
            level: Number(x[1]),
            items: myItemsInArr}
}

function heroicInventory(arr) {
    let data = arr
        .map(x => x = x.split('/').map(trimMyStr))
        .map(createObject);

    return JSON.stringify(data);
}

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
));

//console.log(heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']));


