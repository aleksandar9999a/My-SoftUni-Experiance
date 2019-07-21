function race(arr) {
    let listOfParticipants = arr.shift().split(`, `);
    let stringPattern = /[A-Za-z]/g;
    let digitPatern = /\d/g
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let currCode = arr[i];
        let validParticipant = null;
        let name = '';
        let distance = 0;

        if (currCode === 'end of race') {
            break;
        }

        while ((validParticipant = stringPattern.exec(currCode)) !== null) {
            name += validParticipant[0];
        }

        while ((validParticipant = digitPatern.exec(currCode)) !== null) {
            distance += Number(validParticipant[0]);
        }

        if (listOfParticipants.includes(name)) {
            if (!map.has(name)) {
                map.set(name, distance);
            }
            else{
                let currDistance = map.get(name);
                let newDistance = currDistance += distance;
                map.set(name, newDistance);
            }
        }
    }
    
    let sorted = [...map].sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);
}
race([ 'George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race' ])