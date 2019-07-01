function solve(number){
    let sum = 0;
    let counter = 0;
    let counter2 = 0;

    while (true){
        counter++;
        if (counter % 2 != 0){
            counter2++;
            console.log(counter);
            sum += counter;
            if (counter2 == number){
                break;
            }
        }
    }
    console.log("Sum: " + sum);
}
solve(5)