function changeBackground() {
  const body = document.getElementsByTagName("body")[0];
  const button = document.getElementById("but");
  const question = document.getElementById("question");
  const scores = document.getElementsByClassName("component");
  const logo = document.getElementById("logo");
  const color = document.getElementById("color");
  const guess = document.getElementsByClassName("guess");

  if (body.style.backgroundColor === "white") {
    body.style.backgroundColor = "#2e2e2e";
    button.style.backgroundColor = "white";
    button.style.color = "#2e2e2e";
    question.style.color = "white";
    logo.style.color = "white";
  } else {
    body.style.backgroundColor = "white";
    button.style.backgroundColor = "#2e2e2e";
    button.style.color = "white";
    question.style.color = "#white";
    logo.style.color = "#2e2e2e";
    guess.style.color = "#2e2e2e";
    guess.style.backgroundColor = "white";
  }
}
let GlobalRandomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

function generateRandomColor() {
  GlobalRandomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  const result = document.getElementById("result");
  result.innerHTML = "";

  const color = document.getElementById("color");

  color.style.backgroundColor = GlobalRandomColor;
  let button = document.getElementById("start").innerHTML;
  if (button === "Start") {
    document.getElementById("start").innerHTML = "Restart";
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

const body = document.getElementsByTagName("body")[0];
let restart = document.getElementById("restart");
let gameOver = document.getElementById("game-over");
let end = document.getElementById("end");

const downloadTimer = () => {
  timerInterval = setInterval(function () {
    if (timeleft < 0) {
      clearInterval(timerInterval);
      resetTimer();

      end.innerHTML = "Time's up!";
      restart.innerHTML = "Restart";
      gameOver.style.bottom = "0";
      gameOver.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
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
  restart.style.display = "none";

  end.innerHTML = "";
}

function start() {
  document.getElementById("start").style.display = "none";
  resetGame();
  downloadTimer();
  generateRandomColor();
}
