const inputEl = document.querySelector('#validation-input');
let validLength = inputEl.dataset.length;
let intvalidLength = parseInt(validLength, 10);

function inspectValue (event) {
    if (event.currentTarget.value.length === intvalidLength) {
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid"); 
    } 
    if (event.currentTarget.value.length === 0) {
        inputEl.classList.remove("valid");
        inputEl.classList.remove("invalid");
      }
    if (event.currentTarget.value.length !== intvalidLength && event.currentTarget.value.length !== 0) {
        inputEl.classList.add("invalid");
      } 
    
}
inputEl.addEventListener("blur", inspectValue)

//Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
//Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
//Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
//Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

