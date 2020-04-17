$(".add_to_card").each(function(index, element){
   $(element).on('click', function ()  {
       $(this).parents('.product').find('.product__info__extra').show(1000);
       // $(this).parents('.product').find('.product__info__extra').show('fast');
       // $(this).parents('.product').find('.product__info__extra').show(1000, 'linear');
       // $(this).parents('.product').find('.product__info__extra').show('fast', ‘swing’);
       // $(this).parents('.product').find('.product__info__extra').toggle(1000);
       // $(this).parents('.product').find('.product__info__extra').fadeIn('fast', 'swing');
       // $(this).parents('.product').find('.product__info__extra').fadeTo('slow', 'swing');
       $(this).parents('.product').find('.product__info__extra').slideDown('slow', 'swing');
       $(this).parents('.product').find('.product__info__extra').slideUp('slow', 'linear');
      
   })
});