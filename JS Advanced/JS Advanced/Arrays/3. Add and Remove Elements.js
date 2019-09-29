function solve(arr) {
    let num = 1;
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'add') {
            result.push(num);
        }else{
            result.pop();
        }
        num++;
    }

    return result.length === 0 ? 'Empty' : result.join('\n');
}

console.log(
    solve(['add', 
    'add', 
    'remove', 
    'add', 
    'add']
    )
);
