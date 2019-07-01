function contactList(commandArr) {
    let contacts = commandArr.shift().split(` `);

    for (let i = 0; i < commandArr.length; i++) {
        let currentCommand = commandArr[i].split(` `);
        
        if (currentCommand[0] === `Add`) {
            if (contacts.includes(currentCommand[1])) {
                if (contacts[currentCommand[2]] != undefined) {
                    contacts.splice(currentCommand[2], 0, currentCommand[1]);
                }
            }
            else{
                contacts.push(currentCommand[1]);
            }
        }
        else if (currentCommand[0] === `Remove`) {
            if (contacts[currentCommand[1]] != undefined) {
                contacts.splice(currentCommand[1], 1)
            }
        }
        else if (currentCommand[0] === `Export`) {
            let endingIndex = Number(currentCommand[1]) + Number(currentCommand[2]);
            if (endingIndex < contacts.length) {
                let exportedContacts = [];
                
                for (let x = currentCommand[1]; x < endingIndex; x++) {
                    exportedContacts.push(contacts[x]);
                }

                console.log(exportedContacts.join(` `));
            }
            else{
                let exportedContacts = [];
                
                for (let x = currentCommand[1]; x < contacts.length; x++) {
                    exportedContacts.push(contacts[x]);
                }

                console.log(exportedContacts.join(` `));
            }
        }
        else if (currentCommand[0] === `Print`) {
            if (currentCommand[1] === `Normal`) {
                console.log(`Contacts: ${contacts.join(` `)}`);
            }
            else if (currentCommand[1] === `Reversed`){
                console.log(`Contacts: ${contacts.reverse().join(` `)}`);
            }
        }
    }
}
//contactList([ 'Alisson Bellamy Candace Tristan', 'Remove 3', 'Add Bellamy 2', 'Print Normal' ]);
contactList([ 'Zayn Katy Ariana Avril Nick Mikolas',
'Remove 3',
'Add Jacob 0',
'Export 0 3',
'Export 3 8',
'Print Reversed' ])