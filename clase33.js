
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

async function obtenerPersonajes() {

    var ids = [1, 2, 3, 4, 5, 6, 7]
    var promesas = ids.map (id => obtenerPersonaje(id))
    try {
        var persona = await Promise.all(promesas)
        console.log(persona)
    } catch (id) {
        onError(id)
    }
    
}

obtenerPersonajes()