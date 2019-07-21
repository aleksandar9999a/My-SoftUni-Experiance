function furniture(commandsArr) {
    let pattern = /[>]{2}(?<name>[A-Za-z]+)[<]{2}(?<price>\d+[.]?\d+)!(?<quantity>\d+)/g;
    let validCommand = null;
    let sumPrice = 0;
    let arr = [];

    while ((validCommand = pattern.exec(commandsArr)) !== null) {
        let name = validCommand.groups['name'];
        let price = validCommand.groups['price'];
        let quantity = validCommand.groups['quantity'];

        if (name != 'Purchase' && (name != undefined || price != undefined || quantity != undefined)) {
            arr.push(name);
            sumPrice += price * quantity;
        }

        if (name === 'Purchase') {
            break;
        }
    }
    
    console.log(`Bought furniture:`);
    arr.forEach(e => console.log(e));
    console.log(`Total money spend: ${sumPrice.toFixed(2)}`);
}
furniture([ '>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase' ])