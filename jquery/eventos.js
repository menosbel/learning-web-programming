$(document).ready(function(){
   var boton = $('#boton');

   /* boton.click(function (){
       alert('Hola');
   });*/
//Evento con funcion
  /* function saludo(){
       alert('Saludos');
   }
    boton.click(saludo);
    boton.on('click', saludo);*/

//Evento con fallback
    /*boton.on('mouseenter', function(){
        document.body.style.background = '#000';
    });
    boton.on('mouseleave', function(){
        document.body.style.background = '#fff';
    });*/
//Eliminando eventos
    /*boton.on('click', function (){
        alert('Saludos');
        console.log('Saludos')
    });

    $('#desactivar').on('click', function(){
        boton.off('click');
        console.log('Boton de ejecutar desactivado')
    });*/
//Prevenir el comportamiento de los enclaces
    $('a').on('click', function(e){
        e.preventDefault();
        alert('Link desactivado');
    });
});