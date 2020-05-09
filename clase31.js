
const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";
const OPTS = { crossDomain: true }

function obtenerPersonaje (id) {
    return new Promise((resolve,reject) => {
        const URL = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
        $
        .get(URL, OPTS, function (persona){
            resolve(persona)
        })
        .fail(() => reject(id))
    })
}

function onError(id){
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

obtenerPersonaje(1)
    .then(persona1 => {
        console.log(`El personaje 1 es ${persona1.name}`)
        return obtenerPersonaje(2)
    })
    .then(persona2 => {
        console.log(`El personaje 2 es ${persona2.name}`)
        return obtenerPersonaje(3)
    })
    .then(persona3 => {
        console.log(`El personaje 3 es ${persona3.name}`)
        return obtenerPersonaje(4)
    })
    .then(persona4 => {
        console.log(`El personaje 4 es ${persona4.name}`)
        return obtenerPersonaje(5)
    })
    .then(persona5 => {
        console.log(`El personaje 5 es ${persona5.name}`)
        return obtenerPersonaje(6)
    })
    .then(persona6 => {
        console.log(`El personaje 6 es ${persona6.name}`)
        return obtenerPersonaje(7)
    })
    .then(persona7 => {
        console.log(`El personaje 7 es ${persona7.name}`)
        return obtenerPersonaje(5)
    })
    .catch(onError)