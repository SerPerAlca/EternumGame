$(document).ready(function() {
    //ocultamos y mostramos los botones necesarios
    ocultacionBotones();





/***********************************************************************/

/***********************************************************************/
    //Pintamos el titulo del capitulo como portada
      // inicioLaIglesiaEnTodosLados();

/**********************************************************************************************************/
   });
    var booleanCapitulo2= false;
    var booleanErrorChromeI= false;
 //Creo esta función porque se repite la creacion del div Inicio
        function inicioLaIglesiaEnTodosLados(){
                // Cookies
                 document.cookie = "ubicacion=campamentoBandidosBron";
                 document.cookie = "capitulo=LaIglesiaEnTodosLados";

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
                        primeraSecuenciaLaIglesiaEnTodosLados();
                    }).end().appendTo("#texto");
                    booleanCapitulo2 = true;
                }
        };



 /******* S E C U E N C I A S  *************************************************/

// LLEGADA AL CAMPAMENTO DE BRON
 function primeraSecuenciaLaIglesiaEnTodosLados(){
    borradoCuerpoTexto();
    $("#btn_empezar").hide();
    //$("#btn_tiendas").hide();
    $(`<img src="images/CampamentoDeBron.jpg" style="border-radius:12px; width: 470px; height : 60rem">`)
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
        llamadaOpcionesEspCampBron(itinerador);
    }, 6000);
 }





//se llama a las funciones de dados.js
 function tiradaDados(){
    mostrar();
 }

// Función respuesta a las tiradas de dados no conseguidas.
 function pifiaLaIglesiaEnTodosLados(itinerador){

        switch(itinerador){

            case 2:
                setTimeout( function(){
                    ocultarDado();
                    fight(itinerador);
                }, 3500);
                break;
            default:
                console.log("pifia no encontrada");
                break;
        }

 }