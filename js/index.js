// index.js
const el = (selector) => document.querySelector(selector);

function openCart() {
    el(".cart-overlay").classList.add("transparentBcg");
    el(".cart").classList.add("showCart");
    updateTotal();
}

function closeCart() {
    el(".cart-overlay").classList.remove("transparentBcg");
    el(".cart").classList.remove("showCart");
}

function navbarToggle() {
    let navbarItem = document.querySelectorAll(".navbar__item");
    if (el(".navbar__item").classList.contains("active")) {
        for (let i = 0; i < navbarItem.length; i++) {
            navbarItem[i].classList.remove("active");
        }
    } else {
        for (let i = 0; i < navbarItem.length; i++) {
            navbarItem[i].classList.add("active");
        }
    }
}

function addProductToCart(content, item) {
    content.querySelector('.cart-item').setAttribute('id', item.id);
    content.querySelector('.item-title').textContent = item.title;
    content.querySelector('.item-amount').textContent = 1;
    content.querySelector('.item-price').textContent = item.price;
    content.querySelector('.item-image').setAttribute('src', item.image);
    content.querySelector('.item-image').setAttribute('alt', item.title);
    return content;
}

const products = [
    {
        id: 0,
        title: "Really Cool Cat",
        price: 189.99,
        image: "./images/01.jpg",
    },
    {
        id: 1,
        title: "Cool Dog",
        price: 229.99,
        image: "./images/02.jpg",
    },
    {
        id: 2,
        title: "Angry Dog",
        price: 255.99,
        image: "./images/03.jpg",
    },
];

// =============== Step 1 =====================

(function () {

    el(".close__btn").addEventListener("click", closeCart);
    el(".shopping__cart").addEventListener("click", openCart);
    el(".toggle").addEventListener("click", navbarToggle);

    const product = {
        id: 0,
        title: "Really Cool Cat",
        price: 189.99,
        image: "./images/01.jpg",
    };

    // Add item to cart
    el(".add_to_card").addEventListener("click", function () {
        let y = 180;
        el('.product__image').style.transform = 'rotateY(' + y + 'deg)';
        let val = el('.shopping__cart-items').textContent;
        val = +(val) + 1;
        el('.shopping__cart-items').textContent = val;

        let content = el("#cartItem").content;
        el('.cart-content').append(document.importNode(addProductToCart(content, product), true));

        el('.item-amount').textContent = val;

        // fa-chevron-up
        let plus = el('.fa-chevron-up');
        plus.addEventListener('click', function (e) {
            let val = el('.item-amount').textContent;
            val = +(val) + 1;
            el('.item-amount').textContent = val;
        });

        // fa-chevron-down
        let minus = el('.fa-chevron-down');
        minus.addEventListener('click', function (e) {
            let val = el('.item-amount').textContent;
            val = +(val) - 1;
            el('.item-amount').textContent = val;
        });
    });
})();

// =============== Step 2 =====================
// (function () {

//     el(".close__btn").addEventListener("click", closeCart);
//     el(".shopping__cart").addEventListener("click", openCart);
//     el(".toggle").addEventListener("click", navbarToggle);

//     // Add item to cart
//     el(".add_to_card").addEventListener("click", function () {
//         let y = 180;
//         el('.product__image').style.transform = 'rotateY(' + y + 'deg)';
//         let val = el('.shopping__cart-items').textContent;
//         val = +(val) + 1;
//         el('.shopping__cart-items').textContent = val;

//         let content = el("#cartItem").content;
//         el('.cart-content').append(document.importNode(addProductToCart(content, products[0]), true));

//         el('.item-amount').textContent = val;

//         // fa-chevron-up
//         let plus = el('.fa-chevron-up');
//         plus.addEventListener('click', function (e) {
//             let val = el('.item-amount').textContent;
//             val = +(val) + 1;
//             el('.item-amount').textContent = val;
//         });

//         // fa-chevron-down
//         let minus = el('.fa-chevron-down');
//         minus.addEventListener('click', function (e) {
//             let val = el('.item-amount').textContent;
//             val = +(val) - 1;
//             el('.item-amount').textContent = val;
//         });
//     });
// })();

// =============== Step 3 =====================
// (function () {

//     el(".close__btn").addEventListener("click", closeCart);
//     el(".shopping__cart").addEventListener("click", openCart);
//     el(".toggle").addEventListener("click", navbarToggle);

//     // Add item to cart

//     const addToCarts = document.querySelectorAll('.add_to_card');
    
//     addToCarts.forEach(function(addToCart) {
//         addToCart.addEventListener("click", function () {
//             let y = 180;
//             el('.product__image').style.transform = 'rotateY(' + y + 'deg)';
//             let val = el('.shopping__cart-items').textContent;
//             val = +(val) + 1;
//             el('.shopping__cart-items').textContent = val;

//             let content = el("#cartItem").content;
//             el('.cart-content').append(document.importNode(addProductToCart(content, products[0]), true));

//             el('.item-amount').textContent = val;

//             // fa-chevron-up
//             let plus = el('.fa-chevron-up');
//             plus.addEventListener('click', function (e) {
//                 let val = el('.item-amount').textContent;
//                 val = +(val) + 1;
//                 el('.item-amount').textContent = val;
//             });

//             // fa-chevron-down
//             let minus = el('.fa-chevron-down');
//             minus.addEventListener('click', function (e) {
//                 let val = el('.item-amount').textContent;
//                 val = +(val) - 1;
//                 el('.item-amount').textContent = val;
//             });
//         });
//     });
// })();

// =============== Step 4 =====================
// // this.closest productId
// (function () {

//     el(".close__btn").addEventListener("click", closeCart);
//     el(".shopping__cart").addEventListener("click", openCart);
//     el(".toggle").addEventListener("click", navbarToggle);

//     // Add item to cart

//     const addToCarts = document.querySelectorAll('.add_to_card');
    
//     addToCarts.forEach(function(addToCart) {
//         addToCart.addEventListener("click", function () {
            
//             let productParent = this.closest('.product');
            
//             // console.log(productParent);

//             productParent.querySelector('.product__image').style.transform = 'rotateY(180deg)';
//             let val = el('.shopping__cart-items').textContent;
//             val = +(val) + 1;
//             el('.shopping__cart-items').textContent = val;

//             let content = el("#cartItem").content;
            
//             let productId = productParent.getAttribute('productId');
            
//             el('.cart-content').append(document.importNode(addProductToCart(content, products[productId]), true));

//             el('.item-amount').textContent = val;

//             // fa-chevron-up
//             let plus = el('.fa-chevron-up');
//             plus.addEventListener('click', function (e) {
//                 let val = el('.item-amount').textContent;
//                 val = +(val) + 1;
//                 el('.item-amount').textContent = val;
//             });

//             // fa-chevron-down
//             let minus = el('.fa-chevron-down');
//             minus.addEventListener('click', function (e) {
//                 let val = el('.item-amount').textContent;
//                 val = +(val) - 1;
//                 el('.item-amount').textContent = val;
//             });
//         });
//     });
// })();

// =============== Step 5 =====================
// this.closest productId
// (function () {

//     el(".close__btn").addEventListener("click", closeCart);
//     el(".shopping__cart").addEventListener("click", openCart);
//     el(".toggle").addEventListener("click", navbarToggle);

//     const addToCarts = document.querySelectorAll('.add_to_card');
    
//     addToCarts.forEach(function(addToCart) {
//         addToCart.addEventListener("click", function () {
//             let productParent = this.closest('.product');
//             productParent.querySelector('.product__image').style.transform = 'rotateY(180deg)';
//             let val = el('.shopping__cart-items').textContent;
//             val = +(val) + 1;
//             el('.shopping__cart-items').textContent = val;
//             let content = el("#cartItem").content;
//             let productId = productParent.getAttribute('productId');
//             el('.cart-content').append(document.importNode(addProductToCart(content, products[productId]), true));
//         });
//     });

//     el('.cart-content').addEventListener(
//         'click',
//         function(e) {
//             if (e.target && e.target.matches('.fa-chevron-up')) {
//                 let plus = e.target.nextElementSibling;
//                 let val = plus.textContent;
//                 val = +(val) + 1;
//                 plus.textContent = val;
//             }
//             if (e.target && e.target.matches('.fa-chevron-down')) {
//                 let minus = e.target.previousElementSibling;
//                 let val = minus.textContent;
//                 val = +(val) - 1;
//                 minus.textContent = val;
//             }
//         },
//         false
//     );
// })();
// =============== Step 6 =====================
// remove item

// function updateTotal() {
//     let total = 0
//     let cartItems = document.querySelectorAll('.cart-item');
    
//     for (let i=0; i<cartItems.length; i++) {
//         let amount = cartItems[i].querySelector('.item-amount').textContent;
//         let price = cartItems[i].querySelector('.item-price').textContent;
//         curentTotal = amount * price;
//         total += curentTotal;
//     }
//     el('.cart-total').textContent = total;
//     el('.shopping__cart-items').textContent = cartItems.length;
// }

// (function () {

//     el(".close__btn").addEventListener("click", closeCart);
//     el(".shopping__cart").addEventListener("click", openCart);
//     el(".toggle").addEventListener("click", navbarToggle);

//     const addToCarts = document.querySelectorAll('.add_to_card');
    
//     addToCarts.forEach(function(addToCart) {
//         addToCart.addEventListener("click", function () {
//             let productParent = this.closest('.product');
//             productParent.querySelector('.product__image').style.transform = 'rotateY(180deg)';
//             let val = el('.shopping__cart-items').textContent;
//             val = +(val) + 1;
//             el('.shopping__cart-items').textContent = val;
//             let content = el("#cartItem").content;
//             let productId = productParent.getAttribute('productId');
//             el('.cart-content').append(document.importNode(addProductToCart(content, products[productId]), true));
//         });
//     });

//     el('.cart-content').addEventListener(
//         'click',
//         function(e) {
//             if (e.target && e.target.matches('.remove-item')) {
//                 e.target.parentNode.parentNode.remove();
//                 updateTotal();
//             }
//             if (e.target && e.target.matches('.fa-chevron-up')) {
//                 let plus = e.target.nextElementSibling;
//                 let val = plus.textContent;
//                 val = +(val) + 1;
//                 plus.textContent = val;
//                 updateTotal();
//             }
//             if (e.target && e.target.matches('.fa-chevron-down')) {
//                 let minus = e.target.previousElementSibling;
//                 let val = minus.textContent;
//                 val = +(val) - 1;
//                 minus.textContent = val;
//                 updateTotal();
//             }
//         },
//         false
//     );
// })();
