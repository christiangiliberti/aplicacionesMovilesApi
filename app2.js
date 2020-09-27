const https = require("https");

var url = "https://www.breakingbadapi.com/api/quote/random?author=Skyler+White";

function obtenerChiste(callback){

    https.get(url, (resp) => {

        let data = "";

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            callback(JSON.parse(data));
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });;

}


function callback(objeto) {
    console.log("ID: " + objeto[0].quote_id);
    console.log("Cita: " + objeto[0].quote);
    console.log("Autor: " + objeto[0].author);
    console.log("Serie: " + objeto[0].series);
}

obtenerChiste(callback);