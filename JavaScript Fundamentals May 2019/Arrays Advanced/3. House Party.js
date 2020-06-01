function houseParty(arr) {
    return arr.reduce((acc, x) => {
        const data = x.split(' ');
        const indexOfName = acc.indexOf(data[0]);
        if (data.includes('not')) {
            if (indexOfName >= 0) {
                acc = [...acc.slice(0, indexOfName), ...acc.slice(indexOfName + 1)];
            } else {
                console.log(`${data[0]} is not in the list!`);
            }
        } else {
            if (indexOfName >= 0) {
                console.log(`${data[0]} is already in the list!`);
            } else {
                acc.push(data[0]);
            }
        }
        
        return acc;
    }, []).join('\n')
}

console.log(houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']));
