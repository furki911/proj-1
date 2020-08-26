function hideDiv() {
   document.querySelector('.header-top').classList.toggle('none');
}

(function() {
   var rotate, timeline;
   rotate = function() {
      return $('.card:first-child').fadeOut(400, 'swing', function() {
         return $('.card:first-child').appendTo('.feedback__carousel').hide();
      }).fadeIn(400, 'swing');
   };

   $('.next').click(function() {
      return rotate();
   });
}).call(this);

function cta() {
   const ul = document.querySelector('.menubar__ul');
   const hamburgerContainer = document.querySelector('.hamburger__container');
   ul.classList.toggle('block');
   const children = hamburgerContainer.classList.toggle('clicked');
}