// Dependencias:
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//Funciones: 
function get(URL) {
  
  return new Promise( (resolve, reject) => {
    var xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function() {    
      const DONE = 4;
      const OK = 200;

      if (this.readyState === DONE) {      
        if (this.status === OK) {        
          // TODO OK
          
          resolve(JSON.parse(this.responseText))

        } else {

          // Hubo ERROR
          reject(new Error(`Error al realizar el request: ${this.status}`));

        }
      }
    }

    xhr.open('GET', URL);
    xhr.send(null);
  })

}

// Inicio del script a ejecutar:
let luke = {}

get('http://swapi.co/api/people/1/')
  .then(response => {
    // Guardamos en luke el valor de la repuesta para así poder
    // tener la información disponible en el segundo .then()
    luke = response
    return get(luke.homeworld)
  })
  .then(homeworld => {

    luke.homeworld = homeworld

    console.log(`${luke.name} nació en ${luke.homeworld.name}`)
  })
  .catch( err => console.log(err) )
