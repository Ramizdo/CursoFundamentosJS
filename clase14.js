var douglas = {
    nombre: "Douglas",
    apellido: "Ramirez",
    edad: 29,
    peso: 73
}

console.log(`Al inicio del año ${(douglas.nombre)} pesa ${(douglas.peso)} Kg`)
//console.log("Al inicio del año " + douglas.nombre + " pesa " + douglas.peso + " Kgg")

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANIO = 365

const aumentoDePeso = persona => persona.peso += INCREMENTO_PESO;
const bajarDePeso = persona => persona.peso -= INCREMENTO_PESO;

const comeMucho = () => Math.random() < 0.3
const haceDeporte = () => Math.random() < 0.4

const META = douglas.peso - 3
var dias = 0

while (douglas.peso > META){
    if (comeMucho()){
        aumentoDePeso(douglas)
    }
    if (haceDeporte()){
        bajarDePeso(douglas)
    }
    dias += 1
}

console.log(`Pasaron ${dias} dias hasta que ${douglas.nombre} adelgazo 3Kg`)