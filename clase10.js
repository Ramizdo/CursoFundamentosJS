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

imprimirProfesiones(douglas);

function imprimirSiEsMayorDeEdad(persona){
    if (persona.edad >= 18){
        console.log(persona.nombre + " es mayor de edad")
    } else {
        console.log(persona.nombre + " es menor de edad")
    }
}

imprimirSiEsMayorDeEdad(douglas);