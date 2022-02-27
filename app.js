//Insertando el módulo greet.js
require('./greet');

// Función aplicada en la prácica número 2. 
/*function greet() {
    console.log(`Hello`);
}
let logGreeting = (miParametro) => miParametro();

logGreeting(greet);*/

// Código refactorizado "Function expression created on the fly".
let logGreeting = (miParametro) => miParametro();
/*En lugar de especificar una variable que contiene alguna función, 
podemos crear una función per se y asignarla como parámetro.*/
logGreeting(function () {
    console.log(`Hello from a function created on the fly`) 
});

// Interpolación de strings en un esquema clásico.
let logGreeting1 = (miNombre, miColor) => {
    console.log("¡Hola " + miNombre + " buenos días! Tu color favorito es el " + miColor);
}
/*Podemos observar que la utilización de comillas dobles requiere el uso
de los simbolos "+" para poder juntar los strings junto con los parámetros
asignados. Hacerlo de esta manera resulta ser muy poco convencional, debido a
que existen formas más optimas de escribirlo.*/
logGreeting1("Carlos", "azul");

// String interpolation.
let logGreeting2 = (miNombre, miColor) => {
    console.log(`¡Hola ${miNombre} buenos días! Tu color favorito es el ${miColor}`);
}
/*Otra forma de realizar la Interpolación es mediante las comillas 
invertidas o bacticks. Esta forma evita tener que usar los simbolos de +,
por lo que para añadir algún parámetro se necesita poner el símbolo de pesos
seguido de curly bracers => ${}*/
logGreeting2("Alan", "azul");

//Multiline Strings.
let logGreeting3 = (miNombre, miColor) => {
    console.log(`¡Hola ${miNombre} buenos días!
    Tu color favorito es ${miColor}`);
}
/*Los Strings Multilínea utilizanddo los backticks nos permiten 
dar el salto con tan solo dar enter, a diferencia de la forma tradicional
en la que tenemos que agregar "\n" al final de cada string.*/
logGreeting3("Fernando", "rojo");