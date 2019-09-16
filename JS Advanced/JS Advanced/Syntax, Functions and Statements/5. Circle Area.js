function circleArea(num) {
    if (typeof num == 'number') {
        let result = num * num * Math.PI
        console.log(result.toFixed(2));
    }
    else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof num}.`);
    }
}
circleArea(5)