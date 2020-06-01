function dungeonestDark(inputCommands) {
    var arrFromCommands = inputCommands[0].split(`|`).map(x => x.split(' ')).map(([command, points]) => [command, Number(points)]);
    let health = 100;
    let coins = 0;
    let isWin = true;

    const commands = {
        potion: function (points) {
            const healed = points > (100 - health) ? 100 - health : points;
            health += points;
            
            if (health > 100) { health = 100; }

            console.log(`You healed for ${healed} hp.`);
            console.log(`Current health: ${health} hp.`);
        },
        chest: function (points) {
            coins += points;
            console.log(`You found ${points} coins.`);
        },
        monster: function (points, monster, i) {
            health -= points;

            if (health > 0) {
                console.log(`You slayed ${monster}.`);
            }
            else {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${++i}`);
                isWin = false;
            }
        }
    }

    arrFromCommands.forEach(([command, points], i) => {
        if (health > 0) {
            if (typeof commands[command] === 'function' ) {
                commands[command](points);
            } else {
                commands.monster(points, command, i);
            }
        }
    })
    if (isWin) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
dungeonestDark([`cat 10|potion 30|orc 10|chest 10|snake 25|chest 110`])