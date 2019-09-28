function smallestTwoNumbers(arr) {
    let newArr = arr.sort((a, b) => a - b);
    return [newArr[0], newArr[1]].join(' ');
}
console.log(smallestTwoNumbers([30, 15, 50, 5]));