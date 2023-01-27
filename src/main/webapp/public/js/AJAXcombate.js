$(document).ready(function() {
    $(".conte-degradado").hide();
    $(".conte-texto").hide();
    $("#tarjetaEnemy").hide();
    $("#btn_salir").hide();
    $("#btn_siguiente").hide();
    $("#rowDosCabecera").hide();
    $(".conte-texto h1").remove();
    $("#imagenes img").remove();
    $("#btn_botin").hide();

    pausarAudio();

    var btonCombate = document.getElementById("btn_combate");
    var cookieLugar = readCookie("ubicacionMapa");
    document.cookie = "batalla=true";
    //fightMapaCampania();
    var data = {
        zona: cookieLugar
    };


    $("#capiActual").text("¡¡¡¡ C O M B A T E !!!!")

    var enemigo = new Object();
    var recompensa = new Object();
    var cantidadEnemigos = 0



        console.log("INICIO LLAMADA COMBATE");
        var request = $.ajax({
            url: "/calcularEnemigos",
            type: "POST",
            data: data,
            //processData: false,
            //contentType: false,
            cache: false,
            timeout: 600000,
            //dataType: "json",
            encode: true,
        });
        // SI la llamada se realiza correctamente
        request.done(function(data){
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
            enemigo.experience = data.experiencia,
            enemigo.numero = data.numeroEnemigos
            console.log(enemigo);
            pintarTarjetaEnemy(enemigo);
            $("#btn_botin").show();
        });
        // si la llamada falla
        request.fail(function( e,textStatus ){
            alert( "Request failed: " +textStatus );
        });


    //Botón de OBTENER BOTÍN
    $("#btn_botin").unbind('click').click(function (){
        console.log("INICIO LLAMADA RECOMPENSA")
        var requestBotin=$.ajax({
            url: "/obtenerRecompensa",
            type : "POST",
            data : data,
            cache: false,
            timeout: 600000,
            encode: true,
        });

        requestBotin.fail(function( e,textStatus )
        {
            alert( "LLamada Fallida: " +textStatus );
        });

        requestBotin.done(function(data){
            console.log("SE RECIBE RECOMPENSA");
            recompensa.name = data.nombre,
            recompensa.cantidad = data.cantidad
            recompensa.urlImagen = data.rutaImagen,
            recompensa.description = data.descripcion,
            recompensa.tamanio = data.tamanio
            console.log(recompensa);
            obtenerRecompensa(recompensa);
        });
    });


});


    var datosCombate = {id:1,jugadores:4};


    // Funcion encargada de pintar las cartas de enemigos
    function pintarTarjetaEnemy(enemigo){

        $("#tarjetaEnemy").show();
        var imagen = corregirRuta(enemigo.urlImagen);
        var numeroEnemigos = enemigo.numero;
        cantidadEnemigos = numeroEnemigos;
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

    function obtenerRecompensa(recompensa){
        //Primero borramos las cartas de enemigos
        var cards = document.getElementsByClassName("card");
        var contador=0;
        var numeroBorrado = cards.length;
        for(let i=0; i<numeroBorrado; i++){
            $("#tarjetaEnemy").remove();
            console.log(contador++);
        }
        var imagen = corregirRuta(recompensa.urlImagen);
        pintarTarjetaRecompensa(recompensa,imagen);
        //Repito el flujo si hay más de 4 enemigos
        if(cantidadEnemigos > 4){
            $("#btn_botin").click();
            cantidadEnemigos=0;
        }
        $("#btn_botin").hide();
        $("#btn_siguiente").show();

    }

    //Funcion que pinta la tarjeta de recompensa del combate
    function pintarTarjetaRecompensa(recompensa,imagen){
        $(`<div id="tarjetaEnemy" class="cards" style="width: 18rem;">
            <img id="imgEnemy" class="card-img-top" src=${imagen} alt="">
            <div class="card-body">
                <h5 id="nombreEnemy" class="card-title">${recompensa.name}</h5> 
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Descripción: ${recompensa.description}</li>
                <li class="list-group-item">Cantidad: ${recompensa.cantidad}</li>   
                <li class="list-group-item">Tamaño Unidad: ${recompensa.tamanio}</li>                    
            </ul>
        </div>`).appendTo("#cuerpo");
    }

    // function para quitar el 'public/' de la ruta de la imagen
    function corregirRuta(ruta){
        var rutaCorregida = ruta.slice(8,ruta.length);
        console.log("cadena corregida: " + rutaCorregida);
        return rutaCorregida;
    }






