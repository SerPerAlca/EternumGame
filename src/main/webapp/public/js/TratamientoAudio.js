$(document).ready(function() {

    $('#btn-PararAudio').on('click', function(){
        try{
            etiquetaAudio.pause();
        }catch(e){
            logMyErrors(e);
        };
    });

});

// Z:\Desarrollo\EternumGame\src\main\webapp\public\audio
    var context = new AudioContext();
    var request = new XMLHttpRequest();
    var objetoBuffer = context.createBufferSource();
    var etiquetaAudio = document.createElement("audio");

    function reproducirRespuesta(id,itinerador){

        var cookieDirectorio = readCookie("capitulo");
        let rutaAudio = "audio/" + cookieDirectorio + "/";
        let nombreAudio= cookieDirectorio + "AudioRespuesta";
        nombreAudio += itinerador;
        nombreAudio += id;
        nombreAudio += ".mp3";
        rutaAudio += nombreAudio;
        console.log("RUTA AUDIO: "+rutaAudio);
        try{
            etiquetaAudio.pause();
        }catch(e){
            logMyErrors(e);
        }
        etiquetaAudio.setAttribute("src", rutaAudio);
        etiquetaAudio.play();
    }

    function reproducirTexto(itinerador){

        var cookieDirectorio = readCookie("capitulo");
        let rutaAudio = "audio/" + cookieDirectorio + "/";
        let nombreAudio= cookieDirectorio +"Audio";
        nombreAudio += itinerador;
        nombreAudio += ".mp3";
        rutaAudio += nombreAudio;

        try{
            etiquetaAudio.pause();
        }catch(e){
            logMyErrors(e);
        }
        etiquetaAudio.setAttribute("src", rutaAudio);
        etiquetaAudio.play();
    }


