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


function moveToOpenQuestions() {
    const currDiv = getParent(this);
    const openQuestion = document.getElementById('openQuestions');

    
}

function createPendingQuest(user, question, divParams, secDivParams, btnParams) {
    let pendingDiv = generateElement(divParams[0], divParams[1], divParams[2], divParams[3]);
    let actionDiv = generateElement(secDivParams[0], secDivParams[1], secDivParams[2], secDivParams[3]);

    let img = generateElement('img');
    let span = generateElement('span', user);
    let p = generateElement('p', question);
    
    let btns = btnParams.map(params => generateElement(params[0], params[1], params[2], params[3], params[4]));

    img.src = "./images/user.png";
    img.setAttribute("width", "32");
    img.setAttribute("height", "32");
    //archiveBtn.addEventListener('click', removeElement);
    
    btns.map(x => actionDiv.appendChild(x));
    pendingDiv.appendChild(img);
    pendingDiv.appendChild(span);
    pendingDiv.appendChild(p);
    pendingDiv.appendChild(actionDiv);

    return pendingDiv;
}

function createValidQuestion(){
    const question = getQuestion();

    if (question !== '') {
        const userName = getUserName();
        const newQuest = createPendingQuest(
            userName, 
            question, 
            ['div', undefined, "class", "pendingQuestion"],
            ['div', undefined, "class", "actions"],
            [['button', 'Archive', "class", "archive", removeElement], ['button', 'Open', "class", "open"]]
            )



        const outputSection = document.getElementById('pendingQuestions');
        outputSection.appendChild(newQuest);
    }
}

function mySolution(){

    document.getElementsByTagName("button")[0].addEventListener('click', createValidQuestion)
}