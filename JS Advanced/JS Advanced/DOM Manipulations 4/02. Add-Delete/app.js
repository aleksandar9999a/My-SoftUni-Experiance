const ctaClickHandler = (output, elementCreator, input) => addItem(output, elementCreator, input.value);
const addToHTML = (parent, child) => parent.appendChild(child);
const removeFromHTMLByIndex = (parent, index) => parent.removeChild(parent.children[index]);
const findChildIndexByRef = (children, child) => Array.prototype.findIndex.call(children, x => x === child);
const removeItem = (output, elementLocator, element) => output(elementLocator(element));

function createElement(type, content) {
    let e = document.createElement(type);
    if (typeof content === "string") {
        e.innerHTML = content;
    }
    if (typeof content === "object") {
        e.appendChild(content);
    }
    return e;
}

function listClickHandler(list, e) {
    if (e.target.nodeName === "A") {
        return removeItem(
            removeFromHTMLByIndex.bind(undefined, list),
            findChildIndexByRef.bind(undefined, list.children),
            e.target.parentNode
        )
    }
    return;
}

function addItem(output, elementCreator, value) {
    if (value !== "") {
        return output(elementCreator(value))
    }
    return;
}
function main() {
    const cta = document.getElementById("addCTA");
    const list = document.getElementById("items");
    const input = document.getElementById("newItemText");
    if (cta === null || items === null || input === null) {
        throw new Error("Missing dom elements");
    }

    const clickHandlers = {
        CTAadd: ctaClickHandler.bind(undefined,
            addToHTML.bind(undefined, list),
            value => {
                let li = createElement("li");
                let a = createElement("a");
                a.setAttribute("href", "javascript:;");
                a.setAttribute("data-action", "CTAdelete");
                a.appendChild(document.createTextNode(`[Delete]`));
                li.appendChild(document.createTextNode(`${value} `));
                li.appendChild(a);
                return li;
            },
            input
        ),
        CTAdelete: listClickHandler.bind(undefined, list),
    }

    document.body.addEventListener("click", function (e) {
        if (typeof clickHandlers[e.target.dataset.action] === "function") {
            clickHandlers[e.target.dataset.action](e);
        }
    });
}

document.addEventListener("DOMContentLoaded", main);
