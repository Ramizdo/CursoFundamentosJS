var douglas = {
    nombre: "Douglas",
    apellido: "Ramirez",
    edad: 29,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    garzon: true
}
var juan = {
    nombre: "Juan",
    apellido: "Gomez",
    edad: 13
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`)

    if (persona.ingeniero === true){
        console.log('Ìngeniero')
    } else {
        console.log("No es ingeniero")
    }
    
    if (persona.cocinero === true){
        console.log('Cocinero')
    }

    if (persona.cantante === true){
        console.log('Cantante')
    }

    if (persona.dj === true){
        console.log('Dj')
    }

    if (persona.garzon === true){
        console.log('Garzon')
    }
}

//imprimirProfesiones(douglas);

const MAYORIA_DE_EDAD = 18;

function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD;
}

function imprimirSiEsMayorDeEdad(persona){
    if (esMayorDeEdad(persona)){
        console.log(persona.nombre + " es mayor de edad")
    } else {
        console.log(persona.nombre + " es menor de edad")
    }
}

imprimirSiEsMayorDeEdad(douglas);
imprimirSiEsMayorDeEdad(juan);