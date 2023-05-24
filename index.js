function changeBackground() {
  const body = document.getElementsByTagName("body")[0];
  const button = document.getElementById("but");
  const question = document.getElementById("question");

  if (body.style.backgroundColor === "white") {
    body.style.backgroundColor = "#2e2e2e";
    button.style.backgroundColor = "white";
    button.style.color = "#2e2e2e";
    question.style.color = "white";
    r;
  } else {
    body.style.backgroundColor = "white";
    button.style.backgroundColor = "#2e2e2e";
    button.style.color = "white";
    question.style.color = "#2e2e2e";
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
    document.getElementById("start").innerHTML = "Next";
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

function checkAnswer(guess) {
  console.log(GlobalRandomColor);

  if (guess === GlobalRandomColor) {
    const result = document.getElementById("result");
    result.innerHTML = "Correct!";
    result.style.color = "green";
  } else {
    const result = document.getElementById("result");
    result.innerHTML = "Wrong!";
    result.style.color = "red";
    result.classList.add("horizontal-shaking");
    setTimeout(() => {
      result.classList.remove("horizontal-shaking");
    }, 1000);
  }
}
