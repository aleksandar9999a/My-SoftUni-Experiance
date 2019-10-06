function solve() {
  let step = 0;
  let correctAnswerCounter = 0;

  const SELECTORS = {
    question: ".answer-text",
    finalRes: '#results',
    btn: ".answer-wrap",
    section: "section"
  }

  const answer = {
    "onclick": true,
    "JSON.stringify()": true,
    "A programming API for HTML and XML documents": true
  }

  const addFunc = x => x.addEventListener('click', myAnswer);

  function myAnswer() {
    let choice = this.querySelector(SELECTORS.question).textContent;
    if (answer[choice]) {
      correctAnswerCounter++;
    }

    return nextQuestion();
  }

  function nextQuestion() {
    let sections = document.getElementsByTagName(SELECTORS.section);
    sections[step].style.display = "none";
    step++;
    step <= 2 ? sections[step].style.display = "block" : winnerOrNot();
  }

  function winnerOrNot() {
    document.querySelector(SELECTORS.finalRes).style.display = "block";
    let h1 = document.querySelector(SELECTORS.finalRes).getElementsByTagName("h1")[0];

    correctAnswerCounter === 3 ?  h1.innerHTML = 'You are recognized as top JavaScript fan!' : h1.innerHTML = `You have ${correctAnswerCounter} right answers`;
  }

  Array.from(document.querySelectorAll(SELECTORS.btn)).forEach(addFunc);
}
