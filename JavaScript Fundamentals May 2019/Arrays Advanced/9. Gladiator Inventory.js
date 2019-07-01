function gladiatorInventory(inventoryPlusCommands) {
    let inventory = inventoryPlusCommands.shift().split(` `);
    let commands = inventoryPlusCommands;
    
    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i].split(` `);
        let newCommand = currentCommand[0];
        let equipment = currentCommand[1];

        if (newCommand === `Buy`) {
            if (!inventory.includes(equipment)) {
                inventory.push(equipment);
            }
        }
        else if (newCommand === `Trash`) {
            if (inventory.includes(equipment)) {
                let index = inventory.indexOf(equipment);
                inventory.splice(index, 1);
            }
        }
        else if (newCommand === `Repair`) {

            if (inventory.includes(equipment)) {
                let index = inventory.indexOf(equipment);
                inventory.splice(index, 1);
                inventory.push(equipment);
            }
        }
        else if (newCommand === `Upgrade`) {
            let item = equipment.split(`-`);

            if (inventory.includes(item[0])) {
                let index = inventory.indexOf(item[0]);
                let upgrade = `${item[0]}:${item[1]}`;
                index++;
                inventory.splice(index, 0, upgrade);
            }
        }
    }

    console.log(inventory.join(` `));
}
gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel'])