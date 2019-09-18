function greatestCommonDivisor(...params) {
    let maxIndex = Math.min(...params);
    let maxDivisor = 1;

    for (let i = 1; i <= maxIndex; i++) {
        let isDivisor = true;

        params.forEach(num => {
            if (num % i != 0) {
                isDivisor = false;
            }
        });
        
        if (isDivisor) {
            maxDivisor = i;
        }
    }

    return maxDivisor
}
console.log((greatestCommonDivisor(2154, 458)));
