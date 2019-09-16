function squareOfStars(num) {

    if (num == undefined) {
        num = 5;
    }

    for (let i = 0; i < num; i++) {
        let print = '';

        for (let x = 0; x < num; x++) {
            print += '* ';
        }
        
        console.log(print);
    }
}

squareOfStars()