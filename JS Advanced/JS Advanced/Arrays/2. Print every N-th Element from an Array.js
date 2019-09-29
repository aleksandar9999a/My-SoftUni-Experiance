function solve(data) {
    let step = Number(data.pop());
    let arr = [];

    for (let i = 0; i < data.length; i += step) {
        arr.push(data[i]);
    }

    return arr.join('\n');
}
console.log(solve(['5', 
'20', 
'31', 
'4', 
'20', 
'2']
));
