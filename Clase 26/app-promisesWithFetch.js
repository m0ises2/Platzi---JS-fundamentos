// Dependencias:
var fetch = require('node-fetch');

let luke = {}

/*
  Documentación:
    - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    - https://developer.mozilla.org/en-US/docs/Web/API/Response
*/
fetch('http://swapi.co/api/people/1/')
  .then(response => response.json()/* Retorna promesa */)
  // Encadeno la promesa
  .then(json => { 
    // Guardamos en luke el valor de la repuesta para así poder
    // tener la información disponible en el segundo .then()
    luke = json
    return fetch(luke.homeworld)
  })
  .then(response => response.json()/* Retorna promesa */)
  // Encadeno la promesa
  .then(json => {

    luke.homeworld = json

    console.log(`${luke.name} nació en ${luke.homeworld .name}`)
  })
  .catch( err => console.log(err) )
