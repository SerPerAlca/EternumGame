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
    var etiquetaAudio2 = document.createElement("audio");
    var etiquetaAudio3 = document.createElement("audio");
    var etiquetaAudioAmbiente = document.createElement("audio");
    var musicaBatalla = document.createElement("audio");
    //etiquetaAudioAmbiente.autoplay = true;

    function reproducirRespuesta(id,itinerador){

        var cookieDirectorio = readCookie("capitulo");
        var rama = readCookie("ramificacion");


        let rutaAudio = "audio/" + cookieDirectorio + "/";
        let nombreAudio= cookieDirectorio + "AudioRespuesta";
        if (cookieDirectorio !="Despertar" || cookieDirectorio != "LaIglesiaEnTodosLados"){
            nombreAudio += itinerador;
            nombreAudio += id;
        } else {
            nombreAudio += rama;
            nombreAudio += itinerador;
        }
        
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
        var rama = readCookie("ramificacion");

        let rutaAudio = "audio/" + cookieDirectorio + "/";
        let nombreAudio= cookieDirectorio +"Audio";
        // EL primer capitulo lleva un tratamiento distinto de los audios
        if (cookieDirectorio != "Despertar"){
            nombreAudio += rama;
        }
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
    

    function reproducirCuerno(){

       let rutaAudio = "audio/cuerno.mp3";
        try{
            etiquetaAudio2.pause();
        }catch(e){
            logMyErrors(e);
        }
        etiquetaAudio2.setAttribute("src", rutaAudio);
        etiquetaAudio2.play();
    }

    function reproducirLluviaDeFLechas(){

       let rutaAudio = "audio/lluviaDeFlechas.mp3";
       try{
        etiquetaAudio3.pause();
        }catch(e){
            logMyErrors(e);
        }
        etiquetaAudio3.setAttribute("src", rutaAudio);
        etiquetaAudio3.play();
    }

    function reproducirAmbiente(){

        var cookieDirectorio = readCookie("capitulo");
        let rutaAudio = "audio/" + cookieDirectorio + "/"
        rutaAudio += "musicaAmbiente"; 
        rutaAudio += itineradorAmbiente + ".mp3";
        try{
            etiquetaAudioAmbiente.pause();
        }catch(e){
            logMyErrors(e);
        }
        etiquetaAudioAmbiente.setAttribute("src", rutaAudio);
        etiquetaAudioAmbiente.setAttribute("autoplay", "true");
        etiquetaAudioAmbiente.play();

    }

    function reproducirMusicaBattalla(){
        cancionAlAzar = Math.floor(Math.random()*4);
          
        let rutaAudio = "audio/Batalla/";
        rutaAudio += "batalla" + cancionAlAzar + ".mp3"; 
        console.log("Ruta Audio Batalla : " + rutaAudio);
        
        try{
            etiquetaAudioAmbiente.pause();
        }catch(e){
            logMyErrors(e);
        }

        musicaBatalla.setAttribute("src", rutaAudio);
        musicaBatalla.play();
    }

    function reproducirLatido(){
        let rutaAudio = "audio/corazonLatiendo.mp3";
        try{
            etiquetaAudio2.pause();
        }catch(e){
            logMyErrors(e);
        }
        etiquetaAudio2.setAttribute("src", rutaAudio);
        etiquetaAudio2.play();

    }