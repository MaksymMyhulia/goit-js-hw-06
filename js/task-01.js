const categoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesEl.length}`);

const categoriesTitleEL = document.querySelectorAll("h2");
const animalsItems = categoriesEl[0].querySelectorAll("li");
const productsItems = categoriesEl[1].querySelectorAll("li");
const technologiesItems = categoriesEl[2].querySelectorAll("li");

function getInformation (element) {
    console.log(`Category: ${element.textContent}`);
    console.log(`Elements: ${element.nextElementSibling.children.length}`)
}
getInformation(categoriesTitleEL[0])
getInformation(categoriesTitleEL[1])
getInformation(categoriesTitleEL[2])

//Напиши скрипт, який:

//Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//Для кожного элемента li.item у списку ul#categories, 
//знайде і виведе в консоль текст заголовку елемента (тегу <h2>) 
//і кількість елементів в категорії (усіх <li>, вкладених в нього).
//В результаті, в консолі будуть виведені наступні повідомлення.

//Number of categories: 3

//Category: Animals
//Elements: 4

//Category: Products
//Elements: 3

//Category: Technologies
//Elements: 5