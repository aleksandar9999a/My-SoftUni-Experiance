function solve(arr) {
    const firstCriteria = (a, b) => a.length - b.length;
    const secondCriteria = (a, b) => a.toLowerCase().localeCompare(b.toLowerCase());
    return arr.sort((a, b) => firstCriteria(a, b) || secondCriteria(a, b)).join('\n');
}
console.log(
    solve(['test', 
    'Deny', 
    'omen', 
    'Default']    
    )
);
