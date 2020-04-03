// index.js
// declaring variables
var thing = 'first';
      
var a = 2;
// Ключевое слово var не обращает внимания на блоки кода.
{
    var a = 10;
}
console.log("the value of cat is ", undifinedCat);
var undifinedCat = 'Red Cat';

// Ключевое слово let
let a1   = 10;
console.log("the value of a is ", a1);

{
    let a1 = 3;
    console.log("the value of a inside block is ", a1);
}

console.log("the value of a outside block is ", a1);
 
// console.log("the value of cat is ", cat);
//  ReferenceError: can't access lexical declaration
// `cat' before initialization
   
let cat = 'Red Cat';
console.log("the value of cat is ", cat);

const NAME_ARR   = [];
const NAME = 'Maybe';
NAME_ARR.push('My name');
NAME_ARR.push(NAME);
console.log(NAME_ARR[0],' is ', NAME_ARR[1]);

console.log(1/2); /* возвращает 0.5 */
console.log(1/2 == 1.0/2.0); /* возвращает true */

// Для создания вложенного блока вызовите console.group(). 
console.group('Addition');
     console.log('Addition');
// Для выхода из текущей группы вызовите console.groupEnd().
console.groupEnd();

let b   = 3;
let c   = 15;
let d = '5';
let e   = 'My name';
let f = 'Maybe';

console.group('Addition');
    console.log(a + b); // 13
    console.log(a + d); // 105
    console.log(e + ' ' + f);
    console.log(e += ' is the Batman');
console.groupEnd();

// Можно  использовать директиву "%c" для применения стилей CSS при выводе в консоль. 
// Часть текста до директивы не затрагивается стилем, а часть после - будет стилизована:

console.log("Никогда %cне делайте так!", "color: red; font-size: 24px; background-color: yellow; padding: 2px;");


console.group('Multiplication');
console.log(a * 3); // 30
console.log(a * b); // 30
console.log(b * c); // 45
console.groupEnd();

a++;
b--;
--b;
c += a;
console.group('Incrementing');
  console.log(a); // 11   
  console.log(b); // 1
  console.log(c); // 25
console.groupEnd();


var x = 30,
y = 3;

console.log("Присваивание со сложением x += y", x += y);
console.log("Присваивание с вычитанием x-=y x=x-y", x -= y);
console.log("Присваивание с умножением x *= y x = x * y", x *= y);
console.log("Присваивание с делением x /= y x = x / y", x /= y);
console.log("Присваивание по модулю x %= y x = x % y", x %= y);

// declaring strings

var srt1 = 'this is my string',
    srt2 = 'my second string',
    srt3 = "my name is chris";

// numbers

let num1 = 10,
num2 = 500,
num3 = 3.14;

// booleans (truthy / falsy)

let b1 = true;
    b2 = false;
