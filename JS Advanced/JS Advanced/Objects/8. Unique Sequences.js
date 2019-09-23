function uniqueSequences(input) {
    let data = input.map(JSON.parse);
    let uniqueArrays = [];

    for (let arr of data) {
        let sum = arr.reduce((prev, curr) => prev + curr, 0);
        let containsSum = uniqueArrays.some(x => x.reduce((a, b) => a + b, 0) === sum);
        
        if (!containsSum) {
            uniqueArrays.push(arr.sort((a, b) => b - a));
        }
    }

    let output = uniqueArrays.sort((a, b) => a.length - b.length).map(arr => `[${arr.join(', ')}]`).join('\n');
    console.log(output);
}
uniqueSequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"]
)