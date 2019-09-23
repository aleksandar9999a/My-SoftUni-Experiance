function cappyJuice(arr) {
    const trimMyStr = str => str.trim();
    
    let myCappys = {};
    let printObj = {};

    arr
        .map(x => x = x.split('=>').map(trimMyStr))
        .map(x => {
            if (!myCappys.hasOwnProperty(x[0])) {
                myCappys[x[0]] = 0;
            }
            myCappys[x[0]] += Number(x[1]);

            if (myCappys[x[0]] >= 1000) {
                printObj[x[0]] = myCappys[x[0]];
            }
        });

    for (let key in printObj) {
        if (printObj.hasOwnProperty(key)) {
            let quantity = (printObj[key] / 1000);
            console.log(`${key} => ${Math.floor(quantity)}`);
        }
    }
}

cappyJuice(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
)

cappyJuice(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
)
