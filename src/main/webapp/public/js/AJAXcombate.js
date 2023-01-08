$(document).ready(function() {
    $(".conte-degradado").hide();
    $(".conte-texto").hide();
    $("#tarjetaEnemy").hide();

    fight2();
    var data = {
        jugadores: 4,
        id: 1
    };

    var enemigo = new Object();

    var request=$.ajax({
        url: "/calcularEnemigos",
        type : "POST",
        data : data,
        //processData: false,
        //contentType: false,
        cache: false,
        timeout: 600000,
        //dataType: "json",
        encode: true,
    });

    request.done(function(data)
    {
        enemigo.name = data.nombreEnemigo,
        enemigo.race = data.raza,
        enemigo.ataqFisico = data.ataqueFisico,
        enemigo.ataqMagico = data.ataqueMagico,
        enemigo.defFisica = data.defensaFisica,
        enemigo.defMagica = data.defensaMagica,
        enemigo.scope = data.alcance,
        enemigo.velocity = data.velocidad,
        enemigo.urlImagen = data.rutaImagen,
        enemigo.vitality = data.vitalidad,
        enemigo.numero = data.numeroEnemigos
        console.log(enemigo);
        pintarTarjetaEnemy(enemigo);
    });

    request.fail(function( e,textStatus )
    {
        alert( "Request failed: " +textStatus );
    });
});

    var datosCombate = {id:1,jugadores:4};

    function fight2(){
        $("#rowDosCabecera").hide();
        document.cookie = "batalla=true";
        pausarAudio();
        $("#btn-Salir").hide();
        reproducirMusicaBattalla();
        interMusicaBatalla(true);

        //borradoCuerpoTexto();
        $(".conte-texto h1").remove();
        $("#imagenes img").remove();
        //ocultacionBotones();

        $(".conte-degradado").show();
        $(".conte-texto").show();
        $("#cuerpo").css({'height' : '40rem', 'width' : '100%'});

        $(`<h1 style="color:black" > ¡¡¡FIIIGHTTT!!!</h1>`)
            .appendTo(".conte-texto");

    }


    function degradadoFight(){
        $(".conte-degradado").css({'background' : `radial-gradient(transparent 0%,
         transparent 0%, black ${contDegradado}%)`});
        contDegradado++;
    }

    // Funcion encargada de pintar las cartas de enemigos
    function pintarTarjetaEnemy(enemigo){

        $("#tarjetaEnemy").show();
        var imagen = corregirRuta(enemigo.urlImagen);
        var numeroEnemigos = enemigo.numero;
        for ( var i = 0; i < numeroEnemigos; i++){
            $(`<div id="tarjetaEnemy" class="card" style="width: 18rem;">
                <img id="imgEnemy" class="card-img-top" src=${imagen} alt="">
                <div class="card-body">
                    <h5 id="nombreEnemy" class="card-title">${enemigo.name}</h5> 
                    <p id ="razaEnemy" class="card-text">${enemigo.race}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Ataque Fisico: ${enemigo.ataqFisico}</li>
                    <li class="list-group-item">Ataque Magico: ${enemigo.ataqMagico}</li>
                    <li class="list-group-item">Defensa Fisica: ${enemigo.defFisica}</li>
                    <li class="list-group-item">Defensa Magica: ${enemigo.defMagica}</li>
                    <li class="list-group-item">Vitalidad: ${enemigo.vitality}</li>
                    <li class="list-group-item">Alcance: ${enemigo.scope}</li>
                    <li class="list-group-item">Velocidad: ${enemigo.velocity}</li>
                </ul>
            </div>`).appendTo("#cuerpo");
        }
    }

    function corregirRuta(ruta){
        var rutaCorregida = ruta.slice(8,ruta.length);
        console.log("cadena corregida: " + rutaCorregida);
        return rutaCorregida;
    }

    /*$("#imgEnemy").attr({
        src : "images/Averlan/callePrincipal.png",
        width : "450px"
    });*/
