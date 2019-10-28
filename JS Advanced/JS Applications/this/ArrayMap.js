function arrayMap(arr, func) {
    return arr.reduce((a, b) => [...a, func(b)], []);
}

let nums = [1,2,3,4,5];
console.log(arrayMap(nums,(item)=> item * 2)); 

