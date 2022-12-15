var inicio = [];
var destino = [];
var booleanDistancia = false;
var booleanItineracion = false;
var booleanPrimeraIti = false;
var resultadoNecesario= "";
var recorrido = "";
var x1, y1, x2, y2, catAbs, catOrd, distancia;
var caminoRecorrido = 0;
var widthProgreso = "";
var booleanItinerando = false;

$(document).ready(function() {

    $('body').on("mousemove", "#divImagen", function(event){
        mostrarPosicionPuntero(event);
    });

    $("#areaImperium").on("mouseover", function(event){
        mostrarTooltip(event);
    });
});   

// Funcion que obtiene las coordenadas del click sobre el mapa
function coordenadas(event){
    var posicionX = event.pageX;
    var posicionY = event.pageY;
    puntero = [posicionX, posicionY];
    // si no nos encontramos ya en medio de una itineración
    if (!booleanItinerando){
        // Si aún no hemos hecho click en el punto de inicio
        if (!booleanDistancia) {
            console.log("INICIO : " + inicio);
            inicio = [posicionX,posicionY];
            booleanDistancia = true;

        // cuando ya hemos hecho click en el punto de inicio    
        } else {
            console.log("INICIO : "+ inicio + " DESTINO : " + destino);
            destino = [posicionX, posicionY];
            booleanItinerando = true;
            generarMovimiento();
            // booleanDistancia = false;
        }
    }
   
} 
   


// Función para mostrar las coordenadas del puntero (Cuando lo necesito)
function mostrarPosicionPuntero(event) {
    var posicionX = event.pageX;
    var posicionY = event.pageY;
    var clientX = event.clientX;
    var clientY = event.clientY;
    var screenX = event.screenX;
    var screenY = event.screenY;
    var offsetX = event.offsetX;
    var offsetY = event.offsetY;
    console.log("Posicion X: " + posicionX + " Posicion Y: " + posicionY);
    console.log("Client X: " + clientX + " Client Y: " + clientY);
    console.log("Screen X: " + screenX + " Screen Y: " + screenY);
    console.log("offset X: " + offsetX + " offset Y: " + offsetY);
}

// Función que genera toda la acción en lo referente a la itineración
function generarMovimiento(){

    resultadoNecesario = calcularDistancia();
    $("#descripcionItineracion p").text(resultadoNecesario);
    booleanItineracion= true;
    mostrarDado();
    recorrido = resultadoNecesario;
}

// Función que calcula la distancia entre dos coodenadas (Teorema de Pitágoras)
function calcularDistancia() {
    
    try{
        x1 = inicio[0];
        y1 = inicio[1];
        x2 = destino[0];
        y2 = destino[1];
        catAbs = x2 - x1;
        catOrd = y2 - y1;
        distancia = Math.trunc(Math.sqrt(Math.pow(catAbs,2) + Math.pow(catOrd,2)));      
        //situarPuntero(x2, y2);
        inicio = destino;
        distancia = Math.trunc(distancia / 16);
        return distancia;

    }catch(e){
        console.log(`Se produjo el siguiente error:  ${e.message}`);
    }
    
}


// Funcion que controla si ya hemos llegado al destino o seguimos en camino
function calcularRecorrido(){
    console.log(recorrido);
     
    // la primera vez que se tiran los dados...
    if (!booleanPrimeraIti){
        recorrido = recorrido - resultadoDado;
        booleanPrimeraIti = true;
    } 
    //la segunda vez 
    else {
        recorrido -= resultadoDado;
    }   
    progreso();
    if ( recorrido > 0){
        calcularEventoMapa();
        mostrarDado();
    } else {
        llegarDestino();
    }
}

// Funcion que lanza aleatoriamente un evento al final de cada día
function calcularEventoMapa(){

    let randomNum = getRandomInt(1, 4);

    switch ( randomNum){
        case 1:
            fight();
            break;
        case 2:
            alert("Evento Bueno");
            break;
        case 3: 
            alert("Evento Malo");
            break;
        default:
            console.log("evento No encontrado");
            break;        
    }
}

// Función que muestra la espada en el mapa como situacion actual.
/**
 * TODO: Se mueve el mapa cuando se muestra el resultado necesario lo que provoca que el puntero se descoloque.
 */
function situarPuntero(longitud, latitud){
    $("#punteroEspada").remove();
    let long = longitud -20;
    long += "px";
    let lat = latitud - 70; 
    lat += "px";
    $(`<img id="punteroEspada" src="images/Mapas/punteroEspada.png" style="top: ${lat}; left: ${long}; position: absolute; visibility: visible">`)
    .appendTo("#rowDosCabecera").hide();
  /*  $("#punteroEspada").css({
        "top" : `${lat}`,
        "left" : `${long}`,
        "position" : "absolute",
        "visibility" : "visible"
    }).hide(); */

}

// Función que simula el avance de una barra de progreso
function progreso(){

    resultadoNecesario
    caminoRecorrido = caminoRecorrido + resultadoDado;
    let porcentajeAncho = caminoRecorrido * 100 / resultadoNecesario;
    widthProgreso = porcentajeAncho + '%';

    //Controlamos el desbordamiento de la barra de progreso
    let widthInt = parseInt(widthProgreso.replace('%',''));
    if( widthInt > 100){
        widthProgreso= '102%';
    }

    //Seteamos el width de la barra para simular el progreso.
    $("#barraProgreso").css({
        "width" : `${widthProgreso}`
    });

    //Añadimos la imagen del monigote al final de la barra de progreso.
    $("#personajeAndando").remove();
    $(`<img id="personajeAndando" src="images/Mapas/personajeAndando.png"/>`)
    .appendTo("#barraProgreso").show();
}

// Función para reiniciar los valores que forman la barra de progreso
function resetearValoresItineracion(){
    $("#barraProgreso").css({
        "width" : "1"
    });
    $("#personajeAndando").remove();
    widthProgreso = "1";
    caminoRecorrido= 0;
    resultadoNecesario = 0;
}

// Función que se invoca al llegar al destino en la itineración
function llegarDestino(){
    booleanItinerando = false;
    alert("¡¡ HAS LLEGADO A TU DESTINO !!");
    situarPuntero(x2, y2);
    resetearValoresItineracion();
    $("#punteroEspada").show();
    booleanPrimeraIti = false;
    $("#descripcionItineracion p").text("");
}

function mostrarTooltip(event){
   
    var posMouse = event.pageX; 
    var textoTooltip = "Imperium. Capital del Imperio. Centro del poder y la administración de todo el Imperio."

    if (textoTooltip.length > 0) {
        $("#divMapa").append(`<div class="tooltip">  ${textoTooltip}  </div>`);
        $("#divMapa .tooltip").fadeIn(300);
    }
}    

function ocultarTooltip(){

}