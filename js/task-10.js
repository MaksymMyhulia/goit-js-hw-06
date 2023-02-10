const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const controlContainer = document.querySelector("#controls");
const divBox = document.querySelector("#boxes");
const input = document.querySelector("input");

divBox.style.display = "flex";
divBox.style.flexWrap = "wrap";
divBox.style.alignItems = "center";
divBox.style.marginTop = "30px";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let inputValue;
function onInputChange (event) {
  inputValue =  event.currentTarget.value;
}
input.addEventListener("change", onInputChange);
function createBoxes(amount) {
amount = inputValue;
let divArray = [];
let defaultSize = 30;
if (amount) {
  for (let i = 0; i < amount; i += 1) {
    defaultSize += 10;
    const divItem = document.createElement("div");
    divItem.classList = "item";
    divItem.style.width = `${defaultSize}px`;
    divItem.style.height = `${defaultSize}px`;
    divItem.style.marginRight = `${defaultSize}px`;
    divItem.style.marginBottom = `${defaultSize}px`;
    divItem.style.backgroundColor = getRandomHexColor();
    divArray.push(divItem);
    divBox.append(divItem);
  }
  return divBox.append(...divArray)
}
}
createBtn.addEventListener("click", createBoxes);


function onDestroyBtnClick (event) {
  inputValue = "";
  return divBox.innerHTML = "";
}
destroyBtn.addEventListener ("click", onDestroyBtnClick);

//Напиши скрипт створення і очищення колекції елементів. 
//Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. 
//Натисненням на кнопку Очистити, колекція елементів очищається.

//<div id="controls">
 // <input type="number" min="1" max="100" step="1" />
 // <button type="button" data-create>Create</button>
 // <button type="button" data-destroy>Destroy</button>
//</div>

//<div id="boxes"></div>

//Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, 
//скільки вказано в amount і додає їх у div#boxes.

//Розміри найпершого <div> - 30px на 30px.
//Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
//Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
//function getRandomHexColor() {
 // return `#${Math.floor(Math.random() * 16777215)
 //   .toString(16)
 //   .padStart(6, 0)}`;
//}

//Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.