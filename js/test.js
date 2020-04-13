'use strict';

// Создание элементов массива возможно несколькими способами:
// Синтаксис для создания нового массива:

// let products = new Array(); // Создали новый пустой массив []
// let products = []; // Тоже создали новый пустой массив []

// let products = new Array(3); /* массив из 3-х элементов*/

// products[0] = "Really Cool Cat";
// products[1] = "Cool Dog";
// products[2] = "Angry Dog";

// let products = new Array("Really Cool Cat", "Cool Dog", "Angry Dog");

// Обращение или доступ к элементам массива в javaScript:

// console.log(products[0]);              // напечатает 'Really Cool Cat'
// console.log(products[1]);              // напечатает 'Cool Dog'

// products[3]='Black Cat';
// products[4]='Yellow Dog';

// Свойство массивов length взаимосвязано с числом свойств.
// console.log(products.length); 

// Длина length – не количество элементов массива, а последний индекс + 1.

// products[1000] = true;
// console.log(products.length); // 1001

// При уменьшении length массив укорачивается.
// products.length = 2; // укоротить до 2 элементов
// console.log(products[3] );
// products.length = 5; // вернуть length обратно, как было
// console.log(products[3]); // undefined: значения не вернулись

// ==============================================
// let addToCart = document.querySelector('.add_to_card');

// console.dir(typeof(addToCart)); // object Node

// addToCart.addEventListener('click', function () {
//     document.querySelector('.product__image').style.transform = 'rotateY(180deg)';
// }); 

// ======================== NodeList ==========================
// let addToCarts = document.querySelectorAll('.add_to_card'); 

// console.dir(addToCarts); // NodeList(3)
// console.log(addToCarts.length);

// перебор элементов массива addToCarts:

// for (let i = 0; i < addToCarts.length; i++) {
//     // Вы можете использовать метод item( ) для доступа к элементу
//     console.log(addToCarts.item(i));
//     // Вызов addToCarts.item(i) необязателен в JavaScript
//     // использование квадратных скобок намного проще и более распространено
//     console.log(addToCarts[i]); 
// }

// Обход DOM коллекций NodeList: 

// Оператор for...of работает только на платформах, где
// реализован NodeList.prototype[Symbol.iterator]

// for (let item of addToCarts) {
//     console.log(item);
// }

// Метод NodeList.entries() возвращает итератор, 
// позволяющий просмотреть все пары ключ / значение, 
// содержащиеся в этом объекте. 
// Значения являются объектами Node.

// Using for..of
// for(let entry of addToCarts.entries()) { 
//     console.log(entry);
// }

// Метод NodeList.keys() возвращает итератор, 
// позволяющий просмотреть все ключи, содержащиеся в этом объекте.
// Ключи имеют целое число без знака.

// Using for..of 
// for(let key of addToCarts.keys()) { 
//     console.log(key); 
// }
// Метод NodeList.values() возвращает итератор, 
// позволяющий просмотреть все значения, содержащиеся в этом объекте. 
// Значения являются объектами Node.

// Using for..of 
// for(let value of addToCarts.values()) { 
//     console.log(value); 
// }

// forEach
// addToCarts.forEach(function(addToCart) { 
//       console.log(addToCart); 
//     }
// );

// ================ this =====================
// console.log(this.document === document); // true

// // В браузерах, объект window также является глобальным:
// console.log(this === window); // true

// this.a = 37;
// console.log(window.a); // 37

// function f() {
//     console.log(this === window); // true
// }
// f();

// (function () {
//     console.log(this === window); // true
// })();

// var globalObject = this;
// var foo = (() => this);
// console.log(foo() === globalObject); // true

// var o = {
//     prop: 37,
//     f: function() {
//       return this.prop;
//     }
//   };
// console.log(o.f()); // logs 37

// ================== this ==========================

// addToCarts.forEach(function(addToCart) {
//   addToCart.addEventListener('click', function () {
//       console.log(this);
//       console.log(this.parentNode.parentNode.firstElementChild);
//       this.parentNode.parentNode.firstElementChild.style.transform = 'rotateY(180deg)';
//   });
// });

// addToCarts.forEach(function(addToCart) {
//     addToCart.addEventListener('click', function () {
//         console.log(this.closest(".product").firstElementChild);
//         this.parentNode.parentNode.firstElementChild.style.transform = 'rotateY(180deg)';
//     });
// });
