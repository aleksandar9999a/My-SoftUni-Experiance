function dungeonestDark(inputCommands) {
    var arrFromCommands = inputCommands[0].split(`|`);
    let health = 100;
    let coins = 0;
    let ifWin = true;

    for (let i = 0; i < arrFromCommands.length; i++) {
        let commandsByCommandsInArr = arrFromCommands[i].split(` `);
        let itemOrMonster = commandsByCommandsInArr[0];
        let points = Number(commandsByCommandsInArr[1]);

        if (itemOrMonster == `potion`) {
            health += points;

            if (health > 100) {
                health = 100;
            }

            console.log(`You healed for ${points} hp.`);
            console.log(`Current health: ${health} hp.`);
        }
        else if (itemOrMonster == `chest`) {
            coins += points;

            console.log(`You found ${points} coins.`);
        }
        else{
            health -= points;

            if (health > 0) {
                console.log(`You slayed ${itemOrMonster}.`);
            }
            else{
                console.log(`You died! Killed by ${itemOrMonster}.`);
                console.log(`Best room: ${++i}`);
                ifWin = false;
                break;
            }
        }
    }

    if (ifWin) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
dungeonestDark([`cat 10|potion 30|orc 10|chest 10|snake 25|chest 110`])