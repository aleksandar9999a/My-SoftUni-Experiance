function phoneBook(arr) {
    let bookWithNumber = {};

    for (let i = 0; i < arr.length; i++) {
        let currentPerson = arr[i].split(` `);
        bookWithNumber[currentPerson[0]] = currentPerson[1];
        
    }

    for (let person in bookWithNumber) {
        console.log(person + ` -> ` + bookWithNumber[person]);
        
    }
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)