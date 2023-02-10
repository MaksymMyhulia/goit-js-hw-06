const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
inputEl.setAttribute("step", 1);
function changeSize (event) {
const sizeOfFont = event.currentTarget.value;
textEl.style.fontSize = `${sizeOfFont}px`;

}
inputEl.addEventListener('input', changeSize)





//Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) 
//і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

//<input id="font-size-control" type="range" min="16" max="96" />
//<br />
//<span id="text">Abracadabra!</span>