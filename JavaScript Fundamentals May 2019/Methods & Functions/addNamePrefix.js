function addNamePrefix(name, gender) {
    if (gender == `male`){
        console.log(`Mr. ${name}`)
    }
    else if (gender == `female`) {
        console.log(`Mrs. ${name}`)
    }
    else{
        console.log(name)
    }
}

addNamePrefix(`Pesho`, `male`);
addNamePrefix(`Meri`, `female`)