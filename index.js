function changeBackground() {
  const body = document.getElementsByTagName("body")[0];
  const button = document.getElementById("but");
  if (body.style.backgroundColor === "white") {
    body.style.backgroundColor = "#2e2e2e";
    button.style.backgroundColor = "white";
    button.style.color = "#2e2e2e";
  } else {
    body.style.backgroundColor = "white";
    button.style.backgroundColor = "#2e2e2e";
    button.style.color = "white";
  }
}

function generateRandomColor() {
  const color = document.getElementById("color");
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  color.style.backgroundColor = randomColor;
  let button = document.getElementById("start").innerHTML;
  if (button === "Start") {
    document.getElementById("start").innerHTML = "Next";
  }
  const guesses = document.getElementsByClassName("guesses");
  for (let i = 0; i < guesses.length; i++) {
    const buttons = guesses[i].getElementsByTagName("button");
    for (let j = 0; j < 3; j++) {
      const randomnumber = Math.floor(Math.random() * 16777215).toString(16);
      const randomColor2 = "#" + randomnumber;

      let randomNum = Math.floor(Math.random() * (4 - 1 + 1) + 1);
      document.getElementById("guess" + randomNum).innerHTML = randomColor;
    }
  }

  console.log(randomColor);
  return randomColor;
}
