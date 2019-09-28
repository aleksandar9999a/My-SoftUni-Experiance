function evenPositionElement(arr) {
    return arr.filter((x, i) => i % 2 === 0).join(' ');
}

console.log(evenPositionElement([1, 2, 3]));
