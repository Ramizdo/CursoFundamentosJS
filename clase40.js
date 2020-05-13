
const douglas = {
    nombre: "Douglas",
    apellido: "Ramirez",
    edad: 29
}

function saludar(saludo = "Hola"){
    console.log(`${saludo}, mi nombre es ${this.nombre}`)
}
// BIND EJECUTA
//const saludarADouglas = saludar.bind(douglas)

// CALL LLAMA
//saludar.call(douglas, "Hola bro")

//APLLY LLAMA PERO SE USA CON CORCHETES
saludar.apply(douglas, ["Hola pana"])