var contDegradado= 0;

 $(document).ready(function() {
    $(".conte-degradado").hide();
    $(".conte-texto").hide();

    $("#btn-itinerar").click(function(){
        itinerador= 0;
        inicioLIEL();
    });
 });


//FUNCION ENCARGADA DE MOSTRAR LA INTRO DEL COMBATE
function fight(){

    borradoCuerpoTexto();
    //$("#imagenes").hide();
    $("#imagenes img").remove();
    ocultacionBotones();

    $(".conte-degradado").show();
    $(".conte-texto").show();
    $("#cuerpo").css({'height' : '40rem', 'width' : '100%'});

    $(`<h1 style="color:black" > ¡¡¡FIIIGHTTT!!!</h1>`)
    .appendTo(".conte-texto");

  	for (var i=0 ; i < 70; i++) {
        setTimeout(function () {
            console.log(i);
            degradadoFight();
        }, 20 * i);
    }

    setTimeout(function () {
        $(".conte-texto h1").remove();
        $(`<h1 style="color:black" > ¡¡¡VIICTORIA!!!</h1>`)
        .appendTo(".conte-texto")
        .hide().fadeIn(1000);
    }, 6500);

    $("#btn_siguiente").show();


}

    function degradadoFight(){
        $(".conte-degradado").css({'background' : `radial-gradient(transparent 0%, transparent 0%, black ${contDegradado}%)`});
        contDegradado++;
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
            if (!opcionObligada){
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
        function pintarOpcionesConPruebaSuerte(especial, id, pregunta){
        // SE realiza comprobación para pintar (OPCIONAL) en las opciones no obligatorias.
            if (especial){
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
            $("#btn-CasaC").hide();
            $("#btn-Salir").hide();
            $("#CabeceraAudio").show();
            $("#btn-itinerar").show();
        }

    //FUNCION PARA LEER OBTENER LAS COOKIES
        function readCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for(var i=0;i < ca.length;i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                    if (c.indexOf(nameEQ) == 0) {
                        return decodeURIComponent( c.substring(nameEQ.length,c.length) );
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
       function enableClicks() {
            document.getElementById("textoOpciones").style['pointer-events'] = 'auto';
       }

/************************** F U N C I O N E S   A D M I N I S T R A D O R A  *************************************************************************************/
    // funcion controladora cuando no se logra la tirada necesaria con los dados.
        function administrarPifiaGeneral(itinerador){
            let cookieCapitulo = readCookie("capitulo");
            let ramificacion = readCookie("ramificacion");

            switch(true){
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

            switch(cookieCapitulo){
                case "Despertar":
                    pagSiguienteDespertar();
                    break;
                case "LaIglesiaEnTodosLados":
                    ControladorPagSiguienteLIEL();
                    break;
                default:
                    console.log("pagina no encontrada");
                    break;
            }
        }

/**********************************************************************************************************************************************/
    /** funcion encargada de llamar al servicio después de tirar los dados
    y de llamar a las funciones que pintan la respuesta **/
        function mostrarResultadoDados(itinerador, resultado){
            borradoCuerpoTexto();
            itinerador++;
            llamadaOpcionesDados(resultado,itinerador);
        }

    /* Funcion controladora de la tirada del Dado.
    Es llamada cuando se tira el dado y se encarga de llamar a la escena correcta */
        function ControladorTiradaDadoGeneral(resultado, itinerador){

            let capitulo = readCookie("capitulo");
            let ubicacion = readCookie("ubicacion");

            setTimeout(function(){
                ocultarDado();
            }, 4000);

            switch (true) {
                case capitulo == "LaIglesiaEnTodosLados":
                    ControladorTiradaDadoLIEL(resultado);
                    break;
                default:
                    console.log("Resultado de la tirada: " + resultado);
            }

        }
    /* Funcion controladora cuando se pulsa sobre opciones de dialogo
    que conllevan tirada de dados */
        function controladorDadoGeneral(){
            let capitulo = readCookie("capitulo");

            switch ( capitulo ){
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
            switch ( capitulo ){
                case "LaIglesiaEnTodosLados":
                    controladorAciertosLIEL();
                    break;
                default:
                    console.log(" :) ")
                    break;
            }
        }

       /* Función que devuelve el cuerpo del jsp a su estado normal
        después del modo combate */
        function retornarDeFight(){
            $(".conte-degradado").hide();
            $(".conte-texto").hide();
            $("#cuerpo").css({'height' : '100%', 'width' : '100%'});
        }

