function rotateArray (arr) {
    let step = arr[arr.length - 1];
    let newArr = arr.slice(0, arr.length - 1);

    while (newArr.length < step) { step -= newArr.length; }
    return [...newArr.slice(step), ...newArr.slice(0, step)];
}
console.log(rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']));
