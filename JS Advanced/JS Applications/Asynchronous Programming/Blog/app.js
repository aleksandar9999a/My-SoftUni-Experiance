function handleError(x) {
    if (!x.ok) {
        throw new Error(x.statusText);
    }
    return x;
}

function deserializeData(x) { return x.json() }

function fetchData(hError = handleError, dData = deserializeData, url) {
    return fetch(url)
        .then(hError)
        .then(dData)
        .catch(console.error);
}

const BASE_URL = 'https://blog-apps-c12bf.firebaseio.com/';
const makeUrl = x => `${BASE_URL}${x}.json`
const getPosts = fetchData.bind(undefined, undefined, undefined, makeUrl('posts'));
const getPost = id => fetchData(undefined, undefined, makeUrl(`posts/${id}`));
const getComments = fetchData.bind(undefined, undefined, undefined, makeUrl('comments'));


function attachEvents() {

}

attachEvents();