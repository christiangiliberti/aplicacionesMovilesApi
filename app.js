
const request = require("request-promise");

var options ={
    uri:"https://breakingbadapi.com/api/random-death",
    json:true
}

function obtenerMuerte(){
    return request(options);
}

obtenerMuerte().then(objeto=>{
    console.log("ID: "+ objeto.death_id);
    console.log("El muerto es: "+ objeto.death);
    console.log("Causa: "+ objeto.cause);
    console.log("Responsable: "+ objeto.responsible);
    console.log("Ultimas palabras: "+ objeto.last_words); 
    console.log("Temporada: "+ objeto.season + " Capitulo: " + objeto.episode);
    console.log("Ocupacion: "+ objeto.occupation);
    console.log("Sobrenombre: "+ objeto.nickname);
});
