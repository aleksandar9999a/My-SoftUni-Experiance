function processInput(input) {
    let addCommandMap = new Map();
    let playCommandMap = new Map();
    let bandForDisplay = input.pop();
    
    for (const line of input) {
        let command = line.split('; ');

        if (command[0] === 'start of concert') {
            let output = [...playCommandMap.entries()];
            output.sort((a, b) => b[1] - a[1]);

            let totalTime = 0;

            for (let i = 0; i < output.length; i++) {
                let currTime = Number(output[i][1]);
                totalTime += currTime;
            }

            console.log(`Total time: ${totalTime}`);
            output.forEach(e => console.log(e.join(' -> ')));

            for (const [key, value] of addCommandMap) {
                    if (key === bandForDisplay) {
                        console.log(key);
                        let bandMembers = value.split(', ');
                        bandMembers.forEach(e => console.log(`=> ${e}`));
                    }
            }
            
        }
        else if (command[0] === 'Play'){
            if (!playCommandMap.has(command[1])){
                playCommandMap.set(command[1], command[2]);
            }
            else{
                let newTime = Number(playCommandMap.get(command[1])) + Number(command[2]);
                playCommandMap.set(command[1], newTime);
            }
        }
        else if (command[0] === 'Add'){
            if (!addCommandMap.has(command[1])){
                addCommandMap.set(command[1], command[2]);
            }
            else{
                let oldBandMembers = addCommandMap.get(command[1]);
                oldBandMembers = oldBandMembers.split(', ');
                let newBandMembers = command[2].split(', ');
                
                for (let i = 0; i < newBandMembers.length; i++) {
                    if (!oldBandMembers.includes(newBandMembers[i])) {
                        oldBandMembers.push(newBandMembers[i]);
                    }
                }

                addCommandMap.set(command[1], oldBandMembers.join(', '));
            }
        }
    }
}
processInput([ 'Add; The Beatles; John Lennon, Paul McCartney',
'Add; The Beatles; Paul McCartney, George Harrison',
'Add; The Beatles; George Harrison, Ringo Starr',
'Play; The Beatles; 3698',
'Play; The Beatles; 3828',
'start of concert',
'The Beatles' ])