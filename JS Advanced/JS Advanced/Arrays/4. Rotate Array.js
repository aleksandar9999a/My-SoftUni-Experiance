function solve(arr) {
    let rotate = arr.pop();

    for (let i = 0; i < rotate; i++) {
        let number = arr.pop();
        arr.unshift(number);
    }

    return arr.join(' ');
}

console.log(
    solve(['Banana', 
    'Orange', 
    'Coconut', 
    'Apple', 
    '15']
    
    )
);
