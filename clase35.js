
var douglas = {
    nombre: "Douglas",
    apellido: "Ramirez",
    edad: 29
}

// CONST ES UN VALOR FIJO QUE NO SE MODIFICARA
const MAYORIA_DE_EDAD = 18

// CON VAR TIENE MAS ALCANCE
function esMayorDeEdad (persona){

    if(persona.edad>MAYORIA_DE_EDAD){
        var mensaje = "Es mayor de edad"
    } else {
        var mensaje = "Es menor de edad"
    }
    console.log(mensaje)
}

// CON LET EL ALCANCE ES MENOR,
// SE TIENE QUE DECLARAR EN EL BLOQUE DONDE ES UTILIZADA
function esMayorDeEdad2 (persona2){
    let mensaje
    if(persona2.edad>MAYORIA_DE_EDAD){
        mensaje= "Es mayor de edad"
    } else {
        mensaje= "Es menor de edad"
    }
    console.log(mensaje)
}

esMayorDeEdad(douglas)
esMayorDeEdad2(douglas)

