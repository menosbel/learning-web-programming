$(document).ready(function(){
   //eliminar el elemento y sus elementos hijos
    $('#contenedor').remove();

    //eliminar solo elementos hijos
    $('#contenedor').children('#segunda').remove();

    //eliminar elementos hijo
    $('#contenedor').empty();
});