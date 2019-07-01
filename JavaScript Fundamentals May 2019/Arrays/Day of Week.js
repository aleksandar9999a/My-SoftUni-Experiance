function dayOfWeek(day) {
    day--;

    let dayToDay = [`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`];

    if (day >=0 && day < 7) {
        console.log(dayToDay[day]);
    }
    else{
        console.log(`Invalid day!`);
    }
}

dayOfWeek(8)