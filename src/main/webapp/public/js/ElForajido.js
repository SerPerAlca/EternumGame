

var booleanCapitulo3 = false;


function inicioEF(){
                // Cookies
    var forajido = readCookie("forajido");

    if('true' != forajido){
        borradoCuerpoTexto();
        $("#btn-Salir").remove();
        obtenerTituloCapitulo();
        itinerador = 0;
        itineradorAmbiente = 1;
        $("#imagenes img").remove();
        document.cookie = "capitulo=ElForajido";
        mostrarTituloCapitulo();
        $("<div class='Inicio'>III. El Forajido </div>")
        .filter(".Inicio").click(function(){
            primeraSecuenciaEF();
        }).end().appendTo("#texto");
    } else {
        restosCampamento();
    }

};


/****************   S E C U E N C I A S ***********************************************************************************/

    // Según os acercáis a las afueras de Averlan....
    function primeraSecuenciaEF(){
        document.cookie = "ubicacion=CAMPAMENTO_HOOD";
        document.cookie = "capitulo=ElForajido";
        document.cookie = "ramificacion=X";
        document.cookie = "batalla=false";
        document.cookie = "forajido=true";
        mostrarInfoSecuencia("primeraSecuenciaEF");
        $("#CabeceraAudio").hide();
        //$("#btn-itinerar").hide();
        $("#imagenes img").remove();
        $(`<img src="images/ElForajidoImg/averlan.jpg" style="border-radius:12px; width: 540px; height: 50rem;">`)
        .appendTo("#imagenes");
        reproducirAmbiente();
        esconderSig();
        borradoCuerpoTexto();
        new Promise(function(resolve) {
            resolve(llamadaTexto(itinerador));
        })

       // itinerador++;
        console.log("Itinerador ----> " + itinerador);

        setTimeout(function(){
            borradoCuerpoTexto();
            $("#imagenes img").attr({
                src : "images/ElForajidoImg/multitudEnLaPuerta.jpg",
                width : "450px"
            });
            itinerador=1;
            llamadaTexto(itinerador);
        }, 21500);

        //itinerador++;
        console.log("Itinerador ----> " + itinerador);

        setTimeout(function(){
            borradoCuerpoTexto();
            $("#imagenes img").attr({
                src : "images/ElForajidoImg/LanceroAverlianoDeElite.jpg",
                width : "450px"
            });
            itinerador= 2;
            llamadaTexto(itinerador);

        }, 36500);

        setTimeout(function(){
            itinerador = 2;
            llamadaOpcionesPausaV2(itinerador);
        }, 40000);

    }

    // Os dais media vuelta y os alejáis de la mirada 
    function segundaSecuenciaEF(){

        mostrarInfoSecuencia("segundaSecuenciaEF");
        esconderSig();
        borradoCuerpoTexto();
        document.cookie = "ramificacion=X";

        $("#imagenes img").attr({
            src : "images/ElForajidoImg/lugarApartado.jpg",
            width : "450px"
        });

        new Promise(function(resolve) {
            resolve(llamadaTexto(itinerador));
        })

        setTimeout(function(){

            borradoCuerpoTexto();
            $("#imagenes img").attr({
                src : "images/ElForajidoImg/Rulo.jpg",
                width : "450px"
            });
            
            itinerador= 4;
            //un hombre encapuchado se acerca a vosotros...
            new Promise(function(resolve) {
                resolve(llamadaTexto(itinerador));
            })

           enseniarSig();
        }, 21000);
    }

 //Os adentráis a la espesura del bosque siguiendo al encapuchado.
    function terceraSecuenciaEF(){

        
        borradoCuerpoTexto();
        mostrarInfoSecuencia("terceraSecuenciaEF");
        $("#imagenes img").attr({
            src : "images/ElForajidoImg/espesura.jpg",
            width : "450px"
        });
        
        itinerador= 5;
        new Promise(function(resolve) {
            resolve(llamadaTexto(itinerador));
        })
        .then(function(result) {
          
            setTimeout(function(){      
                borradoCuerpoTexto();
                // SFX de gente hablando y niños jugando
                reproducirGentioYNinios();
                itinerador = 6;
                //Poco a poco, el viento empieza a traer voces y ruidos
                new Promise(function(resolve) {
                    resolve(llamadaTexto(itinerador));
                })
            }, 18000)

            setTimeout(function(){
                borradoCuerpoTexto();
                $("#imagenes img").attr({
                    src : "images/ElForajidoImg/puebloDeHood.jpg",
                    width : "450px"
                });  
                //SFX de sonido de Yunque 
                reproducirYunque();
                // SFX de mujeres cantando
                reproducirMujeresCantando();
                itinerador = 7; 
                //En este véis personas de todo tipo:
                new Promise(function(resolve) {
                    resolve(llamadaTexto(itinerador));
                })
            }, 29000);

            setTimeout(function(){
                borradoCuerpoTexto();
                itinerador= 8;
                //SFX de sonido de laúd
                reproducirLaud()
                // En el medio del campamento, encontráis una fila
                new Promise(function(resolve) {
                    resolve(llamadaTexto(itinerador));
                }).then(function(result){
                    enseniarSig();
                })
                
            }, 47500);
        });
            
    }

    // El encapuchado se acerca a él y le dice unas cosas al oído
    function cuartaSecuenciaEF(){

        borradoCuerpoTexto();
       // reproducirLaud();
        mostrarInfoSecuencia("cuartaSecuenciaEF");
        $("#imagenes img").attr({
            src : "images/ElForajidoImg/HoodYRulo.jpg",
            width : "450px"
        });

        itinerador= 9;
        new Promise(function(resolve) {
            resolve(llamadaTexto(itinerador));
        })
        .then(function(result){

            setTimeout(function(){
                llamadaOpcionesPausaV2(itinerador);
            }, 2000);
        });
    }

    function quintaSecuenciaEF(){

        var rama = readCookie("ramificacion");
        borradoCuerpoTexto();
        mostrarInfoSecuencia("quintaSecuenciaEF");
        $("#imagenes img").attr({
            src : "images/ElForajidoImg/Hood.jpg",
            width : "450px"
        });

        itinerador= 10;
        new Promise(function(resolve) {
            // Le pasamos directamente el ID "2".
            if(rama == "A"){
                llamadaOpcionesPausaV2(itinerador);
               // llamadaRespuestas("1",itinerador);
            }else  {
                llamadaOpcionesPausaV2(itinerador);
               // llamadaRespuestas("2",itinerador);
            }

        })
        setTimeout(() => {
            enseniarSig();
        }, 9500);

    }

    // HOOD: Parece que lucháis bien.
    function sextaSecuenciaEF_A(){

        borradoCuerpoTexto();
        mostrarInfoSecuencia("sextaSecuenciaEF_A");
        retornarDeFight();
        esconderSig();
      

        $(`<img src="images/ElForajidoImg/Hood.jpg" style="border-radius:12px; width: 540px; height: 50rem;">`)
        .appendTo("#imagenes");

        itinerador= 12; 
        // Parece que lucháis bien
        new Promise(function(resolve) {
            esconderSig();
            resolve(llamadaTexto(itinerador));
        }).then(function(result){

            setTimeout(() => {
                fight();
            }, 7500);
        })
    }

    // Le contáis todo, hasta el contenido de la carta]]
    function sextaSecuenciaEF_B(){

        borradoCuerpoTexto();
        mostrarInfoSecuencia("sextaSecuenciaEF_B");

        // PONEMOS NEGRA LA PANTALLA CON UN MENSAJE EN BLANCO

        $("#cuerpo").hide();
        esconderSig();
        $("#itineracion").hide();
        $(`<div id="aniadido" style="margin: auto; color: white; text-align: center; justify-content: center;"><p>Le contáis todo.</p> 
                <p>La caravana de esclavos, Grerius Bron, la carta incriminatoria...</p>  </div>`)
            .appendTo("#padreCuerpo").hide().fadeIn(3000);


        setTimeout(function(){
            $("#aniadido").remove();
            $("#cuerpo").show();
            itinerador = 11;
            // Maldito bastardo. Utiliza a criminales
            new Promise(function(resolve) {
                resolve(llamadaTexto(itinerador));
            })
        }, 6000);

        setTimeout(function (){
            septimaSecuenciaEF();
        }, 21000);

    }

    // ¿Creéis que Sigmar os va a proteger?
    function SecuenciaAespUno(){

        esconderSig();
        borradoCuerpoTexto();
        mostrarInfoSecuencia("SecuenciaAespUno");
        retornarDeFight();
        $(`<img src="images/ElForajidoImg/Hood.jpg" style="border-radius:12px; width: 540px; height: 50rem;">`)
        .appendTo("#imagenes");

        itinerador = 13;
        document.cookie="combateJefe=HOOD EL FORAJIDO";
        //  Está bien, está visto que me voy a tener que ocupar yo mismo
        new Promise(function(resolve) {
            resolve(llamadaTexto(itinerador));
        }).then(function(result){
            setTimeout(() => {
                fight();
            }, 8500);
        });
        
    }

    //Ahg, Malditos… No hagáis daño…al pueblo… por favor…
    function SecuenciaAespDos(){

        borradoCuerpoTexto();
        mostrarInfoSecuencia("SecuenciaAespDos");
        retornarDeFight();
        esconderSig();
        insertarSangreEnemigo();
        $(`<img src="images/ElForajidoImg/Hood.jpg" style="border-radius:12px; width: 540px; height: 50rem;">`)
        .appendTo("#imagenes");

        itinerador = 14
         //Ahg, Malditos… No hagáis daño…al pueblo… por favor…
        new Promise(function(resolve) {
            resolve(llamadaTexto(itinerador));
        }).then(function(result){
            setTimeout(() => {           
                // No haremos daño a nadie más
                llamadaOpcionesPausaV2(itinerador);
            }, 5000);
        })      
    }

    //En ese momento se escuchan cuernos desde varias direcciones
    function septimaSecuenciaEF(){

        borradoCuerpoTexto();
        mostrarInfoSecuencia("septimaSecuenciaEF");
        document.cookie = "ramificacion=X";

        itinerador = 15;
        //En ese momento se escuchan cuernos desde varias direcciones
        document.cookie = "ubicacion=IMPERIALES_HOOD"
        new Promise(function(resolve) {
            borradoCuerpoTexto();
            resolve(llamadaTexto(itinerador));
        })
        .then(function(result){

            borradoCuerpoTexto();
            setTimeout(()=>{
                bruum();
            }, 3500)

            setTimeout(() =>{
                borradoCuerpoTexto();
                $("#imagenes img").remove();
                $(`<img src="images/ElForajidoImg/lluviaDeFlechas.jpg" style="border-radius:12px; width: 540px; height: 50rem;">`)
                .appendTo("#imagenes");
                $("#imagenBrum").remove();
                reproducirLluviaDeFLechas();
                itineradorAmbiente = 5;
                reproducirAmbiente();
                reproducirAmbienteBatallaI();
                itinerador = 16;
                //¡¡¡Nos atacan!!! Se escucha
                llamadaTexto(itinerador)
            }, 6000);

            setTimeout(()=>{
                borradoCuerpoTexto();
                $("#imagenes img").remove();
                $(`<img src="images/ElForajidoImg/Hood.jpg" style="border-radius:12px; width: 540px; height: 50rem;">`)
                .appendTo("#imagenes");
                reproducirAmbienteBatallaI();
                itinerador = 17;
                // HOOD: Rápido Rolo. -Grita Hood desesperado. Coge a las mujeres y los niños 
                llamadaTexto(itinerador);
            }, 18500);

            setTimeout(()=>{
                borradoCuerpoTexto();
                itinerador = 18;
                // HOOD: Se, que después de todo no somos enemigos
                llamadaTexto(itinerador);
            }, 29500);

            setTimeout(()=>{
                
                $(`<div id="Ayudar" style="color: black; font-weight: bold;"> ¿ AYUDAR ? </div>`)
                .appendTo("#textoOpciones");
                $(`<div id="si" style="color: red; font-weight: bold;" onmouseover="this.style.color='purple';" onmouseout="this.style.color='red';" onclick="octavaSecuenciaEF()"> SI </div>`)
                .appendTo("#textoRespuestas").hide().fadeIn(1000);
                $(`<div id="no" style="color: red; font-weight: bold;" onmouseover="this.style.color='purple';" onmouseout="this.style.color='red';" onclick="secuenciaNoAyuda()"> NO </div>`)
                .appendTo("#textoRespuestas").hide().fadeIn(1000);

            }, 37500);
        });
    }
    
    // HOOD: - ¡Bien! ¡Debemos aguantar guerreros! 
    function octavaSecuenciaEF(){

        borradoCuerpoTexto();
        mostrarInfoSecuencia("octavaSecuenciaEF");
        new Promise(function(resolve) {
            itinerador = 19;
            // HOOD: - ¡Bien! ¡Debemos aguantar guerreros! 
            resolve(llamadaTexto(itinerador));
        }).then(function(result){

            setTimeout(()=>{
                fight();
            }, 10500);
        })
    }


    ////////////////////////////// SECUENCIA SI SE DECIDE NO AYUDAR A HOOD Y SU GENTE
    function secuenciaNoAyuda(){

        borradoCuerpoTexto();
        mostrarInfoSecuencia("secuenciaNoAyuda");
        $("#no").remove();
        $("#imagenes img").remove();
        $(`<img src="images/ElForajidoImg/Hood_llorando.jpg" style="border-radius:12px; width: 540px; height: 50rem;">`)
        .appendTo("#imagenes");

        document.cookie = "ramificacion=B";
        
        // HOOD: De acuerdo, lo entiendo perfectamente
        new Promise(function(resolve){
            itinerador=19;
            resolve(llamadaTexto(itinerador));
        }).then(function(result){

            setTimeout(()=>{
                $(`<p> <span style="color: blue"> Obtenéis SalvoConducto de Averlan </span></p>`)
                .appendTo("#textoOpciones").hide().fadeIn(1000);
            }, 9000)
           

            setTimeout(()=>{
                borradoCuerpoTexto();
                $("#imagenes img").remove();
                $(`<img src="images/ElForajidoImg/correr.png" style="border-radius:12px; width: 540px; height: 50rem;">`)
                .appendTo("#imagenes");
                itinerador = 20;
                // Corréis por la espesura huyendo del combate
                llamadaTexto(itinerador);
                $("#itineracion").show();
                $("#btn-itinerar").show();
            }, 15000);

            setTimeout(()=>{
                itineradorIndice = 4;
                controladorCapi();
            }, 26000)
        })
    }
    
    // Mientras lucháis veis a Hood luchando con su pistola y su espada.
    function novenaSecuenciaEF(){
        
        retornarDeFight();
        reproducirAmbienteBatallaI();
        borradoCuerpoTexto();
        mostrarInfoSecuencia("novenaSecuenciaEF");
        $("#imagenes img").remove();
        $(`<img src="images/ElForajidoImg/batallaCampamentoHood.jpg" style="border-radius:12px; width: 540px; height: 50rem;">`)
        .appendTo("#imagenes");

        new Promise(function(resolve){
            itinerador = 20;
            // Mientras lucháis veis a Hood luchando con su pistola y su espada.
            resolve(llamadaTexto(itinerador));
        }).then(function(result){

            setTimeout(()=>{
                fight();
            }, 16000);
        });    
    }

    // Notáis que las fuerzas comienzan a faltar
    function decimaSecuenciaEF(){
        
        retornarDeFight();
        borradoCuerpoTexto();
        mostrarInfoSecuencia("decimaSecuenciaEF");
        $("#imagenes img").remove();
        $(`<img src="images/ElForajidoImg/batallaCampamentoHood.jpg" style="border-radius:12px; width: 540px; height: 50rem;">`)
        .appendTo("#imagenes");

        new Promise(function(resolve){
            itinerador = 21;
            // Notáis que las fuerzas comienzan a faltar
            resolve(llamadaTexto(itinerador));
        }).then(function(result){

            setTimeout(()=>{
                borradoCuerpoTexto();
                $("#imagenes img").attr({
                    src : "images/ElForajidoImg/Hood.jpg",
                    width : "450px"
                });

                itinerador = 22;
                // HOOD: ¿¡Que haces aquí?! ¡Te ordené que pusieras
                llamadaTexto(itinerador);
            }, 12500);

            setTimeout(()=>{
                borradoCuerpoTexto();
                $("#imagenes img").attr({
                    src : "images/ElForajidoImg/Rulo.jpg",
                    width : "450px"
                });
                itinerador = 23;
                //RULO: ¡Nos estaban esperando Hood! 
                llamadaTexto(itinerador);
            }, 17500);

            setTimeout(()=>{
                borradoCuerpoTexto();
                $("#imagenes img").attr({
                    src : "images/ElForajidoImg/Hood.jpg",
                    width : "450px"
                });
                itinerador = 24;
                //HOOD: - ¡Mierda! ¡Os necesito! 
                llamadaTexto(itinerador);
            }, 25500);

            setTimeout(()=>{
                borradoCuerpoTexto();
                $("#imagenes img").attr({
                    src : "images/ElForajidoImg/correrPorElBosque.jpg",
                    width : "450px"
                });
                animacionCorazon();
                reproducirLatido();
                itinerador = 25;
                // Corréis, como no habéis corrido nunca 
                llamadaTexto(itinerador);
            }, 33500);

            setTimeout(()=>{
                borradoCuerpoTexto();
                pausarMusicaAmbiente();
                $("#imagenes img").attr({
                    src : "images/ElForajidoImg/matanza.png",
                    width : "450px"
                });
                itinerador= 26;
                // Cuerpos. Cadáveres, por todas partes
                llamadaTexto(itinerador);
            }, 54500);

            setTimeout(()=>{
                itineradorAmbiente = 3
                reproducirAmbiente();
            },56500)

            setTimeout(()=>{
                borradoCuerpoTexto();
                $("#imagenes img").attr({
                    src : "images/ElForajidoImg/SoldadoViolador1.jpg",
                    width : "450px"
                });
                itinerador= 27;
                // SOLDADOVIOLADOR1: Jejeje. Aquí queda una viva. Ven aquí preciosa 
                llamadaTexto(itinerador);
            }, 72000);

            setTimeout(()=>{
                borradoCuerpoTexto();
                $("#imagenes img").attr({
                    src : "images/ElForajidoImg/SoldadoViolador2.png",
                    width : "450px"
                });
                itinerador= 28;
                // SOLDADOVIOLADOR2: Puta hereje. Te voy a enseñar a que sabe una polla de Sigmar.
                llamadaTexto(itinerador);
            }, 95000);

            setTimeout(()=>{
                borradoCuerpoTexto();
                $("#imagenes img").attr({
                    src : "images/ElForajidoImg/sacerdoteDeLaConfesion.jpg",
                    width : "450px"
                });
                itinerador= 29;
                // SACERDOTE: Hijos míos. Está prohibido mancillar
                llamadaTexto(itinerador);
            }, 100000);

            setTimeout(()=>{
                borradoCuerpoTexto();
                $("#imagenes img").attr({
                    src : "images/ElForajidoImg/SoldadoViolador2.png",
                    width : "450px"
                });
                itinerador= 30;
                // SOLDADOVIOLADOR2: Como usted mande padre. Jejeje
                llamadaTexto(itinerador);
            }, 110500);

            setTimeout(()=>{
                borradoCuerpoTexto();
                $("#imagenes img").attr({
                    src : "images/ElForajidoImg/escenaPreViolacion.png",
                    width : "450px"
                });
                itinerador= 31;
                // Prometisteis proteger a esta gente, al menos a ella la protegeréis...
                llamadaTexto(itinerador);
            }, 113500);

            setTimeout(()=>{
                fight();                
            }, 118500);
        });
    }

    // SACERDOTE: ¡Infieles! ¡Por Sigmar! ¡Eran herejes! 
    function onceavaSecuenciaEF(){

        borradoCuerpoTexto();
        onceavaSecuenciaEF
        retornarDeFight();
        mostrarInfoSecuencia("onceavaSecuenciaEF");

            
        $("#imagenes img").remove();
        $(`<img src="images/ElForajidoImg/sacerdoteDeLaConfesion.jpg" style="border-radius:12px; width: 540px; height: 50rem;">`)
        .appendTo("#imagenes");
        
        new Promise(function(resolve){
            itinerador= 32;
            // SACERDOTE: ¡Infieles! ¡Por Sigmar! ¡Eran herejes! 
            resolve(llamadaTexto(itinerador));
        }).then(function(result){
            setTimeout(()=>{
                $(`<p><span style="color: black; font-weight: bold;"> ¿ ATACAR AL SACERDOTE ? </span><span style="color: grey; font-weight: bold> 
                (puede tener repercusiones más adelante)</span></p>`)
                .appendTo("#textoOpciones").hide().fadeIn();
                $(`<p><span style="color: black; font-weight: bold; padding: 2rem;" onclick="AtacarSacer()"> SI</span>(COMBATE)</p>`)
                .appendTo("#textoRespuestas").hide().fadeIn();
                $(`<p><span style="color: black; font-weight: bold; padding: 2rem;" onclick="noAtacarSacer()"> NO</span></p>`)
                .appendTo("#textoRespuestas").hide().fadeIn();
            }, 12000);
        });     
    }

    // Final del capitulo
    function duodecimaSecuenciaEF(){

        borradoCuerpoTexto();
        mostrarInfoSecuencia("duodecimaSecuenciaEF");
        retornarDeFight();

        var rama = readCookie("ramificacion");

        $("#imagenes img").remove();
        if (rama == "B"){
            $(`<img src="images/ElForajidoImg/sacerdoteDeLaConfesion.jpg" style="border-radius:12px; width: 540px; height: 50rem;">`)
            .appendTo("#imagenes");  
        }else if (rama == "A") {
            insertarSangreEnemigo();
            $(`<img src="images/ElForajidoImg/sacerdoteDeLaConfesionHerido.jpg" style="border-radius:12px; width: 540px; height: 50rem;">`)
            .appendTo("#imagenes"); 
        }
        new Promise(function(resolve){
            itinerador= 33;
            // SACERDOTE: ¡No quedará así, sigmar os juzgará
            // Al acabar. Hundís vuestro cuchillo en su cuello
            resolve(llamadaTexto(itinerador));
        }).then(function(result){
            if (rama == "A"){
                setTimeout(()=>{
                    reproducirGrito();
                }, 10000 )
            }
            $("#itineracion").show();
            $(`<button class="btn btn-secondary" id='botonTemp' onclick='volverAlCamino()'>Volver al camino</button>`)
                .appendTo("#itineracion");
        //    $("#btn-itinerar").show();

        });
    }

    
/********************** C O N T R O L A D O R A S *************************************/

    function ControladorPagSiguienteEF(){
        enableClicks();      
        let rama = readCookie("ramificacion");
        itinerador++;
        console.log("Itinerador ahora -----> "+ itinerador);
        esconderSig();  
        
        switch(true){
            case itinerador == 3 && rama == "A":
                segundaSecuenciaEF();
                break;
            case itinerador == 3 && rama == "B":
                pagar();
                break;  
            case itinerador == 5 && rama == "X":
                terceraSecuenciaEF();
                break;  
            case itinerador == 9 && rama =="X":
                cuartaSecuenciaEF();   
                break;   
            case itinerador == 10 && rama == "A":
                quintaSecuenciaEF(); 
                break;
            case itinerador == 10 && rama == "B":
                quintaSecuenciaEF(); 
                break;
            case itinerador == 11 && rama == "A":
                fight();
                break;
            case itinerador == 11 && rama == "B":
                sextaSecuenciaEF_B();
                break;
            case itinerador == 12 && rama == "A":
                sextaSecuenciaEF_A();
                break;
            case itinerador == 13 && rama == "A":
                SecuenciaAespUno();
                break;
            case itinerador == 14 && rama == "A":
                SecuenciaAespDos();
                break;
            case itinerador == 15:
                septimaSecuenciaEF();
                break;
            case itinerador == 20 && rama == "X":
                novenaSecuenciaEF();
                break;             
            case itinerador == 21 && rama == "X":
                decimaSecuenciaEF();
                break;
            case itinerador == 32 && rama == "X":
                onceavaSecuenciaEF();
                break;  
            case itinerador == 33 && rama == "A":
                duodecimaSecuenciaEF();
                break;              
            default:
                console.log("No se encuentra condición para el botón siguiente");
                break;    
        }

    }   


/*********************************************************************************************************************************************************** */

// FUNCIONES AUXILIARES

    // Función que se ejecuta cuando el guardia de averlan te pide un soborno por dejarte entrar (SIN ACABAR)
    function pagar(){
        borradoCuerpoTexto();

        $(`<div> ¿ Pagar ? </div>`)
        .appendTo("#texto");

        $(`<div> <span style="color: red"> SI &nbsp;&nbsp; </span> <span style="color: red" onclick="segundaSecuenciaEF()">&nbsp;&nbsp; NO </span></div>`)
        .appendTo("#textoOpciones").hide().fadeIn(2000);
    }

    // Funcion que reproduce una animacion de cuernos de guerra
    function bruum(){
        reproducirCuerno();
        $(`<img id="imagenBrum" src="images/ElForajidoImg/cuernoNegro.jpg" style="position: absolute; width: 90%; margin-top: 1px; z-index: 5; opacity: 0.6">`)
        .appendTo("#padreCuerpo").hide().fadeIn(2500);
    }

    // Funcion que se activa cuando decidimos atacar al sacerdote al final del capítulo.
    function AtacarSacer(){

        document.cookie = "ramificacion=A";
        document.cookie = "combateJefe=SACERDOTE DE LA CONFESION";
        document.cookie = "sacerdoteMuerto=true";
        fight();
    }

    // Funcion que se activa cuando decidimos no atacar al sacerdote al final del capítulo.
    function noAtacarSacer(){

        document.cookie = "ramificacion=B";
        duodecimaSecuenciaEF();
    }


    // Funcion que ilumina y apaga la pantalla al son de un corazón
    function animacionCorazon(){
        var tiempos = [600,1600,2200,2800,3400,4000,4600,5200,5800,6400,7000,7600,8200,8800,9400,10000,10600,11200,11800,12400,
            13000,13600,14200,14800,15400,15800,16200,16800,17400,18000,18600,19000,19600];
        for (var index in tiempos) {
            setTimeout(()=>{cambiaVisibilidad();},tiempos[index]);
            if (index == tiempos.length -1){
                setTimeout(()=>{$('#imagenes img').css({opacity: 1});},tiempos[index] + 100);
            }
        }

    }

    function cambiaVisibilidad() {
        var opacidad = $('#imagenes img').css("opacity");
        if (opacidad == 1) {
            opacidad = 0.5;
        } else {
            opacidad = 1;
        }
        $('#imagenes img').css({opacity: opacidad});
    }

    function volverAlCamino(){
        $("#botonTemp").remove();
        document.cookie = "ubicacion=AVERLAN";
        pausarAudio();
        itineradorIndice=4;
        controladorCapi();
        abrirMapaCampania();
    }

    function restosCampamento(){
        $("#cuerpo").hide();
        $("#imagenes img").hide();
        $('#padreCuerpo')
            .css({"background-image":"url('images/ElForajidoImg/restosCampamento.png')", "height": "100vh", "background-size": "cover", "text-align" : "center"});

        setTimeout(()=>{
            $(`<div style="margin-top: 8rem"> <span style="color: aqua;" > Aquí se libró una gran Batalla. Solo quedan restos de hierro y comida para los cuervos... </span> </div> `)
                .appendTo('#padreCuerpo').hide().fadeIn(2000);
            $(`<button type="button" className="btn btn-secondary" style="color:white;" id="btn-SalirLIEL"
                    onClick="salirDelCampamento()">Volver al camino</button>`)
                .appendTo("#itineracion").fadeIn(3000);
            itinerador=0;
            itineradorIndice=4;
        },2000)

    }

