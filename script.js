// DEPENDENCIES/DOM ELEMENTS
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerEl = document.getElementById("question-container");
var questionEl = document.querySelector("#question");
const answerButtonsEl = document.getElementById("answer-buttons");
var secondsLeftEl = document.querySelector("#secondsleft");

// INITIAL DATA
let shuffledQuestions, currentQuestionIndex;

// EVENT LISTENERS
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

// FUNCTIONS

function startGame() {
  // function to run when start button is clicked
  console.log("started");
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerEl.classList.remove("hide");
  nextButton.classList.remove("hide");
  setNextQuestion();
  // TODO: start timer
}

function setNextQuestion() {
  // function to run when next button is clicked

  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  // function to display current question and answers
  questionEl.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsEl.appendChild(button);
  });
}

function resetState() {
  document.body.classList.remove("correct");
  document.body.classList.remove("wrong");

  nextButton.classList.add("hide");
  while (answerButtonsEl.firstChild) {
    answerButtonsEl.removeChild(answerButtonsEl.firstChild);
  }
}

function selectAnswer(e) {
  // function to run when answer is selected
  // get selected answer
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  // set status class of body
  setStatusClass(document.body, correct);
  Array.from(answerButtonsEl.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });

  // show next button if there are questions left
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
    // if there are no more questions, display restart button and hide next button... TODO: display score, request initials, save score
  } else {
    startButton.innerText = "RESTART";
    startButton.classList.remove("hide");
    questionContainerEl.classList.add("hide");
    document.body.classList.remove("correct");
    document.body.classList.remove("wrong");
  }
}

function setStatusClass(element, correct) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

// function clearStatusclass(element) {
//   element.classList.remove("correct");
//   element.classList.remove("wrong");
// }

// ARRAY OF QUESTIONS AND ANSWERS
// questions:
// answers:
// correct?:

var questions = [
  {
    question:
      'What is the correct syntax for referring to an external script called "xxx.js?"',
    answers: [
      { text: '<script src="xxx.js"', correct: true },
      { text: '<script value="xxx.js"', correct: false },
      { text: '<script id="xxx.js"', correct: false },
      { text: '<script href="xxx.js"', correct: false },
    ],
  },
  {
    question: 'How do you write "Hello World" in an alert box?',
    answers: [
      { text: 'msg("Hello World")', correct: false },
      { text: 'alertBox("Hello World")', correct: false },
      { text: 'msgBox("Hello World")', correct: false },
      { text: 'alert("Hello World")', correct: true },
    ],
  },
  {
    question: 'How do you call a function named "myFunction"?',
    answers: [
      { text: "function(myFunction)", correct: false },
      { text: "myFunction{}", correct: false },
      { text: "myFunction()", correct: true },
      { text: "call myFunction()", correct: false },
    ],
  },
  {
    question:
      'How do you write an IF statement for executing some code if "i" is NOT equal to 5?',
    answers: [
      { text: "if i != 5 {}", correct: false },
      { text: "if i (!=5) {}", correct: false },
      { text: "if (i != 5) {}", correct: true },
      { text: "if (i <>5) {}", correct: false },
    ],
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    answers: [
      { text: "onmouseclick", correct: false },
      { text: "onclick", correct: true },
      { text: "onchange", correct: false },
      { text: "onmouseover", correct: false },
    ],
  },
];

// MAKE COUNTER

// TODO: WHEN I click the start button

// THEN a timer starts and I am presented with a question

// TODO: WHEN I answer a question incorrectly

// THEN time is subtracted from the clock
// ++++++ secondsleft flashes red

// TODO: WHEN all questions are answered or the timer reaches 0

// THEN the game is over

// TODO:  WHEN the game is over

// THEN I can save my initials and score

// TODO: LOOK AT RPS GAME FOR HOW TO KEEP SCORE
