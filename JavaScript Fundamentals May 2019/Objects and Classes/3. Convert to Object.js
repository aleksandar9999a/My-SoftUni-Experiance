function convertObject(myJSON) {
    Object.entries(JSON.parse(myJSON)).forEach(tuple => console.log(tuple.join(`: `)));
}
convertObject('{"name": "George", "age": 40, "town": "Sofia"}')