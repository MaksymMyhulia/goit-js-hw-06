const button = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");
const body = document.querySelector("body");


function getRandomHexColor() {
  console.log(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function changeColor() {
body.style.backgroundColor = getRandomHexColor();
colorValue.textContent = body.style.backgroundColor;
}
button.addEventListener("click", changeColor);
