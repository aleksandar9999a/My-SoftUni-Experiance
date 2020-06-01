function firstAndLastKNumbers(arr) {
    const k = arr[0];
    const newArr = arr.slice(1);

    return newArr.reduce((acc, x, i) => {
        if (i < k) { acc[0].push(x); }
        if (i > newArr.length - 1 - k) { acc[1].push(x); }
        return acc;
    }, [[], []]).map(tuple => tuple.join(' ')).join('\n');
}
firstAndLastKNumbers([2, 7, 8, 9]);
