function houseParty(whoWillComeToTheParty) {
    let whoWillCome = [];

    for (let i = 0; i < whoWillComeToTheParty.length; i++) {
        let namePlusWillCame = whoWillComeToTheParty[i].split(` `);
        let name = namePlusWillCame.shift();
        let goingOrNot = namePlusWillCame.join(` `);

        if (goingOrNot == `is not going!`) {
            let isThere = false;
            let nameIndex = 0;

            for (let x = 0; x < whoWillCome.length; x++) {
                if (whoWillCome[x] == name) {
                    isThere = true;
                    nameIndex = x;
                }
            }

            if (isThere) {
                whoWillCome.splice(nameIndex, 1);
            }
            else{
                console.log(`${name} is not in the list!`);
            }
        }
        else if (goingOrNot == `is going!`) {
            let isThere = false;

            for (let x = 0; x < whoWillCome.length; x++) {
                if (whoWillCome[x] == name) {
                    isThere = true;
                }
            }

            if (isThere) {
                console.log(`${name} is already in the list!`);
            }
            else{
                whoWillCome.push(name);
            }
        }
    }

    console.log(whoWillCome.join(`\n`));
}
houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!'])