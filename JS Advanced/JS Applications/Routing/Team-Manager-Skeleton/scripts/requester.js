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
    if (authType === 'Basic') {
        return `Basic ${btoa(`${kinveyAppKey}:${kinveyAppSecret}`)}`
    }
    return `Kinvey ${sessionStorage.getItem('authtoken')}`
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

export function get(kinveyModule, endpoint, authType){
    const header = createHeader('GET', authType);
    return fetchData(kinveyModule, endpoint, header);
}

export function post(kinveyModule, endpoint, authType, data){
    const header = createHeader('POST', authType, data);
    return fetchData(kinveyModule, endpoint, header);
}