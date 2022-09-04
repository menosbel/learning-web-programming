//$(document).ready(function(){
  function efecto(){
    //$(selector).efecto(velocidad, callback);
      $('.caja').hide(3000, function(){
          alert('Oculto');
      });

      $('.caja').show();
      $('.caja').toggle();
      $('.caja').fadeIn();
      $('.caja').fadeOut();
      $('.caja').fadeToggle();
      $('.caja').slideDown();
      $('.caja').slideUp();
      $('.caja').slideToggle();

  }
//});