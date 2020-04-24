// app.js

const el = (selector) => document.querySelector(selector);
let cart = [];
const cartItems = el('.shopping__cart-items');
const cartTotal = el(".cart-total");
const cartContent = el(".cart-content");
const clearCart = el(".clear-cart");

class App {
    productTemplate = this.templater`<div class="product" productId=${'id'}>
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
            <a href="#" class="add_to_card" data-id=${'id'}><i class="fas fa-shopping-cart"></i>Add to cart</a>
            <div class="product__prices">
            <i class="fas fa-dollar-sign"></i>
            <span class="product__price">${'price'}</span>
            </div>
        </div>
        </div>`;
        
    templater(strings, ...keys) {
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
    }
    init() {
        el(".close__btn").addEventListener("click", this.closeCart);
        el(".shopping__cart").addEventListener("click", this.openCart);
        el(".toggle").addEventListener("click", this.navbarToggle);
        cart = Storage.getCart();
        this.populateCart(cart);
        this.setCartValues(cart);

    }
    openCart() {
        el(".cart-overlay").classList.add("transparentBcg");
        el(".cart").classList.add("showCart");
        
    }
    closeCart() {
        el(".cart-overlay").classList.remove("transparentBcg");
        el(".cart").classList.remove("showCart");
    }
    navbarToggle() {
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
    makeShowcase(products) {
        let result = "";
        products.forEach(product => {
            result += this.productTemplate(product);
        });
        el('.showcase-section').innerHTML = result;
    }

    addToCarts() {
        const buttons = [...document.querySelectorAll(".add_to_card")];
        buttons.forEach(button => {
          let id = button.dataset.id;
          let inCart = cart.find(item => item.id === +(id));
          if (inCart) {
            button.innerText = "In Cart";
            button.disabled = true;
          } else {
            button.addEventListener("click", event => {
              // disable button
              event.target.innerText = "In Bag";
              event.target.disabled = true;
              // add to cart
              let cartItem = { ...Storage.getProduct(id), amount: 1 };
       
              cart = [...cart, cartItem];
              Storage.saveCart(cart);
              // add to DOM
              this.setCartValues(cart);
              this.addCartItem(cartItem);
            });
          }
        });
    }
    setCartValues(cart) {
        let tempTotal = 0;
        let itemsTotal = 0;
        cart.map(item => {
          tempTotal += item.price * item.amount;
          itemsTotal += item.amount;
        });
        cartTotal.textContent = parseFloat(tempTotal.toFixed(2));
        cartItems.textContent = itemsTotal;
    }

    addCartItem(item) {
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `<!-- cart item -->
                <!-- item image -->
                <img src=${item.image} alt="product" />
                <!-- item info -->
                <div>
                  <h4>${item.title}</h4>
                  <h5>$${item.price}</h5>
                  <span class="remove-item" data-id=${item.id}>remove</span>
                </div>
                <!-- item functionality -->
                <div>
                    <i class="fas fa-chevron-up" data-id=${item.id}></i>
                  <p class="item-amount">
                    ${item.amount}
                  </p>
                    <i class="fas fa-chevron-down" data-id=${item.id}></i>
                </div>
              <!-- cart item -->
        `;
        cartContent.appendChild(div);
    }

    populateCart(cart) {
        cart.forEach(item => this.addCartItem(item));
    }


    cartRender() {
        clearCart.addEventListener("click", () => {
          this.clear();
        });
        cartContent.addEventListener("click", event => {
          if (event.target.classList.contains("remove-item")) {
            let removeItem = event.target;
            let id = removeItem.dataset.id;
            cart = cart.filter(item => item.id !== +(id));
            // console.log(cart);
    
            this.setCartValues(cart);
            Storage.saveCart(cart);
            cartContent.removeChild(removeItem.parentElement.parentElement);
            const buttons = [...document.querySelectorAll(".add_to_card")];
            buttons.forEach(button => {
              if (parseInt(button.dataset.id) === +(id)) {
                button.disabled = false;
                button.innerHTML = `<i class="fas fa-shopping-cart"></i>add to cart`;
              }
            });
          } else if (event.target.classList.contains("fa-chevron-up")) {
            let addAmount = event.target;
            let id = addAmount.dataset.id;
            let tempItem = cart.find(item => item.id === +(id));
            tempItem.amount = tempItem.amount + 1;
            Storage.saveCart(cart);
            this.setCartValues(cart);
            addAmount.nextElementSibling.innerText = tempItem.amount;
          } else if (event.target.classList.contains("fa-chevron-down")) {
            let lowerAmount = event.target;
            let id = lowerAmount.dataset.id;
            let tempItem = cart.find(item => item.id === +(id));
            tempItem.amount = tempItem.amount - 1;
            if (tempItem.amount > 0) {
              Storage.saveCart(cart);
              this.setCartValues(cart);
              lowerAmount.previousElementSibling.innerText = tempItem.amount;
            } else {
              cart = cart.filter(item => item.id !== +(id));
    
              this.setCartValues(cart);
              Storage.saveCart(cart);
              cartContent.removeChild(lowerAmount.parentElement.parentElement);
              const buttons = [...document.querySelectorAll(".add_to_card")];
              buttons.forEach(button => {
                if (parseInt(button.dataset.id) === +(id)) {
                  button.disabled = false;
                  button.innerHTML = `<i class="fas fa-shopping-cart"></i>add to cart`;
                }
              });
            }
          }
        });
      }
      clear() {
        cart = [];
        this.setCartValues(cart);
        Storage.saveCart(cart);
        const buttons = [...document.querySelectorAll(".add_to_card")];
        buttons.forEach(button => {
          button.disabled = false;
          button.innerHTML = `<i class="fas fa-shopping-cart"></i>Add to cart`;
        });
        while (cartContent.children.length > 0) {
          cartContent.removeChild(cartContent.children[0]);
        }
        this.closeCart();
      }
}

class Storage {
    static saveProducts(products) {
      localStorage.setItem("products", JSON.stringify(products));
    }
    static getProduct(id) {
      let products = JSON.parse(localStorage.getItem("products"));
      return products.find(product => product.id === +(id));
    }
    static saveCart(cart) {
      localStorage.setItem("basket", JSON.stringify(cart));
    }
    static getCart() {
      return localStorage.getItem("basket")
        ? JSON.parse(localStorage.getItem("basket"))
        : [];
    }
}

class Product {
    getProducts() {
        let products = data;
        products = products.map(item => {
                const title = item.title;
                const price = item.price;
                const id = item.id;
                const image = item.images[0];
                return { title, price, id, image };
        });
        return products;
    }
}

// =============== Step 1 =====================
(function () {
    const app = new App();
    app.init();
})();

// =============== Step 2 =====================

// (function () {
//     const app = new App();
//     app.init();
//     app.makeShowcase(data);
// })();


// =============== Step 3 =====================

// (function () {
//     const app = new App();
//     app.init();
//     app.makeShowcase(data);
//     let products = new Product();
//     products = products.getProducts();
//     Storage.saveProducts(products);
// })();

// =============== Step 4 =====================

// (function () {
//     const app = new App();
//     app.init();
//     app.makeShowcase(data);
//     let products = new Product();
//     products = products.getProducts();
//     Storage.saveProducts(products);
//     cart = Storage.getCart();
//     app.addToCarts();
// })();

// =============== Step 5 =====================


// (function () {
//     const app = new App();
//     app.init();
//     app.makeShowcase(data);
//     let products = new Product();
//     products = products.getProducts();
//     Storage.saveProducts(products);
//     cart = Storage.getCart();
//     app.addToCarts();
//     app.cartRender();
// })();
