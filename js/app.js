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