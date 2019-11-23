export default class Monkey {
    constructor({id, name, image, info}) {
        this.id = id;
        this.name = name;
        this.img = image;
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

    showInfo() {
        const myId = this.dataset.id;
        const p = document.getElementById(myId);

        if (p.style.display === 'none') {
            p.style.display = 'block';
        } else {
            p.style.display = 'none';
        }
    }

    render() {
        const div = this.createElement('div', '', 'monkey');
        const h2 = this.createElement('h2', this.name);

        const img = this.createElement('img');
        img.src = this.img;

        const btn = this.createElement('button', 'Info');
        btn.dataset.id = this.id;
        btn.addEventListener('click', this.showInfo)

        const p = this.createElement('p', this.info);
        p.id = this.id;
        p.style.display = 'none';

        this.appendElements(div, [h2, img, btn, p]);
        
        return div;
    }
}