const body = document.getElementsByTagName("body")[0];
const button = document.getElementById("but");
const question = document.getElementById("question");
const scores = document.getElementsByClassName("scores");
const logo = document.getElementById("logo");
const color = document.getElementById("color");
const guess = document.getElementsByClassName("guess");
const colorContainer = document.getElementsByClassName("color-container")[0];
const guesses = document.getElementsByClassName("guesses");
const firstQestion = document.getElementById("first-question");
const component = document.getElementsByClassName("component");

function changeBackground() {
  // dark mode
  if (body.style.backgroundColor === "white") {
    body.style.backgroundColor = "#2e2e2e";
    button.style.backgroundColor = "white";
    button.style.color = "#2e2e2e";
    question.style.color = "white";
    logo.style.color = "white";
    button.innerHTML = '<img src="./icons/night-mode.png" alt="" />';
    firstQestion.style.color = "white";
    for (i = 0; i < guess.length; i++) {
      guess[i].style.color = "white";
      guess[i].style.backgroundColor = "rgb(62, 62, 62)";
    }
    for (i = 0; i < component.length; i++) {
      component[i].style.backgroundColor = "#3a3a3a";
      component[i].style.color = "white";
    }
  } else {
    // light mode
    body.style.backgroundColor = "white";
    button.style.backgroundColor = "#2e2e2e";
    button.style.color = "white";
    question.style.color = "white";
    logo.style.color = "#2e2e2e";
    button.innerHTML = '<img src="./icons/sleep-mode.png" alt="" />';
    firstQestion.style.color = "#2e2e2e";
    for (i = 0; i < guess.length; i++) {
      guess[i].style.color = "#2e2e2e";
      guess[i].style.backgroundColor = "white";
    }
    for (i = 0; i < component.length; i++) {
      component[i].style.backgroundColor = "#ededed";
      component[i].style.color = "#2e2e2e";
    }
  }
}
scores[0].style.display = "none";
colorContainer.style.display = "none";
guesses[0].style.display = "none";

let GlobalRandomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

function generateRandomColor() {
  GlobalRandomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  const result = document.getElementById("result");
  result.innerHTML = "";

  const color = document.getElementById("color");

  color.style.backgroundColor = GlobalRandomColor;
  let button = document.getElementById("start").innerHTML;
  if (button === "Start") {
    scores[0].style.display = "flex";
    colorContainer.style.display = "flex";
    guesses[0].style.display = "flex";
    firstQestion.style.display = "none";
  }
  const correct = Math.floor(Math.random() * 4) + 1;
  for (let i = 1; i <= 4; i++) {
    if (i === correct) {
      document.getElementById("guess" + i).innerHTML = GlobalRandomColor;
    } else {
      let randomColor2 =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      document.getElementById("guess" + i).innerHTML = randomColor2;
    }
  }
  console.log(GlobalRandomColor);
}

let score = 0;
let highScore = 0;

function checkAnswer(guess) {
  console.log(GlobalRandomColor);

  if (guess === GlobalRandomColor) {
    const result = document.getElementById("result");
    result.innerHTML = "Correct!";
    result.style.color = "green";

    const scoreWrapper = document.getElementsByClassName("score-wrapper")[0];
    scoreWrapper.innerHTML = "Score :" + ++score;
    const highScoreHtml =
      document.getElementsByClassName("high-score-wrapper")[0];
    if (score > highScore) {
      highScore = score;
      console.log(highScore);
    }
    highScoreHtml.innerHTML = "High Score :" + highScore;

    generateRandomColor();
    resetTimer();
    downloadTimer();
  } else {
    const result = document.getElementById("result");

    result.innerHTML = "Wrong!";
    result.style.color = "red";
    result.classList.add("horizontal-shaking");

    setTimeout(() => {
      result.classList.remove("horizontal-shaking");
    }, 1000);
    const scoreWrapper = document.getElementsByClassName("score-wrapper")[0];
    score = 0;
    scoreWrapper.innerHTML = "Score: " + score;
    generateRandomColor();
    resetTimer();
    downloadTimer();
    result.innerHTML = "Wrong!";
  }
}

// time
let timeleft = 5;
let timerInterval;

let restart = document.getElementById("restart");
let gameOver = document.getElementById("game-over");
let end = document.getElementById("end");

gameOver.style.display = "none";

const downloadTimer = () => {
  timerInterval = setInterval(function () {
    if (timeleft < 0) {
      clearInterval(timerInterval);
      resetTimer();
      gameOver.style.display = "flex";
    } else {
      document.getElementsByClassName("time")[0].innerHTML =
        "Time left: " + timeleft;
    }
    timeleft -= 1;
  }, 1000);
};

function resetTimer() {
  timeleft = 5;
  clearInterval(timerInterval);
  document.getElementsByClassName("time")[0].innerHTML =
    "Time left: " + timeleft;
}

function resetGame() {
  resetTimer();
}

function start() {
  document.getElementById("start").style.display = "none";
  resetGame();
  downloadTimer();
  generateRandomColor();
  gameOver.style.display = "none";
  scoreReset();
}

function scoreReset() {
  score = 0;
  const scoreWrapper = document.getElementsByClassName("score-wrapper")[0];
  scoreWrapper.innerHTML = "Score: " + score;
}
