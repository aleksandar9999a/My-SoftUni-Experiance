function negativeOrPositiveNumbers(arr) {
    return arr.reduce((acc, x) => {
        if (x >= 0) { 
            acc.push(x); 
        } else {
            acc.unshift(x);
        }
        return acc;
    }, []).join('\n');
}
negativeOrPositiveNumbers([7, -2, 8, 9]);
