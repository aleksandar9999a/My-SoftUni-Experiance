function getUserName(){
    const name = document.getElementsByTagName('input')[0];
    if (name.value === '') {
        return 'Anonymous';
    }
    return name.value;
}

function getQuestion() {
    return document.getElementsByTagName('textarea')[0].value;
}

function generateElement(type, content, attrName, attrValue, func) {
    let e = document.createElement(type);
    if (typeof content === "string") {
        e.innerHTML = content;
    }
    if (typeof content === "object") {
        e.appendChild(content);
    }
    if (attrName !== '' && attrValue !== '' && typeof attrName === 'string' && typeof attrValue === 'string') {
        e.setAttribute(attrName, attrValue);
    }
    if (func !== undefined) {
        e.addEventListener('click', func);
    }
    return e;
}

function getParent(e) {
    return e.parentElement.parentElement;
}

function removeElement() {
    getParent(this).remove();
}

function replyToTheQuestion(){
    const currDiv = getParent(this);
    let replySection = currDiv.getElementsByClassName("replySection")[0];
    let btn = currDiv.getElementsByTagName("button")[0];

    if (replySection.style.display === "block") {
        replySection.style.display = "none";
        btn.innerHTML = "Reply";
    }else{
        replySection.style.display = "block";
        btn.innerHTML = "Back";
    }


}

function moveToOpenQuestions() {
    const currDiv = getParent(this);
    const openQuestion = document.getElementById('openQuestions');

    const user = currDiv.getElementsByTagName('span')[0].innerHTML;
    const question = currDiv.getElementsByTagName('p')[0].innerHTML;

    const movedQuestion = createNewQuest(
        user, 
        question, 
        ['div', undefined, "class", "openQuestion"],
        ['div', undefined, "class", "actions"],
        [['button', 'Reply', "class", "reply", replyToTheQuestion]]
        )

    openQuestion.appendChild(movedQuestion);
    currDiv.remove();
}

function createReplyDiv(){
    let replyDiv = generateElement("div", undefined, "class", "replySection");
    let input = generateElement("input", undefined, "class", "replyInput");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Reply to this question here...");
    let btn = generateElement("button", "Send", "class", "replyButton");
    let ol = generateElement("ol", undefined, "class", "reply");
    ol.setAttribute("type", "1");

    replyDiv.appendChild(input);
    replyDiv.appendChild(btn);
    replyDiv.appendChild(ol);

    replyDiv.style.display = "none";
    return replyDiv;
}

function createNewQuest(user, question, divParams, secDivParams, btnParams) {
    let pendingDiv = generateElement(divParams[0], divParams[1], divParams[2], divParams[3]);
    let actionDiv = generateElement(secDivParams[0], secDivParams[1], secDivParams[2], secDivParams[3]);

    let img = generateElement('img');
    let span = generateElement('span', user);
    let p = generateElement('p', question);
    
    let btns = btnParams.map(params => generateElement(params[0], params[1], params[2], params[3], params[4]));

    img.src = "./images/user.png";
    img.setAttribute("width", "32");
    img.setAttribute("height", "32");
    
    btns.map(x => actionDiv.appendChild(x));
    pendingDiv.appendChild(img);
    pendingDiv.appendChild(span);
    pendingDiv.appendChild(p);
    pendingDiv.appendChild(actionDiv);

    if (btnParams[0][3] === 'reply') {
        const replyDiv = createReplyDiv();
        pendingDiv.appendChild(replyDiv);
    }

    return pendingDiv;
}

function createValidQuestion(){
    const question = getQuestion();

    if (question !== '') {
        const userName = getUserName();
        const newQuest = createNewQuest(
            userName, 
            question, 
            ['div', undefined, "class", "pendingQuestion"],
            ['div', undefined, "class", "actions"],
            [['button', 'Archive', "class", "archive", removeElement], ['button', 'Open', "class", "open", moveToOpenQuestions]]
            );

        const outputSection = document.getElementById('pendingQuestions');
        outputSection.appendChild(newQuest);
    }
}

function mySolution(){
    document.getElementsByTagName("button")[0].addEventListener('click', createValidQuestion)
}