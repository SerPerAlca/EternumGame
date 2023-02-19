var inicio = [];
var destino = [];
var booleanDistancia = false;
var booleanItineracion = false;
var booleanPrimeraIti = false;
var segundoClick =  false;
var resultadoNecesario= "";
var recorrido = "";
var x1, y1, x2, y2, catAbs, catOrd, distancia;
var caminoRecorrido = 0;
var widthProgreso = "";
var booleanItinerando = false;
var ventanaFight = "width=1500,height=1000,scrollbars=NO,resizable=NO"
//document.cookie = "ubicacion=KISLEV";
var entrarUbicacion = false;

$(document).ready(function() {

    segundoClick = false;

    $('body').on("mousemove", "#divImagen", function(event){
        mostrarPosicionPuntero(event);
    });


    $("#mapaImperio").children().on("mouseover", function(event){
        var cadenaZona = "zona";
        var nombreLugar = this.id;
        var posicion = nombreLugar.search(cadenaZona);
        // comprobamos si estamos en zona de combate o en una ubicacion concreta
        if (posicion != -1){
            // Estamos dentro de una zona de combate
            nombreLugar = nombreLugar.slice(4);
        } else {
            //Estamos en una ubicacion concreta
            llamadaDescripcionLugar(this.id);
        }

    });

    $("#mapaImperio").children().on("mouseout", function(event){
        borrarDescripcion();
    });

    $("#mapaImperio").children().on("click", function(event){
        //Consultamos si es el click de destino en la itineración
        var cadenaZona = "zona";
        var nombreLugar = this.id;
        var posicion = nombreLugar.search(cadenaZona);
        //Si es el click del destino
       if(segundoClick){
           // Si el destino no es una zona,si no una ubicación determinada...
           if (posicion == -1) {
           /* Como es una ubicación concreta, seteamos la cookie de
           * destino que más tarde utilizaremos para entrar en el mismo. */
               nombreLugar = nombreLugar.toUpperCase();
               document.cookie = "destino=" + nombreLugar;
           // Ponemos a true la variable q se usará para entrar al lugar cuando lleguemos
               entrarUbicacion = true;
           }
        //Como es el primer click que hacemos
       } else {
           //Como es una zona de las establecidas en BD
           if(posicion == -1){
            /*seteamos la cookie de ubicación para que se tenga en cuenta esta zona
             a la hora de mostrar los enemigos de la misma en los combates */
               document.cookie = "ubicacion=" + nombreLugar;
           //Como no es una zona determinada
           } else{
               //Quitamos la cadena 'zona' para quedarnos con la ubicación específica
               nombreLugar = nombreLugar.slice(4);
               document.cookie = "ubicacion=" + nombreLugar;
           }
           segundoClick = true;
       }
    });


});

// Funcion que obtiene las coordenadas del click sobre el mapa
function coordenadas(event){
    var longitud = event.pageX;
    var latitud = event.pageY;
    puntero = [longitud, latitud];
    // si no nos encontramos ya en medio de una itineración
    if (!booleanItinerando){
        // Si aún no hemos hecho click en el punto de inicio
        if (!booleanDistancia) {
            inicio = [longitud,latitud];
            console.log("INICIO: " + inicio);
            booleanDistancia = true;
            situarPuntero(longitud,latitud);

        // cuando ya hemos hecho click en el punto de inicio    
        } else {
            console.log("INICIO : "+ inicio + " DESTINO : " + destino);
            destino = [longitud, latitud];
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
    /*console.log("Posicion X: " + posicionX + " Posicion Y: " + posicionY);
    console.log("Client X: " + clientX + " Client Y: " + clientY);
    console.log("Screen X: " + screenX + " Screen Y: " + screenY);*/
    console.log("offset X: " + offsetX + " offset Y: " + offsetY);
    console.log("---------------------------------------------------------------------------")
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
        /*
        Para la prueba BETA aumentaremos la distancia
         */
        distancia = distancia + 10;
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



// Función que muestra la espada en el mapa como situacion actual.
/**
 * TODO: Se mueve el mapa cuando se muestra el resultado necesario lo que provoca que el puntero se descoloque.
 */
function situarPuntero(longitud, latitud){
    document.cookie = "capitulo=MapaCampaña";
    $("#punteroEspada").remove();
    let long = longitud -40;
    long += "px";
    let lat = latitud -90;
    lat += "px";
    console.log("Puntero: Longitud --> " + long + " Latitud ----> " + lat);
    $(`<img id="punteroEspada" src="images/Mapas/punteroEspada.png" style="top: ${lat}; left: ${long}; position: absolute; visibility: visible">`)
    .appendTo("#rowDosCabecera").show();
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
    var cookieDestino = readCookie("destino");

    alert("¡¡ HAS LLEGADO A TU DESTINO !!");

    situarPuntero(x2, y2);
    resetearValoresItineracion();
    $("#punteroEspada").show();
    booleanPrimeraIti = false;
    $("#descripcionItineracion p").text("");

    //SI el destino es una ubicación específica
    if(entrarUbicacion){
        if(confirm("¿Entrar en "+ cookieDestino + " ?")){
            // Cerramos la ventana de campaña
            cerrarVentanaCampania(cookieDestino);
        } else {
            console.log("Decidiste no entrar en " + cookieDestino);
        }
    }
}

// Función que simula el avance de una barra de progreso
function progreso(){

    // resultadoNecesario
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




// Funcion que lanza aleatoriamente un evento al final de cada día
function calcularEventoMapa(){

    let randomNum = getRandomInt(1,5);

    switch ( randomNum){
        case 1: eventoMapaCampaña();
                break;
        default:
            eventoCombate();
            break;
    }
}

// Función que determina que tipo de evento se mostrará
function eventoMapaCampaña(){

    let randomNum = getRandomInt(1, 3);

    switch(randomNum){
        case 1: eventoMapaBueno();
                break;
        case 2: eventoMapaMalo();
                break;
        default: console.log("Evento no encontrado");
                break;
    }
}

function eventoMapaBueno(){

    let randomId = getRandomInt(1,19);
    var tipo = "Buenos";
    comprobarGanarDinero(randomId);
    llamadaEvento(tipo,randomId);
}

function eventoMapaMalo(){

    let randomId = getRandomInt(1,15);
    var tipo = "Malos";
    comprobarPerderDinero(randomId);
    llamadaEvento(tipo,randomId);
}

function eventoCombate(){

    /* Metemos la apertura del combate en un setTimeout para que le de tiempo
        al dado a mostrar el resultado final */
    setTimeout(()=>{
        window.open('/fight', "fight", ventanaFight);
    }, 1000);
}

/* PIntado en el mapa de campaña */
function pintarEvento(evento, resultado){

    ocultarDado();
    //Borramos todos los elementos que se hayan generado
    $("#cuadroDescripcion p").remove();
    $("#textoEvento").remove();
    $("#textoEvento p").remove();

    $(`<div id="textoEvento" >
        <p>${evento}</p></div>`).appendTo("#cuadroDescripcion");
    setTimeout(()=>{
        $(`<p><span style='color:yellow;'>${resultado}</span></p>`).appendTo("#textoEvento");
    }, 6000);
}

function pintarDescripcionLugar(texto){
    $(`<div id="DescripcionTXT"><p>${texto}</p></div>`).appendTo("#cuadroDescripcion");
}

function borrarDescripcion(){
    $("#DescripcionTXT p").text("");
}

//Comprueba según id del json que
// eventos hacen perder dinero a los jugadores
function comprobarPerderDinero(id){

    switch(id){
        case 1 : perderDinero(30);
                    break;
        case 5 : perderDinero(40);
                    break;
        case 13 : perderDinero(25);
                    break;
    }
}
//Comprueba según id del json que
// eventos hacen ganar dinero a los jugadores
function comprobarGanarDinero(id){

    switch(id){
        case 2 : ganarDinero(30);
            break;
        case 17 : ganarDinero(40);
            break;
        case 18 : ganarDinero(35);
            break;
    }
}