function storage(items) {
    let map = new Map();

    for (const string of items) {
        let currentItem = string.split(` `);
        let product = currentItem[0];
        let quantity = Number(currentItem[1]);

        if (!map.has(product)) {
            map.set(product, quantity);
        }
        else{
            let currentQuantity = map.get(product);
            let newQuantity = currentQuantity += quantity;
            map.set(product, newQuantity);
        }
    }

    for (const [product, quantity] of map) {
        console.log(`${product} -> ${quantity}`);
    }
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)