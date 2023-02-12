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
//Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color 
//і виводить значення кольору в span.color.

//<div class="widget">
//  <p>Background color: <span class="color">-</span></p>
  //<button type="button" class="change-color">Change color</button>
//</div>

//Для генерування випадкового кольору використовуй функцію getRandomHexColor.

//function getRandomHexColor() {
 // return `#${Math.floor(Math.random() * 16777215)
  //  .toString(16)
  //  .padStart(6, 0)}`;
//}

//Задання 9 - Колір має змінюватись на body і у вас не співпадає фон діва з текстовим контентом спана. 