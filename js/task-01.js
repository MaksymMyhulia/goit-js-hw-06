const categoriesArray = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesArray.length}`);

const categorierArr = [...categoriesArray].forEach((categories) => {
console.log( `Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`)  
})
 

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