function listOfProducts(productArr) {
    productArr.sort();

    for (let i = 0; i < productArr.length; i++) {
        console.log(`${i + 1}.${productArr[i]}`);
    }
}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);