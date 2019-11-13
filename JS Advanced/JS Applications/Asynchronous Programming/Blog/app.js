function handleError(x) {
    if (!x.ok) {
        throw new Error(x.statusText);
    }
    return x;
}

function deserializeData(x) { return x.json() }

function fetchData(handleError = handleError, deserializeData = deserializeData, url) {
    return fetch(url)
        .then(handleError)
        .then(deserializeData)
        .catch(console.error)
}

const BASE_URL = 'https://blog-apps-c12bf.firebaseio.com/.json';

function attachEvents() {

}

attachEvents();