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
class DomUl extends DomElement{
    constructor(content){
        super("ul", content
            .reduce(
                (aggregate, element) => 
                    [...aggregate, Object.values(element).join(" ")], 
                []
            )
            .map(x => new DomLi(x))
        );
    }
}
class DomLi extends DomElement{
    constructor(content){
        super("li", content);
    }
}

class DomImg extends DomElement{
    src;
    constructor(src){
        super("img", "");
        this.src = src;
    }

    render(){
        const img = this.generateDomElement();
        img.src = this.src;

        return img;
    }
}

class DomA extends DomElement{
    href;
    constructor(content, href){
        super('a', content);
        this.href = href;
    }

    render(){
        const a = super.render();
        a.href = this.href;
        return a;
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
    dict;
    wrapper;
    elements;
    headTemplates = {
        first_name: "a"
    };
    cellTemplates = {
        avatar: "img",
        friends: "ul"
    };

    constructor(data, elements, dict, wrapper){
        this.data = data;
        this.wrapper = wrapper;
        this.elements = elements;
        this.dict = dict;
        this.keys = Object.keys(this.data[0]);

        this.wrapper.addEventListener("click", this);
    }

    handleEvent(e){
        console.log(e);

    }

    render(){
        return this.wrapper.appendChild(this.buildTable(this.buildContent()).render());
    }

    buildTable(x){
        return this.elements.create("table", x);
    }
    buildContent(){
        return [
            this.buildHead(),
            this.buildBody()
        ]
    }
    buildHead(){
        return this.elements.create("thead", 
            this.buildTr(
                this.buildHeadCells(this.keys, "th")
            )
        );
    }
    buildBody(){
        return this.elements.create("tbody", 
            this.data.map(row => this.buildTr(
                this.keys.map(cell => this.buildCell(
                    "td", this.buildCellBody(cell, row[cell]
                    )
                ))
            ))
        );
    }
    buildCellBody(type, content){
        return this.elements.create(this.cellTemplates[type], content) || content;
    }
    buildTr(x){
        return this.elements.create("tr", x);
    }
    buildCell(type, x){
        return this.elements.create(type, x);
    }
    buildCells(arr, type){
        return arr.map(x => this.elements.buildCell(type, x));
    }
    buildHeadCell(type, x){
        return this.elements.create(type, x);
    }
    buildHeadCells(arr, type){
        return arr.map(x => this.buildHeadCell(type, this.dict[x] || x));
    }
}

class Main {
    handleEvent(e){
        DomElement.domFactory = document.createElement.bind(document);
        const DomElementFactory = new GenericFactory();
        DomElementFactory.register("table", DomTable);
        DomElementFactory.register("thead", DomThead);
        DomElementFactory.register("tbody", DomTbody);
        DomElementFactory.register("tr", DomTr);
        DomElementFactory.register("th", DomTh);
        DomElementFactory.register("td", DomTd);
        DomElementFactory.register("img", DomImg);
        DomElementFactory.register("ul", DomUl);
        DomElementFactory.register("li", DomLi);
        DomElementFactory.register("a", DomA);

        console.log(
            new Grid(
                MOCK.slice(0, 20), 
                DomElementFactory,
                {
                    id: "Идент.",
                    email: "Мейл",
                    gender: "Пол",
                    ip_address: "IP",
                    first_name: "Име",
                    avatar: "Картинка",
                    friends: "Приятели",
                    last_name: "Фамилия"
                },
                document.all.app
            ).render()
        );
    }
}

document.addEventListener("DOMContentLoaded", new Main())