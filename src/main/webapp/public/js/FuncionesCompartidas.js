var contDegradado= 0;

 $(document).ready(function() {
    $(".conte-degradado").hide();
    $(".conte-texto").hide();

    $("#btn-itinerar").click(function(){
        itinerador= 0;
        inicioLaIglesiaEnTodosLados();
    });
 });


//FUNCION ENCARGADA DE MOSTRAR LA INTRO DEL COMBATE
function fight(itinerador){

    borradoCuerpoTexto();
    $("#imagenes").hide();
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
        }, 40 * i);
    }

    setTimeout(function () {
        $(".conte-texto h1").remove();
        $(`<h1 style="color:black" > ¡¡¡VIICTORIA!!!</h1>`)
        .appendTo(".conte-texto")
        .hide().fadeIn(1000);
    }, 6500);

    $("#btn_siguiente").show();

    console.log("Control del Contador: " + itinerador);

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
        function pintarOpcionesConPruebaSuerte(itinerador, especial, id, pregunta){
        // SE realiza comprobación para pintar (OPCIONAL) en las opciones no obligatorias.
            if (especial){
                $(`<div id=${id} class="Opciones" style="color:red" onmouseover="this.style.color='#196883';" onclick="tiradaDados()"
                onmouseout="this.style.color='red';"> ${pregunta} <span style="color:#ea8069; font-size:small">(TIRADA DE DADOS)</span> </div>`)
                .appendTo("#textoOpciones")
                .hide()
                .fadeIn(2000);
            } else {
                $(`<div id=${id} class="Opciones" style="color:red" onmouseover="this.style.color='#196883';" onclick="fight(${itinerador})"
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

    // funcion controladora cuando no se logra la tirada necesaria con los dados.
        function administraPifia(itinerador){
            var cookieCapitulo = readCookie("capitulo");

            switch(cookieCapitulo){
                case "LaIglesiaEnTodosLados":
                    pifiaLaIglesiaEnTodosLados(itinerador);
                    break;
                default:
                    console.log("No se ha encontrado metodo pifia()");
                    break;
            }

        }

    /** funcion encargada de llamar al servicio después de tirar los dados
    y de llamar a las funciones que pintan la respuesta **/
        function mostrarResultadoDados(itinerador, resultado){
            borradoCuerpoTexto();
            itinerador++;
            llamadaOpcionesDados(resultado,itinerador);
        }