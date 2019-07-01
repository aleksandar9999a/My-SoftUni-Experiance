function solve(ages) {
    if (ages <=2){
        console.log("baby");
    }
    else if (ages <= 13){
        console.log("child");
    }
    else if (ages <= 19){
        console.log("teenager");
    }
    else if (ages <= 65){
        console.log("adult");
    }
    else{
        console.log("elder");
    }
}
solve(5)