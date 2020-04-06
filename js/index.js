// index.js
(function(){

    // function openCart() {
    //     document.getElementById("sidebar").style.right = '0px';
    // }
      
    // function closeCart() {
    //     document.getElementById("sidebar").style.right = "-100%";
    // }

    // document.querySelector(".close__btn").onclick=closeCart;
    // document.querySelector(".shopping__cart").onclick=openCart;

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
})();
 
