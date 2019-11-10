function getInfo() {
    const stopDiv = document.getElementById('stopName');
    const list = document.getElementById('buses');
    const stopID = document.getElementById('stopId').value;
    const BASE_URL = `https://judgetests.firebaseio.com/businfo/${stopID}.json`;

    fetch(BASE_URL)
        .then(parseResult)
        .then(showResult.bind(undefined, stopDiv, list))
        .catch(showError.bind(undefined, stopDiv));
}

function parseResult(result) {
    return result.json()
}

function showError(element) {
    element.innerHTML = 'Error';
}

function showResult(stopDiv, list, result) {
    stopDiv.innerHTML = result.name;
    Object.entries(result.buses).map(generateLi).map(addToList.bind(undefined, list));
}

function generateLi(data) {
    return `<li> Bus ${data[0]} arrives in ${data[1]} minutes</li>`;
}

function addToList(list, element) {
    list.innerHTML += element;
}