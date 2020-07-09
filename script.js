// DEPENDENCIES/DOM ELEMENTS
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerEl = document.getElementById("question-container");
var questionEl = document.querySelector("#question");
const answerButtonsEl = document.getElementById("answer-buttons");
const time = document.getElementById("time");
var timer = document.querySelector("#secondsleft");
const saveContainer = document.getElementById("save-container");
const timesUp = document.getElementById("times-up");
// USER INPUT TO SAVE
var scoresContainer = document.getElementById("scores-container");
var scoreList = document.getElementById("scores-list");
var initialsInput = document.getElementById("initials-input");
var saveButton = document.getElementById("save-btn");

//TODO: user score counter and score (user score divided by 5)
var keep = true;
let secondsLeft = 60;
let numCorrect = 0;

var initials = [];

// INITIAL DATA
let shuffledQuestions, currentQuestionIndex, userAnswer;

// EVENT LISTENERS
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

// SAVE INITIALS
saveButton.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(initialsInput);
  var inputValue = initialsInput.value;
  initials.push(inputValue);
  console.log(initials);
  renderList();
  saveContainer.classList.add("hide");
});

// FUNCTIONS

// render highscore list
function renderList() {
  scoreList.innerHTML = "";
  scoresContainer.classList.remove("hide");

  for (var i = 0; i < initials.length; i++) {
    var item = initials[i];

    var li = document.createElement("li");
    li.textContent = item + ":" + " " + numCorrect;
    scoreList.appendChild(li);
  }
}

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = " " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      secondsLeft = secondsLeft + 60;
      time.classList.add("hide");
      timesUp.classList.remove("hide");
      startButton.innerText = "RESTART";
      startButton.classList.remove("hide");
      questionContainerEl.classList.add("hide");
      document.body.classList.remove("correct");
      document.body.classList.remove("wrong");
    }
  }, 1000);
}

function startGame() {
  // function to run when start button is clicked
  console.log("started");
  timesUp.classList.add("hide");

  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerEl.classList.remove("hide");
  nextButton.classList.remove("hide");
  // start timer

  time.classList.remove("hide");
  saveContainer.classList.add("hide");

  setNextQuestion();
  setTime();
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
      numCorrect++;
      //TODO: add score. if score < 0, score = 0
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
  // let correctAnswer = document.querySelector(".correct");
  // correctAnswer.addEventListener("click", () => {
  //   numCorrect++;
  // });
  // console.log(selectedButton);

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    // show next button if there are questions left
    nextButton.classList.remove("hide");
    // if there are no more questions, display restart button and hide next button... TODO: display score, request initials, save score, show restart

    // TODO: if save score button is pressed, push input + " " + score into array
  } else {
    time.classList.add("hide");
    saveContainer.classList.remove("hide");
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

// function setScore(button) {
//   if (button.dataset.correct) {
//     numCorrect++;
//   }
// }

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

// TODO: WHEN I answer a question incorrectly

// THEN time is subtracted from the clock
// ++++++ secondsleft flashes red

// TODO: WHEN all questions are answered or the timer reaches 0

// THEN the game is over

// TODO:  WHEN the game is over

// THEN I can save my initials and score

// TODO: LOOK AT RPS GAME FOR HOW TO KEEP SCORE

// save initials, save score, display initials + " " + score in the list array

// setScore();
console.log(numCorrect);
