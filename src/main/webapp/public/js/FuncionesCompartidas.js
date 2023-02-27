var contDegradado = 0;
var itineradorIndice = 0;
var itineradorAmbiente = 1;
var ventanaMapaCampaña = "width=2000,height=1000,scrollbars=NO,resizable=NO"
document.cookie = "combateJefe=false";
var mapaCampania;

/** Lista de cookies de capítulos y misiones **/
//document.cookie = "despertar=false";
var LIEL;
var elForajido;
var Averlan;

$(document).ready(function (){
    $(".conte-degradado").hide();
    $(".conte-texto").hide();
    $("#btn-itinerar").show();
    $("#btn-itinerar").unbind('click').click(function (){
        itineradorIndice++;
        controladorCapi();
        mostrarTituloCapitulo();
    });

    $("#btn-SalirCiudad").unbind('click').click(function (){
        abrirMapaCampania();
    });

    /************* ordenar por campos en las listas *****************************/
    $('th').click(function (){
        var table = $(this).parents('table').eq(0)
        var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
        this.asc = !this.asc
        if (!this.asc) {
            rows = rows.reverse()
        }
        for (var i = 0; i < rows.length; i++) {
            table.append(rows[i])
        }
        setIcon($(this), this.asc);
    })

    function comparer(index){
        return function (a, b){
            var valA = getCellValue(a, index),
                valB = getCellValue(b, index)
            return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.localeCompare(valB)
        }
    }

    function getCellValue(row, index){
        return $(row).children('td').eq(index).html()
    }

    function setIcon(element, asc){
        $("th").each(function (index){
            $(this).removeClass("sorting");
            $(this).removeClass("asc");
            $(this).removeClass("desc");
        });
        element.addClass("sorting");
        if (asc) element.addClass("asc");
        else element.addClass("desc");
    }

    /**********************************************************************/
});

function abrirMapaCampania(){

    mapaCampania =  window.open('/itinerar', "MapaCampania", ventanaMapaCampaña);
}

/** FUNCIONES DE PINTADO EN EL JSP ******************************************************************************************************************/
function pintarTexto(datos){
    $(`<p class='textoJson'> ${datos} </p>`)
        .appendTo("#texto")
        .hide()
        .fadeIn(1000);

    console.log("****************************************************");
    console.log("CONTENIDO VARIABLE DATOS: " + datos);
}

function pintarRespuesta(datos){
    $(`<p class='textoJson'> ${datos} </p>`)
        .appendTo("#textoRespuestas")
        .hide()
        .fadeIn(500);

    console.log("****************************************************");
    console.log("CONTENIDO VARIABLE DATOS: " + datos);
}

function pintarOpcionesConPausa(opcionObligada, id, pregunta){
    // SE realiza comprobación para pintar (OPCIONAL) en las opciones no obligatorias.
    if (!opcionObligada) {
        $(`<div id=${id} class="Opciones" style="color:red" onmouseover="this.style.color='#196883';" onclick="pausarAccion(${id},${itinerador},${opcionObligada})"
                onmouseout="this.style.color='red';"> ${pregunta} <span style="color:#ea8069; font-size:small">(OPCIONAL)</span> </div>`)
            .appendTo("#textoOpciones")
            .hide()
            .fadeIn(2000);
    } else {
        $(`<div id=${id} class="Opciones" style="color:red" onmouseover="this.style.color='#196883';" onclick="pausarAccion(${id},${itinerador},${opcionObligada})"
                onmouseout="this.style.color='red';"> ${pregunta} </div>`)
            .appendTo("#textoOpciones")
            .hide()
            .fadeIn(2000);
    }
}

// Pinta las opciones con pausa a partir del capítulo 2.
function pintarOpcionesPausaV2(opcionObligada, id, pregunta, rama){
    // SE realiza comprobación para pintar (OPCIONAL) en las opciones no obligatorias.

    if (!opcionObligada) {
        $(`<div id=${id} class="Opciones" style="color:red" onmouseover="this.style.color='#196883';" onclick="pausarAccionV2(${id},${itinerador},${opcionObligada},'${rama}')"
                    onmouseout="this.style.color='red';"> ${pregunta} <span style="color:#ea8069; font-size:small">(OPCIONAL)</span> </div>`)
            .appendTo("#textoOpciones")
            .hide()
            .fadeIn(2000);
    } else {
        $(`<div id=${id} class="Opciones" style="color:red" onmouseover="this.style.color='#196883';" onclick="pausarAccionV2(${id},${itinerador},${opcionObligada},'${rama}')"
                   onmouseout="this.style.color='red';"> ${pregunta} </div>`)
            .appendTo("#textoOpciones")
            .hide()
            .fadeIn(2000);
    }
}

function pintarOpcionesConPruebaSuerte(especial, id, pregunta){
    // SE realiza comprobación para pintar (OPCIONAL) en las opciones no obligatorias.
    if (especial) {
        $(`<div id=${id} class="Opciones" style="color:red" onmouseover="this.style.color='#196883';" onclick="controladorDadoGeneral()"
                onmouseout="this.style.color='red';"> ${pregunta} <span style="color:#ea8069; font-size:small">(TIRADA DE DADOS)</span> </div>`)
            .appendTo("#textoOpciones")
            .hide()
            .fadeIn(2000);
    } else {
        $(`<div id=${id} class="Opciones" style="color:red" onmouseover="this.style.color='#196883';" onclick="fight()"
                onmouseout="this.style.color='red';"> ${pregunta} </div>`)
            .appendTo("#textoOpciones")
            .hide()
            .fadeIn(2000);
    }
}

/******************************************************************************************************************************************************************************************/

// FUNCION PARA OCULTAR LOS BOTONES PRINCIPALES
function ocultacionBotones(){
    $("#btn_siguiente").hide();
    $("#btn_tiendas").hide();
    $("#btn_empezar").hide();
    $("#btn-Palacio").hide();
    //$("#btn-CasaC").hide();
    $("#btn-Salir").hide();
    $("#CabeceraAudio").show();
    $("#btn-itinerar").show();
}

//FUNCION PARA LEER OBTENER LAS COOKIES
function readCookie(name){
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) {
            return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
    }
    return null;
}


/******* FUNCIONES DE BORRADO HTML  ************************************************************************************************************************/
function borradoTextoItineracion(){
    $("#textoItineracion").text("");
}

// BORRAMOS LOS ELEMENTOS CREADOS DINAMICAMENTE
function borradoCuerpoTexto(){
    $("#texto").text("");
    $("#textoRespuestas").text("");
    $("#textoOpciones div").remove();
    $("#textoOpciones div").text("");
    $("#textoOpciones p").text("");
    $("#textoItineracion div").remove();
}

/*********************************************************************************************************************************************************/

// FUNCIONES PARA HABILITAR / DESHABILITAR LAS OPCIONES DE DIÁLOGO
function desabilitarOpcion(){
    document.getElementById("textoOpciones").style['pointer-events'] = 'none';
}

function enableClicks(){
    document.getElementById("textoOpciones").style['pointer-events'] = 'auto';
}

/************************** F U N C I O N E S   A D M I N I S T R A D O R A  *************************************************************************************/
// funcion controladora cuando no se logra la tirada necesaria con los dados.
function administrarPifiaGeneral(itinerador){
    let cookieCapitulo = readCookie("capitulo");
    let ramificacion = readCookie("ramificacion");

    switch (true) {
        case cookieCapitulo == "LaIglesiaEnTodosLados":
            ControladorPifiaLIEL(itinerador);
            break;
        default:
            console.log("No se ha encontrado metodo pifia()");
            break;
    }

}

// Funcion controladora cuando se pulsa sobre el boton Pagina siguiente */
function ControladorBotonSiguiente(){
    var cookieCapitulo = readCookie("capitulo");
    var batalla = readCookie("batalla");
    if (batalla == "true") {
        pausarMusicaBatalla();
        document.cookie = "batalla=false";
        window.close();
    }
    switch (cookieCapitulo) {
        case "Despertar":
            pagSiguienteDespertar();
            break;
        case "LaIglesiaEnTodosLados":
            ControladorPagSiguienteLIEL();
            break;
        case "ElForajido":
            ControladorPagSiguienteEF();
            break;
        case "Averlan":
            controladorPagSiguienteAV();
            break;
        case "Itineracion":
            $("#btn-mostrarMapa").click();
            break;
        default:
            console.log("pagina no encontrada");
            break;
    }
}

function ControladorBotonSiguienteSec(){
    var cookieLugar = readCookie("ubicacion");
    var batalla = readCookie("batalla");
    if (batalla == "true") {
        pausarMusicaBatalla();
        document.cookie = "batalla=false";
        window.close();
    }
    esconderSigSec();
    switch (cookieLugar) {
        case "KISLEV":
            pagSiguienteDespertarSec();
            break;
        default:
            console.log("pagina no encontrada");
            break;
    }
}


/* Funcion controladora de la tirada del Dado.
Es llamada cuando se tira el dado y se encarga de llamar a la escena correcta */
function ControladorTiradaDadoGeneral(resultado, itinerador){

    let capitulo = readCookie("capitulo");
    let ubicacion = readCookie("ubicacion");

    if (!booleanItineracion) {
        setTimeout(function (){
            ocultarDado();
        }, 4000);
    }

    switch (true) {
        case capitulo == "LaIglesiaEnTodosLados":
            ControladorTiradaDadoLIEL(resultado);
            break;
        case (booleanItineracion):
            // Llamamos a una funcion de Itineracion.js
            calcularRecorrido();
            break;
        default:
            console.log("Resultado de la tirada: " + resultado);
    }

}

/* Funcion controladora cuando se pulsa sobre opciones de dialogo
que conllevan tirada de dados */
function controladorDadoGeneral(){
    let capitulo = readCookie("capitulo");

    switch (capitulo) {
        case "LaIglesiaEnTodosLados":
            controladorDadoLIEL();
            break;
        default:
            console.log(" :) ")
            break;
    }
    mostrarDado();
}

/* COntrolador Auxiliar para determinados momentos en los que se
    acierta en una tirada pero no hay texto después */
function controladorAciertosGeneral(){

    let capitulo = readCookie("capitulo");
    switch (capitulo) {
        case "LaIglesiaEnTodosLados":
            controladorAciertosLIEL();
            break;
        default:
            console.log(" :) ")
            break;
    }
}

/* Función controladora del botón Al siguiente capítulo */
function controladorCapi(){
    pausarMusicaAmbiente();
    pausarAudio();
    switch (itineradorIndice) {
        case 2:
            inicioLIEL();
            break;
        case 3:
            inicioEF();
            break;
        case 4:
            inicioAV();
            break;
        default:
            console.log("No se encuentra Capítulo");
            break;
    }
}

function controladorLibreAlbedrio(){

    var cookieLugar = readCookie("ubicacion");

    switch(cookieLugar){
        case "KISLEV" : libreAlbedrioKislev();
                        break;
        default: console.log("no se encontró libre Albedrío");
                        break;
    }
}

// FUNCIONES CONTROLADORA DEL AUDIO DE BATALLA
function comprobarSiEstamosEnBatalla(){
    var jefe = readCookie("combateJefe");
    let batalla = readCookie("batalla");
    if (batalla == "true") {
        console.log("Seguimos en Batalla");
        if (jefe != "false") {
            reproducirMusicaBattalla();
        } else {
            reproducirMusicaBattallaJefe();
        }
    } else {
        pausarMusicaBatalla();
    }

}

// FUNCIONES CONTROLADORA DEL AUDIO DE BATALLA (esta funcion actúa como una especie de observer)
function interMusicaBatalla(boleano){
    // alert("seguimos en batalla!");
    var intervaloMusicaBatalla = false;
    if (boleano) {
        intervaloMusicaBatalla = setInterval(function (){
            console.log("***** COMPROBANDO BATALLA ******");
            //comprobarSiEstamosEnBatalla();
        }, 420000);
    } else {
        console.log("Se acabó la batalla");
        clearInterval(intervaloMusicaBatalla);
    }
}

/*******************************************************************************************************************************************************/


/** Función que controla la respuesta que se muestra, además de mostrar el botón siguiente **/
function pausarAccion(id, itinerador, opcionObligada){
    new Promise(function (resolve){
        resolve(llamadaRespuestas(id, itinerador));
    })
        .then(function (result){
            if (opcionObligada) {
                desabilitarOpcion();
                enseniarSig();
            }
        });
}

/** Función que controla la respuesta que se muestra, además de mostrar el botón siguiente a partir del capítulo 2 **/
function pausarAccionV2(id, itinerador, opcionObligada, rama){
    new Promise(function (resolve){
        document.cookie = "ramificacion=" + rama;
        //En el capitulo 3 se cumplen si cumplen estas condiciones ganan 250G
        if(id == 1 && itinerador == 14 && opcionObligada == true && rama =='A'){
            ganarDinero(250);
        }
        resolve(llamadaRespuestas(id, itinerador));
    })
        .then(function (result){
            if (opcionObligada) {
                desabilitarOpcion();
                enseniarSig();
            }
        });

}

/** funcion encargada de llamar al servicio después de tirar los dados
 y de llamar a las funciones que pintan la respuesta **/
function mostrarResultadoDados(itinerador, resultado){
    borradoCuerpoTexto();
    itinerador++;
    llamadaDespuesDeDado(resultado, itinerador);
}

function enseniarSig(){
    $("#siguiente").show();
    $("#btn_siguiente").show();
}

function esconderSig(){
    $("#siguiente").hide();
    $("#btn_siguiente").hide();
}

function enseniarSigSec(){
    $("#siguiente").show();
    $("#btn_siguiente").hide();
    $(`<button type="button" class="btn btn-secondary" 
        id="btn_siguienteSec" onclick="ControladorBotonSiguienteSec()">Página Siguiente</button>`)
        .appendTo("#siguiente");
}

function esconderSigSec(){
    $("#siguiente").hide();
    $("#btn_siguienteSec").remove();
}

/************** A N I M A C I O N E S  ******************************************************************************************************************/
function insertarSangreEnemigo(){
    $(`<img src="images/gotasDeSangre.png"
                    style="z-index: 3; position:absolute; width: 100%; height: 100%; box-shadow: none !important; border:0 !important;">`)
        .appendTo("#imagenes").hide().fadeIn(2000);
}

function animacionX(){
    $(`<img src="images/equis.png" style="z-index: 4; position:absolute; width: 60%; height: 100%; margin-left: auto; box-shadow: none !important; border:0 !important;">`)
        .appendTo("#imagenes").hide().fadeIn(2000);
    ;
}

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function mostrarInfoSecuencia(nombreSecuencia){
    $("#infoDebugSecuencia").text("");
    $("#infoDebugSecuencia").text(nombreSecuencia);
}

function mostrarInfoJSON(directorioJSON){
    $("#infoDebugTexto").text("");
    $("#infoDebugTexto").text(directorioJSON);
}

function mostrarInfoAudio(rutaAudio){
    $("#infoDebugAudio").text("");
    $("#infoDebugAudio").text(rutaAudio);
}

// Función del botón  de volver a la Pagina Principal
function volverHome(){
    location.href = '/';
}

// Función del botón  de volver de los listados
function volverListados(){
    location.href = '/listarElementos';
}

function salir(){
    window.close();
}

// FUNCION AJAX PARA CUANDO SE DEBE PERDER DINERO DE LA SESSION
function perderDinero(cantidad){

    var data = {cantidad: cantidad}
    var request = $.ajax({
        url: "/perderDinero",
        type: "POST",
        data: data,
        cache: false,
        timeout: 600000,
        encode: true,
    });
    request.fail(function (e, textStatus){
        console.log("LLamada Fallida: " + textStatus);
    });

    request.done(function (data){
        console.log("Habéis perdido " + cantidad + " monedas de oro");
    });
}

// FUNCION AJAX PARA CUANDO SE GANA DINERO EN LA AVENTURA
function ganarDinero(cantidad){
    var data = {cantidad: cantidad}
    var request = $.ajax({
        url: "/ganarDinero",
        type: "POST",
        data: data,
        cache: false,
        timeout: 600000,
        encode: true,
    });
    request.fail(function (e, textStatus){
        console.log("LLamada Fallida: " + textStatus);
    });

    request.done(function (data){
        console.log("Habéis ganado " + cantidad + " monedas de oro");
    });
}

function serviciosTaberna(){
    pausarAudio();
    borradoCuerpoTexto();
    itineradorAmbiente=1;
    reproducirAmbiente();
    reproducirTaberna();
    //$("#imagenes img").remove();
    $("#imagenes img").attr({
        src: "images/Taberna.jpg",
        width: "740px !important",
        height: "600px !important"
    });
    $(`<p> ¿Deseáis una cama para recuperar por completo vuestra VITALIDAD y PM </p>`)
        .appendTo("#texto")
        .show();
    $(`<p> <span style="color:darkred;" onclick="descansarPosada()">SI (-10 monedas de oro)</span> &nbsp; &nbsp; &nbsp; <span style="color:darkred;"onclick="salirPosada()">NO</span> </p>`)
        .appendTo("#texto")
        .hide()
        .fadeIn(1500);

}

function descansarPosada(){
    pausarAudio();
    pausarMusicaAmbiente();
    reproducirSuenio();
    perderDinero(10);
    $(document.body).prepend(`<img id="imagenSuenio" src="images/animacionDormir.gif" style="position: absolute; width: 100%; height: 100%; margin-top: 1px; z-index: 5; opacity: 1">`);

    setTimeout(()=>{
        $("#imagenSuenio").remove();
        pausarAudio();
        controladorLibreAlbedrio();
    }, 5700);
}

// Funcion Controladora para entrar en una ubicación concreta
function controladoraEntrarEn(destino){
    mapaCampania.close();
    document.cookie = "ubicacion="+destino;
    switch (destino) {
        case 'KISLEV':
            location.href = '/historia';
            break;
        case 'CAMPAMENTO_GRERIUS':
            inicioLIEL();
            break;
        case 'CAMPAMENTO_HOOD' :
            restosCampamento();
            break;
        case 'AVERLAN':
            controladorAverlan();
            break;
        default: console.log("Ubicacion no encontrada");
                 break;
    }
}

//Función para cerrar el jsp de Mapa de Campaña
function cerrarVentanaCampania(destino){
    window.opener.controladoraEntrarEn(destino);
}

/* Funcion que decide si se inicia el capitulo 3
o el 4, ya que los dos se inician en Averlan */
function controladorAverlan(){
    var forajido = readCookie("forajido");
    //Si no se ha jugado el tercer capitulo
    if(forajido != 'true'){
        inicioEF();
    //Si se ha jugado nos vamos a Averlan
    } else {
        inicioAV();
    }
}

function borrarBotonesItineracion(){
    $("#btn-SalirCiudad").remove();
    $("#btn-M1").remove();
    $("#btn-Salir").remove();
    $("#tiendaArmas").remove();
    $("#tiendaArmadura").remove();
    $("#tiendaItems").remove();
    $("#btn-Palacio").remove();
    $("#btn-CasaC").remove();
    $("#palacioConde").remove();
    $("#caballerizas").remove();
}