// FUNCION QUE PREGUNTA DATOS AL USUARIO

var signo = prompt("Cual es tu signo?")

const MENSAJE = "NO CREAS EN ESTAS PENDEJADAS"

switch (signo) {
    case 'capricornio':
        console.log(`${signo.toUpperCase()}: ${MENSAJE}`)
        break;
    case 'tauro':
        console.log(MENSAJE)
        break;
    case 'geminis':
    case 'géminis':
        console.log(MENSAJE)
        break;
    case 'acuario':
        console.log(MENSAJE)
        break;
    case 'piscis':
        console.log(MENSAJE)
        break;
    default:
        console.log(`${signo}: no es un signo valido`)
        break;
}