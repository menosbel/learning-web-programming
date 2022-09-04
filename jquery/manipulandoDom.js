$(document).ready(function(){
    //cambiar el texto de un elemento
    $('#titulo').text('Encabezado modificado');

    //modificar el contenido html de un elemento
    $('#titulo').html('<u>Encabezado modificado</u>');

    //acceder al valor de un input
    var nombre = $('#nombre');
    nombre.on('change', function(){
       $('#titulo').text(nombre.val());
    });

    //modificar atributos
    $('#enlace').text('google.com');
    $('#enlace').attr('href', 'http://www.google.com');

    //modificar multiples atributos
    $('#enlace').attr({
        'class': 'azul',
        'target': 'blank'
    });
});