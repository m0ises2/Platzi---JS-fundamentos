// Dependencias:
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//Funciones: 
function get(URL, callback) {
  
  var xhr = new XMLHttpRequest()

  xhr.onreadystatechange = function() {    
    const DONE = 4;
    const OK = 200;

    if (this.readyState === DONE) {      
      if (this.status === OK) {        
        // TODO OK
        callback(null, JSON.parse(this.responseText));
      } else {        
        // Hubo ERROR
        callback(new Error(`Error al realizar el request:${this.status}`));
      }
    }
  }

  xhr.open('GET', URL);
  xhr.send(null);

}

// Inicio del script a ejecutar:
get('http://swapi.co/api/people/1/', function onResponse(error, luke) {
  if (!error) return get(luke.homeworld, function(err, homeworld) { 
    if (!err) return console.log(`${luke.name} nació en ${homeworld.name}`)

    console.log(err)
  })

  console.log(error)
  
});