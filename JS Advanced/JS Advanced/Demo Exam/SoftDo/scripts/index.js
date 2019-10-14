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

function generateElement(type, content, attrName, attrValue) {
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
    return e;
}

function getParent(e) {
    return e.parentElement.parentElement;
}

function removeElement() {
    getParent(this).remove();
    
}

function createPendingQuest(user, question) {
    let pendingDiv = generateElement('div', undefined, "class", "pendingQuestion");
    let img = generateElement('img');
    let span = generateElement('span', user);
    let p = generateElement('p', question);
    let actionDiv = generateElement('div', undefined, "class", "actions");
    let openBtn = generateElement('button', 'Open', "class", "open");
    let archiveBtn = generateElement('button', 'Archive', "class", "archive");

    img.src = "./images/user.png";
    img.setAttribute("width", "32");
    img.setAttribute("height", "32");
    archiveBtn.addEventListener('click', removeElement);
    
    actionDiv.appendChild(archiveBtn);
    actionDiv.appendChild(openBtn);
    pendingDiv.appendChild(img);
    pendingDiv.appendChild(span);
    pendingDiv.appendChild(p);
    pendingDiv.appendChild(actionDiv);

    return pendingDiv;
}

function createQuestion(){
    const question = getQuestion();

    if (question !== '') {
        const userName = getUserName();
        const newQuest = createPendingQuest(userName, question)
        const outputSection = document.getElementById('pendingQuestions');
        outputSection.appendChild(newQuest);
    }
    
    
}

function mySolution(){

    document.getElementsByTagName("button")[0].addEventListener('click', createQuestion)
}