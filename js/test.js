'use strict';

// Пример: использование toFixed
let numObj = 12345.6789;

numObj.toFixed();       // Вернёт '12346': обратите внимание на округление, дробной части нет
numObj.toFixed(1);      // Вернёт '12345.7': обратите внимание на округление
numObj.toFixed(6);      // Вернёт '12345.678900': обратите внимание на дополнение нулями
(1.23e+20).toFixed(2);  // Вернёт '123000000000000000000.00'
(1.23e-10).toFixed(2);  // Вернёт '0.00'
2.34.toFixed(1);        // Вернёт '2.3'
-2.34.toFixed(1);       // Вернёт -2.3 (в соответствии с приоритетом операций,
                        // отрицательные числовые литералы не возвращают строку...)
(-2.34).toFixed(1);     // Вернёт '-2.3' (...до тех пор, пока вы не заключите их в круглые скобки)


// Тегированные шаблоны
// Шаблонные строки позволяют создавать тегированные шаблонные строки. 
// создается обычная функция

function myTaggedLiteral(strings) {
 console.log(strings);
}

// вызов такой функции будет отличаться от вызова обычной функции:
// при вызове функции отсутствуют скобки! 
// На месте скобок записывается шаблонная строка. 

myTaggedLiteral`test`; 
// ["test"]

// В качестве параметра функции передается массив строк в шаблонной строке. 
// добавим новый аргумент в функцию.

function myTaggedLiteral(strings, value) {
 console.log(strings,value);
}

let someText = 'Neat';
myTaggedLiteral`test ${someText}`; 
// ["test", ""]
// "Neat"

// добавим в функцию выражение

// function myTaggedLiteral(strings, value, value2) {
//  console.log(strings,value);
// }

// Получить доступ к выражению можно из следующих параметров. 
// let someText = 'Neat';
// myTaggedLiteral`test ${someText} ${2 + 3}`; 
// ["test", ""]
// "Neat"
// 5

// Многоразовые шаблоны - функция, которая позволит создавать многоразовые шаблоны. 
// Идея заключается в создании первичного шаблона, в который будут передаваться данные.

// функция templater.
// const templater = function(strings, ...keys) {

// }


// параметр …keys. 
// Троеточие называется оставшимся параметром. 
// Этот параметр собирает все параметры функции в массив.

// возврат функции позволяет вызывать и передавать данные:

// studentTemplate(student).
// const templater = function(strings, ...keys) {
//  return function(data) {

//  } 
// }

function templater(strings, ...keys) {
    // console.log(keys);
    return function(data) {
        let temp = strings.slice();
    
        keys.forEach((key, i) => {
            let value = (Array.isArray(data[key]))? data[key][0]:data[key];
            temp[i] = temp[i] + value;
        });
        return temp.join('');
    }
};

const product = {
    id: 0,
    title: "Cool Cat",
    price: 77.99,
    images: ["./images/cat1.jpg", "./images/cat4.jpg", "./images/cat5.jpg", "./images/cat2.jpg", "./images/cat3.jpg"],
    subtitles: ["Mama mia!", "Je t'adore", "Tropical cat", "White home cat", "Beach cat"],
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
};

const productTemplate = templater`<div class="product" productId=${'id'}>
<div class="product__image"><img src=${'images'} alt=${'title'}>
    <div class="product__detail">
    <a href="#" class="product__detail-btn">Detail view</a>
    </div>
</div>
<div class="product__info">
    <h3 class="product__title">${'title'}</h3>
    <p class="product__info__extra">${'description'}</p>
</div>
<div class="product__buy">
    <a href="#" class="add_to_card"><i class="fas fa-shopping-cart"></i>Add to card</a>
    <div class="product__prices">
    <i class="fas fa-dollar-sign"></i>
    <span class="product__price">${'price'}</span>
    </div>
</div>
</div>`;

const prodTemplate = productTemplate(product);
console.log(prodTemplate);

