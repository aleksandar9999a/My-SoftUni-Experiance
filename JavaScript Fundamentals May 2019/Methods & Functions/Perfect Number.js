function perfectNumber(myNumber) {
    let isItMyPerfectNumber = false;
    let sum = 0;
    
    for (let x = 1; x < myNumber; x++) {
        if (myNumber % x == 0) {
            sum += x;
        }
    }
    
    if (sum == myNumber) {
        isItMyPerfectNumber = true;
    }

    if (isItMyPerfectNumber) {
        console.log(`We have a perfect number!`);
    }
    else{
        console.log(`It's not so perfect.`);
    }
}
perfectNumber(6)