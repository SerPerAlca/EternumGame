var aunNoHaCorrido = true;
$(document).ready(function() {
    //ocultamos y mostramos los botones necesarios
        ocultarDado();
        ocultacionBotones();
        //$("#btn-itinerar").hide();


        var lugar = readCookie('ubicacion');
        var despertar = readCookie("despertar");


        // Consultamos si es la primera vez que entramos en este javascript (
        if(aunNoHaCorrido){
            aunNoHaCorrido = false;
            //Se consulta si estamos en KISLEV o si acabamos de empezar el juego
            if(lugar == 'KISLEV' || null == lugar){
                //Se consulta si ya se hizo esta parte de la historia
                if(despertar != 'true' || null == despertar){
                    //Si no se hizo empieza el capítulo
                    inicioDespertar();
                } else{
                    //Si se hizo se entra en Kislev
                    entrarEnKislev();
                }
            }
        }

        $('body').on('click', '#btn-Palacio', function() {
            borradoCuerpoTexto();
            borradoTextoItineracion();
            $(`<p style="color:black"> GUARDIA: ¿ A donde creeis que vais? ¡Largooo! </p>`).appendTo("#textoOpciones");
        });

});

    function inicioDespertar(){
        document.cookie = "capitulo=Despertar";
        obtenerTituloCapitulo();
        $("<div class='Inicio'>I. El Despertar </div>")
            .filter(".Inicio").click(function(){
            primeraSecuenciaDespertar();
        }).end().appendTo("#texto");
        document.cookie = "capitulo=Despertar";
        document.cookie = "despertar=true";
    }
/************************ S E C U E N C I A S *****************************************************************/

        // contador para la Itineracion
        var itinerador = 0;
        var decide = false;
        var despertarBoolean = false;

        /* PRIMERA FUNCION DE LA SECUENCIA  TEXTO + PREGUNTAS
         Sala de curas  **********/
        function primeraSecuenciaDespertar(){
        //    document.cookie = "capitulo=Despertar";
            document.cookie = "batalla=false";
            document.cookie = "EscenaCasaCons=false";
            document.cookie = "ubicacion=KISLEV";
            document.cookie = "capitulo=Despertar";

            borradoCuerpoTexto();
            mostrarInfoSecuencia("primeraSecuenciaDespertar");
            $("#btn_empezar").hide();
            $("#btn_tiendas").hide();
            $(`<img src="images/DespertarImg/ancianoKislev.jpeg" style="border-radius:12px; ">`)
            .appendTo("#imagenes");

            new Promise(function(resolve) {
                  resolve(llamadaTexto(itinerador));
            })
            .then(function(result) {
                llamadaOpcionesConPausa(itinerador);
            });

        }

        /* SEGUNDA FUNCION DE LA SECUENCIA
         Sala de curas 2ª PARTE e itineración  **/
        function segundaSecuenciaDespertar(){
                console.log("Contador btn despues de click siguiente: " +itinerador);
                borradoCuerpoTexto();
                mostrarInfoSecuencia("segundaSecuenciaDespertar");
                llamadaTexto(itinerador);

            setTimeout(function(){
                $("#imagenes img").attr({
                    src : "images/DespertarImg/ItineracionKislev.jpg",
                    width : "830rem"
                });
                libreAlbedrioSinTiendasKislev();
            }, 1000);
        }

        /* TERCERA FUNCION DE LA SECUENCIA
         Llegada Casa Consistorial   ********/
        function terceraSecuenciaDespertar(){
        //    var textoCasaCons = "Guardia: ¡El capitán Rostford no se encuentra en este momento!";
            borrarBotonesItineracion();
            mostrarInfoSecuencia("terceraSecuenciaDespertar");
            $("#imagenes img").attr({
                src : "images/DespertarImg/CapitanBorvskark.jpg",
                width : "450px",
                height : "550rem"
            });
            console.log("CONTADOR DEL BOTON: "+ itinerador);
            itinerador = 2
            llamadaTexto(itinerador);

            setTimeout(function(){
                llamadaOpcionesConPausa(itinerador);
            }, 10000);

        }

         /* CUARTA FUNCION DE LA SECUENCIA
                 Entrada Sir Gregor en Casa Consistorial 1ª PARTE  ********/
        function cuartaSecuenciaDespertar(){
            var finDeSecuencia = false;

            $("#texto").text("");
            $("#textoOpciones div").remove();
            $("#textoRespuestas").text("");
            mostrarInfoSecuencia("cuartaSecuenciaDespertar");

            new Promise(function(resolve) {
                resolve(llamadaTexto(itinerador));
            })
            .then(function(result) {
            //CAMBIAMOS A LA IMAGEN DE SIR GREGOR
                $("#imagenes img").attr({
                    src : "images/DespertarImg/SumoInquisidor.png",
                    width : "450px",
                    height : "550rem"
                });
            //PINTAMOS OPCIONES DE INCAR RODILLA
                setTimeout(function(){
                    $(`<p id='incar' style="color: #F9461F"> [¿Incar la rodilla?] </p>`)
                    .appendTo("#textoOpciones");

                    $(`<div onclick="decideSi()" class="btn btn-outline-primary" style="color:black; text-shadow: 0 0 2px black;" onmouseover="this.style.color='#ea8069';"
                        onmouseout="this.style.color='green';"> SI </div>`)
                    .appendTo("#textoOpciones");

                    $(`<div onclick="decideNo()" class="btn btn-outline-danger" style="color:black; text-shadow: 0 0 2px black;" onmouseover="this.style.color='#ea8069';"
                        onmouseout="this.style.color='red';"> NO </div>`)
                    .appendTo("#textoOpciones");
                }, 10000);

                // Estos son los herejes supervivientes? ...
                setTimeout(function(){
                    $("#incar").text("");
                    borradoCuerpoTexto();
                    // si no nos arrodillamos (aunque no pulsemos la opción "NO")
                    if(!decide){
                        porNoDecidir();
                    }
                    itinerador++;
                    llamadaTexto(itinerador)
                }, 17000);

                //SI señor, esto… no son herejes,
                setTimeout(function(){
                    $("#imagenes img").attr({
                        src : "images/DespertarImg/CapitanBorvskark.jpg",
                        width : "450px",
                        height : "550rem"
                    });
                    borradoCuerpoTexto();
                    itinerador++;
                    llamadaTexto(itinerador)
                }, 23500);

                //SILENCIO!!
                setTimeout(function(){
                    $("#imagenes img").attr({
                        src : "images/DespertarImg/SumoInquisidor.png",
                        width : "450px",
                        height : "550rem"
                    });
                    borradoCuerpoTexto();
                    itinerador++;
                    llamadaTexto(itinerador)
                }, 29000);

                //Opcioness
                setTimeout(function(){
                    llamadaOpcionesConPausa(itinerador)
                }, 37000);

            });
        }

  /***QUINTA FUNCION DE LA SECUENCIA
        CASA CONSISTORIAL 3ª PARTE   **********/
        function quintaSecuenciaDespertar(){
            new Promise(function(resolve) {
                borradoCuerpoTexto();
                mostrarInfoSecuencia("cuartaSecuenciaDespertar");

                resolve(llamadaTexto(itinerador));
            }).then(function(result) {

                // ehhh si.. esos malnacidos...
                setTimeout(function(){
                    $("#imagenes img").attr({
                        src : "images/DespertarImg/CapitanBorvskark.jpg",
                        width : "450px",
                        height : "550rem"
                    });
                    borradoCuerpoTexto();
                    itinerador++;
                    llamadaTexto(itinerador)
                }, 3000);

                //Está bien..Quiero que acabéis con ellos
                setTimeout(function(){
                    $("#imagenes img").attr({
                        src : "images/DespertarImg/SumoInquisidor.png",
                        width : "450px",
                        height : "550rem"
                    });
                    borradoCuerpoTexto();
                    itinerador++;
                    llamadaTexto(itinerador)
                }, 25500);


                setTimeout(function(){
                    llamadaOpcionesConPausa(itinerador)
                }, 36000);
            });
        }
      /***SEXTA FUNCION DE LA SECUENCIA
            CASA CONSISTORIAL 3ª PARTE   **********/
      function sextaSecuenciaDespertar(){

            borradoCuerpoTexto();
            mostrarInfoSecuencia("sextaSecuenciaDespertar");
            reproducirTexto(itinerador);

            $(`<p class='textoJson'> SIR GREGOR: ¡Ahora marchad! ¡De inmediato! Si lo conseguís, buscadme en
            <span title="La ciudad del verde Salvia" style="color:#7876cc;font-weight: bold">Averlan </span>. Si no, más os vale morir a manos de esos infelices.</p>`)
            .appendTo("#texto");
            document.cookie = "EscenaCasaCons=true";
            setTimeout(function(){
                $(`<p style="color: green;">Recibís 200 monedas de oro para vuestro cometido</p>`)
                    .appendTo("#texto");
            }, 3000)

            setTimeout(function(){

                libreAlbedrioKislev();
                $("#btn-Salir").show();
            }, 7500);

      }
/****************************************************************************************************************************************/

        /** Función controladora del botón 'Siguiente'  */
        function pagSiguienteDespertar(){
           enableClicks();
           $("#btn_siguiente").hide();
           itinerador++;
           console.log("Contador de Botón: "+ itinerador);
            switch (itinerador) {
                case 1:
                    segundaSecuenciaDespertar();
                    break;
                case 3:
                    cuartaSecuenciaDespertar();
                    break;
                case 7:
                    quintaSecuenciaDespertar();
                    break;
                case 10:
                    sextaSecuenciaDespertar();
                    break;
                default:
                    console.log("Posición del Contador de Botón errónea");
                    break;
            }
        }


       /* FUNCIÓN QUE VALIDA LAS OPCIONES DE DIÁLOGO ***/
       function ValidarOpcionDialogoClave(id, itinerador){
            var idDivDeshabilitado = "";
            console.log("CONTADOR DE BOTON: " + itinerador);
            switch (itinerador) {
                case 0:
                    if ( id == 1){
                       enseniarSig();
                        itinerador++;
                    }
                    break;
                case 2:
                   enseniarSig();
                    /* Cuando se pulse la primera o la segunda opción se
                    deshabilitará el evento 'click' en las opciones de diálogo  **/
                    if ( id == "1" || id == "2"){
                        desabilitarOpcion();
                    }
                    break;
                default:
                    console.log("No se produce validacion de respuesta");
            }
       }







/*********************************************************************************************************************************************************************************/

    // funcion si decide incar rodilla ante Sir Gregor en Despertar Casa COnsistorial
        function decideSi(){
            if(!decide){
                $(`<p class='textoJson' style="color:green;font-size:small"> +10 de relación con el Imperio </p>`).appendTo("#textoRespuestas");
                decide = true;
                $("#textoOpciones p").text("");
                $("#textoOpciones div").remove();
                $("#textoOpciones div").text("");
            }
            setTimeout(function(){
                $("#textoRespuestas p").text("");
            },  2500);
        }

    // funcion si decide no incar rodilla ante Sir Gregor en Despertar Casa COnsistorial
        function decideNo(){
            if (!decide){
                $(`<p class='textoJson' style="color:green;font-size:small"> -10 de relación con el Imperio </p>`).appendTo("#textoRespuestas");
                decide = true;
                $("#textoOpciones p").text("");
                $("#textoOpciones div").remove();
                $("#textoOpciones div").text("");
            }
            setTimeout(function(){
                $("#textoRespuestas p").text("");
            },  2500);
        }
    /*  funcion que se activa si no se decidió por incar o
        no incar rodilla en Despertar Casa Consistorial */
        function porNoDecidir(){
            $(`<p class='textoJson' style="color:green;font-size:small"> -10 de relación con el Imperio por no incar la rodilla </p>`).appendTo("#textoRespuestas");
            decide = true;
            setTimeout(function(){
                $("#textoRespuestas p").text("");
            },  1500);
        }

        function libreAlbedrioSinTiendasKislev(){
            borradoCuerpoTexto();
            borrarBotonesItineracion();
            $("<h3>... TENEIS LIBRE ALBEDRIO ...</h3>").appendTo("#textoRespuestas").hide().fadeIn(5000);

            $(`<button type="button" class="btn btn-secondary" onclick="abrirtienda('Arma')" id="tiendaArmas" disabled>Tienda Armeria</button>`)
                .appendTo("#itineracion p");
            $(`<button type="button" class="btn btn-secondary" onclick="abrirtienda('Armadura')" id="tiendaArmadura" disabled>Armaduras Kislev</button>`)
                .appendTo("#itineracion p");
            $(`<button type="button" class="btn btn-secondary" onclick="abrirtienda('Item')" id="tiendaItems" disabled>Tienda Item</button>`)
                .appendTo("#itineracion p");
            $(`<button type="button" class="btn btn-secondary" id="btn-CasaC" onclick="botonCasaC()">Casa Consistorial</button>`)
                .appendTo("#itineracion p");
            $(`<button type="button" class="btn btn-secondary" id="btn-M1" onclick="M1()" disabled>Taberna (M1)</button>`)
                .appendTo("#itineracion p");
            $(`<button type="button" class="btn btn-secondary" id="btn-Palacio">Palacio del Conde</button>`)
                .appendTo("#itineracion p");
        }

    // funcion que habilita los botones de la itineracion en Despertar (kislev)
    function libreAlbedrioKislev(){
        borradoCuerpoTexto();
        pausarAudio();
        borrarBotonesItineracion();
        $("#imagenes img").attr({
            src : "images/DespertarImg/ItineracionKislev.jpg",
            width : "830rem"
        });
        $("<h3>... TENEIS LIBRE ALBEDRIO ...</h3>").appendTo("#textoRespuestas").hide().fadeIn(5000);
        $(`<button type="button" class="btn btn-secondary" onclick="abrirtienda('Arma')" id="tiendaArmas">Tienda Armeria</button>`)
            .appendTo("#itineracion p");
        $(`<button type="button" class="btn btn-secondary" onclick="abrirtienda('Armadura')" id="tiendaArmadura">Armaduras Kislev</button>`)
            .appendTo("#itineracion p");
        $(`<button type="button" class="btn btn-secondary" onclick="abrirtienda('Item')" id="tiendaItems">Tienda Item</button>`)
            .appendTo("#itineracion p");
        $(`<button type="button" class="btn btn-secondary" id="btn-CasaC" onclick="botonCasaC()">Casa Consistorial</button>`)
            .appendTo("#itineracion p");
        $(`<button type="button" class="btn btn-secondary" id="btn-Palacio">Palacio del Conde</button>`)
            .appendTo("#itineracion p");
        $(`<button type="button" class="btn btn-secondary" id="btn-M1" onclick="M1()">Taberna (M1)</button>`)
            .appendTo("#itineracion p");
        $(`<button type="button" class="btn btn-secondary" id="btn-SalirCiudad" onclick="salirDeKislev()">Salir de la Ciudad</button>`)
            .appendTo("#itineracion p");
        $("#btn-CasaC").show();
    }

    // Función que se activa al pulsar sobre el botón de Casa Consistorial
    function botonCasaC(){
        console.log("CONTADOR DE BOTON al llamar a terceraSecuencia(): " + itinerador);
        var casaEscena = readCookie("EscenaCasaCons");
        var booleanM1 = readCookie("M1");
        if (casaEscena == "false"){
            borradoCuerpoTexto();
            borradoTextoItineracion();
            $("#btn-Palacio").hide();
            $("#btn-CasaC").hide();
            $("#btn_tiendas").hide();
            $("#btn_siguiente").hide();
            //    itinerador++;
            terceraSecuenciaDespertar();
        } else if(booleanM1 == 'true'){
            escenaRecompensaM1();
        } else {
            borradoCuerpoTexto();
            borradoTextoItineracion();
            $(`<p style="color:black"> GUARDIA: ¡El capitán Rostford se encuentra reunido en este momento! ¿No tenéis
                                    mejores cosas que hacer? ¡Largo! </p>`).appendTo("#textoOpciones");
        }
    }

    //Funcion que se activa al pulsar en Salir de la ciudad en kislev
    function salirDeKislev(){
        borrarBotonesItineracion();
        $("#btn-SalirCiudad").hide();
        itineradorIndice = 2;
        itinerador = 0;
        controladorCapi();
        mostrarTituloCapitulo();
        abrirMapaCampania();
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
    }








