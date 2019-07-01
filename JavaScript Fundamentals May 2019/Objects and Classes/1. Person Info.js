function personInfo(fName, lName, number) {
    let person = {
        firstName: fName,
        lastName: lName,
        age: number
    };

    for (let prop in person){
        console.log(`${prop}: ${person[prop]}`);
    }
}
personInfo(`Peter`, `Pan`, 20);