function towns(data) {
    const isNotEmptyString = x => x !== "";
    const trimMyString = x => x.trim();
    const parseIfNumber = x => Number(x) ? Math.floor(Number(x) * 100) / 100 : x;

    function deserializeStringToArrayOfValues(str) {
        return str
            .split('|')
            .filter(isNotEmptyString)
            .map(trimMyString)
            .map(parseIfNumber)
    }

    let keys = deserializeStringToArrayOfValues(data[0]);

    return data
        .slice(1)
        .map(deserializeStringToArrayOfValues)
        .map(x => x.reduce((res, val, i) => {
            res[keys[i]] = val;
            return res;
        }, {}));
}

let test = ['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'];

let test2 = ['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |'];


console.log(towns(test2));
