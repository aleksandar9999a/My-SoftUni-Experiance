function nxNMatrix(myNumber) {
    let matrix = ``;

    for (let x = 0; x < myNumber; x++) {
        matrix += myNumber + ` `;
    }

    for (let x1 = 0; x1 < myNumber; x1++) {
        console.log(matrix);
    }
}
nxNMatrix(2)