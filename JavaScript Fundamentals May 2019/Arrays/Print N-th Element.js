function printNElement (elements) {
    let step = Number(elements.pop());
    let elementsForPrint = ``;

    for (let i = 0; i < elements.length; i += step) {
        elementsForPrint += elements[i] + ` `;
    }

    console.log(elementsForPrint);
}
printNElement(['1', '2', '3', '4', '5', '6'])