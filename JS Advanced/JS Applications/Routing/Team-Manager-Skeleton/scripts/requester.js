const kinveyBaseUrl = "https://baas.kinvey.com";
const kinveyAppKey = "kid_BJ-OK2DhH";
const kinveyAppSecret = "5a219227be684393b32d9a4fde0459c4";


function handleError(x) {
    if (!x.ok) {
        throw new Error(x.statusText);
    }

    return x;
}

function desterializeData(x) {
    return x.json();
}

function fetchData(kinveyModule, endpoint, header){
    const url = `${kinveyBaseUrl}/${kinveyModule}/${kinveyAppKey}/${endpoint}`;

    return fetch(url, header)
                .then(handleError)
                .then(desterializeData);
}

function makeAuth(authType = 'Basic'){
    return authType === 'Basic' 
                ? `Basic ${btoa(`${kinveyAppKey}:${kinveyAppSecret}`)}`
                : `Kinvey  + ${sessionStorage.getItem('authtoken')}`
}

function createHeader(method, authType, data){
    const headers = {
        method,
        headers: {
            'Authorization': makeAuth(authType),
            'Content-Type': 'application/json'
        }
    }

    if (method === 'POST' || method === 'PUT') {
        headers.body = JSON.stringify(data);
    }

    return headers;
}

function get(kinveyModule, endpoint, authType){
    const header = createHeader('GET', authType);
    return fetchData(kinveyModule, endpoint, header);
}

function post(kinveyModule, endpoint, data, authType){
    const header = createHeader('POST', authType, data);
    return fetchData(kinveyModule, endpoint, header);
}

export default {
    get,
    post
}
//post('user', '', 'Basic', { username: 'ivan', password: '0000' }).then(console.log)