function convertJSON(firstProp, secondProp, thirdProp) {
    let person = {
        name: firstProp,
        lastName: secondProp,
        hairColor: thirdProp
    };

    console.log(JSON.stringify(person));
}
convertJSON('George',
'Jones',
'Brown'
)