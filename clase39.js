
function crearSaludo(inicioDeFrase){
return function(nombre){
        console.log(`${inicioDeFrase} ${nombre}`)
    }
}

const saludoIngles = crearSaludo("Hello")
const saludoFrances = crearSaludo ("Salut")
const saludoEspanol = crearSaludo("Hola")

saludoIngles("Douglas")
saludoFrances("Douglas")
saludoEspanol("Douglas")