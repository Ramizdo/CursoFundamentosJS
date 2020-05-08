function Persona (nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
    return this
}

var douglas = new Persona("Douglas", "Ramirez", 1.67)
var erika = new Persona("Erika", "Martinez", 1.82)
var juan = new Persona("Juan", "Perez", 1.93)

const alto = 1.8

Persona.prototype.soyAlto = function () {
    (this.altura > alto) ? 
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}, mido ${this.altura} y soy Alto porque mido mas de ${alto}`) 
    : console.log(`Hola me llamo ${this.nombre} ${this.apellido}, mido ${this.altura} y soy Bajo porque mido menos de ${alto}`)
}

/*Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}*/

douglas.soyAlto()
erika.soyAlto()
juan.soyAlto()