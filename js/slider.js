const slider = $('.feedback__list').bxSlider({
   pager: false,
   controls: false,
   infiniteLoop: true,
   touchEnabled: true,
   hideContro10nEnd: false,
})

$('.button--prew').click((e) => {
   e.preventDefault();
   slider.goToPrevSlide();
});

$('.button--next').click((e) => {
   e.preventDefault();
   slider.goToNextSlide();
});


const portfolio = $('.portfolio__list').bxSlider({
   pager: false,
   controls: false,
   infiniteLoop: true,
   touchEnabled: true,
   hideContro10nEnd: false,
});


$('.portfolio--prev').click((e) => {
   e.preventDefault();
   portfolio.goToPrevSlide();
});

$('.portfolio--next').click((e) => {
   e.preventDefault();
   portfolio.goToNextSlide();
});



