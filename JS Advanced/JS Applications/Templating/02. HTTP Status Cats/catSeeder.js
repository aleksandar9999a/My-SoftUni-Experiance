export default class Cat {
    constructor(id, statusCode, statusMessage, imageLocation) {
        this.id = id;
        this.statusCode = statusCode;
        this.statusMessage = statusMessage;
        this.imageLocation = imageLocation;
    }

    createElement(type, content, className) {
        let e = document.createElement(type);

        if (typeof content === "string") {
            e.innerHTML = content;
        }
        if (typeof content === "object") {
            e.appendChild(content);
        }
        if (className !== undefined) {
            e.className = className;
        }

        return e;
    }

    appendElements(parent, e){
        if (Array.isArray(e)) {
            e.map(x => parent.appendChild(x));
        }else{
            parent.appendChild(e);
        }
    }

    render() {
        const li = this.createElement('li');

        const img = this.createElement('img');
        img.src = this.imageLocation;

        const infoDiv = this.createElement('div', '', 'info');
        const btn = this.createElement('button', 'Show status code', 'showBtn');

        const statusDiv = this.createElement('div', '', 'status');
        statusDiv.id = this.id;

        const h4 = this.createElement('h4', `Status Code: ${this.statusCode}`)
        const p = this.createElement('p', this.statusMessage)

        this.appendElements(statusDiv, [h4, p]);
        this.appendElements(infoDiv, [btn, statusDiv]);
        this.appendElements(li, [img, infoDiv]);

        return li;
    }
}