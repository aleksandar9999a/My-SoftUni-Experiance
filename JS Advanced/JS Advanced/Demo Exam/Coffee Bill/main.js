
function isValidInput(product, price) {
    if (product === '' || price < 0) {
        return false;
    }
    return true
}

function createElements(type, content) {
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
    if (Array.isArray(elements)) {
        return elements.map(x => parent.appendChild(x));
    }
    return parent.appendChild(elements)
}
function init() {
    let [product, price] = document.getElementsByTagName('input');

    if (isValidInput(product.value, price.value)) {
        let productTd = createElements('td', product.value);
        let priceTd = createElements('td', price.value);
        let tr = createElements('tr');
        appendElements(tr, [productTd, priceTd]);
        appendElements(document.getElementById('product-list'), tr)
    }
}

document.getElementsByTagName('button')[0].addEventListener('click', init)