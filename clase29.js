
const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";
const OPTS = { crossDomain: true }

function obtenerPersonaje (id, callback) {
    const URL = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
    
    $
    .get(URL, OPTS, callback)
    .fail( () => {
        console.log(`Sucedio un error. No se pudo obtener el personaje ${id}`)
    })
    
}

obtenerPersonaje(1, function (persona) {
    console.log(`Hola, yo soy ${persona.name}`)

    obtenerPersonaje(2, function (persona) {
        console.log(`Hola, yo soy ${persona.name}`)

        obtenerPersonaje(3, function (persona) {
            console.log(`Hola, yo soy ${persona.name}`)

            obtenerPersonaje(4, function (persona) {
                console.log(`Hola, yo soy ${persona.name}`)

                obtenerPersonaje(5, function (persona) {
                    console.log(`Hola, yo soy ${persona.name}`)

                    obtenerPersonaje(6, function(persona) {
                        console.log(`Hola, yo soy ${persona.name}`)

                        obtenerPersonaje(7, function(persona) {
                            console.log(`Hola, yo soy ${persona.name}`)
                        })
                    })
                })
            })
        })
    })
})

// XMLHttpRequest
/*
const URL_API = "https://swapi.dev/api/";
const URL_PEOPLE = "people/:id/";

function obtenerPersonaje(id, callback) {
  // Se crea la URL a consultar.
  const URL_LUKE = `${URL_API}${URL_PEOPLE.replace(":id", id)}`;

  // Se crea un obejeto de la clase XMLHttpRequest.
  var _httpRequest = new XMLHttpRequest();

  // Se "Abre" una conección con el sito al cual se va a hacer la petición de datos.
  // Donde:
  // * "GET": Es el método a utilizar para hacer la consulta.
  // * URL_LUKE: La URL a la cual se consultan los datos.
  // * true: Se indica que la petición será asíncrona (Para peticiones síncronas se usa "false", ya obsoleto)
  _httpRequest.open("GET", URL_LUKE, true);

  // Se especifica la función (Callback) que realizará después de realzar la petición.
  _httpRequest.onreadystatechange = datos => {

    // Si la operacion fue completada (readyState = 4) y el estatus fue exitoso (status === 200)...
    if(_httpRequest.status === 200 && _httpRequest.readyState === 4) {
      // _httpRequest.responseText regresa un String asé que lo pasamos a objeto con "JSON.parse" (Solo aplica para Strings con formato JSON).
      var personaje = JSON.parse(_httpRequest.responseText);
      console.log(`Hola, yo soy ${personaje.name}`);
      if(callback) callback();

      // Cuando el estatus de la petición sea distinto a 200 (éxito)...
    } else if(_httpRequest.status !== 200) {
      console.log(`No se pudo realizar la perición`);
    }
  }

  // Se envía la solicitud.
  _httpRequest.send(null);
}

obtenerPersonaje(1, () => {
  obtenerPersonaje(2, () => {
    obtenerPersonaje(3);
  });
});

*/