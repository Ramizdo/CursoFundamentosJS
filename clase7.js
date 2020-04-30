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

function imprimirNombreEnMayusculas(persona) {
    //var nombre = persona.nombre;
    var {nombre} = persona;
    console.log(nombre.toUpperCase());
}

// imprimirNombreEnMayusculas(nombre1);
// imprimirNombreEnMayusculas(nombre2);

imprimirNombreEnMayusculas(douglas);
imprimirNombreEnMayusculas(dario);
//imprimirNombreEnMayusculas({nombre: "Pepito"});

function imprimirNombreYEdad(persona){
    var nombre = persona.nombre;
    var edad = persona.edad;
    console.log("Hola, me llamo " + nombre.toUpperCase() + " y tengo " + edad + " años");
}

imprimirNombreYEdad(douglas);
imprimirNombreYEdad(dario);