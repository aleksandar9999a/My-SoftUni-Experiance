function solve(data) {
    let step = Number(data.pop());
    return data.filter((e, i) => i % step === 0).join('\n')
}
console.log(solve(['5', 
'20', 
'31', 
'4', 
'20', 
'2']
));
