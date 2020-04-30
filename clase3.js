var edad = 29;

// edad = edad + 1;

edad += 1;

var peso = 73;

// peso = peso - 2;

peso -= 2;

var sandwich = 1;

// peso = peso + sandwich;
peso += sandwich;

var jugarFutbol = 3;

// peso = peso - jugarFutbol;
peso -= jugarFutbol;

var precioVino = 200.3;

// REDONDEAR DECIMAL
var total = Math.round(precioVino * 100 *3) / 100;

// REDONDER DECIMAL DEVOLVIENDO UN STRING
var totalStr = total.toFixed(2);

// REDONDER DECIMAL DEVOLVIENDO UN NUMBER
var total2 = parseFloat(totalStr);

var pizza = 8;
var personas = 2;
var cantidadDePorcionesPorPersona = pizza / personas;

