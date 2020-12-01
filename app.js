$(function() {

/* Fixed Header*/ 
let header = $("#jsheader");
let intro = $("#jsintro");
let introH = intro.innerHeight();
let scrollPos = $(window).scrollTop();
let nav = $("#nav");
let navToggle = $("#navToggle");

checkScroll(scrollPos, introH);

$(window).on("scroll reasize", function() {   
    introH = intro.innerHeight(); 
   scrollPos = $(this).scrollTop();

    checkScroll(scrollPos, introH);
});

function checkScroll(scrollPos, introH) {
  if(scrollPos > introH ) {
    header.addClass("fixed");
  } else {
     header.removeClass("fixed");
  }
}



/* Smooth Scrooll */ 

$("[data-scroll]").on("click", function(event){
event.preventDefault();

let elementid = $(this).data('scroll');
let elementOffset = $(elementid).offset().top;

nav.removeClass("show");

   $("html, body").animate({
    scrollTop: elementOffset - 70

   }, 700);
 
});

/*navToggle*/

navToggle.on("click", function(event) {
    event.preventDefault();

    nav.toggleClass("show");

});

/* Reviews  https://kenwheeler.github.io/slick/ */

let slider = $("#reviewsSlider");

slider.slick({

  infinite: true, /* Будет бесконечно скролиться. Это значит если у нас закончились
                  отзывы то при скроле они будут повторяться. Идти по кругу.*/
  slidesToShow: 1, /* Количество показов слайдов. */
  slidesToScroll: 1, /* Количкство  слайдов при скроле на скролл. */
  fade: false, /* Виды прокрутки */
  arrows: false,
  dots: true
});


});