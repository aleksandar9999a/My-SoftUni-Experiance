function schoolGrades(arr) {
    let map = new Map();

    for (const string of arr) {
        let tokens = string.split(` `);
        let student = tokens[0];
        let grades = tokens.splice(1, tokens.length).map(Number);

        if (!map.has(student)) {
            map.set(student, []);
            map.set(student, map.get(student).concat(grades));
        }
        else{
            map.set(student, map.get(student).concat(grades));
        }
    }

    let sorted = [...map].sort((a, b) => avarage(a, b));

    function avarage(a, b) {
        let aSum = 0;
        for (let i = 0; i < a[1].length; i++) {
            aSum += a[1][i];
        }

        let bSum = 0;
        for (let i = 0; i < b[1].length; i++) {
            bSum += b[1][i];
        }

        let aAvarage = aSum / a[1].length;
        let bAvarage = bSum / b[1].length;
        return aAvarage - bAvarage;
    }
    
    for (const [student, grades] of sorted) {
        console.log(`${student}: ${grades}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)