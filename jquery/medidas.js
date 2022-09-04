$(document).ready(function(){
   var titulo = $('#titulo');
   var info = $('#info');

   //calcular el ancho del elemento
    info.append('Ancho: ' + titulo.width() + '<br>');

    //calcular el ancho del elemento + padding
    info.append('Ancho interno: ' + titulo.innerWidth() + '<br>');

    //calcular el ancho del elemento + padding + borde
    info.append('Ancho externo: ' + titulo.outerWidth() + '<br>');

    //calcular el ancho del elemento + padding + borde + margin
    info.append('Ancho externo: ' + titulo.outerWidth(true) + '<br>');


    //calcular el alto del elemento
    info.append('Alto: ' + titulo.height() + '<br>');

    //calcular el alto del elemento + padding
    info.append('Alto interno: ' + titulo.innerHeight() + '<br>');

    //calcular el alto del elemento + padding + borde
    info.append('Alto externo: ' + titulo.outerHeight() + '<br>');

    //calcular el alto del elemento + padding + borde + margin
    info.append('Alto externo: ' + titulo.outerHeight(true) + '<br>');

});