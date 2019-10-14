const SELECTORS = {
    sendBtn: "#send",
    textarea: "#myText",
    userName: "#userName",
    openQuestion: "#openQuestions",
    pendingQuestions: "#pendingQuestions",
    replyOl: ".reply",
    replyInput: ".replyInput",
    replySection: ".replySection"
}

const pendingDivTemplate = {
    pendingDiv: ['div', undefined, "class", "pendingQuestion"],
    actionDiv: ['div', undefined, "class", "actions"],
    btn: [['button', 'Archive', "class", "archive", removeElement],['button', 'Open', "class", "open", createOpenQuestion]],
    img: ['img', undefined, ["width", "height"], ["32", "32"]]
}

const openQuestionDivTemplate = {
    openQuestionDiv: ['div', undefined, "class", "openQuestion"],
    actionDiv: ['div', undefined, "class", "actions"],
    btn: [['button', 'Reply', "class", "reply", replyToTheQuestion]],
    img: ['img', undefined, ["width", "height"], ["32", "32"]]
}

const replyDivTemplate = {
    replyDiv: ["div", undefined, ["class"], ["replySection"]],
    input: ["input", undefined, ["class", "type", "placeholder"], ["replyInput", "text", "Reply to this question here..."]],
    btn: ["button", "Send", "class", "replyButton", sendReply],
    ol: ["ol", undefined, ["class", "type"], ["reply", "1"]]
}

const getQuestion = () => document.querySelector(SELECTORS.textarea).value;
const generateMultipleButtons = (params) => generateElement(params[0], params[1], params[2], params[3], params[4]);
const appendElements = (parent, elements) => elements.map(x => parent.appendChild(x));
const getParent = e => e.parentElement.parentElement;

function getUserName() {
    const name = document.querySelector(SELECTORS.userName);
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
    const replySection = currDiv.querySelector(SELECTORS.replySection);
    const btn = currDiv.getElementsByTagName("button")[0];

    if (replySection.style.display === "block") {
        replySection.style.display = "none";
        btn.innerHTML = "Reply";
    } else {
        replySection.style.display = "block";
        btn.innerHTML = "Back";
    }
}

function createOpenQuestion() {
    const pendingQuestion = getParent(this);
    const questionDiv = createNewQuest(
        openQuestionDivTemplate.openQuestionDiv,
        openQuestionDivTemplate.actionDiv,
        openQuestionDivTemplate.btn,
        openQuestionDivTemplate.img,
        ['span', pendingQuestion.getElementsByTagName('span')[0].innerHTML],
        ['p', pendingQuestion.getElementsByTagName('p')[0].innerHTML]
    )

    moveFromPendingToOpenQuestions(pendingQuestion, questionDiv)
}

function moveFromPendingToOpenQuestions(pendingQuestion, openQuestion) {
    const openQuestions = document.querySelector(SELECTORS.openQuestion);
    openQuestions.appendChild(openQuestion);
    pendingQuestion.remove();
}

function sendReply() {
    const ol = this.parentElement.querySelector(SELECTORS.replyOl);
    const li = generateElement("li", this.parentElement.querySelector(SELECTORS.replyInput).value);
    ol.appendChild(li);
}

function createReplyDiv() {
    const replyDiv = generateElement(...replyDivTemplate.replyDiv);
    const input = generateElement(...replyDivTemplate.input);
    const btn = generateElement(...replyDivTemplate.btn);
    const ol = generateElement(...replyDivTemplate.ol);

    replyDiv.style.display = "none";
    appendElements(replyDiv, [input, btn, ol]);
    return replyDiv;
}

function createNewQuest(divParams, secDivParams, btnParams, imgParams, spanParams, questionParams) {
    const pendingDiv = generateElement(...divParams);
    const actionDiv = generateElement(...secDivParams);
    const img = generateElement(...imgParams);
    const span = generateElement(...spanParams);
    const p = generateElement(...questionParams);
    const btns = btnParams.map(generateMultipleButtons);

    img.src = "./images/user.png";

    appendElements(actionDiv, btns)
    appendElements(pendingDiv, [img, span, p, actionDiv]);

    if (btnParams[0][3] === 'reply') {
        pendingDiv.appendChild(createReplyDiv());
    }

    return pendingDiv;
}

function createValidQuestion() {
    const question = getQuestion();

    if (question !== '') {
        const userName = getUserName();
        const newQuest = createNewQuest(
            pendingDivTemplate.pendingDiv,
            pendingDivTemplate.actionDiv,
            pendingDivTemplate.btn,
            pendingDivTemplate.img,
            ['span', userName],
            ['p', question]
        );

        const outputSection = document.querySelector(SELECTORS.pendingQuestions);
        outputSection.appendChild(newQuest);
    }
}

document.querySelector(SELECTORS.sendBtn).addEventListener('click', createValidQuestion);