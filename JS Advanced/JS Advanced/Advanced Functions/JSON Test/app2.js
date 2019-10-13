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

    render(){
        const e = DomElement.domFactory(this._tag);
        e.innerHTML = this._content;
        return e;
    }
}

class DomP extends DomElement{
    constructor(content){
        super("p", content);
    }
}

class Main {
    handleEvent(e){
        let keys = Object.keys(MOCK[0]);
        let html = "";

        DomElement.domFactory = document.createElement.bind(document);

        html += "<table>";
        html += "<tr>";
        html += keys.map(x => `<th>${x}</th>`).join('');
        html += "</tr>";
        html +="</table>";

        document.all.app.appendChild(new DomP('test').render());
        
    }
}

document.addEventListener("DOMContentLoaded", new Main())