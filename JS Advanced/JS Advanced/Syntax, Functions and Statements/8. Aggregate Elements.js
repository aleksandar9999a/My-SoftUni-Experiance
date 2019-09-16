const add = (x, y) => x + y;
const addInverse = (x, y) => x + (1 / y);
const concat = (x, y) => x + y.toString();

function aggregateElements(...params) {
    return [
        params.reduce(add, 0),
        params.reduce(addInverse, 0),
        params.reduce(concat, ''),
    ].join('\n');
}
console.log(aggregateElements(1, 2, 3));
