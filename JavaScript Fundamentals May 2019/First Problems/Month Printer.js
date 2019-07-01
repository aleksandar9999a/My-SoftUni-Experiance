function solve(months){
    if (months <= 0 || months > 12){
        console.log("Error!")
    }
    else {
        months--;
        let monthsNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        console.log(monthsNames[months])
    }
}
solve(10)