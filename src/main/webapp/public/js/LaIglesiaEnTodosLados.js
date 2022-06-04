$(document).ready(function() {
    //ocultamos y mostramos los botones necesarios
    ocultacionBotones();





/***********************************************************************/

/***********************************************************************/
    //Pintamos el titulo del capitulo como portada
      // inicioLIEL();

/**********************************************************************************************************/
   });
    var booleanCapitulo2= false;
    var booleanErrorChromeI= false;
    var booleanErrorChromeII= false;

 //Creo esta función porque se repite la creacion del div Inicio
        function inicioLIEL(){
                // Cookies
                 document.cookie = "ubicacion=campamentoBandidosBron";
                 document.cookie = "capitulo=LaIglesiaEnTodosLados";
                 document.cookie = "ramificacion=X";

                $("#btn-itinerar").hide();

                if (!booleanErrorChromeI){
                    borradoCuerpoTexto();
                    booleanErrorChromeI=true;
                    $("#btn-itinerar").hide();
                }

                if(!booleanCapitulo2){
                    $("#imagenes img").remove();
                    $("<div class='Inicio'>II. La Iglesia En Todos Lados </div>")
                    .filter(".Inicio").click(function(){
                        primeraSecuenciaLIEL();
                    }).end().appendTo("#texto");
                    booleanCapitulo2 = true;
                }
        };



 /******* S E C U E N C I A S  *************************************************/

// LLEGADA AL CAMPAMENTO DE BRON
    function primeraSecuenciaLIEL(){
        borradoCuerpoTexto();
        $("#btn_empezar").hide();
        //$("#btn_tiendas").hide();
        $(`<img src="images/CampamentoDeBron.jpg" style="border-radius:12px; width: 540px; height: 50rem;">`)
        .appendTo("#imagenes");

        new Promise(function(resolve) {
            resolve(llamadaTexto(itinerador));
        })
        itinerador++;

        setTimeout(function(){
            borradoCuerpoTexto();
            $("#imagenes img").attr({
                src : "images/BandidoCampBron.jpg",
                width : "450px"
            });
            llamadaTexto(itinerador);
        }, 4000);

        setTimeout(function(){
            llamadaOpcionesDadoOCombate(itinerador);
        }, 6000);
    }

    //sEGUNDO COMBATE RAMA B DEL CAPITULO
    function segundaSecuenciaLIELB(){

        borradoCuerpoTexto();
        retornarDeFight();
        $("#imagenes img").remove();
        $("#imagenes").show();

        document.cookie = "ramificacion=B";

        $(`<img src="images/peleaBandidos.jpg"
            style="border-radius:12px; width: 500px; height: 35rem;">`)
        .appendTo("#imagenes");

        llamadaOpcionesDadoOCombate(itinerador);

    }

    /* Secuencia que se activa cuando se intenta incendias los barriles
    de polvora y no se logra por la tirada de dados */
 /*   function secuenciaErrorPolvoraLIEL(){
        mostrarResultadoDados(itinerador, resultado)
        console.log("Itinerador ahora ----> " + itinerador);
        ocultarDado();
    } */

    //RAMA "A" DEL CAPITULO
    function terceraSecuenciaLIEL(){

        if (!booleanErrorChromeII){
            booleanErrorChromeII = true;
            let ramificacion = readCookie("ramificacion");
            if (ramificacion == "A"){
                $("#imagenes img").remove();
            }
            itinerador = 4;
            retornarDeFight();

            new Promise(function(resolve) {
                borradoCuerpoTexto();
                resolve(llamadaTexto(itinerador));
            })
            .then(function(result) {
                $(`<img src="images/Grerius Bron.jpg"
                    style="border-radius:12px; width: 450px; height: 40rem;">`)
                .appendTo("#imagenes");
                console.log ("HASTA AQUI BIEN");
            });
        }
    }

/******************************************************************************************************************************/
    // Función respuesta a las tiradas de dados no conseguidas.
    function ControladorPifiaLIEL(itinerador){

        let ramificacion = readCookie("ramificacion");

        switch(true){
            case ramificacion == "A" && itinerador == 2:
                setTimeout( function(){
                    console.log("Itinerador ahora ----> " + itinerador);
                    ocultarDado();
                    fight(itinerador);
                }, 4500);
                break;
            case ramificacion = "B" && itinerador == 3:
                setTimeout(function (){
                    $("#texto")
                });

                setTimeout( function(){
                    console.log("Itinerador ahora ----> " + itinerador);
                    ocultarDado();
                    fight(itinerador);
                }, 6000);
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

    //sumamos uno a la posición
        itinerador++;
        console.log("Itinerador ahora -----> "+ itinerador);

    // Obtenemos en la rama del capitulo en la que nos encontramos
        let ramificacion = readCookie("ramificacion");

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

    function ControladorTiradaDadoLIEL(resultado){
        let ramificacion = readCookie("ramificacion");

        switch(true){
            case ramificacion == "A" && itinerador == 1:
                mostrarResultadoDados(itinerador, resultado);
                break;
            case ramificacion == "B" && itinerador == 2:
                mostrarResultadoDados(itinerador, resultado);
                break;
            default:
                console.log(" :/ ");
                break;
        }

    }

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