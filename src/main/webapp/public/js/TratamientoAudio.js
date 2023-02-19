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
    var etiquetaAudio4 = document.createElement("audio");
    var etiquetaAudioAmbiente = document.createElement("audio");
    var musicaBatalla = document.createElement("audio");
    //etiquetaAudioAmbiente.autoplay = true;

    function pausarAudio(){
        try{
            etiquetaAudio.pause();
            etiquetaAudio2.pause();
            etiquetaAudio3.pause();
            etiquetaAudio4.pause();
        }catch(e){
            logMyErrors(e);
        }
    }

    function pausarMusicaAmbiente(){
        try{
            etiquetaAudioAmbiente.pause();
        }catch(e){
            logMyErrors(e);
        }
    }

    function reproducirMusicaPNJ(){

        let rutaAudio = "audio/AudioGeneral/" +  "musicaSeleccionPNJ.mp3";
        try{
            etiquetaAudioAmbiente.pause();
        }catch(e){
            logMyErrors(e);
        }
        etiquetaAudioAmbiente.setAttribute("src", rutaAudio);
        etiquetaAudioAmbiente.setAttribute("autoplay", "true");
        etiquetaAudioAmbiente.play();
    }
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
        //Mostrar Info Audio
        mostrarInfoAudio(rutaAudio);
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
        //Mostrar Info Audio
        mostrarInfoAudio(rutaAudio);

        try{
            etiquetaAudio.pause();
        }catch(e){
            logMyErrors(e);
        }
        etiquetaAudio.setAttribute("src", rutaAudio);
        etiquetaAudio.play();
    }
    function reproducirTextoSec(itineradorSecundaria){
        var cookieDirectorio = readCookie("mision");
        var ramificacionSec = readCookie("ramificacionSec");

        let rutaAudio = "audio/" + cookieDirectorio + "/" + "Audio" +
            ramificacionSec + itineradorSecundaria + ".mp3";
        mostrarInfoAudio(rutaAudio);
        try{
            etiquetaAudio.pause();
        }catch(e){
            logMyErrors(e);
        }
        etiquetaAudio.setAttribute("src", rutaAudio);
        etiquetaAudio.play();
    }

    function reproducirTextoEspLIEL(itinerador){
        var cookieDirectorio = readCookie("capitulo");
        var rama = readCookie("ramificacion");

        let rutaAudio = "audio/" + cookieDirectorio + "/";
        let nombreAudio= cookieDirectorio +"Audio" + "Esp";
        // EL primer capitulo lleva un tratamiento distinto de los audios

        nombreAudio += itinerador;
        nombreAudio += ".mp3";
        rutaAudio += nombreAudio;
        //Mostrar Info Audio
        mostrarInfoAudio(rutaAudio);

        try{
            etiquetaAudio.pause();
        }catch(e){
            logMyErrors(e);
        }
        etiquetaAudio.setAttribute("src", rutaAudio);
        etiquetaAudio.play();
    }

    // Reproducción de error al tirar un dado
    function reproducirOpcDadoError(itinerador){
        var cookieDirectorio = readCookie("capitulo");
        var rama = readCookie("ramificacion");
        let rutaAudio = "audio/" + cookieDirectorio + "/";
        let nombreAudio= cookieDirectorio +"OpcErrorAudio";
        // En estos dos capitulos no se cuenta la rama
        if (cookieDirectorio != "LaIglesiaEnTodosLados" && cookieDirectorio != "Despertar"){
            nombreAudio += rama;
        }
        nombreAudio += itinerador;
        nombreAudio += ".mp3";
        rutaAudio += nombreAudio;
        //Mostrar Info Audio
        mostrarInfoAudio(rutaAudio);
        try{
            etiquetaAudio.pause();
        }catch(e){
            logMyErrors(e);
        }
        etiquetaAudio.setAttribute("src", rutaAudio);
        etiquetaAudio.play();
    }

    // Reproducción de acierto al tirar un dado
    function reproducirOpcDadoAcierto(itinerador){
        var cookieDirectorio = readCookie("capitulo");
        var rama = readCookie("ramificacion");
        let rutaAudio = "audio/" + cookieDirectorio + "/";
        let nombreAudio= cookieDirectorio +"OpcAciertoAudio";
        // En estos dos capitulos no se cuenta la rama
        if (cookieDirectorio != "LaIglesiaEnTodosLados" && cookieDirectorio != "Despertar"){
            nombreAudio += rama;
        }
        nombreAudio += itinerador;
        nombreAudio += ".mp3";
        rutaAudio += nombreAudio;
        //Mostrar Info Audio
        mostrarInfoAudio(rutaAudio);
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
        var cookieDirectorioSec = readCookie("mision");
        let rutaAudio = '';
        if(cookieDirectorioSec == 'false'){
            var cookieDirectorio = readCookie("capitulo");
            rutaAudio = "audio/" + cookieDirectorio + "/"
            rutaAudio += "musicaAmbiente";
            rutaAudio += itineradorAmbiente + ".mp3";
        } else{
            rutaAudio = "audio/" + cookieDirectorioSec + "/"
            rutaAudio += "musicaAmbiente";
            rutaAudio += itineradorAmbiente + ".mp3";
        }
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
        cancionAlAzar = Math.floor(Math.random()*10);

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

    function pausarMusicaBatalla(){
        try{
            musicaBatalla.pause();
        }catch(e){
            logMyErrors(e);
        }

    }
    function reproducirMusicaBattallaJefe(){
        cancionAlAzar = Math.floor(Math.random()*3);

        let rutaAudio = "audio/Batalla/";
        rutaAudio += "batallaJefe" + cancionAlAzar + ".mp3";
        console.log("Ruta Audio Batalla Jefe: " + rutaAudio);

        try{
            etiquetaAudioAmbiente.pause();
        }catch(e){
            logMyErrors(e);
        }

        musicaBatalla.setAttribute("src", rutaAudio);
        musicaBatalla.play();
    }

    function reproducirVictoria(){
        pausarMusicaBatalla();
        let rutaAudio = "audio/Batalla/Victoria.mp3";
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

    function reproducirFlecha(){
        let rutaAudio= "audio/flechaImpactando.mp3";
        try{
            etiquetaAudio2.pause();
        }catch(e){
            logMyErrors(e);
        }
        etiquetaAudio2.setAttribute("src", rutaAudio);
        etiquetaAudio2.play();
    }


    function reproducirDecapitacion(){
        let rutaAudio= "audio/decapitacion.mp3";
        try{
            etiquetaAudio2.pause();
        }catch(e){
            logMyErrors(e);
        }
        etiquetaAudio2.setAttribute("src", rutaAudio);
        etiquetaAudio2.play();
    }

    function reproducirDecapitacionDos(){
        let rutaAudio= "audio/decapitacionDos.mp3";
        try{
            etiquetaAudio2.pause();
        }catch(e){
            logMyErrors(e);
        }
        etiquetaAudio2.setAttribute("src", rutaAudio);
        etiquetaAudio2.play();
    }


    function reproducirFuegoDebil(){
        let rutaAudio= "audio/fuegoDebil.mp3";
        try{
            etiquetaAudio2.pause();
        }catch(e){
            logMyErrors(e);
        }
        etiquetaAudio2.setAttribute("src", rutaAudio);
        etiquetaAudio2.play();
    }

    function reproducirFuegoFuerte(){
        let rutaAudio= "audio/fuegoFuerte.mp3";
        try{
            etiquetaAudio2.pause();
        }catch(e){
            logMyErrors(e);
        }
        etiquetaAudio2.setAttribute("src", rutaAudio);
        etiquetaAudio2.play();
    }

    function reproducirGentioYNinios(){
        let rutaAudio= "audio/gentioNiñosJugando.mp3";
        try{
            etiquetaAudio2.pause();
        }catch(e){
            logMyErrors(e);
        }
        etiquetaAudio2.setAttribute("src", rutaAudio);
        etiquetaAudio2.play();
    }

    function reproducirYunque(){
        let rutaAudio= "audio/yunque.mp3";
        try{
            etiquetaAudio3.pause();
        }catch(e){
            logMyErrors(e);
        }
        etiquetaAudio3.setAttribute("src", rutaAudio);
        etiquetaAudio3.play();
    }

    function reproducirMujeresCantando(){
        let rutaAudio= "audio/mujeresCantando.mp3";
        try{
            etiquetaAudio4.pause();
        }catch(e){
            logMyErrors(e);
        }
        etiquetaAudio4.setAttribute("src", rutaAudio);
        etiquetaAudio4.play();
    }

    function reproducirLaud(){
        let rutaAudio= "audio/laud.mp3";
        try{
            etiquetaAudio3.pause();
        }catch(e){
            logMyErrors(e);
        }
        etiquetaAudio3.setAttribute("src", rutaAudio);
        etiquetaAudio3.play();
    }

    function reproducirAmbienteBatallaI(){
        let rutaAudio= "audio/ambienteBatallaI.mp3";
        try{
            etiquetaAudio4.pause();
        }catch(e){
            logMyErrors(e);
        }
        etiquetaAudio4.setAttribute("src", rutaAudio);
        etiquetaAudio4.play();
    }

    function reproducirGrito(){
        let rutaAudio= "audio/grito.mp3";
        try{
            etiquetaAudio4.pause();
        }catch(e){
            logMyErrors(e);
        }
        etiquetaAudio4.setAttribute("src", rutaAudio);
        etiquetaAudio4.play();
    }

    function reproducirAbucheos(){
        let rutaAudio= "audio/abucheos.mp3";
        try{
            etiquetaAudio4.pause();
        }catch(e){
            logMyErrors(e);
        }
        etiquetaAudio4.setAttribute("src", rutaAudio);
        etiquetaAudio4.play();
    }

    function reproducirAhorcado(){
        let rutaAudio= "audio/ahorcado.mp3";
        try{
            etiquetaAudio3.pause();
        }catch(e){
            logMyErrors(e);
        }
        etiquetaAudio3.setAttribute("src", rutaAudio);
        etiquetaAudio3.play();
    }

    function reproducirSuenio(){
        pausarMusicaAmbiente();
        let rutaAudio= "audio/musicaDormir.mp3";
        try{
        etiquetaAudio3.pause();
        }catch(e){
        logMyErrors(e);
        }
        etiquetaAudio3.setAttribute("src", rutaAudio);
        etiquetaAudio3.play();
    }

    function reproducirTaberna(){
        let rutaAudio= "audio/ambienteTaberna.mp3";
        try{
            etiquetaAudio4.pause();
        }catch(e){
            logMyErrors(e);
        }
        etiquetaAudio4.setAttribute("src", rutaAudio);
        etiquetaAudio4.play();
    }