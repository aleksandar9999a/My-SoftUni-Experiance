export default class Monkey {
    constructor(id, name, img, info) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.info = info;
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

    appendElements(parent, e) {
        if (Array.isArray(e)) {
            e.map(x => parent.appendChild(x));
        } else {
            parent.appendChild(e);
        }
    }

    render() {
        const div = this.createElement('div', '', 'monkey');
        const h2 = this.createElement('h2', this.name);
        const img = this.createElement('img');
        img.src = this.img;
        const btn = this.createElement('button', 'Info');
        btn.dataset.id = this.id;
        const p = this.createElement('p', this.info);
        p.id = this.id;

        this.appendElements(div, [h2, img, btn, p]);
        return div;
    }
}