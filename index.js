function changeBackground() {
  const body = document.getElementsByTagName("body")[0];
  const button = document.getElementsByName("button")[0];
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
