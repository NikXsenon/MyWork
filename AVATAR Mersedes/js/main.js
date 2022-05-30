$(function(){
$('.design-slider').slick({
    dots: false,
    slideToShow: 4,
    variableWidth: true ,
    prevArrow: '<img class="arrow arrow-left" src="./images/arrow-l.svg" alt="">',
    nextArrow: '<img class="arrow arrow-right" src="./images/arrow-r.svg" alt="">'
});

$('#main-nav-img').on("click" , function(){
    $('.nav__menu-bar').toggle()
})
});



