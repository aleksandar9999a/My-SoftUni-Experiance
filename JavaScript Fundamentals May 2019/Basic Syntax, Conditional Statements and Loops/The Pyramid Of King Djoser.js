function thePyramidOfKingDjoser (base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let rowCounter = 0;
    let lapisCounter = 0;
    let lastRow = 1;

    if (base % 2 === 0) {
        lastRow = 2;
    }

    for (let currentRow = base; currentRow >= lastRow; currentRow -= 2) {
        rowCounter++;
        lapisCounter++;

        if (currentRow != lastRow) {
            stone += (currentRow - 2) * (currentRow - 2) * increment;
        }

        if (lapisCounter == 5 && currentRow != lastRow) {
            lapis += (4 * currentRow - 4) * increment;
            lapisCounter = 0;
        }
        else{
            if (currentRow != lastRow) {
                marble += (4 * currentRow - 4) * increment;
            }
            else{
                gold = lastRow * lastRow * increment;
            }
        }
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(rowCounter * increment)}`);
}
thePyramidOfKingDjoser(23, 0.5)