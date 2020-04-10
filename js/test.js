let example = document.querySelector('.example');
// Для создания элементов используется метод:document.createElement(elementName)
let div = document.createElement("div");

// Для создания текстового узла объект document имеет метод:createTextNode(text): создает и возвращает текстовый узел. 
let divText = document.createTextNode("Hello Text!");
    
let h2 = document.createElement("h2");
h2.textContent = "Hello h2 Element!";

div.appendChild(divText);
example.appendChild(div);

// Вставляемый узел становится последним в списке дочерних узлов элемента.
let a = document.createElement('a');
a.href = "http://google.com";
a.innerText = "Goodling!";
example.appendChild(a);


// Метод parent.insertBefore(узел, место вставки) для добавления узла в документ.

let element = document.createElement("article");
element.innerHTML = "<h2>Hello Article!</h2><div>Вставка в самое начало родителя</div>";
let myParent = document.querySelector('.example');
// Вставка в самое начало родителя, то есть перед первым узлом
myParent.insertBefore(element, parent.firstChild);


// Вставка после конкретного элемента parent.nextElementSibling
// вставка перед тем узлом, который находится сразу за узлом parent.nextElementSibling

let element_next = document.createElement("article");
element_next.innerHTML = "<h2>Hello Sibling!</h2><div>Вставка перед тем узлом, который находится сразу за узлом parent.nextElementSibling</div>";
console.log(myParent.nextElementSibling);
myParent.insertBefore(element_next, parent.nextElementSibling);


// Метод parent.replaceChild(новый узел, старый узел) совмещает в себе сразу два действия: удаляет один узел и вставляет на его место новый.

let h3 = document.createElement("h3");  // Создаем новый пустой элемент
let h3_content = document.createTextNode("New replacement span element.");
h3.appendChild(h3_content); // Добавляем контент в созданный нами узел
// создаем ссылку на элемент который будем заменять
let replace = document.querySelector('.example-next');
let parentDiv = replace.parentNode;
parentDiv.replaceChild(h3, replace); // заменяем элемент replace на h3


// Добавить новый узел в документ можно простой вставкой HTML-кода в виде строки. Для этого используется метод insertAdjacentHTML().

let list = document.querySelector('.example-list');
/* добавляем новый элемент */
list.insertAdjacentHTML('beforeend', '<li class="item"><a href="#">Blog</a></li>');

let templateSource = document.getElementById("template-item").innerHTML; 
let article = document.createElement("article");
article.innerHTML = document.getElementById("template-item").innerHTML;
document.querySelector('.example').appendChild(article);


let content = document.getElementById("table-body").content;
document.querySelector('table').appendChild(content);

