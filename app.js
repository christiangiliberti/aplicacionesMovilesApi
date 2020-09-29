
const request = require("request-promise");

var options ={
    url:"https://breakingbadapi.com/api/random-death",
    json:true
}


function obtenerMuerte(){
    return request(options);
}


obtenerMuerte().then(objeto=>{
    console.log("El muerto es: "+ objeto.death);
    console.log("Causa: "+ objeto.cause);
    console.log("Responsable: "+ objeto.responsible);
    console.log("Ultimas palabras: "+ objeto.last_words); 
    console.log("Temporada: "+ objeto.season + " Capitulo: " + objeto.episode);
    console.log("Ocupacion: "+ objeto.occupation);
    console.log("Sobrenombre: "+ objeto.nickname);
});

/*
const request = require("request-promise");

var options ={
    url:"https://www.breakingbadapi.com/api/quote/random",
    json:true
}


function obtenerCita(){
    return request(options);
}


obtenerCita().then(objeto=>{
    console.log("ID: " + objeto[0].quote_id);
    console.log("Cita: " + objeto[0].quote);
    console.log("Autor: " + objeto[0].author);
    console.log("Serie: " + objeto[0].series);
});
*/
