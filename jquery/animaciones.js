$(document).ready(function(){

    //$(selector).animate({parametros}, velocidad, callback);

    //no puede tener animaciones de color en jquery

    $('#boton').on('click', function(){
       $('#caja').animate({
           width: '300px',
           //opacity: '0.2'

           //width: '+=300px'
           marginLeft: "+=50px"
       }, 300, function (){
            //alert('Fin de la animacion');
       });

       //combinar jquery y css para animar color
        //$('.caja').toggleClass('animacion');

        $('.caja').animate({
           marginLeft: '-=50px'
        }, 300);
    });
});