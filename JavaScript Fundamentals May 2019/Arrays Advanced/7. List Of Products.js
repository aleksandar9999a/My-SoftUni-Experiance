function listOfProducts(productArr) {
    return productArr.sort().map((x, i) => `${i + 1}.${x}`).join('\n');
}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);