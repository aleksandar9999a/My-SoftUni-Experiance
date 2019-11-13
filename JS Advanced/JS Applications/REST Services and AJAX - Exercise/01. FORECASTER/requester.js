export default class Requester {
    constructor(url, method) {
        this.url = url;
        this.method = method || 'GET';
    }

    handleError = x => {
        if (!x.ok) {
            throw new Error(x.statusText);
        }
        return x;
    }

    deserializeData = x => x.json();

    fetcher = () => {
        return fetch(this.url, {method: this.method})
            .then(this.handleError)
            .then(this.deserializeData)
            .then(console.log)
    }
}
