
function diasEntreFechas(fechainicio, fechafin){

    const unDia = 1000 * 60 * 60 * 24
    const diferencia = Math.abs(fechainicio - fechafin)

    return Math.floor(diferencia / unDia)
}

const hoy = new Date()
const nacimientoLiliana = new Date(1996, 4, 18)
const nacimientoDouglas = new Date(1991, 0, 3)

var fechaDouglas = (diasEntreFechas(hoy, nacimientoDouglas))
var fechaLiliana = (diasEntreFechas(hoy, nacimientoLiliana))
var resta = fechaDouglas - fechaLiliana


var ano = Math.floor(resta / 365);
var meses = Math.floor((resta - (ano * 365)) / 30)
var dia = Math.floor(resta - (ano * 365) - (meses * 30))

if (diasEntreFechas(hoy, nacimientoDouglas)){
    console.log(`Desde que Douglas nacio han pasado ${fechaDouglas} dias`)
}
if (diasEntreFechas(hoy, nacimientoLiliana)){
    console.log(`Desde que Liliana nacio han pasado ${fechaLiliana} dias`)
}

console.log(`La diferencia de dias entre los dos es: ${resta} dias`)
console.log(`Equivale a ${ano} años, ${meses} meses y ${dia} dias`)
