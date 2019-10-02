const printFormatterByType = x => `${typeof x}: ${x}`;
const printFormatterNumber = x => `${x[0]} = ${x[1]}`;
const ByDescendingOrder = (a, b) => b[1] - a[1];

function argumentInfo(...args) {
    let typeCounter = {};
    args.map(e => typeCounter[typeof e] ? typeCounter[typeof e]++ : typeCounter[typeof e] = 1);
    let arrByTypeCounts = Object.entries(typeCounter).sort(ByDescendingOrder).map(printFormatterNumber);

    return args.map(printFormatterByType).concat(arrByTypeCounts).join('\n');
}
console.log(argumentInfo('cat', 42, function () { console.log('Hello world!'); }));

