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



function createQuestion(){
    const question = getQuestion();

    if (question !== '') {
        const userName = getUserName();
        console.log(question);
        
    }
    
    
}

function mySolution(){

    document.getElementsByTagName("button")[0].addEventListener('click', createQuestion)
}