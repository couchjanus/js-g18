// objects
const user = {
    name: 'Chris',
    username: 'chrisoncode'
};

// arrays

const users = ['chris', 'nick', 'holly'];
const luckyNumbers = [1, 43, 54, 132];
const whatever = ['chris', 1, 'holly'];

console.log(typeof(message));

console.log(typeof(b1));
console.log(typeof(num3));
console.log(typeof(users));
console.log(typeof(user));

// typeof null возвращает строку "object" , потому что специальное значение null счи­тается ссылкой на пустой объект. 

console.log('typeof null возвращает строку "object" :', typeof(null));
   
// Технически функции считаются в ECMAScript объектами, а не отдельным типом дан­ных. 

console.log("Технически функции считаются в ECMAScript объектами, а не отдельным типом дан­ных: ", typeof(function(){}));
   
// Однако функции имеют некоторые специальные свойства, вследствие чего оператор typeof отличает их от других объектов.
   

// Неопределенный тип (undefined) содержит единственное специальное значение undefined. 

var messageUndifined;
console.log("Неопределенный тип (undefined) содержит единственное специальное значение undefined", messageUndifined == undefined);

// Нулевой тип (Null) содержит единственный элемент - специальное значение null. 
// Логически null - это указатель на пустой объект, поэтому оператор typeof возвращает для него строку "object" :

var car=null; // пull
console.log("Нулевой тип (Null) содержит единственный элемент - специальное значение null: ", typeof car); // "object "

console.log("isNaN(NaN)= ", isNaN(NaN));   // true
console.log("isNaN(10)= ", isNaN(10)) ;   // false
console.log("isNaN('10')= ", isNaN("10"));  // false
console.log("isNaN('Ыuе')= ", isNaN("Ыuе")); // true
console.log("isNaN(true)= ", isNaN(true));  // false

// Унарный оператор «плюс» работает так же, как функция Number().
  
console.log("Унарный оператор «плюс» работает так же, как функция Number() ",(+"1.1") + (+"1.1")); // 2.2



