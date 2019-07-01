function distanceCalculator(distanceArr) {
    distanceArr = distanceArr.map(Number);

    let steps = distanceArr.shift();
    let stepsWidth = distanceArr.shift();
    let myDistance = distanceArr.shift();

    let whatIsMyNewDistance = 0;

    for (let currStep = 1; currStep <= steps; currStep++) {
        if (currStep % 5 === 0) {
            whatIsMyNewDistance += stepsWidth * 0.7;
        }
        else{
            whatIsMyNewDistance += stepsWidth;
        }
    }

    let newDistanceInMeters = whatIsMyNewDistance / 100;
    let percentage = (newDistanceInMeters / myDistance) * 100;

    console.log(`You travelled ${percentage.toFixed(2)}% of the distance!`);
}
distanceCalculator([ '100', '2', '1' ]);
distanceCalculator([ '5000', '7.5', '500' ])