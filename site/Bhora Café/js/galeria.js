const galeria = [
    "images/photo-gallery-thumb-01.jpg",
    "images/photo-gallery-thumb-02.jpg",
    "images/photo-gallery-thumb-03.jpg",
    "images/photo-gallery-thumb-04.jpg",
    "images/photo-gallery-thumb-05.jpg",
    "images/photo-gallery-thumb-06.jpg",
    "images/photo-gallery-thumb-07.jpg",
    "images/photo-gallery-thumb-08.jpg",
    "images/photo-gallery-thumb-09.jpg",
    "images/photo-gallery-thumb-10a.jpg",
    "images/photo-gallery-thumb-11.jpg",
    "images/photo-gallery-thumb-10.jpg",
    "images/bhora_burger.jpg",
    "images/bacon_burger.jpg",
    "images/chiken_burger.jpg",
    "images/classic_burger.jpg",
    "images/pig_burger.jpg",
    "images/veggie_burger.jpg",
]

function montaDivItemGaleria(url) {
    return `<a class="item-gallery-footer wrap-pic-w" href="${url}" data-lightbox="gallery-footer">
                <img src="${url}" alt="gallery">
            </a>`
}

const fotos = [
    {url: "images/photo-gallery-17food13.jpg", tipo: "food"},
    {url: "images/photo-gallery-16.jpg", tipo: "food"},
    {url: "images/photo-gallery-14.jpg", tipo: "food"},
    {url: "images/photo-gallery-17.jpg", tipo: "food"},
    {url: "images/photo-gallery-17f.jpg", tipo: "food"},
    {url: "images/photo-gallery-17fo.jpg", tipo: "food"},
    {url: "images/photo-gallery-17foo.jpg", tipo: "food"},
    {url: "images/photo-gallery-17food.jpg", tipo: "food"},
    {url: "images/photo-gallery-17food1.jpg", tipo: "food"},
    {url: "images/photo-gallery-17food12.jpg", tipo: "food"},
    {url: "images/photo-gallery-17food14.jpg", tipo: "food"},
    {url: "images/photo-gallery-18.jpg", tipo: "interior"},
    {url: "images/photo-gallery-19.jpg", tipo: "interior"},
    {url: "images/photo-gallery-20.jpg", tipo: "interior"},
    {url: "images/photo-gallery-20i.jpg", tipo: "interior"},
    {url: "images/gallery_bhora_burger.jpg", tipo: "food"},
    {url: "images/gallery_bacon_burger.jpg", tipo: "food"},
    {url: "images/gallery_chiken_burger.jpg", tipo: "food"},
    {url: "images/gallery_classic_burger.jpg", tipo: "food"},
    {url: "images/gallery_pig_burger.jpg", tipo: "food"},
    {url: "images/gallery_veggie_burger.jpg", tipo: "food"},
]

function montaDivItemPaginaGaleria(item) {
    return `<div class="item-gallery isotope-item bo-rad-10 hov-img-zoom ${item.tipo}">
                <img src="${item.url}" alt="IMG-gallery">

                <div class="overlay-item-gallery trans-0-4 flex-c-m">
                    <a class="btn-show-gallery flex-c-m fa fa-search" href="${item.url}" data-lightbox="gallery"></a>
                </div>
            </div>`
}

$( document ).ready(function() {
    galeria.map(item => $("#galeria").append(montaDivItemGaleria(item)));
    fotos.map(item => $("#fotos").append(montaDivItemPaginaGaleria(item)));
});


