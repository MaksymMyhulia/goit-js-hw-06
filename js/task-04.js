let counterValue = 0;

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const counterEl =  document.querySelector('#value');

function decrementButtonClickHandler() {
    counterValue -= 1;
    counterEl.textContent = counterValue;
    console.log(counterEl.textContent)
}

function incrementButtonClickHandler () {
    counterValue += 1;
    counterEl.textContent = counterValue;
    console.log(counterEl.textContent)
}

decrementButton.addEventListener('click', decrementButtonClickHandler)
incrementButton.addEventListener('click', incrementButtonClickHandler)






//Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

//<div id="counter">
  //<button type="button" data-action="decrement">-1</button>
  //<span id="value">0</span>
  //<button type="button" data-action="increment">+1</button>
//</div>

//Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
//Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
//Оновлюй інтерфейс новим значенням змінної counterValue.