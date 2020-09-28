const request = require("request-promise");

var options ={
    url:"https://breakingbadapi.com/api/deaths",
    //https://breakingbadapi.com/api/random-death en este link no me funciona porque???
    json:true
}


function obtenerMuerte(){
    return request(options);
}


obtenerMuerte().then(objeto=>{
    console.log("Muerte: "+ objeto[0].death);
    console.log("Causa: "+ objeto[0].cause);
    console.log("Responsable :"+ objeto[0].responsible);
    console.log("Ultimas palabras: "+ objeto[0].last_words); 
    console.log("Temporada: "+ objeto[0].season + " Capitulo: " + objeto[0].episode); 
});



/*
const request = require("request-promise");

var options ={
    url:"https://www.breakingbadapi.com/api/quote/random?author=Skyler+White",
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