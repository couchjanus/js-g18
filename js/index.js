// index.js

function openCart() {
    showCart();
    el(".cart-overlay").classList.add("transparentBcg");
    el(".cart").classList.add("showCart");
    updateTotal();
}

function closeCart() {
    el(".cart-overlay").classList.remove("transparentBcg");
    el(".cart").classList.remove("showCart");
}


// =============== Step 1 =====================
(function () {

    el(".close__btn").addEventListener("click", closeCart);
    el(".shopping__cart").addEventListener("click", openCart);
    el(".toggle").addEventListener("click", navbarToggle);
    
    if (window.sessionStorage && window.localStorage) {
        // объекты sessionStorage и localstorage поддерживаются
        console.log('объекты sessionStorage и localstorage поддерживаются');
    } else {
        // объекты sessionStorage и localstorage не поддерживаются
        console.log('объекты sessionStorage и localstorage не поддерживаются');
    }

    try { 
        localStorage.getItem("basket") ?
        localStorage.getItem("basket") :
        localStorage.setItem("basket", "объект");
        console.log('localStorage', localStorage.getItem("basket")); 
    } catch (e) {
      	if (e == QUOTA_EXCEEDED_ERR) { 
            console.log('Превышен лимит localStorage');  
        }
    }

    let result = "";
    products.forEach(product => {
      result += productTemplate(product);
    });
    document.querySelector('.showcase-section').innerHTML = result;
    
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
    
    // ----------------------------------------------------
    const viewDetails = document.querySelectorAll('.product__detail-btn');
    viewDetails.forEach(function(element) {
        element.addEventListener('click', function() {
            let id = this.closest('.product').getAttribute('productId');
            carousel(products[id]);
        });
    });
})();

// =============== Step 2 =====================

// function showCart() {
//     let shoppingCart = getProducts();

//     if (shoppingCart.length == 0) {
//         console.log("Your Shopping Cart is Empty!");
//         return;
//     }
//     console.log("Your Shopping Cart: ", shoppingCart);
// }

// function saveCartToStorage(product) {
//     let tmpProducts = getProducts();
//     console.log(tmpProducts);
//     tmpProducts.push(product);
//     window.localStorage.setItem("basket", JSON.stringify(tmpProducts));
//     console.log(getProducts());
// }

// (function () {

//     el(".close__btn").addEventListener("click", closeCart);
//     el(".shopping__cart").addEventListener("click", openCart);
//     el(".toggle").addEventListener("click", navbarToggle);

//     // initStorage();
    
//     if (initStorage()) {
//         console.log("It's basket storage");
//         console.log(typeof localStorage["basket"]);
//     }

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
//             // 
//             saveCartToStorage(products[productId]);
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
    
//     // ----------------------------------------------------
//     const viewDetails = document.querySelectorAll('.product__detail-btn');
//     viewDetails.forEach(function(element) {
//         element.addEventListener('click', function() {
//             let id = this.closest('.product').getAttribute('productId');
//             carousel(products[id]);
//         });
//     });
// })();
// =============== Step 3 =====================

// class Product {
//     constructor(id, name, price, image, amount){
//           this.id = id;
//           this.name = name;
//           this.price = price;
//           this.image = image;
//           this.amount = amount;
//     }
// }

// function saveCartToStorage(product) {

//     let tmpProducts = getProducts();

//     if(tmpProducts.length > 0){
//       let exist = tmpProducts.some(elem => {
//         return elem.id === product.id;
//       });
//       if(exist){
//         tmpProducts.forEach(elem => {
//             if(elem.id === product.id){
//               elem.amount += 1;
//             }
//         })
//       } else {
//         tmpProducts.push(new Product(product.id, product.name, product.price, product.images[0], 1));
//       }
//     }
//     else{
//         tmpProducts.push(new Product(product.id, product.name, product.price, product.images[0], 1));
//     }
//     localStorage.setItem("basket",JSON.stringify(tmpProducts));
// }

// function showCart() {
//     let shoppingCart = getProducts();

//     if (shoppingCart.length == 0) {
//         console.log("Your Shopping Cart is Empty!");
//         return;
//     }
//     console.log("Your Shopping Cart: ", shoppingCart);
// }

// (function () {

//     el(".close__btn").addEventListener("click", closeCart);
//     el(".shopping__cart").addEventListener("click", openCart);
//     el(".toggle").addEventListener("click", navbarToggle);
    
//     if (initStorage()) {
//         console.log("It's basket storage");
//         console.log(typeof localStorage["basket"]);
//     }

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
//             // 
//             saveCartToStorage(products[productId]);
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
// function showCart() {
//     let shoppingCart = getProducts();

//     if (shoppingCart.length == 0) {
//         console.log("Your Shopping Cart is Empty!");
//         return;
//     }
//     document.querySelector(".cart-content").innerHTML = '';
//     shoppingCart.forEach(function (item) {
//         console.log(item);
//         let content = el("#cartItem").content;
//         el('.cart-content').append(document.importNode(addProductToCart(content, item), true));
//     });
// }

// (function () {

//     el(".close__btn").addEventListener("click", closeCart);
//     el(".shopping__cart").addEventListener("click", openCart);
//     el(".toggle").addEventListener("click", navbarToggle);
    
//     if (initStorage()) {
//         console.log("It's basket storage");
//         console.log(typeof localStorage["basket"]);
//     }

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
            
//             let productId = productParent.getAttribute('productId');
//             // 
//             saveCartToStorage(products[productId]);
            
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

// function plusProduct(id){
//     let tmpProducts = getProducts();
//     tmpProducts.forEach(elem => {
//         if(elem.id === +(id)){
//           elem.amount += 1;
//         }
//     });
//     window.localStorage.setItem("basket",JSON.stringify(tmpProducts));
// }

// function minusProduct(id){
//     let tmpProducts = getProducts();
//     tmpProducts.forEach(elem => {
//         if(elem.id === +(id)){
//           elem.amount -= 1;
//         }
//     });
//     window.localStorage.setItem("basket",JSON.stringify(tmpProducts));
// }

// (function () {

//     el(".close__btn").addEventListener("click", closeCart);
//     el(".shopping__cart").addEventListener("click", openCart);
//     el(".toggle").addEventListener("click", navbarToggle);
    
//     if (initStorage()) {
//         console.log("It's basket storage");
//         console.log(typeof localStorage["basket"]);
//     }

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
            
//             let productId = productParent.getAttribute('productId');
//             // 
//             saveCartToStorage(products[productId]);
            
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
//                 let id = plus.closest('.cart-item').getAttribute('id');
//                 plusProduct(id);
//                 updateTotal();
//             }
//             if (e.target && e.target.matches('.fa-chevron-down')) {
//                 let minus = e.target.previousElementSibling;
//                 let val = minus.textContent;
                
//                 if (val > 1) {
//                     val = +(val) - 1;
//                     minus.textContent = val;
//                     let id = minus.closest('.cart-item').getAttribute('id');
//                     minusProduct(id);
//                 }
//                 updateTotal();
//             }
//         },
//         false
//     );
    
//     // ----------------------------------------------------
//     const viewDetails = document.querySelectorAll('.product__detail-btn');
//     viewDetails.forEach(function(element) {
//         element.addEventListener('click', function() {
//             let id = this.closest('.product').getAttribute('productId');
//             carousel(products[id]);
//         });
//     });

//     // clear-cart
//     document.querySelector('.clear-cart').addEventListener('click', () => {
//         localStorage.removeItem('basket');
//         initStorage();
//         document.querySelector('.cart-content').innerHTML = '';
//         updateTotal();
//     });
 
// })();

// =============== Step 6 =====================

// function removeProduct(index){
//     let tmpProducts = getProducts();
//     tmpProducts.splice(tmpProducts.indexOf(tmpProducts.find(x => x.id === +(index))), 1);
//     window.localStorage.setItem("basket",JSON.stringify(tmpProducts));
// }


// (function () {

//     el(".close__btn").addEventListener("click", closeCart);
//     el(".shopping__cart").addEventListener("click", openCart);
//     el(".toggle").addEventListener("click", navbarToggle);
    
//     if (initStorage()) {
//         console.log("It's basket storage");
//         console.log(typeof localStorage["basket"]);
//     }

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
            
//             let productId = productParent.getAttribute('productId');
//             // 
//             saveCartToStorage(products[productId]);
            
//         });
//     });

//     el('.cart-content').addEventListener(
//         'click',
//         function(e) {
//             if (e.target && e.target.matches('.remove-item')) {
//                 let index = e.target.closest('.cart-item').getAttribute('id');
//                 removeProduct(index);
//                 e.target.parentNode.parentNode.remove();
//                 updateTotal();
//             }
//             if (e.target && e.target.matches('.fa-chevron-up')) {
//                 let plus = e.target.nextElementSibling;
//                 let val = plus.textContent;
//                 val = +(val) + 1;
//                 plus.textContent = val;
//                 let id = plus.closest('.cart-item').getAttribute('id');
//                 plusProduct(id);
//                 updateTotal();
//             }
//             if (e.target && e.target.matches('.fa-chevron-down')) {
//                 let minus = e.target.previousElementSibling;
//                 let val = minus.textContent;
                
//                 if (val > 1) {
//                     val = +(val) - 1;
//                     minus.textContent = val;
//                     let id = minus.closest('.cart-item').getAttribute('id');
//                     minusProduct(id);
//                 }
//                 updateTotal();
//             }
//         },
//         false
//     );
    
//     // ----------------------------------------------------
//     const viewDetails = document.querySelectorAll('.product__detail-btn');
//     viewDetails.forEach(function(element) {
//         element.addEventListener('click', function() {
//             let id = this.closest('.product').getAttribute('productId');
//             carousel(products[id]);
//         });
//     });

//     // clear-cart
//     document.querySelector('.clear-cart').addEventListener('click', () => {
//         localStorage.removeItem('basket');
//         initStorage();
//         document.querySelector('.cart-content').innerHTML = '';
//         updateTotal();
//     });
 
// })();
