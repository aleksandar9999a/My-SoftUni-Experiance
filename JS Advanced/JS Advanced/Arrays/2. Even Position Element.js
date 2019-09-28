function evenPositionElement(arr) {
    let arrEvenNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        if ((i + 1) % 2 != 0) {
            arrEvenNumbers.push(arr[i]);
        }
    }

    return arrEvenNumbers.join(' ');
}

console.log(evenPositionElement([1, 2, 3]));
