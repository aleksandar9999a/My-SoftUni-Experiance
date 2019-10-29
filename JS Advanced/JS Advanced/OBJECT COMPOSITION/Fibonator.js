function getFibonator(){
    let currFibNum = 1;
    let nextNum = 1;

    return () => {
        let result = currFibNum;
        currFibNum = nextNum;
        nextNum = currFibNum + result;
        return result;
    }
}

const fib = getFibonator();

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
