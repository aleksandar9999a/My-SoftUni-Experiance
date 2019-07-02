function phoneBook(arr) {
    let bookWithNumber = {};

    arr.forEach((currentPerson) => {
        currentPerson = currentPerson.split(` `);
        bookWithNumber[currentPerson[0]] = currentPerson[1];
    })

    Object.keys(bookWithNumber).forEach((person) => {
        console.log(person + ` -> ` + bookWithNumber[person]);
    });
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)