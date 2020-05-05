var douglas = {
    nombre: "Douglas",
    apellido: "Ramirez",
    edad: 29,
    peso: 73
}

console.log(`Al inicio del año ${(douglas.nombre)} pesa ${(douglas.peso)} Kg`)
//console.log("Al inicio del año " + douglas.nombre + " pesa " + douglas.peso + " Kgg")

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANIO = 365

const aumentoDePeso = persona => persona.peso += INCREMENTO_PESO;
const bajarDePeso = persona => persona.peso -= INCREMENTO_PESO;

for (var i = 1; i <= DIAS_DEL_ANIO; i++){
    var random = Math.random()

    if (random < 0.25) {
        aumentoDePeso(douglas)
    } else if (random < 0.5) {
        bajarDePeso(douglas)
    }
}

console.log(`Al final del año ${douglas.nombre} pesa ${douglas.peso.toFixed(1)} Kg`)