const https = require("https");

var url = "https://www.breakingbadapi.com/api/character/random";

function obtenerCita(callback){

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
    console.log("ID: " + objeto[0].char_id);
    console.log("Nombre: " + objeto[0].name);
    console.log("Cumpleaños: " + objeto[0].birthday);
    console.log("Estado: " + objeto[0].status);
    console.log("Sobrenombre: " + objeto[0].nickname);
    console.log("Tamporadas en la que aparece: " + objeto[0].appearance);
    console.log("Protagonizado: " + objeto[0].portrayed);
    console.log("Serie: " + objeto[0].category);
}

obtenerCita(callback);
