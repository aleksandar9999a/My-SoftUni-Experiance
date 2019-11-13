function handleError(x) {
    if (!x.ok) {
        throw new Error(x.statusText);
    }
    return x;
}

function deserializeData(x) { return x.json() }

function fetchData() {
    return fetch('https://blog-apps-c12bf.firebaseio.com/.json')
        .then(handleError)
        .then(deserializeData)
        .catch(console.error)
}



function attachEvents() {

}

attachEvents();