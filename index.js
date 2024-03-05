//Crear un array vacío
let arrayVacio = [];

//Crear un array con elementos
let arrayConElementos = [1, 'dos', true, { nombre: 'Juan' }];

//Crear un array con elementos de diferentes tipos de datos
let arrayTiposDiferentes = [1, 'dos', true, { nombre: 'Juan' }];

//Crear un array utilizando el constructor Array
let arrayConstructor = new Array();

//Crear un array con una secuencia numérica usando el método Array.from
let arraySecuencia = Array.from({ length: 5 }, (_, index) => index + 1);

//Crear un array mediante la repetición de un valor utilizando el método Array.fill
let arrayRepetido = Array(4).fill('Hola');

//Crear un array a partir de una cadena de texto usando el método String.split
let cadena = 'Manzana,Naranja,Uva';
let arrayDesdeCadena = cadena.split(',');
