function evenAndOddSubtraction(arr) {
    const res = arr.reduce((acc, x) => {
        if (x % 2 == 0) {
            acc.even += x;
        }
        else {
            acc.odd += x;
        }
        return acc;
    }, { even: 0, odd: 0 });
    return res.even - res.odd;
}
evenAndOddSubtraction([3, 5, 7, 9])