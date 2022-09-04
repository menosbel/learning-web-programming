//var cajas = document.getElementsByTagName('div');
//var cajas = document.getElementsByClassName('caja');

var primeraCaja = document.getElementById('primeraCaja');

//cajas[0].textContent = 'Hola mundo';
//cajas[0].innerHTML = '<h1>Hola</h1>';
//primeraCaja.innerHTML = '<u>Hola mundo</u>';

// -------------- Creando nodos
// 1. Crear el elemento
var caja = document.createElement('div');
// 2. Crear un nodo de texto
var contenido = document.createTextNode('Hola mundo');
// 3. Añadir el nodo de texto al elemento
caja.appendChild(contenido);
// 4. Agregar atributos a la caja
caja.setAttribute('class', 'caja naranja');

// 5. Agregar el elemento al documento
var contenedor = document.getElementById('contenedor');
contenedor.appendChild(caja);

// ----------- Modificando la clase o id de un elemento
caja.id = 'primera';
caja.className = 'caja';

// ---------- Conocienco el elemento padre
cajas[0].parentNode;

// Inserta la caja dentro de padre y antes de la primeraCaja
padre.insertBefore(caja, primeraCaja);
padre.insertBefore(caja, caja[2]);

padre.replaceChild(caja, cajas[2]);

//--- eliminar nodos
padre.removeChild(cajas[3]);