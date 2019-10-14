const getQuestion = () => document.getElementsByTagName('textarea')[0].value;
const generateMultipleButtons = (params) => generateElement(params[0], params[1], params[2], params[3], params[4]);
const appendElements = (parent, elements) => elements.map(x => parent.appendChild(x));
const getParent = e => e.parentElement.parentElement;

function getUserName() {
    const name = document.getElementsByTagName('input')[0];
    if (name.value === '') {
        return 'Anonymous';
    }
    return name.value;
}

function generateElement(type, content, attrName, attrValue, func) {
    let e = document.createElement(type);
    if (typeof content === "string") {
        e.innerHTML = content;
    }
    if (typeof content === "object") {
        e.appendChild(content);
    }
    if (attrName !== undefined && attrValue !== undefined) {
        setAttributes(e, attrName, attrValue);
    }
    if (typeof func === "function") {
        e.addEventListener('click', func);
    }
    return e;
}

function setAttributes(element, attrNames, attrValues){
    if (Array.isArray(attrNames) && Array.isArray(attrNames)) {
        attrNames.map((x, i) => element.setAttribute(x, attrValues[i]));
    }else{
        element.setAttribute(attrNames, attrValues);
    }
    return element;
}

function removeElement() {
    getParent(this).remove();
}

function replyToTheQuestion() {
    const currDiv = getParent(this);
    const replySection = currDiv.getElementsByClassName("replySection")[0];
    const btn = currDiv.getElementsByTagName("button")[0];

    if (replySection.style.display === "block") {
        replySection.style.display = "none";
        btn.innerHTML = "Reply";
    } else {
        replySection.style.display = "block";
        btn.innerHTML = "Back";
    }
}

function moveToOpenQuestions() {
    const currDiv = getParent(this);
    const openQuestion = document.getElementById('openQuestions');

    const movedQuestion = createNewQuest(
        currDiv.getElementsByTagName('span')[0].innerHTML,
        currDiv.getElementsByTagName('p')[0].innerHTML,
        ['div', undefined, "class", "openQuestion"],
        ['div', undefined, "class", "actions"],
        [['button', 'Reply', "class", "reply", replyToTheQuestion]]
    )

    openQuestion.appendChild(movedQuestion);
    currDiv.remove();
}

function sendReply() {
    const ol = this.parentElement.getElementsByClassName("reply")[0];
    const li = generateElement("li", this.parentElement.getElementsByTagName("input")[0].value);
    ol.appendChild(li);
}

function createReplyDiv() {
    const replyDiv = generateElement("div", undefined, ["class"], ["replySection"]);
    const input = generateElement("input", undefined, ["class", "type", "placeholder"], ["replyInput", "text", "Reply to this question here..."]);
    const btn = generateElement("button", "Send", "class", "replyButton", sendReply);
    const ol = generateElement("ol", undefined, ["class", "type"], ["reply", "1"]);

    replyDiv.style.display = "none";
    appendElements(replyDiv, [input, btn, ol]);
    return replyDiv;
}

function createNewQuest(user, question, divParams, secDivParams, btnParams) {
    const pendingDiv = generateElement(divParams[0], divParams[1], divParams[2], divParams[3]);
    const actionDiv = generateElement(secDivParams[0], secDivParams[1], secDivParams[2], secDivParams[3]);

    const img = generateElement('img', undefined, ["width", "height"], ["32", "32"]);
    img.src = "./images/user.png";
    const span = generateElement('span', user);
    const p = generateElement('p', question);
    const btns = btnParams.map(generateMultipleButtons);

    appendElements(actionDiv, btns)
    appendElements(pendingDiv, [img, span, p, actionDiv]);

    if (btnParams[0][3] === 'reply') {
        const replyDiv = createReplyDiv();
        pendingDiv.appendChild(replyDiv);
    }

    return pendingDiv;
}

function createValidQuestion() {
    const question = getQuestion();

    if (question !== '') {
        const userName = getUserName();
        const newQuest = createNewQuest(
            userName,
            question,
            ['div', undefined, "class", "pendingQuestion"],
            ['div', undefined, "class", "actions"],
            [
                ['button', 'Archive', "class", "archive", removeElement], 
                ['button', 'Open', "class", "open", moveToOpenQuestions]
            ]
        );

        const outputSection = document.getElementById('pendingQuestions');
        outputSection.appendChild(newQuest);
    }
}

function mySolution() {
    document.getElementsByTagName("button")[0].addEventListener('click', createValidQuestion)
}