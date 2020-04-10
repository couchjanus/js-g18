// index.js

function openCart() {
    document.querySelector(".cart-overlay").classList.add("transparentBcg");
    document.querySelector(".cart").classList.add("showCart");
}

function closeCart() {
    document.querySelector(".cart-overlay").classList.remove("transparentBcg");
    document.querySelector(".cart").classList.remove("showCart");
}

function updateTotal() {
    let total = 0
    let amount = document.querySelector('.item-amount').textContent;
    let price = document.querySelector('.item-price').textContent;
    total = amount * price;
    document.querySelector('.cart-total').textContent = total;
}


function navbarToggle() {

    if (document.querySelector(".navbar__item").classList.contains("active")) {
         for(let i = 0; i < navbarItem.length; i++){
             navbarItem[i].classList.remove("active");
         }
     } else {
         for(let i = 0; i < navbarItem.length; i++){
             navbarItem[i].classList.add("active");
         }
     }   
}
// =============== Step 1 =====================
(function(){

    document.querySelector(".close__btn").addEventListener("click", closeCart);
    document.querySelector(".shopping__cart").addEventListener("click", openCart);

    let navbarItem = document.querySelectorAll(".navbar__item");
   
    document.querySelector(".toggle").addEventListener("click", function () {

       if (document.querySelector(".navbar__item").classList.contains("active")) {
            for(let i = 0; i < navbarItem.length; i++){
                navbarItem[i].classList.remove("active");
            }
        } else {
            for(let i = 0; i < navbarItem.length; i++){
                navbarItem[i].classList.add("active");
            }
        }   
    });
    
    // Add item to cart
    document.querySelector(".add_to_card").addEventListener("click", function () {
        let y = 180;
        document.querySelector('.product__image').style.transform = 'rotateY(' + y + 'deg)';
        let val = document.querySelector('.shopping__cart-items').textContent;
        val = +(val)+1;
        document.querySelector('.shopping__cart-items').textContent = val;
        
        let content = document.getElementById("cartItem").content;
        document.querySelector('.cart-content').appendChild(content);
        document.querySelector('.item-amount').textContent = val;

    });

    // fa-chevron-up
    let plus = document.querySelector('.fa-chevron-up');
    plus.addEventListener('click', function(e) {
        console.log(document.querySelector('.item-amount').textContent);
        let val = document.querySelector('.item-amount').textContent;
        val = +(val)+1;
        document.querySelector('.item-amount').textContent = val;
        updateTotal();
        
    });

    // fa-chevron-down
    let minus = document.querySelector('.fa-chevron-down');
    minus.addEventListener('click', function(e) {
        console.log(document.querySelector('.item-amount').textContent);
        let val = document.querySelector('.item-amount').textContent;
        val = +(val)-1;
        document.querySelector('.item-amount').textContent = val;
        updateTotal();
    });

    
})();


// =============== Step 2 =====================

// (function(){

//     document.querySelector(".close__btn").addEventListener("click", closeCart);
//     document.querySelector(".shopping__cart").addEventListener("click", openCart);

//     let navbarItem = document.querySelectorAll(".navbar__item");
   
//     document.querySelector(".toggle").addEventListener("click", function () {

//        if (document.querySelector(".navbar__item").classList.contains("active")) {
//             for(let i = 0; i < navbarItem.length; i++){
//                 navbarItem[i].classList.remove("active");
//             }
//         } else {
//             for(let i = 0; i < navbarItem.length; i++){
//                 navbarItem[i].classList.add("active");
//             }
//         }   
//     });
    
//     // Add item to cart
//     document.querySelector(".add_to_card").addEventListener("click", function () {
//         let y = 180;
//         document.querySelector('.product__image').style.transform = 'rotateY(' + y + 'deg)';
//         let val = document.querySelector('.shopping__cart-items').textContent;
//         val = +(val)+1;
//         document.querySelector('.shopping__cart-items').textContent = val;
        
//         let content = document.getElementById("cartItem").content;
//         document.querySelector('.cart-content').append(document.importNode(content, true));
//         document.querySelector('.item-amount').textContent = val;

//         // fa-chevron-up
//         let plus = document.querySelector('.fa-chevron-up');
//         plus.addEventListener('click', function(e) {
//             let val = document.querySelector('.item-amount').textContent;
//             val = +(val)+1;
//             document.querySelector('.item-amount').textContent = val;
//             updateTotal();
//         });

//         // fa-chevron-down
//         let minus = document.querySelector('.fa-chevron-down');
//         minus.addEventListener('click', function(e) {
//             let val = document.querySelector('.item-amount').textContent;
//             val = +(val)-1;
//             document.querySelector('.item-amount').textContent = val;
//             updateTotal();
//         });

//     });
   
// })();

// =============== Step 3 =====================

function addProductToCart(content, item) {
    content.querySelector('.cart-item').setAttribute('id', item.id);
    content.querySelector('.item-title').textContent = item.title;
    content.querySelector('.item-amount').textContent = 1;
    content.querySelector('.item-price').textContent = item.price;
    content.querySelector('.item-image').setAttribute('src', item.image);
    content.querySelector('.item-image').setAttribute('alt', item.title);
    return content;
}
   
// (function(){

//     document.querySelector(".close__btn").addEventListener("click", closeCart);
//     document.querySelector(".shopping__cart").addEventListener("click", openCart);

//     let navbarItem = document.querySelectorAll(".navbar__item");
   
//     document.querySelector(".toggle").addEventListener("click", navbarToggle);

//     const product = {
//         id: 0,
//         title: "Really Cool Cat",
//         price: 189.99,
//         image: "./images/01.jpg",
//     };
    
//     // Add item to cart
//     document.querySelector(".add_to_card").addEventListener("click", function () {
//         let y = 180;
//         document.querySelector('.product__image').style.transform = 'rotateY(' + y + 'deg)';
//         let val = document.querySelector('.shopping__cart-items').textContent;
//         val = +(val)+1;
//         document.querySelector('.shopping__cart-items').textContent = val;
        
//         let content = document.getElementById("cartItem").content;
//         document.querySelector('.cart-content').append(document.importNode(addProductToCart(content, product), true));

//         document.querySelector('.item-amount').textContent = val;

//         // fa-chevron-up
//         let plus = document.querySelector('.fa-chevron-up');
//         plus.addEventListener('click', function(e) {
//             let val = document.querySelector('.item-amount').textContent;
//             val = +(val)+1;
//             document.querySelector('.item-amount').textContent = val;
//             updateTotal();
//         });

//         // fa-chevron-down
//         let minus = document.querySelector('.fa-chevron-down');
//         minus.addEventListener('click', function(e) {
//             let val = document.querySelector('.item-amount').textContent;
//             val = +(val)-1;
//             document.querySelector('.item-amount').textContent = val;
//             updateTotal();
//         });

//     });
   
// })();

// =============== Step 4 =====================

// (function(){

//     document.querySelector(".close__btn").addEventListener("click", closeCart);
//     document.querySelector(".shopping__cart").addEventListener("click", openCart);

//     let navbarItem = document.querySelectorAll(".navbar__item");
   
//     document.querySelector(".toggle").addEventListener("click", navbarToggle);

//     const product = {
//         id: 0,
//         title: "Really Cool Cat",
//         price: 189.99,
//         image: "./images/01.jpg",
//     };
    
//     // Add item to cart
//     document.querySelector(".add_to_card").addEventListener("click", function () {
//         let y = 180;
//         document.querySelector('.product__image').style.transform = 'rotateY(' + y + 'deg)';
//         let val = document.querySelector('.shopping__cart-items').textContent;
//         val = +(val)+1;
//         document.querySelector('.shopping__cart-items').textContent = val;
        
//         let content = document.getElementById("cartItem").content;

//         document.querySelector('.cart-content').append(addProductToCart(content.cloneNode(true),product));
//         document.querySelector('.item-amount').textContent = val;

//         // fa-chevron-up
//         let plus = document.querySelector('.fa-chevron-up');
//         plus.addEventListener('click', function(e) {
//             let val = document.querySelector('.item-amount').textContent;
//             val = +(val)+1;
//             document.querySelector('.item-amount').textContent = val;
//             updateTotal();
//         });

//         // fa-chevron-down
//         let minus = document.querySelector('.fa-chevron-down');
//         minus.addEventListener('click', function(e) {
//             let val = document.querySelector('.item-amount').textContent;
//             val = +(val)-1;
//             document.querySelector('.item-amount').textContent = val;
//             updateTotal();
//         });

//     });
   
// })();
