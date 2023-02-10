const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

function makeItemEl (ingredients) {
  for (const ingredient of ingredients) {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;
    itemEl.classList.add('item');
    listEl.append(itemEl);
  }
  
}
makeItemEl(ingredients);



//HTML містить порожній список ul#ingredients.

//<ul id="ingredients"></ul>

//JavaScript містить масив рядків.


//Напиши скрипт, який для кожного елемента масиву ingredients:

//Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//Додасть назву інгредієнта як його текстовий вміст.
//Додасть елементу клас item.
//Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
