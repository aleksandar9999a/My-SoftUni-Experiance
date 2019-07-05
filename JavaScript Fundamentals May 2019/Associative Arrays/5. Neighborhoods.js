function neighborhoods(neighborArr) {
    let neighborStreets = neighborArr.shift().split(`, `);
    let map = new Map();

    neighborStreets.forEach(n => map.set(n, []));

    for (const line of neighborArr) {
        let [neighborhood, name] = line.split(` - `);
        if (map.has(neighborhood)) {
            let people = map.get(neighborhood);
            people.push(name);
            map.set(neighborhood, people);
        }
    }

    let output = [...map.entries()];
    output.sort((a, b) => b[1].length - a[1].length);

    for (const [street, people] of output) {
        console.log(`${street}: ${people.length}`);
        for (const men of people) {
            console.log(`--${men}`);
        }
    }
}
neighborhoods(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']
)