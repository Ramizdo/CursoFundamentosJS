var douglas = {
    nombre: "Douglas",
    apellido: "Ramirez",
    altura: 1.67,
    cantidadDeLibros: 37
}

var dario = {
    nombre: "Dario",
    apellido: "Castro",
    altura: 1.77,
    cantidadDeLibros: 117
}

var liliana = {
    nombre: "Liliana",
    apellido: "Suarez",
    altura: 1.70,
    cantidadDeLibros: 370
}

var ysrael = {
    nombre: "Ysrael",
    apellido: "Mendez",
    altura: 1.72,
    cantidadDeLibros: 83
}

var ildemaro = {
    nombre: "Ildemaro",
    apellido: "Garcia",
    altura: 1.83,
    cantidadDeLibros: 145
}

var manuel = {
    nombre: "Manuel",
    apellido: "Rojas",
    altura: 1.99,
    cantidadDeLibros: 8
}

var jose = {
    nombre: "Jose",
    apellido: "Martinez",
    altura: 1.56,
    cantidadDeLibros: 18
}

var personas = [douglas, dario, liliana, ysrael, ildemaro, manuel, jose]

//const librosEnTotal = (acum, persona) => acum + persona.cantidadDeLibros
const librosEnTotal = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros


//var acum = 0

//for (var i = 0; i < personas.length; i++) {
    //acum = acum + personas[i].cantidadDeLibros
//}

var totalDeLibros = personas.reduce(librosEnTotal, 0)

console.log(`En total todos tienen ${ totalDeLibros } libros`)