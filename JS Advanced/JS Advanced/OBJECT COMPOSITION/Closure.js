const createCounter = () => {
    let counter = 0;
    
    return () => {
        counter++;
        console.log(counter);
    };
};

let firstCounter = createCounter();
let secondCounter = createCounter();

secondCounter();
firstCounter();
firstCounter();
firstCounter();

secondCounter();
secondCounter();
secondCounter();
secondCounter();

firstCounter();
firstCounter();