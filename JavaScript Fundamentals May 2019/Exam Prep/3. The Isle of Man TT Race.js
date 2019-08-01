function theIsleofManTTRace(input) {
    let pattern = /([#$%*&])(?<racer>[A-Za-z]+)\1=(?<length>\d+)!!(?<geohash>.+)/g;

    for (let line of input) {
        let validLine = null;
        let isValid = false;

        while ((validLine = pattern.exec(line)) != null) {
            let racerName = validLine.groups['racer'];
            let lengthOfGeohash = validLine.groups['length'];
            let geohash = validLine.groups['geohash'];

            if (Number(lengthOfGeohash) === geohash.length) {
                let decryptCoordinates = '';
                isValid = true;

                for (let char of geohash) {
                    let charIndex = char.charCodeAt(0) + Number(lengthOfGeohash);
                    decryptCoordinates += String.fromCharCode(charIndex);
                }

                console.log(`Coordinates found! ${racerName} -> ${decryptCoordinates}`);
            }
        }

        if (isValid === false) {
            console.log(`Nothing found!`);
        }
    }
}
theIsleofManTTRace([ '%GiacomoAgostini%=7!!hbqw',
'&GeoffDuke*=6!!vjh]zi',
'JoeyDunlop=10!!lkd,rwazdr',
'Mike??Hailwood=5!![pliu',
'#SteveHislop#=16!!df%TU[Tj(h!!TT[S' ])