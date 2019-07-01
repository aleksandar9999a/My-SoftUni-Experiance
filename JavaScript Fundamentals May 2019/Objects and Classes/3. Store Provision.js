function storeProvision(currStock, orderedProducts) {
    let product = {};

    for (let i = 0; i < currStock.length; i += 2) {
        let prodName = currStock[i];
        let prodQuantity = Number(currStock[i + 1]);
        
        product[prodName] = prodQuantity;
    }

    for (let i = 0; i < orderedProducts.length; i +=2) {
        let prodName = orderedProducts[i];
        let prodQuantity = Number(orderedProducts[i + 1]);
        
        if (product.hasOwnProperty(prodName)) {
            product[prodName] += prodQuantity;
        }
        else{
            product[prodName] = prodQuantity;
        }
    }

    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            
            
        }
    }
    console.log(product);
    
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )