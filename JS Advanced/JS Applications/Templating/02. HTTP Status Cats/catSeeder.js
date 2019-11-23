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

    render() {
        const li = this.createElement('li');
        const img = this.createElement('img');
        img.src = this.imageLocation;
        const infoDiv = this.createElement('div', '', 'info');
        const btn = this.createElement('button', 'Show status code', 'showBtn')

        infoDiv.appendChild(btn);

        li.appendChild(img);
        li.appendChild(infoDiv);

        return li;
    }
}