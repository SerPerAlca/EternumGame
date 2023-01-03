
var booleanCapitulo4 = false;

function inicioAV(){
    // Cookies
    document.cookie = "ubicacion=Averlan";
    document.cookie = "capitulo=Averlan";
    document.cookie = "ramificacion=X";
    document.cookie = "batalla=false";

   borradoCuerpoTexto();
   $("#btn-itinerar").hide();
   $("#btn-Salir").remove();
   obtenerTituloCapitulo();
   itinerador = 0;
   itineradorAmbiente = 1;
   
   if(!booleanCapitulo4){
       $("#imagenes img").remove();
       $("<div class='Inicio'>IV. Averlan </div>")
       .filter(".Inicio").click(function(){
           primeraSecuenciaAV();
       }).end().appendTo("#texto");
       booleanCapitulo4 = true;
    } else {
       console.log("Ya habías entrado aquí");
    }
}

/////// S E C U E N C I A S //////////////////////////////////////////////////////////////////////////////////////////////


function primeraSecuenciaAV(){
    
    $("#CabeceraAudio").hide();
    $("#btn-itinerar").hide();
    $("#imagenes img").remove();
    borradoCuerpoTexto();
    mostrarInfoSecuencia("primeraSecuenciaAV");
    esconderSig();

    $(`<img src="images/Averlan/callePrincipal.png" style="border-radius:12px; width: 540px; height: 50rem;">`)
    .appendTo("#imagenes");
    itineradorAmbiente= 2;
    reproducirAmbiente();
    
    itinerador = 0;
    new Promise(function(resolve) {
        // Entráis en la ciudad enseñando el salvoconducto
        resolve(llamadaTexto(itinerador));
    }).then(function(result){

        setTimeout(()=>{
            borradoCuerpoTexto();
            $("#imagenes img").attr({
                src : "images/Averlan/callePrincipal.png",
                width : "450px"
            });
            itinerador = 1;
            // Subís por la calle principal y llegáis a la plaza central.
            llamadaTexto(itinerador);
        }, 23000)

        setTimeout(()=>{
            borradoCuerpoTexto();
            reproducirAbucheos();
            $("#imagenes img").attr({
                src : "images/Averlan/multitudAverlan.jpg",
                width : "450px"
            });
            itinerador = 2;
            // SACERDOTE: Estos Herejes, le dieron la espalda a Sigmar.
            llamadaTexto(itinerador);
        }, 57000)

        setTimeout(()=>{
            borradoCuerpoTexto();
            $("#imagenes img").attr({
                src : "images/Averlan/SacerdotePatibulo.png",
                width : "450px"
            });
            itinerador = 3;
            // SACERDOTE: SACERDOTE: Gracias a Sigmar y a su sagrado ejército
            llamadaTexto(itinerador);
        }, 72000)

        setTimeout(()=>{
            borradoCuerpoTexto();
            $("#imagenes img").attr({
                src : "images/Averlan/SirGregorCondeYPaladin.png",
                width : "450px"
            });
            itinerador = 4;
            // Miráis a lo alto, a la derecha del patíbulo
            llamadaTexto(itinerador);
        }, 87500)

        setTimeout(()=>{
            borradoCuerpoTexto();
            $("#imagenes img").attr({
                src : "images/Averlan/SacerdotePatibulo.png",
                width : "450px"
            });
            itinerador = 5;
            // SACERDOTE: Un paso al frente condenados
            llamadaTexto(itinerador);
        }, 108500)

        setTimeout(()=>{
            borradoCuerpoTexto();
            $("#imagenes img").attr({
                src : "images/Averlan/RuloPatibulo.png",
                width : "450px"
            });
            itinerador = 6;
            // Se trata de cuatro personas y un enano. Os llama la atención uno de ellos. 
            llamadaTexto(itinerador);
        }, 122000)

        setTimeout(()=>{
            borradoCuerpoTexto();
            reproducirAbucheos();
            $("#imagenes img").attr({
                src : "images/Averlan/RuloYSacerdote.png",
                width : "450px"
            });
            itinerador = 7;
            // SACERDOTE: Aquí los tenéis fieles de Averlan 
            llamadaTexto(itinerador);
        },140000)

        setTimeout(()=>{
            borradoCuerpoTexto();
            reproducirAbucheos();
            $("#imagenes img").attr({
                src : "images/Averlan/vergudoSoga.png",
                width : "450px"
            });
            itinerador = 8;
            //SACERDOTE: Vais a ser colgados como dicta
            llamadaTexto(itinerador);
        },152000)

        setTimeout(()=>{
            borradoCuerpoTexto();
            $("#imagenes img").attr({
                src : "images/Averlan/SacerdotePatibulo.png",
                width : "450px"
            });
            itinerador = 9;
            //SACERDOTE: Decid ahora vuestras últimas palabras
            llamadaTexto(itinerador);
        },171000)

        setTimeout(()=>{
            borradoCuerpoTexto();
            reproducirAbucheos();
            $("#imagenes img").attr({
                src : "images/Averlan/condenado.png",
                width : "450px"
            });
            itinerador = 10;
            //CONDENADO: Pido perdón a Sigmar
            llamadaTexto(itinerador);
        },179000)

        setTimeout(()=>{
            borradoCuerpoTexto();
            $("#imagenes img").attr({
                src : "images/Averlan/condenadoMorado.png",
                width : "450px"
            });
            itinerador = 11;
            //La base de sus pies se abre y el individuo
            llamadaTexto(itinerador);
            reproducirAhorcado();
        },187000)

        setTimeout(()=>{
            borradoCuerpoTexto();
            $("#imagenes img").remove();
            $(`<img src="images/Averlan/niño.png" style="border-radius:12px; width: 440px; height: 50rem;">`)
            .appendTo("#imagenes");

            itinerador = 12;
            //NIÑO: ¿!Paadre?!
            llamadaTexto(itinerador);
        },198000)

        setTimeout(()=>{
            borradoCuerpoTexto();
            reproducirAbucheos();
            $("#imagenes img").remove();
            $(`<img src="images/Averlan/lengua arrancara.jpg" style="border-radius:12px; width: 540px; height: 50rem;">`)
            .appendTo("#imagenes");

            itinerador = 13;
            //SACERDOTE: –¡La lengua de un hereje
            llamadaTexto(itinerador);
        },210000)

        setTimeout(()=>{
            borradoCuerpoTexto();
            $("#imagenes img").remove();
            animacionRuloHorca();
        },221000)

    });
    
}






/***** FUNCIONES AUXILIARES *************************************************************************************************************/

function animacionRuloHorca(){
    itinerador = 14;
    reproducirTexto(itinerador);
    $("#imagenes").hide();
    $("#cuerpo").hide();
    $('#padreCuerpo')
            .css({"background-image":"url('images/Averlan/RuloAhorcado.jpg')",
             "height": "100vh", 
             "background-size": "cover", 
             "text-align" : "center"});
    $(`<div id="divTemp" style="
        margin-right:auto;
        width: 30%;
        justify-content: center;
        padding-top: 20%;
        padding-left: 2%;
        font-weight: bold;
        font-size: 4rem;
    ">Los cuerpos de Rulo, los tres hombres y el enano yacen colgados en mitad de la plaza mientras la multitud vuelve a sus casas a tiempo para la cena ... </div>`)
    .appendTo("#padreCuerpo").hide().fadeIn(3000);  

}