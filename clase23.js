class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
        return this
    }
    
    saludar () {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
    }

    soyAlto () {
        return this.altura > 1.8    
    }

}

class Desarrolador extends Persona {
    constructor(nombre, apellido, altura) {
        super (nombre, apellido, altura)
    }

    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy Desarrollador`)
    }
}

//var douglas = new Persona("Douglas", "Ramirez", 1.67)
//var erika = new Persona("Erika", "Martinez", 1.82)
//var juan = new Persona("Juan", "Perez", 1.93)


//douglas.soyAlto()
//erika.soyAlto()
//juan.soyAlto()