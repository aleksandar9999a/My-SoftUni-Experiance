function printTax(type, power, age) {
    let totalCalculation = 0; 

    if (type == `motorcycle`) {
        totalCalculation = motorcycleCalculator(power);
    }
    else if (type == `car`) {
        let taxCalculating = carTaxCalculator(power);
        let coefficientCalculating = coefficientCalculations(age);
        totalCalculation = taxCalculating * coefficientCalculating;
    }

    console.log(`${totalCalculation.toFixed(2)} lv.`);

    function motorcycleCalculator(power) {
        let motorcycleTax = 0;
        if (power > 750) {
            motorcycleTax = 125;
        }
        else if (power > 490) {
            motorcycleTax = 94;
        }
        else if (power > 350) {
            motorcycleTax = 63;
        }
        else if (power > 250) {
            motorcycleTax = 44;
        }
        else if (power > 125) {
            motorcycleTax = 31;
        }
        else{
            motorcycleTax = 15;
        }
    
        return motorcycleTax;
    }
    
    function carTaxCalculator(power) {
    
        let tax = 0;
    
        if (power <= 37) {
            tax = power * 0.43;
        }
        else if ( 37 < power && power <= 55) {
            tax = power * 0.50;
        }
        else if (55 < power && power <= 74) {
            tax = power * 0.68;
        }
        else if (74 < power && power <= 110) {
            tax = power * 1.38;
        }
        else if (power > 110){
            tax = power * 1.54;
        }
    
        return tax;
    }
    
    function coefficientCalculations(age) {
        let coefficient = 0;
        if (age < 5) {
            coefficient = 2.8;
        }
        else if (5 <= age && age < 14) {
            coefficient = 1.5;
        }
        else if (age >= 14) {
            coefficient = 1;
        }
        
        return coefficient;
    }
}

printTax('motorcycle', 450, 10)