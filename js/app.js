// jquery app.js

function addProductToCart(content, item) {
    content.find('.cart-item').attr('id', item.id);
    content.find('.item-title').text(item.title);
    content.find('.item-amount').text(1);
    content.find('.item-price').text(item.price);
    content.find('.item-image').attr('src', item.image);
    content.find('.item-image').attr('alt', item.title);
    return content;
}

function updateTotal() {
    let total = 0
    let amount = $('.item-amount').text();
    let price = $('.item-price').text();
    total = amount * price;
    $('.cart-total').text(total);
}

$(function () {

    $('.shopping__cart').on('click', function(){
        $(".cart-overlay").addClass("transparentBcg");
        $(".cart").addClass("showCart");
    });

    $('.close__btn').on('click', function(){
        $(".cart-overlay").removeClass("transparentBcg");
        $(".cart").removeClass("showCart");
    });


    const product = {
        id: 0,
        title: "Really Cool Cat",
        price: 189.99,
        image: "./images/01.jpg",
    };

    $('.add_to_card').on('click', function () {
        let y = 180;
        $('.product__image').css('transform','rotateY(' + y + 'deg)');
        let val = $('.shopping__cart-items').text();
        val = +(val)+1;
        $('.shopping__cart-items').text(val);
        const content =$($('#cartItem').html());
        let template = content.clone();
        $(".cart-content").append(addProductToCart(template, product));
        $('.item-amount').text(val);

         // fa-chevron-up
         $('.fa-chevron-up').on('click', function() {
             let val = $('.item-amount').text();
             val = +(val)+1;
             $('.item-amount').text(val);
             updateTotal();
         });
 
         // fa-chevron-down
         $('.fa-chevron-down').on('click', function() {
             let val = $('.item-amount').text();
             val = +(val)-1;
             $('.item-amount').text(val);
             updateTotal();
         });
     });
});
