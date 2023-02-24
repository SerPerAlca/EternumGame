$(document).ready(function() {
    //ocultamos y mostramos los botones necesarios
    ocultacionBotones();


  });


    var booleanCapitulo2= false;
    var booleanErrorChromeI= false;
    var booleanErrorChromeII= false;
    var booleanErrorChromeIII = false;
    var contFilasCarta = 0;
    var botonDado = $(".rollBtn");
    var lugar = readCookie("ubicacion");
    var cookieLIEL = readCookie("liel");

    function inicioLIEL(){
        var cookieLIEL = readCookie("liel");

        obtenerTituloCapitulo();
        borradoCuerpoTexto();
        $("#btn-Salir").remove();
        if('true' != cookieLIEL || null == cookieLIEL){
            document.cookie = "capitulo=LaIglesiaEnTodosLados";
            mostrarTituloCapitulo();
            $("#imagenes img").remove();
            $("<div class='Inicio'>II. La Iglesia En Todos Lados </div>")
                .filter(".Inicio").click(function(){
                document.cookie = "liel=true";
                primeraSecuenciaLIEL();
            }).end().appendTo("#texto");
        } else {
            animacionFinalCapiLIEL();
        }
    };



 /******* S E C U E N C I A S  *************************************************/

// LLEGADA AL CAMPAMENTO DE BRON
    function primeraSecuenciaLIEL(){
        document.cookie = "ubicacion=CAMPAMENTO_GRERIUS";
        document.cookie = "capitulo=LaIglesiaEnTodosLados";
        document.cookie = "ramificacion=X";
        document.cookie = "batalla=false";
        borradoCuerpoTexto();
        itineradorAmbiente = 1;
        reproducirAmbiente();
        mostrarInfoSecuencia("primeraSecuenciaLIEL");
   //     $("#btn-itinerar").hide();
        $("#btn_empezar").hide();

        //$("#btn_tiendas").hide();
        $(`<img src="images/LIELImg/CampamentoDeBron.jpg" style="border-radius:12px; width: 540px; height: 50rem;">`)
        .appendTo("#imagenes");

        // A medida que vislumbráis el campamento ...
        new Promise(function(resolve) {
            itinerador=0;
            resolve(llamadaTexto(itinerador));
        })

        //Efecto de SOnido flecha impactando
        setTimeout(()=>{
            reproducirFlecha();
        }, 10500)

        setTimeout(function(){
            borradoCuerpoTexto();
            $("#imagenes img").attr({
                src : "images/LIELImg/BandidoCampBron.jpg",
                width : "450px"
            });
            itinerador=1;
            // Quienes sois y que queréis
            llamadaTexto(itinerador);
        }, 14500);

        setTimeout(function(){
            llamadaOpcionesDadoOCombate(itinerador);
        }, 17000);
    }

    //sEGUNDO COMBATE RAMA B DEL CAPITULO
    function segundaSecuenciaLIELB(){

        borradoCuerpoTexto();
        mostrarInfoSecuencia("segundaSecuenciaLIELB");
        retornarDeFight();
        $("#imagenes img").remove();
        $("#imagenes").show();

        document.cookie = "ramificacion=B";

        $(`<img src="images/LIELImg/peleaBandidos.jpg"
            style="border-radius:12px; width: 500px; height: 35rem;">`)
        .appendTo("#imagenes");

        llamadaOpcionesDadoOCombate(itinerador);

    }


    // Encontráis a un hombre, con aspecto de montaraz...
    function terceraSecuenciaLIEL(){

        if (!booleanErrorChromeII){
            booleanErrorChromeII = true;
            let ramificacion = readCookie("ramificacion");
            if (ramificacion == "A"){
                $("#imagenes img").remove();
            }
            itinerador = 4;
            retornarDeFight();
            mostrarInfoSecuencia("terceraSecuenciaLIEL");
            document.cookie = "ramificacion=X";

            itinerador = 4;
            new Promise(function(resolve) {
                borradoCuerpoTexto();
                resolve(llamadaTexto(itinerador));
            })
            .then(function(result) {
                $(`<img src="images/LIELImg/Grerius Bron.jpg"
                    style="border-radius:12px; width: 450px; height: 40rem;">`)
                .appendTo("#imagenes");

                setTimeout( function(){
                    document.cookie= "combateJefe=GRERIUS BRON";
                    llamadaOpcionesDadoOCombate(itinerador);
                }, 6500);
            });
        }
    }

    //¡Malditos Herejes! ¡¿Cómo os atrevéis…
    function cuartaSecuenciaLIEL(){

        mostrarInfoSecuencia("cuartaSecuenciaLIEL");
        $("#imagenes").show();
        insertarSangreEnemigo();
        $(`<img src="images/LIELImg/Grerius Bron.jpg"
            style="border-radius:12px; width: 450px; height: 40rem;">`)
        .appendTo("#imagenes");
        retornarDeFight();

        itinerador = 5;
        new Promise(function(resolve) {
            borradoCuerpoTexto();
            resolve(llamadaTexto(itinerador));
        })
        .then(function(result) {
            setTimeout(function(){
                llamadaEspecialLIEL(itinerador);
            }, 7500);
        });
    };

    /* Grerius Bron pone una expresión parecida a la incredulidad */
    function preQuintaSecuenciaLIEL(){

        new Promise(function(resolve) {
            borradoCuerpoTexto();
            mostrarInfoSecuencia("preQuintaSecuenciaLIEL");
            resolve(llamadaEspecialLIELDos());
        })
        .then(function(result){
            setTimeout(function(){
                quintaSecuenciaLIEL();
            }, 8000);
        });
    }

    //Encontráis una carta bastante desgastada...
    function quintaSecuenciaLIEL(){

        itinerador++;
        console.log("Itinerador ahora --> " + itinerador);
        mostrarInfoSecuencia("quintaSecuenciaLIEL");
        new Promise(function(resolve) {
            resolve(llamadaTexto(itinerador));
        })
        .then(function(result){
            $(`<button class="btn btn-secondary" id="btn_abrirCarta" onclick="mostrarCarta()">Mostrar Carta </button>`)
            .appendTo("#siguiente").show();
        });
    };

    //No sabéis muy bien lo que ha pasado,
    function sextaSecuenciaLIEL(){

        itinerador++;
        borradoCuerpoTexto();
        mostrarInfoSecuencia("sextaSecuenciaLIEL");
        $(`<img src="images/LIELImg/papiro IMG.jpg"
            style="border-radius:12px; width: 450px; height: 40rem;">`)
            .appendTo("#imagenes");
    }
    	    //No sabéis muy bien lo que ha pasado,
        function sextaSecuenciaLIEL(){

            itinerador++;
            borradoCuerpoTexto();
            $("#imagenes img").remove();
            $(`<img src="images/LIELImg/papiro IMG.jpg"
                style="border-radius:12px; width: 450px; height: 40rem;">`)
                .appendTo("#imagenes");


            new Promise(function(resolve) {
                resolve(llamadaTexto(itinerador));
            })
            .then(function(result){
                setTimeout(function(){

                    $(`<div  style="display : table-cell; flex-direction : row; margin: 1rem;" onclick="decideQuemar()"> ¿Qué hacer con la carta? </div>`)
                    .appendTo("#texto").hide().fadeIn();

                    $(`<div  style="display : table-cell; flex-direction : row; margin: 2rem;" onclick="decideQuemar()" onmouseover="this.style.color='#ea8069';" onmouseout="this.style.color='black';"> ¿ QUEMARLA ? </div>`)
                    .appendTo("#textoOpciones").hide().fadeIn(2000);
                    $(`<div  style="display : table-cell; flex-direction : row; margin: 2rem" onclick="decideGuardar()" onmouseover="this.style.color='#ea8069';" onmouseout="this.style.color='black';"> ¿ GUARDARLA ? </div>`)
                    .appendTo("#textoOpciones").hide().fadeIn(2000);
                }, 2000);
            });
        }

        // ¿Cortarle la cabeza a Grerius Bron?
        function septimaSecuencia(){

            borradoCuerpoTexto();
            mostrarInfoSecuencia("septimaSecuencia");
            $("#imagenes img").attr({
                src : "images/LIELImg/desenvainando.jpg"
            });

            new Promise(function(resolve) {
                resolve(llamadaTexto(itinerador));
            })
            .then(function(result){

                $(`<div  style="display: flex; margin-top: 2rem;" onclick="decapitar()" onmouseover="this.style.color='#ea8069';" onmouseout="this.style.color='black';"> SI </div>`)
                .appendTo("#textoOpciones").hide().fadeIn(2000);
                $(`<div  style="display: flex; margin-top: 2rem; " onclick="finCapitulo()" onmouseover="this.style.color='#ea8069';" onmouseout="this.style.color='black';"> NO </div>`)
                .appendTo("#textoOpciones").hide().fadeIn(2000);

            });
        }


        //Abandonáis el campamento en llamas, justo cuando el sol emite los últimos rayos del día…
        function finCapitulo(){

            borradoCuerpoTexto();
            $(`<button type="button" class="btn btn-secondary" id="btn-SalirLIEL" onclick="animacionFinalCapiLIEL()">Salir del campamento</button>`)
                .appendTo("#siguiente");

        }

    /******************************************************************************************************************************/



    // Función que se ejecuta cuando se decide decapitar a Grerius Bron
        function decapitar(){

            document.cookie = "grerius=decapitado";

            borradoCuerpoTexto();
            $("#imagenes img").remove()

            insertarSangreEnemigo();
            reproducirDecapitacionDos();
            //Guardamos esta decisión para más adelante.
            document.cookie = "GreriusDecap=true";

            $(`<img src="images/LIELImg/CabezaGrerius.jpg"
            style="border-radius:12px; width: 450px; height: 40rem;">`)
            .appendTo("#imagenes");

            new Promise(function(resolve) {
                resolve(llamadaEspecialLIELDos());
            })
            .then(function(result){

                setTimeout(function(){
                    finCapitulo();
                }, 7000);
            });
        }


        // Función que se ejecuta cuando se decide quemar la carta
        function decideQuemar(){

            borradoCuerpoTexto();

            reproducirFuegoDebil();
            $("#imagenes img").attr({
                src : "images/LIELImg/cartaArdiendo.jpg"
            });

            $(`<p id="mensaje" style="color: red; font-weight: bold;"> Quemáis la carta. </p>`)
            .appendTo("#textoRespuestas").hide().fadeIn();

            $(`<p id="mensaje" style="color: red; font-weight: bold;"> Es peligroso tener eso en vuestro poder... </p>`)
            .appendTo("#textoRespuestas").hide().fadeIn(3000);

           enseniarSig();

        }

        // Función que se ejecuta cuando se decide guardar la carta
        function decideGuardar(){

            document.cookie = "carta=guardada";
            borradoCuerpoTexto();

         /*   $("#imagenes img").attr({
                src : "images/LIELImg/CabezaGrerius.jpg"
            });  */

            $(`<p id="mensaje" style="color: red; font-weight: bold;"> Os guardáis la carta. </p>`)
                .appendTo("#textoRespuestas").hide().fadeIn();

            $(`<p id="mensaje" style="color: red; font-weight: bold;"> Puede ser un buen salvavidas llegado el momento... </p>`)
            .appendTo("#textoRespuestas").hide().fadeIn(3000);

           enseniarSig();

        }



    // Funcion que añade un parrafo de texto más dicho por Grerius Bron
    function inquisicion(booleanInqui){

        if(!booleanInqui){
            $("#imagenes img").remove();
            animacionX();
            insertarSangreEnemigo();
            $(`<img src="images/LIELImg/Grerius Bron.jpg"
                style="border-radius:12px; width: 450px; height: 40rem;">`)
            .appendTo("#imagenes");
            reproducirDecapitacion();
            setTimeout(function(){
                borradoCuerpoTexto();
                quintaSecuenciaLIEL();
            }, 2000);
        } else{
            preQuintaSecuenciaLIEL();
        }
    }

    // Funcion que se ejecuta cuando se pulsa sobre abrir carta
    function mostrarCarta(){
        mostrarDado();
        $("#cuerpo").hide();
         esconderSig();

        $(`<a id="abrir" class="abrir-cerrar" href="javascript:void(0)" onclick="mostrarDado()">Abrir Dado</a>`)
        .appendTo(".container-fluid");

        $(`<div id="padrePapiro" style='text-align:center; background-image: url("images/LIELImg/papiro.jpg");background-repeat: no-repeat; color: white; margin: auto; position: absolute; width: 100%; height: 100vh; background-size: cover; background-color: inherit; flex-wrap: wrap; z-index: 1;'>
        <span style="color: aqua">&nbsp</div>`)
        .appendTo("#padreCuerpo");

        //comprobarDadoPulsado();
        $(`<a id="abrir" class="abrir-cerrar" href="javascript:void(0)" onclick="mostrarDado()">Abrir Dado</a>`)
        .appendTo("#padrePapiro");

    }

    // Función que se ejecuta cuando se pulsa sobre "Salir" en la carta
    function salirCarta(){

        $("#padrePapiro").hide();
        $("#cuerpo").show();
        $("#btn_abrirCarta").remove();
        sextaSecuenciaLIEL();
    }

/********* F U N C I O N E S    D E    P I N T A D O ***************************************************************************************/

    // Pintado Auxiliar para mostrar un parrafo mas de texto de Grerius Bron
    function pintadoEspecial(booleanInqui, texto, id){
        if (!booleanInqui){
            $(`<div id=${id} class="Opciones" style="color:red" onmouseover="this.style.color='#196883';" onclick="inquisicion(${booleanInqui})"
                onmouseout="this.style.color='red';">  ${texto} </div>`)
            .appendTo("#textoOpciones")
            .hide()
            .fadeIn(2000);
        }else{
            $(`<div id=${id} class="Opciones" style="color:red" onmouseover="this.style.color='#196883';" onclick="inquisicion(${booleanInqui})"
                onmouseout="this.style.color='red';">  ${texto} </div>`)
            .appendTo("#textoOpciones")
            .hide()
            .fadeIn(2000);
        }
    }

    // Pinta el texto después de la tirada en el modo carta
    function pintarCarta( texto, id, booleanPintaGarabatos, requisito ){
        // TEXTO DE TIRADA SUPERADA
        if ( !booleanPintaGarabatos && contFilasCarta == 0 ){
            $(`<div id=${id} class="textoCarta"
                style="width: 46%;margin: 18rem auto 8rem auto; color: black; font-weight: bold; overflow:hidden; font-family: medieval !important;background-color: inherit; font-size: 1.7rem;">
                    <p> <span style="color: maroon"> [SUPERADO +${requisito}] </span> ${texto} </p></div>`)
            .appendTo("#padrePapiro");
            contFilasCarta++;
        } else if ( !booleanPintaGarabatos && contFilasCarta != 0 ) {
            $(`<div id=${id} class="textoCarta"
                style="width: 46%;margin: 8rem auto; color: black; font-weight: bold; overflow:hidden; font-family: medieval !important;background-color: inherit; font-size: 1.7rem;">
                    <p> <span style="color: maroon"> [SUPERADO +${requisito}] </span>  ${texto} </p></div>`)
            .appendTo("#padrePapiro");
        }

        if ( booleanPintaGarabatos && contFilasCarta == 0 ){
            $(`<div id=${id} class="textoCarta"
                style=" width: 46%; margin: 18rem auto 8rem auto; color: black; overflow:hidden; font-family: medieval !important; background-color: inherit; font-weight: bold; font-size: 1.7rem;">
                    <p> <span style="color: red"> [NO SUPERADO +${requisito}] </span> jiandan amdapowmda adkwapdkad
                    dapdomapodm dmapwomdpadma madwpmwpamdamdajdajd akdpowkdd akwdpdad ajdawjdap dam pakdwk </p> </div></span>`)
            .appendTo("#padrePapiro");
             contFilasCarta++;
        } else if( booleanPintaGarabatos && contFilasCarta != 0 ){
            $(`<div id=${id} class="textoCarta"
                style=" width: 46%; margin: 8rem auto; color: black; overflow:hidden; font-family: medieval !important; background-color: inherit; font-weight: bold; font-size: 1.7rem;">
                    <p> <span style="color: red"> [NO SUPERADO +${requisito}] </span> jiandan amdapowmda adkwapdkad
                    dapdomapodm dmapwomdpadma madwpmwpamdamdajdajd akdpowkdd akwdpdad ajdawjdap dam pakdwk </p> </div></span>`)
            .appendTo("#padrePapiro");
        }
    }

    // Pinta +200g en pantalla si se consigue destapar el texto con id 2. en el modo carta
    function masDoscientosG(){
        ganarDinero(200);
         setTimeout( function() {
                $(`<p> <span style="color: red; font-weight: bold;"> +200G por descubrir dinero del cofre </span> </p>`)
                .appendTo("#2")
                .hide()
                .fadeIn(2000);
         }, 1500);
    }

    //Pinta el remitente de la carta
    function pintarRemitente(){
        $(`<p> <span style="color: black; font-weight: bold;"> - Sir Gregor. Sumo Inquisidor de la Santa Iglesia de Sigmar</span> </p>`)
        .appendTo("#4")
        .hide()
        .fadeIn(5000);
    }

    // Muestra el botón para salir del modo Carta
    function mostrarBotónSalir(){
        $(`<button class="btn btn-secondary" onclick="salirCarta()"> Salir </button>`)
        .appendTo("#4")
        .hide()
        .fadeIn(4000);
    }

/******** F U N C I O N E S     C O N T R O L A D O R A S *********************************************************************************/

    // Función respuesta a las tiradas de dados no conseguidas.
    function ControladorPifiaLIEL(itinerador){

        let ramificacion = readCookie("ramificacion");

        switch(true){
            case ramificacion == "A" && itinerador == 2:
                setTimeout( function(){
                    console.log("Itinerador ahora ----> " + itinerador);
                    ocultarDado();
                    fight();
                }, 13500);
                break;
            case ramificacion = "B" && itinerador == 3:

                if (!booleanErrorChromeIII){
                    booleanErrorChromeIII = true;
                    $(`<p class='textoJson' style="color:green;font-size:small"> -1 punto de vida para el lanzador </p>`)
                    .appendTo("#textoRespuestas");
                }

                setTimeout( function(){
                    console.log("Itinerador ahora ----> " + itinerador);
                    ocultarDado();
                    fight();
                }, 6000);

                break;
            default:
                console.log("pifia no encontrada");
                break;
        }

 }

/* Funcion controladora del botón siguiente
    dentro del capítulo 2. La Iglesia En todos Lados */
    function ControladorPagSiguienteLIEL(){

        enableClicks();
        $("#btn_siguiente").hide();

        let ramificacion = readCookie("ramificacion");
        itinerador++;
        console.log("Itinerador ahora -----> "+ itinerador);

        switch (true){
            case ramificacion == "X" && itinerador == 2:
                segundaSecuenciaLIELB();
                break;
            case ramificacion == "A" && itinerador == 2:
                terceraSecuenciaLIEL();
            case ramificacion == "A" && itinerador == 3:
                terceraSecuenciaLIEL();
                break;
            case ramificacion == "A" && itinerador == 3:
                terceraSecuenciaLIEL();
                break;
            case  ramificacion == "B" && itinerador == 3:
                terceraSecuenciaLIEL();
                break;
            case ramificacion == "X" && itinerador == 5:
                cuartaSecuenciaLIEL();
                break;
            case ramificacion == "X" && itinerador == 8:
                septimaSecuencia();
                break;
            default:
                console.log("no se encuentra secuencia: Ramificación --> " +
                 ramificacion + " itinerador ---> " + itinerador);
                break;
        }
    }

/* Funcion controladora cuando se pulsa sobre opciones de dialogo
    que conllevan tirada de dados */
    function controladorDadoLIEL(){
         let ramificacion = readCookie("ramificacion");

         switch(true){
            case ramificacion == "X" && itinerador == 1:
                document.cookie = "ramificacion=A";
                mostrarDado();
                break;
            case ramificacion == "B" && itinerador == 2:
                mostrarDado();
                break;
            default:
                console.log(" :( ");
                break;
         }
    }

    /* Funcion controladora cuando se tira el dado */
    function ControladorTiradaDadoLIEL(resultado){
        let ramificacion = readCookie("ramificacion");

        switch(true){
            case ramificacion == "A" && itinerador == 1:
                mostrarResultadoDados(itinerador, resultado);
                break;
            case ramificacion == "B" && itinerador == 2:
                mostrarResultadoDados(itinerador, resultado);
                break;
            case ramificacion == "X" && itinerador == 6:
                llamadaCarta(resultado);
                break;
            default:
                console.log(" :/ ");
                break;
        }

    }

    // Funcion que controla si se acertó en "Primero disparáis contra los barriles de polvora..."
    function controladorAciertosLIEL(){
        let ramificacion = readCookie("ramificacion");
        switch (true){
        case ramificacion == "B" && itinerador == 2:
            setTimeout(function(){
                fight();
            }, 2000);
            break;
        default:
            console.log(" :) ")
            break;
        }
    }

    function animacionFinalCapiLIEL(){

        $("#btn-SalirLIEL").hide();
        $("#cuerpo").hide();
		$("#imagenes img").hide();
		$(`<div id="divTemp" style="background-image: url('images/LIELImg/fuego.gif'); height: 100vh; background-size: cover; text-align : center;">`)
            .prependTo("#padreCuerpo");

        reproducirFuegoFuerte();
        setTimeout(function(){

           $(`<div id="textoTemp" style="margin-top: 8rem"> <span style="color: aqua;" > Abandonáis el campamento en llamas, justo cuando el sol emite los últimos rayos del día… </span> </div> `)
              .prependTo('#divTemp').hide().fadeIn(2000);
         //       $("#btn-itinerar").show();
           itinerador=9;
           reproducirTexto(itinerador);
           $(`<button type="button" className="btn btn-secondary" style="color:white;" id="btn-SalirLIEL"
                onClick="salirDelCampamento()">Salir del campamento</button>`)
                    .appendTo("#itineracion").fadeIn(3000);
        }, 3000);

    }

    function salirDelCampamento(){
        itinerador = 0;
        itineradorIndice = 3;
        $("#btn-SalirLIEL").remove();
        $("#btn-itinerar").show();
        $("#cuerpo").show();
        $("#textoTemp").remove();
        $("#divTemp").remove();
        controladorCapi();
        mostrarTituloCapitulo();
        abrirMapaCampania();
    }