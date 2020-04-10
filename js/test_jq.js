// подход с использованием jQuery:
$('.example').append('<a href="http://google.com">Googling!</a>');
// методы append, appendTo и им подобные при вызове со строковым аргументом всегда считают, что вы передали им html-код.

//   кроссбраузерный и безопасный вариант:
$('<a>', {
   href: 'http://google.com',
   text: 'Googling!'
}).appendTo('.example');

// $(".hello").appendTo(".container");
// $(".hello").clone().appendTo(".container");

// $(".hello").clone() // сделаем копию элемента hello
//     .addClass("newElement") // добавим класс newElement
//     .text("Hello Again!") // изменим текст внутри нее
//     .appendTo(".container"); // вставим элемент в конец container