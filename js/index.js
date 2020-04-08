// index.js
(function(){

    function openCart() {
        document.querySelector(".cart-overlay").classList.add("transparentBcg");
        document.querySelector(".cart").classList.add("showCart");
    }

    function closeCart() {
        document.querySelector(".cart-overlay").classList.remove("transparentBcg");
        document.querySelector(".cart").classList.remove("showCart");
    }

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
    
    // shopping__cart-items
    document.querySelector(".add_to_card").addEventListener("click", function () {
        let y = 180;
        document.querySelector('.product__image').style.transform = 'rotateY(' + y + 'deg)';
        let val = document.querySelector('.shopping__cart-items').innerText;
        val = +(val)+1;
        document.querySelector('.shopping__cart-items').innerText = val;
        document.querySelector('.item-amount').innerText = val;
    });

    // fa-chevron-up
    let plus = document.querySelector('.fa-chevron-up');
    plus.addEventListener('click', function(e) {
        console.log(document.querySelector('.item-amount').innerText);
        let val = document.querySelector('.item-amount').innerText;
        val = +(val)+1;
        document.querySelector('.item-amount').innerText = val;
        updateTotal();
        
    });

    // fa-chevron-down
    let minus = document.querySelector('.fa-chevron-down');
    minus.addEventListener('click', function(e) {
        console.log(document.querySelector('.item-amount').innerText);
        let val = document.querySelector('.item-amount').innerText;
        val = +(val)-1;
        document.querySelector('.item-amount').innerText = val;
        updateTotal();
    });

    function updateTotal() {
        let total = 0
        let amount = document.querySelector('.item-amount').innerText;
        let price = document.querySelector('.item-price').innerText;
        total = amount * price;
        document.querySelector('.cart-total').innerText = total;
    }
    
})();
