var cantidadEnemigos = 0;
var experienciaTotal = 0;
var datosCombate = {id:1,jugadores:4};

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
    $("#btn_Combate").hide();

    var btonCombate = document.getElementById("btn_combate");
    var cookieLugar = readCookie("ubicacion");
    var capitulo = readCookie("capitulo");
    var data = { zona: cookieLugar };
    var enemigo = new Object();
    var recompensa = new Object();

    var cantidadRecompensas = 0;

    /* Si situamos el puntero (la espada) en el mapa campaña,
    *  se seteó el valor de la cookie de capitulo */
    if(capitulo == "MapaCampaña"){
        var numeroRandom = getRandomInt(3,6);
        // LLamamos a la funcion AJAX encargada de obtener los enemigos
        for(var i= 0; i < numeroRandom; i++){
            obtenerEnemigos();
        }

    }

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


    function obtenerEnemigos(){
        $("#cuerpo").css({
            'height' : '70% !important',
            'word-wrap' : 'break-word !important',
            'width' : '100% !important',
            'justity-content' : 'center !important'
        })
        esconderSig();
        var cookieSide = readCookie("ubicacion");
        var dataLugar = { zona: cookieSide };
        var enemy = new Object();
    //    document.cookie = "batalla=true";
        console.log("INICIO LLAMADA COMBATE");
        var request = $.ajax({
            url: "/calcularEnemigos",
            type: "POST",
            data: dataLugar,
            cache: false,
            timeout: 600000,
            encode: true,
        });
        // SI la llamada se realiza correctamente
        request.done(function(data){
                enemy.name = data.nombreEnemigo,
                enemy.race = data.raza,
                enemy.ataqFisico = data.ataqueFisico,
                enemy.ataqMagico = data.ataqueMagico,
                enemy.defFisica = data.defensaFisica,
                enemy.defMagica = data.defensaMagica,
                enemy.scope = data.alcance,
                enemy.velocity = data.velocidad,
                enemy.urlImagen = data.rutaImagen,
                enemy.vitality = data.vitalidad,
                enemy.experience = data.experiencia
        //        enemy.numero = data.numeroEnemigos
            console.log(enemy);
            pintarTarjetaEnemy(enemy);
            $("#siguiente").show();
            $("#btn_botin").show();
        });
        // si la llamada falla
        request.fail(function( e,textStatus ){
            alert( "Request failed: " +textStatus );
        });
    }

    // Funcion encargada de pintar las cartas de enemigos
    function pintarTarjetaEnemy(enemigo){
        esconderSig();
        $(".conte-texto").show();
        $("#tarjetaEnemy").show();
        var imagen = corregirRuta(enemigo.urlImagen);

        cantidadEnemigos++;
        experienciaTotal += enemigo.experience;
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
                <li class="list-group-item">Experiencia: ${enemigo.experience}</li>
            </ul>
        </div>`).appendTo("#cuerpo");
     //   }
    }

    function obtenerRecompensa(recompensa){
        //Primero borramos las cartas de enemigos
        var cards = document.getElementsByClassName("card");
        var contador=0;
        var numeroBorrado = cards.length;
        var capitulo = readCookie("capitulo");

        // Borramos todas las cards de enemigos
        for(let i=0; i<numeroBorrado; i++){
            $("#tarjetaEnemy").remove();
          }

        // Quitamos el directorio que sobra en la ruta de la imagen
        var imagen = corregirRuta(recompensa.urlImagen);
        pintarTarjetaRecompensa(recompensa,imagen);
        var jefe = readCookie("combateJefe");
        // Se controla que no se muestre dos veces al re-llamar a la recompensa
        if(cantidadEnemigos != 0 && jefe == "false"){
            $(`<div id="recompensa" style="color: white; float:left !important;">Experiencia Obtenida: ${experienciaTotal}</div>`)
                .appendTo(".conte-texto");
        }

        //Repito el flujo si hay más de 4 enemigos
        if(cantidadEnemigos > 4){
            $("#btn_botin").click();
            cantidadEnemigos=0;
        }
        // Se comprueba si se ha combatido contra un jefe
        if (jefe != "false"){
            $("#btn_botin").click();
            document.cookie= "combateJefe=false";
        }
        //Reproducimos sonido de victoria FFVII
        reproducirVictoria();
        //Actualizamos la botonería
        $("#btn_botin").hide();
        if(capitulo == "MapaCampaña"){
            $("#btn_salir").show();
        } else {
            enseniarSig();
        }
        document.cookie= "batalla=false";
        experienciaTotal=0;
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

    function obtenerCombateJefe(jefe){

        var dataJefe = { jefe: jefe };
        var enemy = new Object();

        var requestJefe = $.ajax({
            url: "/combateJefe",
            type: "POST",
            data: dataJefe,
            cache: false,
            timeout: 600000,
            encode: true,
        });
        // SI la llamada se realiza correctamente
        requestJefe.done(function(data){
            enemy.name = data.nombreEnemigo,
                enemy.race = data.raza,
                enemy.ataqFisico = data.ataqueFisico,
                enemy.ataqMagico = data.ataqueMagico,
                enemy.defFisica = data.defensaFisica,
                enemy.defMagica = data.defensaMagica,
                enemy.scope = data.alcance,
                enemy.velocity = data.velocidad,
                enemy.urlImagen = data.rutaImagen,
                enemy.vitality = data.vitalidad,
                enemy.experience = data.experiencia
            //  enemy.numero = data.numeroEnemigos
            console.log(enemy);
            pintarTarjetaJefe(enemy);
            $("#btn_botin").show();
        });
        // si la llamada falla
        requestJefe.fail(function( e,textStatus ){
            alert( "Request failed: " +textStatus );
        });
    }

    function pintarTarjetaJefe(enemigo){
        $(".conte-texto").show();
        $("#tarjetaEnemy").show();
        var imagen = corregirRuta(enemigo.urlImagen);
        experienciaTotal += enemigo.experience;
        $(`<div id="tarjetaEnemy" class="card" style="width: 18rem;background-color: purple !important;">
            <img id="imgEnemy" class="card-img-top" src=${imagen} alt="">
            <div class="card-body">
                <h5 id="nombreEnemy" class="card-title" style="color: white !important;">${enemigo.name}</h5> 
                <p id ="razaEnemy" class="card-text" style="color: white !important;">${enemigo.race}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Ataque Fisico: ${enemigo.ataqFisico}</li>
                <li class="list-group-item">Ataque Magico: ${enemigo.ataqMagico}</li>
                <li class="list-group-item">Defensa Fisica: ${enemigo.defFisica}</li>
                <li class="list-group-item">Defensa Magica: ${enemigo.defMagica}</li>
                <li class="list-group-item">Vitalidad: ${enemigo.vitality}</li>
                <li class="list-group-item">Alcance: ${enemigo.scope}</li>
                <li class="list-group-item">Velocidad: ${enemigo.velocity}</li>
                <li class="list-group-item">Experiencia: ${enemigo.experience}</li>
            </ul>
        </div>`).appendTo("#cuerpo");
    }



