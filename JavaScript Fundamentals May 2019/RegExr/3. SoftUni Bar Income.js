function softUniBarIncome(arr) {
    let pattern = /[%](?<name>[A-Z][a-z]+)[%][^|$%.]*?[<](?<product>[A-Za-z]+)[>][^|$%.]*?[|](?<count>\d+)[|][^|$%.]*?(?<price>\d+[.]?\d+)[$]/g;
    let totalSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let currLine = arr[i];
        let validLine = null;

        if (currLine === 'end of shift') {
            break;
        }

        while ((validLine = pattern.exec(currLine)) != null) {
            let name = validLine.groups['name'];
            let product = validLine.groups['product'];
            let count = validLine.groups['count'];
            let price = validLine.groups['price'];

            let sum = Number(count) * Number(price);
            totalSum += sum;
            console.log(`${name}: ${product} - ${sum.toFixed(2)}`);
        }
    }

    console.log(`Total income: ${totalSum.toFixed(2)}`);
}
softUniBarIncome([ '%George%<Croissant>|2|10.3$', '%Peter%<Gum>|1|1.3$', '%Maria%<Cola>|1|2.4$', 'end of shift' ])

softUniBarIncome([ '%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift' ])