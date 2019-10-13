import { MOCK } from "./MOCK_DATA.js";

class DomElement{
    _tag;
    _content;
    static _domFactory;

    constructor(tag, content){
        this._tag = tag;
        this._content = content;
    }

    static get domFactory(){
        return DomElement._domFactory;
    }

    static set domFactory(x){
        DomElement._domFactory = x;
    }

    generateDomElement(){
        return DomElement.domFactory(this._tag);
    }

    render(){
        const elementInstance = this.generateDomElement();

        if (Array.isArray(this._content)) {
            this._content.forEach(
                x => {
                    if (x instanceof DomElement) {
                        elementInstance.appendChild(x.render());
                    }else if(x instanceof HTMLElement) {
                        elementInstance.appendChild(x);
                    }else{
                        elementInstance.innerHTML = x.toString();
                    }
                }
            )
        }else{
            if (this._content instanceof DomElement) {
                elementInstance.appendChild(this._content.render());
            }else if(this._content instanceof HTMLElement) {
                elementInstance.appendChild(this._content);
            }else{
                elementInstance.innerHTML = this._content.toString();
            }
        }
        return elementInstance;
    }
}

class DomTable extends DomElement{
    constructor(content){
        super("table", content);
    }
}
class DomThead extends DomElement{
    constructor(content){
        super("thead", content);
    }
}
class DomTbody extends DomElement{
    constructor(content){
        super("tbody", content);
    }
}
class DomTr extends DomElement{
    constructor(content){
        super("tr", content);
    }
}
class DomTd extends DomElement{
    constructor(content){
        super("td", content);
    }
}
class DomTh extends DomElement{
    constructor(content){
        super("th", content);
    }
}

class GenericFactory {
    _registry = new Map();

    register(key, classRef){
        if (!this._registry.has(key)) {
            this._registry.set(key, classRef);
        }
    }

    create(key, ...params){
        if (!this._registry.has(key)) {
            return null;
        }

        const classRef = this._registry.get(key);
        return new classRef(...params);
    }
}

class Grid {
    keys = [];
    data = [];
    wrapper;
    elements;
    constructor(data, elements, wrapper){
        this.data = data;
        this.wrapper = wrapper;
        this.elements = elements;
        this.keys = Object.keys(this.data[0]);
    }

    render(){
        return this.wrapper.appendChild(
            this.elements.create(
                "table", this.elements.create(
                    "thead", this.elements.create(
                        "tr", this.keys.map(x => this.elements.create("th", x))
                    )
                )
            ).render()
        )
    }
}

class Main {
    handleEvent(e){
        DomElement.domFactory = document.createElement.bind(document);
        const DomElementFactory = new GenericFactory();
        DomElementFactory.register("table", DomTable);
        DomElementFactory.register("thead", DomThead);
        DomElementFactory.register("tr", DomTr);
        DomElementFactory.register("th", DomTd);

        console.log(
            new Grid(
                MOCK.slice(0, 10), 
                DomElementFactory,
                document.all.app
            ).render()
        );
    }
}

document.addEventListener("DOMContentLoaded", new Main())