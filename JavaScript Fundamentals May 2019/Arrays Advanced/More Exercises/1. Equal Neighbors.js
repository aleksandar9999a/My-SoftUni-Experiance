function equalNeighbors(arrOfArr) {
    let counterOfEqualNeighbors = 0;

    for (let x = 0; x < arrOfArr.length - 1; x++) {
        let currentArr = arrOfArr[x];
        let nextArr = arrOfArr[(x + 1)];

        for (let x1 = 0; x1 < currentArr.length; x1++) {
            if (currentArr[x1] == nextArr[x1]) {
                counterOfEqualNeighbors++;
            }
        }
    }

    console.log(counterOfEqualNeighbors);
}
equalNeighbors(
[[2, 2, 5, 7, 4],
[4, 0, 5, 3, 4],
[2, 5, 5, 4, 2]])