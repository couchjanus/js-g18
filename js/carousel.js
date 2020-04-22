function carouselItem(product, i) {
    const div = document.createElement("div");
    div.classList.add("carousel-detail-item");
    div.innerHTML = `
            <!-- carousel item -->

            <div class="carousel-item__image" style="background-image:url(${product.images[i]})"></div>
            <div class="carousel-item__info">
                <div class="carousel-item__container">
                    <h2 class="carousel-item__subtitle">${product.subtitles[i]} </h2>
                    <h1 class="carousel-item__title">${product.title}</h1>
                    <div class="product__prices">
                        <i class="fas fa-dollar-sign"></i>
                        <span class="product__price">${product.price}</span>
                    </div>
                    <p class="carousel-item__description">${product.description}</p>
                    <a href="#" class="add_to_card"><i class="fas fa-shopping-cart"></i>Add to card</a>
                    
                </div>
            </div>
          <!-- carousel item -->
    `;
    return div;
  }

function carousel(product) {
    console.log(product);
    let catouselNav = el('#catouselNav').content;

    for (let i = 0; i < product.images.length; i++) {
        catouselNav
            .querySelector('.carousel-detail')
            .append(carouselItem(product, i));
    }

    document.querySelector('.showcase-section').replaceWith(document.importNode(catouselNav, true));
    document
    .querySelectorAll('.carousel-detail-item')[0]
    .classList.add('active-slide');

    const total = document.querySelectorAll('.carousel-detail-item').length;

    let current = 0;
    moveSlide('#moveRight', 1);
    moveSlide('#moveLeft', -1);

    function moveSlide(eId, step) {
        el(eId).addEventListener('click', function() {
            let prev_next = current;
            current = current + step;
            setSlide(prev_next, current);
        });
    }

    function setSlide(prev, next) {
        let slide = current;
        if (next > total - 1) {
            slide = 0;
            current = 0;
        }
        if (next < 0) {
            slide = total - 1;
            current = total - 1;
        }
        document
            .querySelectorAll('.carousel-detail-item')
            [prev].classList.remove('active-slide');
        document
            .querySelectorAll('.carousel-detail-item')
            [slide].classList.add('active-slide');
    }
}