


/**************** KISLEV *********************************************************************/

function entrarEnKislev(){
    mostrarUbicacion();
  //  retornarDeFight();
    borradoCuerpoTexto();
    libreAlbedrioKislev();
//(Trampa) Pintamos antes la imagen de la anciana porque es el tamaño que deseamos tener
    setTimeout(()=>{
        $(`<img src="images/DespertarImg/ancianoKislev.jpeg" style="border-radius:12px; ">`)
            .appendTo("#imagenes").hide().fadeIn();
        $("#imagenes img").attr({
            src : "images/DespertarImg/ItineracionKislevII.png",
            width: "744px !important"
        });
    }, 1000)


}

/********************************************************************************************/