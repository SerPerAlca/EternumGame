
var itineradorSecundaria = 0;
//Variable para identificar si se ha activado la secundaria M1.
var switchM1= false;

function M1(){
    var booleanM1 = readCookie("M1");
    borradoCuerpoTexto();
    document.cookie="capitulo=ANDROGENES";
    obtenerTituloCapitulo()
    if('false' != booleanM1){
        document.cookie = "mision=false";
        serviciosTaberna();
    } else {
        document.cookie = "M1=true";
        M1_Secuencia1();
    }
}
//Primera Secuencia de la Secundaria M1
function M1_Secuencia1(){
    document.cookie = "mision=M1";
    document.cookie = "ramificacionSec=X";
    itineradorAmbiente = 1;
    reproducirAmbiente();
    reproducirTaberna();
    mostrarInfoSecuencia("M1_PrimeraSecuencia");

    $("#itineracion").hide();
    $("#imagenes img").attr({
        src: "images/M1/Imperiano&Enano.png",
        width: "550px",
        height: "550rem"
    });
    itineradorSecundaria = 0;
    new Promise(function (resolve){
        // Entráis en la posada y observáis que hay varias personas discutiendo.
        resolve(llamadaTextoSec(itineradorSecundaria));
    })
        .then(function (result){

            //Tabernero: De monstruos, están hablando de monstruos
            setTimeout(() => {
                $("#imagenes img").attr({
                    src: "images/M1/Tabernero.png",
                    width: "550px",
                    height: "550rem"
                });
                borradoCuerpoTexto();
                itineradorSecundaria = 1;
                llamadaTextoSec(itineradorSecundaria)
            }, 25000);

            //imperiano: ¡Andrógenes! ¡Esos bichos de alimentan de entrañas!
            setTimeout(() => {
                $("#imagenes img").attr({
                    src: "images/M1/imperiano&Androgenes.png",
                    width: "550px",
                    height: "550rem"
                });
                borradoCuerpoTexto();
                itineradorSecundaria = 2;
                llamadaTextoSec(itineradorSecundaria)
            }, 54000);

            //enano: ¡Pero si la esposa de tu primo Gerald
            setTimeout(() => {
                $("#imagenes img").attr({
                    src: "images/M1/Enano.png",
                    width: "550px",
                    height: "550rem"
                });
                borradoCuerpoTexto();
                itineradorSecundaria = 3;
                llamadaTextoSec(itineradorSecundaria)
            }, 66000);

            //El humano lleva su mano al puñal .
            setTimeout(() => {
                $("#imagenes img").attr({
                    src: "images/M1/punial&Hacha.png",
                    width: "550px",
                    height: "550rem"
                });
                borradoCuerpoTexto();
                itineradorSecundaria = 4;
                llamadaTextoSec(itineradorSecundaria)
            }, 74000);

            //CAPITAN ROSTFORD: Deteneos estúpidos!
            setTimeout(() => {
                $("#imagenes img").attr({
                    src: "images/M1/Rostford&puerta.png",
                    width: "550px",
                    height: "550rem"
                });
                borradoCuerpoTexto();
                itineradorSecundaria = 5;
                llamadaTextoSec(itineradorSecundaria)
                enseniarSigSec();
            }, 79500);
        });
}

//Segunda Secuencia de la secundaria M1
function M1_Secuencia2(){
    borradoCuerpoTexto();

    $("#imagenes img").attr({
        src : "images/M1/CapitanRostford.png",
        width : "550px",
        height : "550rem"
    });
    new Promise( function(resolve){
        //Capitán Rostford: ¿¡Habéis olvidado acaso donde cojones estáis?!
        itineradorSecundaria = 6;
        resolve(llamadaTextoSec(itineradorSecundaria));
    }) .then (function(result){

        //Capitán Rostford: Si alguien avista criaturas dentro de los límites
        setTimeout( ()=>{
            borradoCuerpoTexto();
            itineradorSecundaria = 7;
            llamadaTextoSec(itineradorSecundaria)
        }, 26000);

        //Capitán Rostford: Ya habéis oído. Traedme la cabeza
        setTimeout( ()=>{
            borradoCuerpoTexto();
            itineradorSecundaria = 8;
            llamadaTextoSec(itineradorSecundaria)
        }, 43500);

        setTimeout(()=>{
            $("#itineracion").show();
            libreAlbedrioKislev();
            $("#btn-Salir").show();
            document.cookie = "mision=false";
        }, 59000)
    });


}

function pagSiguienteDespertarSec(){

    switch(itineradorSecundaria){

        case 5: M1_Secuencia2();
                break;
        default: console.log("no se encuentra Secuencia Secundaria");
    }
}

function escenaRecompensaM1(){
    borradoCuerpoTexto();
    $("#imagenes img").attr({
        src : "images/M1/CapitanRostford.png",
        width : "550px",
        height : "550rem"
    });
    document.cookie = "mision=M1";
    new Promise( function(resolve){
        //Capitán Rostford: Joooder, Puto bicho...
        itineradorSecundaria = 9;
        resolve(llamadaTextoSec(itineradorSecundaria));
    }) .then (function(result){
        ganarDinero(285);

        setTimeout(()=>{
            $(`<p><span style="color:#FF7D33; font-weight: bold">Obtenéis 285G</span> </p>`)
                .appendTo("#textoOpciones");
        }, 15000);

        setTimeout(()=>{
            document.cookie = "mision=false";
            libreAlbedrioKislev();
        }, 22000);
    });
}

