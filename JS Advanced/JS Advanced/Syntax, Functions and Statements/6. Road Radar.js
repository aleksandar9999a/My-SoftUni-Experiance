function roadRadar(arr) {
    let limit = zones(arr[1]);
    let printResult = checkForSpeedLimits(arr[0], limit);

    function zones(zone) {
        if (zone == 'motorway') {
            return 130;
        }
        else if (zone == 'interstate') {
            return 90;
        }
        else if (zone == 'city') {
            return 50;
        }
        else if (zone == 'residential') {
            return 20;
        }
        else{
            return 0;
        }
    }

    function checkForSpeedLimits(mySpeed, yourLimit) {
        if (mySpeed <= yourLimit || yourLimit == 0) {
            return '';
        }
        else if (mySpeed <= yourLimit + 20 ) {
            return 'speeding';
        }
        else if (mySpeed <= yourLimit + 40 ) {
            return 'excessive speeding';
        }
        else {
            return 'reckless driving';
        }
    }

    return printResult;
}
console.log(roadRadar([40, 'педал']));
console.log(roadRadar([40, 'city']));
console.log(roadRadar([21, 'residential']));
console.log(roadRadar([120, 'interstate']));
console.log(roadRadar([200, 'motorway']));