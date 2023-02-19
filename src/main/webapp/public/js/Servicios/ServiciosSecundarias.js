

function llamadaTextoSec(itineradorSecundaria){

    reproducirTextoSec(itineradorSecundaria);

    var cookieDirectorio = readCookie("mision");
    var ramificacionSec = readCookie("ramificacionSec");

    let directorioJSON = "texto" + ramificacionSec + itineradorSecundaria + ".json";
    //Machaco el valor de directorio con la ruta definitiva del JSON
    directorioJSON = 'json/' + cookieDirectorio + '/'+ directorioJSON;

    //Mostramos la info Debug
    mostrarInfoJSON(directorioJSON);

    fetch(directorioJSON)
        .then(res => res.json())
        .then(data =>{
            for(let index of Object.values(data)){
                pintarTexto(index.contenido)
            }
        });
}