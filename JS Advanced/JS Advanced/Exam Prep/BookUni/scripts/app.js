function solve() {
    let totalPrice = 0;

    function removeBook() {
        let price = Number(this.innerHTML.match(/\d+\.\d+/gim));
        totalProfit(price);
        this.parentElement.remove();
    }
    
    function generateElement(type, content) {
        let e = document.createElement(type);
        if (typeof content === "string") {
            e.innerHTML = content;
        }
        if (typeof content === "object") {
            e.appendChild(content);
        }
    
        return e;
    }
    
    function appendElements(parent, elements) {
        elements.map(x => parent.appendChild(x));
        return parent;
    }

    function addToOldBooks() {
        let currBook = this.parentElement;
        currBook.getElementsByTagName("button")[1].remove();
        let btn = currBook.getElementsByTagName("button")[0];
        let price = Number(btn.innerHTML.match(/\d+\.\d+/gim)) * 0.85;
        btn.innerHTML = `Buy it only for ${price.toFixed(2)} BGN`;
        document.getElementsByClassName("bookShelf")[0].appendChild(currBook);
    }
    
    function createNewBook(book) {
        let div = generateElement("div");
        div.className = "book";
        let p = generateElement('p', `${book.name} [${book.year}]`);
        let btn = generateElement("button", `Buy it only for ${book.price.toFixed(2)} BGN`)
        btn.addEventListener('click', removeBook);
        let secBtn = generateElement("button", 'Move to old section');
        secBtn.addEventListener('click', addToOldBooks)
    
        let currBook = appendElements(div, [p, btn, secBtn]);
        document.getElementsByClassName("bookShelf")[1].appendChild(currBook);
    }
    
    function createOldBooks(book) {
        let div = generateElement("div");
        div.className = "book";
        let p = generateElement('p', `${book.name} [${book.year}]`);
        let btn = generateElement("button", `Buy it only for ${book.price.toFixed(2)} BGN`)
        btn.addEventListener('click', removeBook);
    
        let currBook = appendElements(div, [p, btn]);
        document.getElementsByClassName("bookShelf")[0].appendChild(currBook);
    }

    function totalProfit(price) {
        totalPrice += price;
        document.getElementsByTagName('h1')[1].innerHTML = `Total Store Profit: ${totalPrice} BGN`;
    }
    
    function getValues(e) {
        let values = document.getElementsByTagName('input');
    
        if (Array.from(values).filter(x => x.value !== "").length === 3) {
            if (values[1].value > 0 && values[2].value > 0) {
                let currBook = {
                    name: values[0].value,
                    year: values[1].value,
                    price: Number(values[2].value)}
            
                if (values[1].value >= 2000) {
                    createNewBook(currBook);
                }else{
                    currBook.price *= 0.85;
                    createOldBooks(currBook)
                }
            }
        }
        
        e.preventDefault()
    }
    document.getElementsByTagName('button')[0].addEventListener('click', getValues);
}