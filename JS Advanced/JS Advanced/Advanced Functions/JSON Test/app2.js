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

class Grid {
    keys = [];
    data = [];
    wrapper;
    constructor(data, wrapper){
        this.data = data;
        this.wrapper = wrapper;
        this.keys = Object.keys(this.data[0]);
    }

    render(){
        return this.wrapper.appendChild(
            new DomTable(
                new DomThead(
                    new DomTr(
                        this.keys.map(x => new DomTh(x))
                    )
                )
            ).render()
        )
    }
}

class Main {
    handleEvent(e){
        DomElement.domFactory = document.createElement.bind(document);

        console.log(new Grid(MOCK.slice(0, 10), document.all.app).render());
        
    }
}

document.addEventListener("DOMContentLoaded", new Main())