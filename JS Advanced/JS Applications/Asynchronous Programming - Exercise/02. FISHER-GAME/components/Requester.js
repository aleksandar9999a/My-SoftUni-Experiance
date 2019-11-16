const Requester = {
    myFetcher: function (url, req) {
        return fetch(url, req)
            .then(this.handleError)
            .then(this.deserializeData)
            .catch(console.error);
    },

    handleError: function (x) {
        if (!x.ok) {
            throw new Error(x.statusText);
        }
        return x;
    },

    deserializeData: function (x) {
        return x.json();
    },

    get: function (url) {
        return this.myFetcher(url);
    },

    post: function (url, body) {
        return this.myFetcher(url, { method: 'POST', body: JSON.stringify(body) });
    },

    update: function (url, body) {
        return this.myFetcher(url, { method: 'PUT', body: JSON.stringify(body) });
    },

    delete: function (url) {
        return this.myFetcher(url, { method: 'DELETE' });
    }
}

export default Requester;