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

//const alturaEnCms = ({ altura }) => altura * 100

const alturaEnCms = (persona) => ({
        ...persona,
        altura: persona.altura * 100
})


var personas = [douglas, dario, liliana, ysrael, ildemaro, manuel, jose]

var personasCms = personas.map(alturaEnCms)


console.log(personasCms)