$(document).ready(function(){
    $('.caja').first().css({
        background: '#000'
    })

    $('.caja').last().css({
        background: '#000'
    })

    //selecciona por index, funciona como arreglo
    $('.caja').eq(2).css({
        background: '#000'
    })

    //selecciona segun el ID o clase
    $('.caja').filter('#segunda').css({
        background: '#f9a03f'
    })

    //excluye la que cumpla con determinado criterio
    $('.caja').not('#segunda').css({
        background: '#f9a03f'
    })

                           });