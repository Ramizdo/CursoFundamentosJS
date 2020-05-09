
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
    .then(function(persona){
        console.log(`El personaje 1 es ${persona.name}`)
    })
    .catch(onError)