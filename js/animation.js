// ============= Stem 1 ===================

// const transforms = [
//     'translateX(66vmin)',
//     'rotate(.125turn)',
//     'scale(.5)',
//     'translate(17vw, -95vh) scale(0)',
// ];

// var mainAnimation = document.querySelector('.main-animation');

// const opacityBase = transforms.length + 1;
// const duration = 1000;
// const endOpacity = 1;

// const hues = [183, 43, 143, 343, 283];

// var divs = [];

// transforms.forEach(function () {
//     let div = document.querySelector('.product .product__image').cloneNode(true);
//     div.classList.add('animation-div');
//     divs.push(div);
//     mainAnimation.appendChild(div);
// });


// function animateIt(i) {
//     var el = divs[i];
//     var hue = hues[i % hues.length];
//     el.style.setProperty('--hue', hue);
//     el.style.setProperty('--alpha', (i + 1) / opacityBase);

//     var start = transforms.reduce(function (result, transform, index) {
//         return index < i ? result + ' ' + transform : result;
//     }, '').trim();

//     el.style.opacity = endOpacity;
//     var animation = el.animate([
//         { transform: start || 'translateX(0)' },
//         { transform: (start ? start + ' ' : '') + transforms[i] }],
//         {
//             fill: 'forwards',
//             duration: duration,
//             easing: 'ease-out'
//         });

//     if (i < transforms.length - 1) {
//         animation.onfinish = function () { 
//             animateIt(i + 1); 
//             el.style.opacity = 0;
//         };
//     }
   
// }

// animateIt(0);


// ============= Stem 2 ===================


// function animateIt(i, divs) {
//     var el = divs[i];
//     var hue = hues[i % hues.length];
//     el.style.setProperty('--hue', hue);
//     el.style.setProperty('--alpha', (i + 1) / opacityBase);

//     var start = transforms.reduce(function (result, transform, index) {
//         return index < i ? result + ' ' + transform : result;
//     }, '').trim();

//     el.style.opacity = endOpacity;
//     var animation = el.animate([
//         { transform: start || 'translateX(0)' },
//         { transform: (start ? start + ' ' : '') + transforms[i] }],
//         {
//             fill: 'forwards',
//             duration: duration,
//             easing: 'ease-out'
//         });

//     if (i < transforms.length - 1) {
//         animation.onfinish = function () { 
//             animateIt(i + 1, divs); 
//             el.style.opacity = 0;
//         };
//     }
   
// }

// const addToCarts = document.querySelectorAll('.add_to_card');
    
// addToCarts.forEach(function(addToCart) {
//     addToCart.addEventListener("click", function () {
//         let productParent = this.closest('.product');
//         let productImg = productParent.querySelector('.product__image');
//         productImg.style.transform = 'rotateY(180deg)';
//         var divs = [];
       
//         let val = document.querySelector('.shopping__cart-items').textContent;
//         val = +(val) + 1;
//         document.querySelector('.shopping__cart-items').textContent = val;

//             transforms.forEach(function () {
//                 let div = productImg.cloneNode(true);
//                 div.classList.add('animation-div');
//                 divs.push(div);
//                 mainAnimation.appendChild(div);
//             });

//             animateIt(0, divs);

//         });
// });

// ============= Stem 3 ===================


// const transforms = [
//     'scale(.8) translateX(66vmin)',
//     'rotate(.125turn)',
//     'scale(.5)',
//     'translate(30vw, -120vh) scale(0)',
// ];

// var mainAnimation = document.querySelector('.main-animation');

// const opacityBase = transforms.length + 1;
// const duration = 1000;
// const endOpacity = 1;

// const hues = [183, 43, 143, 343, 283];

// function animateIt(i, divs, productImg) {
//     var el = divs[i];
//     var hue = hues[i % hues.length];
//     el.style.setProperty('--hue', hue);
//     el.style.setProperty('--alpha', (i + 1) / opacityBase);

//     var start = transforms.reduce(function (result, transform, index) {
//         return index < i ? result + ' ' + transform : result;
//     }, '').trim();

//     el.style.opacity = endOpacity;
//     var animation = el.animate([
//         { transform: start || 'translateX(0)' },
//         { transform: (start ? start + ' ' : '') + transforms[i] }],
//         {
//             fill: 'forwards',
//             duration: duration,
//             easing: 'ease-out'
//         });

//     if (i < transforms.length - 1) {
//         animation.onfinish = function () { 
//             animateIt(i + 1, divs); 
//             el.style.opacity = 0;
//             // el.remove();
//             productImg.style.transform = 'rotateY(0deg)';
//         };
//     }
   
// }

// const addToCarts = document.querySelectorAll('.add_to_card');
    
// addToCarts.forEach(function(addToCart) {
//     addToCart.addEventListener("click", function () {
//         let productParent = this.closest('.product');
//         let productImg = productParent.querySelector('.product__image');
//         productImg.style.transform = 'rotateY(180deg)';

//         let rectOrigin = productImg.getBoundingClientRect();
//         let leftCoodrs = rectOrigin.left + 'px';
//         let topCoodrs = rectOrigin.top + 'px';
//         console.log(leftCoodrs, topCoodrs);

//         let rectTarget = document.querySelector('.shopping__cart').getBoundingClientRect();
//         let toLeftCoodrs = rectTarget.left + 'px';
//         let toTopCoodrs = rectTarget.top + 'px';
//         console.log(toLeftCoodrs, toTopCoodrs);

//         var divs = [];
       
//         let val = document.querySelector('.shopping__cart-items').textContent;
//         val = +(val) + 1;
//         document.querySelector('.shopping__cart-items').textContent = val;

//         transforms.forEach(function () {
//                 let div = productImg.cloneNode(true);
//                 div.classList.add('animation-div');
//                 divs.push(div);
//                 mainAnimation.appendChild(div);
//         });

//         animateIt(0, divs, productImg);
//         // productImg.style.transform = 'rotateY(0deg)';
            
//     });
// });