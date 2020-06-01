function printNElement (elements) {
    const steps = elements[elements.length - 1];
    const arr = elements.slice(0, elements.length - 1);
    
    return arr.filter((x, i) => i % steps === 0).join(' ');
}
printNElement(['1', '2', '3', '4', '5', '6'])