// DEPENDENCIES/DOM ELEMENTS
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerEl = document.getElementById("question-container");
var questionEl = document.querySelector("#question");
const answerButtonsEl = document.getElementById("answer-buttons");
var secondsLeftEl = document.querySelector("#secondsleft");

// INITIAL DATA
let shuffledQuestions, currentQuestionIndex;

var c1btn = document.querySelector("#c1");
var c2btn = document.querySelector("#c2");
var c3btn = document.querySelector("#c3");
var c4btn = document.querySelector("#c4");
var resultEl = document.querySelector("#result");

// EVENT LISTENERS
startButton.addEventListener("click", startGame);

// FUNCTIONS

function startGame() {
  // function to run when start button is clicked
  console.log("started");
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerEl.classList.remove("hide");
  nextButton.classList.remove("hide");
  // TODO: start timer
}

function setNextQuestion() {
  // function to run when next button is clicked
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionEl.innerText = question.question;
}

function selectAnswer() {
  // function to run when answer is selected
  //run correct or incorrect protocols
}

// ARRAY OF QUESTIONS AND ANSWERS
// questions:
// choices:
// correctAnswer:
// USER INPUT

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
    choices: [
      { text: 'msg("Hello World")', correct: false },
      { text: 'alertBox("Hello World")', correct: false },
      { text: 'msgBox("Hello World")', correct: false },
      { text: 'alert("Hello World")', correct: true },
    ],
  },
  {
    question: 'How do you call a function named "myFunction"?',
    choices: [
      { text: "function(myFunction)", correct: false },
      { text: "myFunction{}", correct: false },
      { text: "myFunction()", correct: true },
      { text: "call myFunction()", correct: false },
    ],
  },
  {
    question:
      'How do you write an IF statement for executing some code if "i" is NOT equal to 5?',
    choices: [
      { text: "if i != 5 {}", correct: false },
      { text: "if i (!=5) {}", correct: false },
      { text: "if (i != 5) {}", correct: true },
      { text: "if (i <>5) {}", correct: false },
    ],
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    choices: [
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

// TODO: WHEN I answer a question

// THEN I am presented with another question

// TODO: WHEN I answer a question incorrectly

// THEN time is subtracted from the clock
// ++++++ secondsleft flashes red

// TODO: WHEN all questions are answered or the timer reaches 0

// THEN the game is over

// TODO:  WHEN the game is over

// THEN I can save my initials and score

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});
