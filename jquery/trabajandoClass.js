$(document).ready(function(){
    $('#boton').on('click', function(){
        $(this).addClass('naranja');
        $(this).removeClass('boton');

        // no podemos alternar codigo css pero si clases
        $(this).toggleClass('naranja');

        $(this).css({
            'height': '100px',
            'width': '100px'
        });
    });
});