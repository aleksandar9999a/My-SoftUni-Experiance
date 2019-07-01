function seizeFire(commandsArr) {
    let fireCells = commandsArr[0].split(`#`);
    let water = Number(commandsArr[1]);
    let validCells = [];
    let effort = 0;
    let totalFire = 0;

    fireCells
        .forEach((fireLine) => {
            let [typeOfFire, cellValue] = fireLine.split(` = `);
            cellValue = Number(cellValue);
            let isValid = isFireValid(typeOfFire, cellValue);

            if (isValid && water >= cellValue) {
                water -= cellValue;
                effort += cellValue * 0.25;
                totalFire += cellValue;
                validCells.push(cellValue);
            }
        });

        console.log(`Cells:`);
        validCells.forEach((cell) => {
            console.log(` - ` + cell);
        })
        console.log(`Effort: ${effort.toFixed(2)}`);
        console.log(`Total Fire: ${totalFire}`);
        
    function isFireValid(typeOfFire, value){
        if (typeOfFire === `High` && value >= 81 && value <= 125) {
            return true;
        }

        if (typeOfFire === `Medium` && value >= 51 && value <= 80) {
            return true;
        }

        if (typeOfFire === `Low` && value >= 1 && value <= 50) {
            return true;
        }

        return false;
    }
}
seizeFire()