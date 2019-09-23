function storeCatalogue(arr) {
    let data = {};

    arr.map(x => x.split(' : '))
        .map(x => {
            [name, coins] = x
            if (!data.hasOwnProperty(name[0])) {
                data[name[0]] = [];
            }

            data[name[0]].push({
                item: name,
                price: coins
            });
        });

    let sortedArr = Object.entries(data).sort((a, b) => a[0].localeCompare(b[0]));
    
    sortedArr.forEach(([section, items]) => {
        console.log(section);
        let sortedItems = items.sort((a, b) => a.item.localeCompare(b.item));
        sortedItems.forEach(e => {
            console.log(`  ${e.item}: ${e.price}`);
        });
    });
}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)