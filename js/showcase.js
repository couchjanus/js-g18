const el = (selector) => document.querySelector(selector);

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
    content.querySelector('.item-amount').textContent = item.amount;
    content.querySelector('.item-price').textContent = item.price;
    // content.querySelector('.item-image').setAttribute('src', item.images[0]);
    content.querySelector('.item-image').setAttribute('src', item.image);
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