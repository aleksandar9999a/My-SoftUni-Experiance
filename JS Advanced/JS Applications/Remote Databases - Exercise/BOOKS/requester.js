const user = 'Ivan';
const pass = '0000';

const BASE_URL = 'https://baas.kinvey.com';
const key = 'kid_Bk183FRoS';
const secret = 'f132f0d2772b44939c2dc158bbf016e5';

function handleError(x) {
    if (!x.ok) {
        throw new Error(x.statusText);
    }

    return x;
}

function desterializeData(x) {
    return x.json();
}

const requester = {
    makeHeaders: function (method, data, body, username = user, password = pass) {
        const headers = {
            method,
            headers: {
                'Authorization': `Basic ${btoa(`${username}:${password}`)}`,
                'Content-Type': 'application/json'
            },
            body
        }

        if (method === 'POST' || method === 'PUT') {
            headers.body = JSON.stringify(data);
        }

        return headers;
    },

    fetchData: function (kinveyModule, endpoint, headers, id = '', baseUrl = BASE_URL, appKey = key, hError = handleError, dData = desterializeData) {
        const url = `${baseUrl}/${kinveyModule}/${appKey}/${endpoint}/${id}`;
        return fetch(url, headers)
            .then(hError)
            .then(dData);
    },

    get: function (kinveyModule, endpoint, baseUrl, appKey, hError, dData) {
        const headers = this.makeHeaders('GET');
        return this.fetchData(kinveyModule, endpoint, headers, baseUrl, appKey, hError, dData);
    },

    post: function (kinveyModule, endpoint, data, body, baseUrl, appKey, hError, dData) {
        const headers = this.makeHeaders('POST', data, body);
        return this.fetchData(kinveyModule, endpoint, headers, baseUrl, appKey, hError, dData)
    },

    put: function (kinveyModule, endpoint, data, baseUrl, appKey, hError, dData) {
        const headers = this.makeHeaders('PUT', data);
        return this.fetchData(kinveyModule, endpoint, headers, baseUrl, appKey, hError, dData);
    },

    del: function (kinveyModule, endpoint, id, baseUrl, appKey, hError, dData) {
        const headers = this.makeHeaders('DELETE');
        return this.fetchData(kinveyModule, endpoint, headers, id, baseUrl, appKey, hError, dData);
    }
}

export default requester;