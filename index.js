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

function generateRandomColor() {
  const result = document.getElementById("result");
  result.innerHTML = "";
  const color = document.getElementById("color");
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  color.style.backgroundColor = randomColor;
  let button = document.getElementById("start").innerHTML;
  if (button === "Start") {
    document.getElementById("start").innerHTML = "Next";
  }
  const guesses = document.getElementsByClassName("guesses");
  const correct = Math.floor(Math.random() * 4) + 1;
  for (let i = 1; i <= 4; i++) {
    if (i === correct) {
      document.getElementById("guess" + i).innerHTML = randomColor;
    } else {
      let randomColor2 =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      document.getElementById("guess" + i).innerHTML = randomColor2;
    }
  }

  console.log(randomColor);
  return randomColor;
}

function checkAnswer(guess) {
  const color = document.getElementById("color").style.backgroundColor;
  function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
  }
  rgb = color.slice(4, -1);
  console.log(rgb);

  console.log(rgbToHex(r));

  if (guess == color) {
    document.getElementById("result").innerHTML = "Correct!";
    document.getElementById("result").style.color = "green";
  } else {
    document.getElementById("result").innerHTML = "Wrong!";
    document.getElementById("result").style.color = "red";
  }
}
