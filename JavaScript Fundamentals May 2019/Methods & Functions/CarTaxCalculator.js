function printingCarTax(power) {
    carTaxCalculator(power);
}

function carTaxCalculator(power) {
let taxCalculating = 0;

    if (power <= 37) {
        taxCalculating = power * 0.43;
    }
    else if ( 37 < power && power <= 55) {
        taxCalculating = power * 0.50;
    }
    else if (55 < power && power <= 74) {
        taxCalculating = power * 0.68;
    }
    else if (74 < power && power <= 110) {
        taxCalculating = power * 1.38;
    }
    else if (power > 110){
        taxCalculating = power * 1.54;
    }

    console.log(`${taxCalculating.toFixed(2)} lv.`);
}
printingCarTax(45)