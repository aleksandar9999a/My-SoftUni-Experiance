function gladiatorInventory(inventoryPlusCommands) {
    let inventory = inventoryPlusCommands.slice(0, 1)[0].split(` `);
    let commands = inventoryPlusCommands.slice(1).map(x => x.split(' '));

    const commandsFns = {
        Buy: function (equipment) {
            if (!inventory.includes(equipment)) { inventory.push(equipment); }
        },
        Trash: function (equipment) {
            if (!inventory.includes(equipment)) { return; }
            let index = inventory.indexOf(equipment);
            inventory.splice(index, 1);
        },
        Repair: function (equipment) {
            if (!inventory.includes(equipment)) { return; }
            let index = inventory.indexOf(equipment);
            inventory.splice(index, 1);
            inventory.push(equipment);
        },
        Upgrade: function (equipment) {
            let item = equipment.split(`-`);
            if (!inventory.includes(item[0])) { return; }
            let index = inventory.indexOf(item[0]);
            let upgrade = `${item[0]}:${item[1]}`;
            index++;
            inventory.splice(index, 0, upgrade);
        },
    }

    commands.forEach(([command, equipment]) => {
        if (typeof commandsFns[command] === 'function') {
            commandsFns[command](equipment);
        }
    })

    console.log(inventory.join(` `));
}
gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'])