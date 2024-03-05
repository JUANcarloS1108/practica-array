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

//Crear un array combinando dos arrays existentes utilizando el operador spread
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let arrayCombinado = [...array1, ...array2];

//Crear un array con valores únicos utilizando el método Set() y el operador spread
let arrayConDuplicados = [1, 2, 2, 3, 4, 4];
let arrayUnico = [...new Set(arrayConDuplicados)];

//Crear un array con una función que genere valores dinámicamente
function generarArray(longitud) {
    return Array.from({ length: longitud }, (_, index) => index * 2);
  }
  let arrayGenerado = generarArray(5);
  
//Obtener la longitud de un array
let longitudArray = arrayGenerado.length;

//Agregar elementos al final del array usando push
arrayGenerado.push(10, 12);

//Eliminar el último elemento del array usando pop
let ultimoElemento = arrayGenerado.pop();

//Agregar elementos al principio del array usando unshift
arrayGenerado.unshift(-2, 0);

//Eliminar el primer elemento del array usando shift
let primerElemento = arrayGenerado.shift();

//Obtener una porción del array usando slice
let subArray = arrayGenerado.slice(2, 5);

//Convertir un array en un string usando join
let arrayAString = arrayGenerado.join(', ');
