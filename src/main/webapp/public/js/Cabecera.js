

$(document).ready(function() {

    $("#rowDosCabecera").hide();
    
    // Función para mostrar el capítulo actual en la cabecera
    obtenerTituloCapitulo();

    // Función que se activa al pulsar sobre el botón de mostrar Mapa
    $("#btn-mostrarMapa").click(function() {
        if(!booleanMapa){
            retornarDeFight();
            $("#rowDosCabecera").show();

            // Mostramos el mapa
            $("#divImagen").css({
                "visibility" : "visible"
            })

            booleanMapa = true;
            document.cookie = "ubicacion=Itineracion";
            document.cookie = "capitulo=Itineracion";
            mostrarTituloCapitulo();
        } else {
            //$("#divMapa img").remove();
            $("#rowDosCabecera").hide();
            booleanMapa = false;
            //Ocultamos el mapa de nuevo
            $("#divImagen").css({
                "visibility" : "hidden"
            })
            mostrarTituloCapitulo();
        }       
    });
});   

var booleanMapa = false;
var titulo="";

function obtenerTituloCapitulo(){
    let cookieCapitulo = readCookie("capitulo");

    switch(cookieCapitulo){
        case "Despertar":
            titulo = "Capítulo I. El Despertar."
            break;
        case "LaIglesiaEnTodosLados":
            titulo = "Capitulo II. La Iglesia en todos lados."
            break;
        case "ElForajido":
            titulo= "Capitulo III. El Forajido." 
            break;
        case "Averlan":
            titulo= "Capitulo IV. Averlan"      
            break;
        default: 
            "No encontrada cookie capítulo";
            break;     
    }

    mostrarTituloCapitulo();

}

function mostrarTituloCapitulo(){
    let titulo= readCookie("capitulo");
    $("#capiActual p").remove();
    $(`<p> ${titulo} </p>`).appendTo("#capiActual");
}

