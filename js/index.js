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
    content.querySelector('.item-image').setAttribute('src', item.images[0]);
    content.querySelector('.item-image').setAttribute('alt', item.title);
    return content;
}
function updateTotal() {
    let total = 0
    let cartItems = document.querySelectorAll('.cart-item');
    
    for (let i=0; i<cartItems.length; i++) {
        let amount = cartItems[i].querySelector('.item-amount').textContent;
        let price = cartItems[i].querySelector('.item-price').textContent;
        curentTotal = amount * price;
        total += curentTotal;
    }
    el('.cart-total').textContent = parseFloat(total).toFixed(2);
    el('.shopping__cart-items').textContent = cartItems.length;
}

function makeShowcase(products) {
    let result = "";
    products.forEach(product => {
      result += `
        <!-- single product -->
        <div class="product" productId=${product.id}>
        <div class="product__image"><img src=${product.images[0]} alt=${product.title}>
            <div class="product__detail">
            <a href="#" class="product__detail-btn">Detail view</a>
            </div>
        </div>
        <div class="product__info">
            <h3 class="product__title">${product.title}</h3>
            <p class="product__info__extra">${product.description}</p>
        </div>
        <div class="product__buy">
            <a href="#" class="add_to_card"><i class="fas fa-shopping-cart"></i>Add to card</a>
            <div class="product__prices">
            <i class="fas fa-dollar-sign"></i>
            <span class="product__price">${product.price}</span>
            </div>
        </div>
        </div>
        <!-- end of single product -->
   `;
    });
    document.querySelector('.showcase-section').innerHTML = result;
  }

// =============== Step 1 =====================
(function () {

    el(".close__btn").addEventListener("click", closeCart);
    el(".shopping__cart").addEventListener("click", openCart);
    el(".toggle").addEventListener("click", navbarToggle);

    const addToCarts = document.querySelectorAll('.add_to_card');
    
    addToCarts.forEach(function(addToCart) {
        addToCart.addEventListener("click", function () {
            let productParent = this.closest('.product');
            productParent.querySelector('.product__image').style.transform = 'rotateY(180deg)';
            let val = el('.shopping__cart-items').textContent;
            val = +(val) + 1;
            el('.shopping__cart-items').textContent = val;
            let content = el("#cartItem").content;
            let productId = productParent.getAttribute('productId');
            el('.cart-content').append(document.importNode(addProductToCart(content, products[productId]), true));
        });
    });

    el('.cart-content').addEventListener(
        'click',
        function(e) {
            if (e.target && e.target.matches('.remove-item')) {
                e.target.parentNode.parentNode.remove();
                updateTotal();
            }
            if (e.target && e.target.matches('.fa-chevron-up')) {
                let plus = e.target.nextElementSibling;
                let val = plus.textContent;
                val = +(val) + 1;
                plus.textContent = val;
                updateTotal();
            }
            if (e.target && e.target.matches('.fa-chevron-down')) {
                let minus = e.target.previousElementSibling;
                let val = minus.textContent;
                val = +(val) - 1;
                minus.textContent = val;
                updateTotal();
            }
        },
        false
    );
})();

// =============== Step 2 =====================

// (function () {

//     el(".close__btn").addEventListener("click", closeCart);
//     el(".shopping__cart").addEventListener("click", openCart);
//     el(".toggle").addEventListener("click", navbarToggle);
    
//     makeShowcase(products);
    
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

// =============== Step 3 =====================
// (function () {

//     el(".close__btn").addEventListener("click", closeCart);
//     el(".shopping__cart").addEventListener("click", openCart);
//     el(".toggle").addEventListener("click", navbarToggle);
    
//     makeShowcase(products);
    
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

//     function carouselItem(product, i) {
//         const div = document.createElement("div");
//         div.classList.add("carousel-detail-item");
//         div.innerHTML = `
//                 <!-- carousel item -->

//                 <div class="carousel-item__image" style="background-image:url(${product.images[i]})"></div>
//                 <div class="carousel-item__info">
//                     <div class="carousel-item__container">
//                         <h2 class="carousel-item__subtitle">${product.subtitles[i]} </h2>
//                         <h1 class="carousel-item__title">${product.title}</h1>
//                         <div class="product__prices">
//                             <i class="fas fa-dollar-sign"></i>
//                             <span class="product__price">${product.price}</span>
//                         </div>
//                         <p class="carousel-item__description">${product.description}</p>
//                         <a href="#" class="add_to_card"><i class="fas fa-shopping-cart"></i>Add to card</a>
                        
//                     </div>
//                 </div>
//               <!-- carousel item -->
//         `;
//         return div;
//       }
    
    // function carousel(product) {
    //     console.log(product);
    //     let catouselNav = el('#catouselNav').content;

    //     for (let i = 0; i < product.images.length; i++) {
    //         catouselNav
    //             .querySelector('.carousel-detail')
    //             .append(carouselItem(product, i));
    //     }

    //     document.querySelector('.showcase-section').replaceWith(document.importNode(catouselNav, true));
    //     document
    //     .querySelectorAll('.carousel-detail-item')[0]
    //     .classList.add('active-slide');
    // }

//     // ----------------------------------------------------
//     const viewDetails = document.querySelectorAll('.product__detail-btn');
//     viewDetails.forEach(function(element) {
//         element.addEventListener('click', function() {
//             let id = this.closest('.product').getAttribute('productId');
//             carousel(products[id]);
//         });
//     });
// })();

// =============== Step 4 =====================
// (function () {

//     el(".close__btn").addEventListener("click", closeCart);
//     el(".shopping__cart").addEventListener("click", openCart);
//     el(".toggle").addEventListener("click", navbarToggle);
    
//     makeShowcase(products);
    
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

//     function carouselItem(product, i) {
//         const div = document.createElement("div");
//         div.classList.add("carousel-detail-item");
//         div.innerHTML = `
//                 <!-- carousel item -->

//                 <div class="carousel-item__image" style="background-image:url(${product.images[i]})"></div>
//                 <div class="carousel-item__info">
//                     <div class="carousel-item__container">
//                         <h2 class="carousel-item__subtitle">${product.subtitles[i]} </h2>
//                         <h1 class="carousel-item__title">${product.title}</h1>
//                         <div class="product__prices">
//                             <i class="fas fa-dollar-sign"></i>
//                             <span class="product__price">${product.price}</span>
//                         </div>
//                         <p class="carousel-item__description">${product.description}</p>
//                         <a href="#" class="add_to_card"><i class="fas fa-shopping-cart"></i>Add to card</a>
                        
//                     </div>
//                 </div>
//               <!-- carousel item -->
//         `;
//         return div;
//       }
    
//     function carousel(product) {
//         console.log(product);
//         let catouselNav = el('#catouselNav').content;

//         for (let i = 0; i < product.images.length; i++) {
//             catouselNav
//                 .querySelector('.carousel-detail')
//                 .append(carouselItem(product, i));
//         }

//         document.querySelector('.showcase-section').replaceWith(document.importNode(catouselNav, true));
//         document
//         .querySelectorAll('.carousel-detail-item')[0]
//         .classList.add('active-slide');

//         const total = document.querySelectorAll('.carousel-detail-item').length;

        // let current = 0;
        // moveSlide('#moveRight', 1);
        // moveSlide('#moveLeft', -1);

        // function moveSlide(eId, step) {
        //     el(eId).addEventListener('click', function() {
        //         let prev_next = current;
        //         current = current + step;
        //         setSlide(prev_next, current);
        //     });
        // }

    //     function setSlide(prev, next) {
    //         let slide = current;
    //         if (next > total - 1) {
    //             slide = 0;
    //             current = 0;
    //         }
    //         if (next < 0) {
    //             slide = total - 1;
    //             current = total - 1;
    //         }
    //         document
    //             .querySelectorAll('.carousel-detail-item')
    //             [prev].classList.remove('active-slide');
    //         document
    //             .querySelectorAll('.carousel-detail-item')
    //             [slide].classList.add('active-slide');
    //     }
    // }

//     // ----------------------------------------------------
//     const viewDetails = document.querySelectorAll('.product__detail-btn');
//     viewDetails.forEach(function(element) {
//         element.addEventListener('click', function() {
//             let id = this.closest('.product').getAttribute('productId');
//             carousel(products[id]);
//         });
//     });
// })();
// =============== Step 5 =====================

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

function templater(strings, ...keys) {
 return function(data) {
 let temp = strings.slice();
 
 keys.forEach((key, i) => {
    let value = data[key];
    if (Array.isArray(data[key])) {
        value = data[key][0];
    }
    temp[i] = temp[i] + value;
 });
 return temp.join('');
 }
};

// (function () {

//     el(".close__btn").addEventListener("click", closeCart);
//     el(".shopping__cart").addEventListener("click", openCart);
//     el(".toggle").addEventListener("click", navbarToggle);
    
//     // makeShowcase(products);

//     let result = "";
//     products.forEach(product => {
//       result += productTemplate(product);
//     });
//     document.querySelector('.showcase-section').innerHTML = result;
        
    
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

//     function carouselItem(product, i) {
//         const div = document.createElement("div");
//         div.classList.add("carousel-detail-item");
//         div.innerHTML = `
//                 <!-- carousel item -->

//                 <div class="carousel-item__image" style="background-image:url(${product.images[i]})"></div>
//                 <div class="carousel-item__info">
//                     <div class="carousel-item__container">
//                         <h2 class="carousel-item__subtitle">${product.subtitles[i]} </h2>
//                         <h1 class="carousel-item__title">${product.title}</h1>
//                         <div class="product__prices">
//                             <i class="fas fa-dollar-sign"></i>
//                             <span class="product__price">${product.price}</span>
//                         </div>
//                         <p class="carousel-item__description">${product.description}</p>
//                         <a href="#" class="add_to_card"><i class="fas fa-shopping-cart"></i>Add to card</a>
                        
//                     </div>
//                 </div>
//               <!-- carousel item -->
//         `;
//         return div;
//       }
    
//     function carousel(product) {
//         console.log(product);
//         let catouselNav = el('#catouselNav').content;

//         for (let i = 0; i < product.images.length; i++) {
//             catouselNav
//                 .querySelector('.carousel-detail')
//                 .append(carouselItem(product, i));
//         }

//         document.querySelector('.showcase-section').replaceWith(document.importNode(catouselNav, true));
//         document
//         .querySelectorAll('.carousel-detail-item')[0]
//         .classList.add('active-slide');

//         const total = document.querySelectorAll('.carousel-detail-item').length;

//         let current = 0;
//         moveSlide('#moveRight', 1);
//         moveSlide('#moveLeft', -1);

//         function moveSlide(eId, step) {
//             el(eId).addEventListener('click', function() {
//                 let prev_next = current;
//                 current = current + step;
//                 setSlide(prev_next, current);
//             });
//         }

//         function setSlide(prev, next) {
//             let slide = current;
//             if (next > total - 1) {
//                 slide = 0;
//                 current = 0;
//             }
//             if (next < 0) {
//                 slide = total - 1;
//                 current = total - 1;
//             }
//             document
//                 .querySelectorAll('.carousel-detail-item')
//                 [prev].classList.remove('active-slide');
//             document
//                 .querySelectorAll('.carousel-detail-item')
//                 [slide].classList.add('active-slide');
//         }
//     }

//     // ----------------------------------------------------
//     const viewDetails = document.querySelectorAll('.product__detail-btn');
//     viewDetails.forEach(function(element) {
//         element.addEventListener('click', function() {
//             let id = this.closest('.product').getAttribute('productId');
//             carousel(products[id]);
//         });
//     });
// })();
// =============== Step 6 =====================
