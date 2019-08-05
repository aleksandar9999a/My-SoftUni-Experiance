function sortArray(numberArr, str) {
    if (str === 'asc') {
        return numberArr.sort((a, b) => a - b);
    }
    else if(str === 'desc'){
        return numberArr.sort((a, b) => b - a);
    }
}
sortArray([14, 7, 17, 6, 8], 'asc')