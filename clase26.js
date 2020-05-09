/*
const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";

const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(":id", 1)}`;
const OPTS = { crossDomain: true }

const onPeopleResponse = function (persona) {
    console.log(`Hola, yo soy ${persona.name}`)
}

$.get(LUKE_URL, OPTS, onPeopleResponse) */

// OTRA MANERA DE HACERLO, SERIA CON XMLHttpRequest

const URL_API = "https://swapi.dev/api/";
const URL_PEOPLE = "people/:id/";
const URL_LUKE = `${URL_API}${URL_PEOPLE.replace(":id", 1)}`;

// Se crea un obejeto de la clase XMLHttpRequest.
var _httpRequest = new XMLHttpRequest();

// Se "Abre" una conección con el sito al cual se va a hacer la petición de datos.
// Donde:
// * "GET": Es el método a utilizar para hacer la consulta.
// * URL_LUKE: La URL a la cual se consultan los datos.
// * true: Se indica que la petición será asíncrona (Para peticiones síncronas se usa "false", ya obsoleto)
_httpRequest.open("GET", URL_LUKE, true);

// Se especifica la función (Callback) que realizará después de realzar la petición.
_httpRequest.onreadystatechange = function(datos) {

  // Si la operacion fue completada (readyState = 4) y el estatus fue exitoso (status === 200)...
  if(_httpRequest.readyState === 4 && _httpRequest.status === 200) {
    // _httpRequest.responseText regresa un String asé que lo pasamos a objeto con "JSON.parse" (Solo aplica para Strings con formato JSON).
    var personaje = JSON.parse(_httpRequest.responseText);
    console.log(`Hola, yo soy ${personaje.name}`);
  }
}

// Se envía la solicitud.
_httpRequest.send(null);