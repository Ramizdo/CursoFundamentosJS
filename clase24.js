class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
        return this
    }
    
    saludar (fn) {
        var { nombre, apellido} = this

        //var nombre = this.nombre
        //var apellido = this.apellido

        console.log(`Hola me llamo ${nombre} ${apellido}`)
        if (fn) {
            fn(nombre,apellido)
        }
    }

    soyAlto () {
        return this.altura > 1.8    
    }

}

class Desarrolador extends Persona {
    constructor(nombre, apellido, altura) {
        super (nombre, apellido, altura)
    }

    saludar(fn) {
        var { nombre, apellido} = this
        
        //var nombre = this.nombre
        //var apellido = this.apellido

        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy Desarrollador`)
        if (fn) {
            fn(nombre,apellido,true)
        }
    }
}
function responderSaludo(nombre, apellido, esDev) {
    (esDev) ? console.log(`Ah mira, no sabia que eras desarrollador`)
    : console.log(`Buen dia ${nombre} ${apellido}`)
}

var douglas = new Persona("Douglas", "Ramirez", 1.67)
var erika = new Persona("Erika", "Martinez", 1.82)
var juan = new Desarrolador("Juan", "Perez", 1.93)

douglas.saludar()
erika.saludar(responderSaludo)
juan.saludar(responderSaludo)