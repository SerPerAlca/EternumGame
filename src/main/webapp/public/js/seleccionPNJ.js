


var booleanSeleccionPNJ = true;
// Hardcodeamos el primer pnj del carousel
var pnjActivo = 'Kiryon';

$(document).ready(function() {
    reproducirMusicaPNJ();
    llamadaDescripcionPNJ(pnjActivo);
    // Cuando la imagen del carousel cambie...
    $('#carouselExampleIndicators').on('slid.bs.carousel', function () {
        var pnjActivo = mostrarPnjActivo();
        llamadaDescripcionPNJ(pnjActivo);
    })
});
function mostrarPnjActivo() {
    var carousel = document.getElementsByClassName("active");
    var idPnj = carousel[0].id;
    var stringCarousel = "Carousel";
    var posicion = idPnj.search(stringCarousel);
    var nombrePnj = idPnj.slice(0, posicion);
    return nombrePnj;
}

function pintarDescripcionPnj(item){

    $("#nombrePnj").text(item.nombrePnj);
    if (item.sobreNombre){
        $("#sobreNombre").text(item.sobreNombre);
    }
    $("#raza").text(item.raza);
    $(`<p>${item.descripcion}</p>`).appendTo("#descripcionHeroe");
}

function limpiarDescripcionPnj(){
    $("#nombrePnj").text("");
    $("#sobreNombre").text("");
    $("#raza").text("");
    $("#descripcionHeroe").text("");
}
