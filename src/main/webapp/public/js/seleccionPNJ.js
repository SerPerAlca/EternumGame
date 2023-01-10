


var booleanSeleccionPNJ = true;
// Hardcodeamos el primer pnj del carousel
var pnjActivo = 'Kiryon';
var pnjActual= '';
var nombrePnj='';
var heroesElegidos = [];
var elegidosHidden = document.getElementById("heroesElegidos");
$(document).ready(function() {

    $('.carousel').carousel({ interval: false });
    var data = new Object();
    //reproducirMusicaPNJ();
    llamadaDescripcionPNJ(pnjActivo);

    // Mostramos al Jugador actual
    pnjActual = document.getElementById("jugadorActual").value;
    $("#playerActual").text("Jugador " + pnjActual);

    // Cuando la imagen del carousel cambie...
    $('#carouselExampleIndicators').on('slid.bs.carousel', function () {
        var pnjActivo = mostrarPnjActivo();
        llamadaDescripcionPNJ(pnjActivo);
    })

    $('#botonSubmit').on('click', function(){
        var booleanHeroe = false;
        var pnjActual = mostrarPnjActivo();
        if (null != elegidosHidden){
            for(var i = 0; i < heroesElegidos.length ; i++){
                if (heroesElegidos[i] == pnjActual){
                    alert("Este heroe ya se ha elegido");
                    booleanHeroe = true;
                }
            }
        }
        if (!booleanHeroe){
            llamadaAjax();
        }
    });

});

function llamadaAjax(){
    var pnjActual = mostrarPnjActivo();
    var aliasNombre = document.getElementById("namePlayer").value;

    submit ={
        personaje : pnjActual,
        alias : aliasNombre
    }

    var request=$.ajax({
        url: "/registrarHeroe",
        type : "POST",
        data : submit,
        //processData: false,
        //contentType: false,
        cache: false,
        timeout: 600000,
        //dataType: "json",
        encode: true,
    });

    request.done(function(data){
        alert("Personaje Registrado Correctamente");
        // Si aún quedan Jugadores por elegir personaje
        if (data > 0){
            document.getElementById("namePlayer").value = "";
            mostrarPnj();
            heroesElegidos.push(submit.personaje);
            // Metemos en el hidden la lista de heroes YA elegidos
            if (null == elegidosHidden){
                elegidosHidden = heroesElegidos;
            } else {
                elegidosHidden += heroesElegidos;
            }
        } else {
            window.location.replace("/prologo");
        }
    });

    request.fail(function( e,textStatus )
    {
        alert( "Falló el registro de Heroe --> " +textStatus );
    });
}
function mostrarPnjActivo() {
    var carousel = document.getElementsByClassName("active");
    var idPnj = carousel[0].id;
    var stringCarousel = "Carousel";
    var posicion = idPnj.search(stringCarousel);
    nombrePnj = idPnj.slice(0, posicion);
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

// Mostramos al pnj actual
function mostrarPnj(){
    pnjActual++;
    $("#playerActual").text("Jugador " + pnjActual);

}


