var douglas = {
    nombre: "Douglas",
    apellido: "Ramirez",
    altura: 1.67
}

var dario = {
    nombre: "Dario",
    apellido: "Castro",
    altura: 1.77
}

var liliana = {
    nombre: "Liliana",
    apellido: "Suarez",
    altura: 1.70
}

var ysrael = {
    nombre: "Ysrael",
    apellido: "Mendez",
    altura: 1.72
}

var ildemaro = {
    nombre: "Ildemaro",
    apellido: "Garcia",
    altura: 1.83
}

var manuel = {
    nombre: "Manuel",
    apellido: "Rojas",
    altura: 1.99
}

var jose = {
    nombre: "Jose",
    apellido: "Martinez",
    altura: 1.56
}

const PERSONA_ALTA = 1.8
const PERSONA_BAJA = 1.6

const esAlta = ({ altura }) => altura > PERSONA_ALTA
const esBaja = ({ altura }) => altura <= PERSONA_BAJA
const esMediana = ({ altura }) => altura > PERSONA_BAJA && altura < PERSONA_ALTA

/*
const esMediana2 = (persona) => {
    //if (persona.altura > PERSONA_BAJA && persona.altura < PERSONA_ALTA)
    return persona.altura > PERSONA_BAJA && persona.altura < PERSONA_ALTA
}
*/

var personas = [douglas, dario, liliana, ysrael, ildemaro, manuel, jose]

/*
for ( var i = 0; i < personas.length; i++){
    var persona = personas[i];
    console.log(`${persona.nombre} mide ${persona.altura} metros`)
}
*/

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)
var personasMedianas = personas.filter(esMediana)

console.log(personasBajas)
console.log(personasAltas)
console.log(personasMedianas)