function fruits(fruit, weigth, price) {
    let weigthKilograms = weigth / 1000;
    let fullPrice = weigthKilograms * price;
    console.log(`I need $${fullPrice.toFixed(2)} to buy ${weigthKilograms.toFixed(2)} kilograms ${fruit}.`);
}