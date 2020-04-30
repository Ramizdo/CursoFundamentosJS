// var nombre1 = "Douglas";
// var nombre2 = "Dario";

var douglas = {
    nombre: "Douglas",
    apellido: "Ramirez",
    edad: 28
}

var dario = {
    nombre: "Dario",
    apellido: "Castro",
    edad: 35
}

function imprimirNombreEnMayusculas({ nombre }) {
    console.log(nombre.toUpperCase());
}

// imprimirNombreEnMayusculas(nombre1);
// imprimirNombreEnMayusculas(nombre2);

imprimirNombreEnMayusculas(douglas);
imprimirNombreEnMayusculas(dario);
imprimirNombreEnMayusculas({nombre: "Pepito"});