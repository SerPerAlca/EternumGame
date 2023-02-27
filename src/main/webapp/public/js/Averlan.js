var booleanCapitulo4 = false;

function inicioAV(){
    // Cookies
    document.cookie = "ubicacion=AVERLAN";
    document.cookie = "capitulo=Averlan";
    document.cookie = "ramificacion=X";
    document.cookie = "batalla=false";

    var averlanHorca = readCookie("averlanHorca");
    borradoCuerpoTexto();
    //$("#btn-itinerar").hide();
    $("#btn-Salir").remove();
    obtenerTituloCapitulo();
    itinerador = 0;
    itineradorAmbiente = 1;
    pausarAudio();
    if (averlanHorca != 'true') {
        document.cookie = "capitulo=Averlan";
        mostrarTituloCapitulo();
        $("#imagenes img").remove();
        $("<div class='Inicio'>IV. Averlan </div>")
            .filter(".Inicio").click(function (){
            primeraSecuenciaAV();
        }).end().appendTo("#texto");
        booleanCapitulo4 = true;
    } else {
        libreAlbedrioAverlan();
    }
}

/////// S E C U E N C I A S //////////////////////////////////////////////////////////////////////////////////////////////


function primeraSecuenciaAV(){
    document.cookie = "capitulo=Averlan";
    document.cookie = "averlanHorca=true";
    $("#CabeceraAudio").hide();
    // $("#btn-itinerar").hide();
    $("#imagenes img").remove();
    borradoCuerpoTexto();
    mostrarInfoSecuencia("primeraSecuenciaAV");
    esconderSig();

    $(`<img src="images/Averlan/callePrincipal.png" style="border-radius:12px; width: 540px; height: 50rem;">`)
        .appendTo("#imagenes");
    itineradorAmbiente = 2;
    reproducirAmbiente();

    itinerador = 0;
    new Promise(function (resolve){
        $("#imagenes img").attr({
            src: "images/Averlan/callePrincipal.png",
            width: "450px"
        });
        // Entráis en la ciudad enseñando el salvoconducto
        resolve(llamadaTexto(itinerador));
    }).then(function (result){
       setTimeout(()=>{
           enseniarSig();
       }, 5000) ;
    });
}

function segundaSecuenciaAV(){
    mostrarInfoSecuencia("segundaSecuenciaAV");
    borradoCuerpoTexto();
    $("#imagenes img").attr({
        src: "images/Averlan/multitudAverlan.jpg",
        width: "450px"
    });
    itinerador = 1;
    // Subís por la calle principal y llegáis a la plaza central.
    llamadaTexto(itinerador);
    setTimeout(() => {
        enseniarSig();
    }, 15000)
}

function terceraSecuenciaAV(){
    mostrarInfoSecuencia("terceraSecuenciaAV");
    esconderSig();
    borradoCuerpoTexto();
    reproducirAbucheos();
    $("#imagenes img").attr({
        src: "images/Averlan/SacerdotePatibulo.png",
        width: "450px"
    });
    itinerador = 2;
    // SACERDOTE: Estos Herejes, le dieron la espalda a Sigmar.
    llamadaTexto(itinerador);


    setTimeout(() => {
        borradoCuerpoTexto();
        esconderSig();
        itinerador = 3;
        // SACERDOTE: SACERDOTE: Gracias a Sigmar y a su sagrado ejército
        llamadaTexto(itinerador);
    }, 15000)

    setTimeout(() => {
        borradoCuerpoTexto();
        $("#imagenes img").attr({
            src: "images/Averlan/SirGregorCondeYPaladin.png",
            width: "450px"
        });
        itinerador = 4;
        // Miráis a lo alto, a la derecha del patíbulo
        llamadaTexto(itinerador);
    }, 30000)

    setTimeout(() => {
        borradoCuerpoTexto();
        $("#imagenes img").attr({
            src: "images/Averlan/SacerdotePatibulo.png",
            width: "450px"
        });
        itinerador = 5;
        // SACERDOTE: Un paso al frente condenados
        llamadaTexto(itinerador);
        enseniarSig();
    }, 53000)
}

function cuartaSecuenciaAV(){
    mostrarInfoSecuencia("cuartaSecuenciaAV");
    esconderSig();
    borradoCuerpoTexto();
    $("#imagenes img").attr({
        src: "images/Averlan/RuloPatibulo.png",
        width: "450px"
    });
    itinerador = 6;
    // observais a los hombres y al enano.
    llamadaTexto(itinerador);


    setTimeout(() => {
        esconderSig();
        borradoCuerpoTexto();
        reproducirAbucheos();
        $("#imagenes img").attr({
            src: "images/Averlan/RuloYSacerdote.png",
            width: "450px"
        });
        itinerador = 7;
        // SACERDOTE: Aquí los tenéis fieles de Averlan
        llamadaTexto(itinerador);
    }, 18000)

    setTimeout(() => {
        borradoCuerpoTexto();
        reproducirAbucheos();
        $("#imagenes img").attr({
            src: "images/Averlan/vergudoSoga.png",
            width: "450px"
        });
        itinerador = 8;
        //SACERDOTE: Vais a ser colgados como dicta
        llamadaTexto(itinerador);
    }, 31000)

    setTimeout(() => {
        borradoCuerpoTexto();
        $("#imagenes img").attr({
            src: "images/Averlan/SacerdotePatibulo.png",
            width: "450px"
        });
        itinerador = 9;
        //SACERDOTE: Decid ahora vuestras últimas palabras
        llamadaTexto(itinerador);
        enseniarSig();
    }, 50000)
}

function quintaSecuenciaAV(){
    mostrarInfoSecuencia("quintaSecuenciaAV");
    esconderSig();
    borradoCuerpoTexto();
    reproducirAbucheos();
    $("#imagenes img").attr({
        src: "images/Averlan/condenado.png",
        width: "450px"
    });
    itinerador = 10;
    //CONDENADO: Pido perdón a Sigmar
    llamadaTexto(itinerador);


    setTimeout(() => {
        borradoCuerpoTexto();
        $("#imagenes img").attr({
            src: "images/Averlan/condenadoMorado.png",
            width: "450px"
        });
        itinerador = 11;
        //La base de sus pies se abre y el individuo
        llamadaTexto(itinerador);
        reproducirAhorcado();
    }, 8000)

    setTimeout(() => {
        borradoCuerpoTexto();
        $("#imagenes img").remove();
        $(`<img src="images/Averlan/niño.png" style="border-radius:12px; width: 440px; height: 50rem;">`)
            .appendTo("#imagenes");

        itinerador = 12;
        //NIÑO: ¿!Paadre?!
        llamadaTexto(itinerador);
    }, 19000)

    setTimeout(() => {
        borradoCuerpoTexto();
        reproducirAbucheos();
        $("#imagenes img").remove();
        $(`<img src="images/Averlan/lengua arrancara.jpg" style="border-radius:12px; width: 540px; height: 50rem;">`)
            .appendTo("#imagenes");

        itinerador = 13;
        //SACERDOTE: –¡La lengua de un hereje
        llamadaTexto(itinerador);
    }, 30000)

    setTimeout(() => {
        borradoCuerpoTexto();
        $("#imagenes img").remove();
        animacionRuloHorca();
    }, 38000)

}
/*********** SIR GREGOR **********************/
function sextaSecuenciaAV(){
    document.cookie = "SirGregorAverlan=true";
    mostrarInfoSecuencia("sextaSecuenciaAV");
    borrarBotonesItineracion();
    esconderSig();
    borradoCuerpoTexto();
    $("#imagenes img").remove();
    $(`<img src="images/Averlan/PalacioAverlan.png" style="border-radius:12px; width: 540px; height: 60rem;">`)
        .appendTo("#imagenes");
    // TODO:  MUSICA AMBIENTE
    new Promise(function (resolve){
        itinerador = 15;
        // Al llegar al palacio del Conde os conducen a una sala abovedada
        resolve(llamadaTexto(itinerador));
    }).then(function (result){

        setTimeout(()=>{
            borradoCuerpoTexto();
            $("#imagenes img").attr({
                src: "images/Averlan/SirGregorYPaladin.png",
            });
            itinerador = 16;
            // Llegáis tarde!
            llamadaTexto(itinerador);
            enseniarSig();
        }, 23000 );
    });
}


function septimaSecuenciaAV(){
    mostrarInfoSecuencia("septimaSecuenciaAV");
    borradoCuerpoTexto();
    esconderSig();
    new Promise(function (resolve){
        itinerador = 17
        //Os dije claramente que quería ver su cabeza. RAMA A
        //Valiente idiota. Creía que podría jugármela. RAMA B
        resolve(llamadaTexto(itinerador));
    }).then(function (result){

        setTimeout(()=>{
            esconderSig();
            document.cookie = "ramificacion=X";
            llamadaOpcionesPausaV2(itinerador);
        },11000)

    });
}

function octavaSecuenciaAV(){
    mostrarInfoSecuencia("octavaSecuenciaAV");
    borradoCuerpoTexto();
    esconderSig();
    new Promise(function (resolve){
        itinerador = 18
        //Así mejor, olvidaréis lo que ponía en esa carta
        resolve(llamadaTexto(itinerador));
    }).then(function (result){

        setTimeout(()=>{
            borradoCuerpoTexto();
            esconderSig();
            $("#imagenes img").attr({
                src: "images/Averlan/SirGregorYEmperatriz.png",
            });
            itinerador = 19;
            //Bien. Vamos al grano. La Santa Inquisición vuelve a necesitar
            llamadaTexto(itinerador);
        }, 6000);

        setTimeout(()=>{
            enseniarSig();
        },20000);
    });
}

function novenaSecuenciaAV(){
    mostrarInfoSecuencia("novenaSecuenciaAV");
    borradoCuerpoTexto();
    esconderSig();
    new Promise(function (resolve){
        $("#imagenes img").attr({
            src: "images/Averlan/SirGregorYPaladin.png",
        });
        itinerador = 20;
        //Para esta misión sagrada os acompañara él.
        resolve(llamadaTexto(itinerador));
    }).then(function (result){

        setTimeout(()=>{
            esconderSig();
            borradoCuerpoTexto();
            $("#imagenes img").attr({
                src: "images/Averlan/SirGregorYEmperatrizYDimitrovich.png",
            });
            itinerador = 21;
            //¿Por dónde iba? ¡ah, sí!
            llamadaTexto(itinerador);
        }, 14000);

        setTimeout(()=>{
            esconderSig();
            borradoCuerpoTexto();
            itinerador = 22;
            $("#imagenes img").attr({
                src: "images/Averlan/SirGregorGrande.png",
            });
            // El brujo murió, se dice que a manos de su mujer
            llamadaTexto(itinerador);
        }, 26500 );

        setTimeout( ()=>{
            $(`<p> MI LEY </p>`)
                .appendTo("#texto");
            enseniarSig();
        }, 38000 );
    });
}
/***** FUNCIONES AUXILIARES *************************************************************************************************************/

function animacionRuloHorca(){
    itinerador = 14;
    pausarAudio();
    reproducirTexto(itinerador);
    $("#cuerpo").hide();

    $(`<div id="divTemp" style="background-image: url('images/Averlan/RuloAhorcado.jpg'); height: 100vh; background-size: cover; text-align : center;">`)
        .prependTo("#padreCuerpo");

    $(`<div id="textoTemp" style="
        margin-right:auto;
        width: 30%;
        justify-content: center;
        padding-top: 20%;
        padding-left: 2%;
        font-weight: bold;
        font-size: 4rem;"
    >Los cuerpos de Rulo, los hombres y el mediano yacen colgados en mitad de la plaza mientras la multitud vuelve a sus casas a tiempo para la cena ... </div>`)
        .prependTo("#divTemp").hide().fadeIn(3000);

    setTimeout(() => {
        eliminarEscenaHorca();
    }, 10000);
}

function eliminarEscenaHorca(){
    $("#textoTemp").remove();
    $("#divTemp").remove();
    $("#cuerpo").show();
    libreAlbedrioAverlan();
}

function libreAlbedrioAverlan(){
    esconderSig();
    pausarAudio();
    itineradorAmbiente = 1;
    reproducirAmbiente();
    borradoCuerpoTexto();
    borrarBotonesItineracion();
    $("#imagenes img").remove();
    $(`<img src="images/Averlan/AverlanItineracion.png" style="border-radius:12px; width: 60rem;">`)
        .appendTo("#imagenes");

    document.cookie = "ubicacion=AVERLAN";
    $("<h3>... TENEIS LIBRE ALBEDRIO ...</h3>").appendTo("#textoRespuestas").hide().fadeIn(5000);
    $(`<button type="button" class="btn btn-secondary" onclick="abrirtienda('Arma')" id="tiendaArmas">Armas Averlan</button>`)
        .appendTo("#itineracion p");
    $(`<button type="button" class="btn btn-secondary" onclick="abrirtienda('Armadura')" id="tiendaArmadura">Tienda Armaduras</button>`)
        .appendTo("#itineracion p");
    $(`<button type="button" class="btn btn-secondary" onclick="abrirtienda('Item')" id="tiendaItems">Items Legalizados</button>`)
        .appendTo("#itineracion p");
    $(`<button type="button" class="btn btn-secondary" onclick="averlanDos()" id="palacioConde">Palacio del Conde</button>`)
        .appendTo("#itineracion p");
    $(`<button type="button" class="btn btn-secondary" onclick="caballerizasAverlan()" id="caballerizas" disabled>Caballerizas</button>`)
        .appendTo("#itineracion p");
}

//Aqui se controla si se pulsa al botón de ir al Palacio del Conde.
function averlanDos(){
    var escenaHorca = readCookie("averlanHorca");
    var SirGAverlan = readCookie("SirGregorAverlan");
    if (escenaHorca == 'true' &&
        SirGAverlan != 'true') {
        sextaSecuenciaAV();
    }
}

//Aquí se controla que mostrar en función de si se decapitó a Grerius Bron.
function controlDecapitadoGrerius(){
    var decapitadoGrerius = readCookie("GreriusDecap");
    //Si no se decapitó a Grerius Bron
    if(decapitadoGrerius != 'true') {
        document.cookie = "ramificacion=B";
    // si se le decapitó
    } else {
        document.cookie = "ramificacion=A";
    }
    septimaSecuenciaAV();
}
function controladorPagSiguienteAV(){
    enableClicks();
    $("#btn_siguiente").hide();
    itinerador++;
    switch (itinerador) {
        case 1:
            segundaSecuenciaAV();
            break;
        case 2:
            terceraSecuenciaAV();
            break;
        case 6:
            cuartaSecuenciaAV();
            break;
        case 10:
            quintaSecuenciaAV();
            break;
        case 17:
            controlDecapitadoGrerius();
            break;
        case 18:
            octavaSecuenciaAV();
            break;
        case 20:
            novenaSecuenciaAV();
            break;
        case 23:
            libreAlbedrioAverlan();
        default:
            console.log("Posición del Contador de Botón errónea");
            break;
    }
}

function caballerizasAverlan(){
    console.log("caballerizas");
}