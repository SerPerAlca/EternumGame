

var booleanCapitulo3 = false;


      function inicioEF(){
                // Cookies
                 document.cookie = "ubicacion=BosqueDeAverlan";
                 document.cookie = "capitulo=ElForajido";
                 document.cookie = "ramificacion=X";
                 document.cookie = "batalla=false";

                borradoCuerpoTexto();
                $("#btn-itinerar").hide();
                $("#btn-Salir").remove();
                itinerador = 0;

                if(!booleanCapitulo3){
                    $("#imagenes img").remove();
                    $("<div class='Inicio'>III. El Forajido </div>")
                    .filter(".Inicio").click(function(){
                        primeraSecuenciaEF();
                    }).end().appendTo("#texto");
                    booleanCapitulo3 = true;
                } else {
                    console.log("Ya habías entrado aquí");
                }
      };


/****************   S E C U E N C I A S ***********************************************************************************/

    // Según os acercáis a las afueras de Averlan....
    function primeraSecuenciaEF(){

        $("#CabeceraAudio").hide();
        $("#btn-itinerar").hide();
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
        }, 5000);

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

        }, 10000);

        setTimeout(function(){
            itinerador = 2;
            llamadaOpcionesPausaV2(itinerador);
        }, 11000);

    }

    // Os dais media vuelta y os alejáis de la mirada 
    function segundaSecuenciaEF(){

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
        }, 4500);
    }

 //Os adentráis a la espesura del bosque siguiendo al encapuchado.
    function terceraSecuenciaEF(){

        
        borradoCuerpoTexto();
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
                itinerador = 6;
                //Poco a poco, el viento empieza a traer voces y ruidos
                new Promise(function(resolve) {
                    resolve(llamadaTexto(itinerador));
                })
            }, 4000)

            setTimeout(function(){
                borradoCuerpoTexto();
                $("#imagenes img").attr({
                    src : "images/ElForajidoImg/puebloDeHood.jpg",
                    width : "450px"
                });  
                itinerador = 7; 
                //En este véis personas de todo tipo:
                new Promise(function(resolve) {
                    resolve(llamadaTexto(itinerador));
                })
            }, 7000);

            setTimeout(function(){
                borradoCuerpoTexto();
                itinerador= 8;
                // En el medio del campamento, encontráis una fila
                new Promise(function(resolve) {
                    resolve(llamadaTexto(itinerador));
                }).then(function(result){
                    enseniarSig();
                })
                
            }, 10500 );
        });
            
    }

    // El encapuchado se acerca a él y le dice unas cosas al oído
    function cuartaSecuenciaEF(){

        borradoCuerpoTexto();       
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
        borradoCuerpoTexto();
        $("#imagenes img").attr({
            src : "images/ElForajidoImg/Hood.jpg",
            width : "450px"
        });

        itinerador= 10;
        new Promise(function(resolve) {
            llamadaOpcionesPausaV2(itinerador);
        })
    }

    // HOOD: Parece que lucháis bien.
    function sextaSecuenciaEF_A(){

        borradoCuerpoTexto();
        retornarDeFight();
        esconderSig();
      

        $(`<img src="images/ElForajidoImg/Hood.jpg" style="border-radius:12px; width: 540px; height: 50rem;">`)
        .appendTo("#imagenes");

        itinerador= 12; 
        // Parece que lucháis bien  
        new Promise(function(resolve) {
            resolve(llamadaTexto(itinerador));
        }).then(function(result){

            setTimeout(() => {
                fight();
            }, 3500);
        })
    }

    // Le contáis todo, hasta el contenido de la carta]]
    function sextaSecuenciaEF_B(){

        borradoCuerpoTexto();
        $("#cuerpo").hide();
        esconderSig();
        $("#itineracion").hide();

        $(`<div id="aniadido" style="margin: auto; color: white; text-align: center; justify-content: center;"> Le contáis todo. La caravana de esclavos, Grerius Bron, la carta incriminatoria... </div>`)
        .appendTo("#padreCuerpo").hide().fadeIn(3000);

        setTimeout(function(){
            $("#aniadido").remove();
            $("#cuerpo").show();

            itinerador = 11;
            // Maldito bastardo. Utiliza a criminales
            new Promise(function(resolve) {
                resolve(llamadaTexto(itinerador));
            })
            .then(function(result){
                // Se llama directamente a la septima secuencia y se unen las ramaS
                septimaSecuenciaEF();
            });
        }, 5000);
    }

    // ¿Creéis que Sigmar os va a proteger?
    function SecuenciaAespUno(){

        borradoCuerpoTexto();
        retornarDeFight();
        $(`<img src="images/ElForajidoImg/Hood.jpg" style="border-radius:12px; width: 540px; height: 50rem;">`)
        .appendTo("#imagenes");

        itinerador = 13;
        // ¿Creéis que Sigmar os va a proteger?
        new Promise(function(resolve) {
            resolve(llamadaTexto(itinerador));
        }).then(function(result){
            setTimeout(() => {
                fight();
            }, 5000);
        });
        
    }

    //Ahg, Malditos… No hagáis daño…al pueblo… por favor…
    function SecuenciaAespDos(){

        borradoCuerpoTexto();
        retornarDeFight();

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
            }, 2000);
        })      
    }

    //En ese momento se escuchan cuernos desde varias direcciones
    function septimaSecuenciaEF(){

        borradoCuerpoTexto(); 
        document.cookie = "ramificacion=X";

        itinerador = 15;
        //En ese momento se escuchan cuernos desde varias direcciones
        new Promise(function(resolve) {
            borradoCuerpoTexto();
            resolve(llamadaTexto(itinerador));
        })
        .then(function(result){

            borradoCuerpoTexto();
            setTimeout(()=>{
                bruum();
                reproducirLluviaDeFLechas();
            }, 2500)    

            setTimeout(() =>{
                borradoCuerpoTexto();
                $("#imagenes img").remove();
                $(`<img src="images/ElForajidoImg/lluviaDeFlechas.jpg" style="border-radius:12px; width: 540px; height: 50rem;">`)
                .appendTo("#imagenes");
                $("#imagenBrum").remove();

                itinerador = 16;
                //¡¡¡Nos atacan!!! Se escucha
                llamadaTexto(itinerador)
            }, 6000);

            setTimeout(()=>{
                borradoCuerpoTexto();
                $("#imagenes img").remove();
                $(`<img src="images/ElForajidoImg/Hood.jpg" style="border-radius:12px; width: 540px; height: 50rem;">`)
                .appendTo("#imagenes");

                itinerador = 17;
                // HOOD: Rápido Rolo. -Grita Hood desesperado. Coge a las mujeres y los niños 
                llamadaTexto(itinerador);
            }, 9500);

            setTimeout(()=>{
                borradoCuerpoTexto();
                itinerador = 18;
                // HOOD: Se, que después de todo no somos enemigos
                llamadaTexto(itinerador);
            }, 12000);

            setTimeout(()=>{
                
                $(`<div id="Ayudar" style="color: black; font-weight: bold;"> ¿ AYUDAR ? </div>`)
                .appendTo("#textoOpciones");
                $(`<div id="si" style="color: red; font-weight: bold;" onmouseover="this.style.color='purple';" onmouseout="this.style.color='red';" onclick="octavaSecuenciaEF()"> SI </div>`)
                .appendTo("#textoRespuestas").hide().fadeIn(1000);
                $(`<div id="no" style="color: red; font-weight: bold;" onmouseover="this.style.color='purple';" onmouseout="this.style.color='red';" onclick="secuenciaNoAyuda()"> NO </div>`)
                .appendTo("#textoRespuestas").hide().fadeIn(1000);

            }, 14000);
        });
    }
    
    // HOOD: - ¡Bien! ¡Debemos aguantar guerreros! 
    function octavaSecuenciaEF(){
        borradoCuerpoTexto();
        new Promise(function(resolve) {
            itinerador = 19;
            // HOOD: - ¡Bien! ¡Debemos aguantar guerreros! 
            resolve(llamadaTexto(itinerador));
        }).then(function(result){

            setTimeout(()=>{
                fight();
            }, 3500);
        })
    }



    ////////////////////////////// SECUENCIA SI SE DECIDE NO AYUDAR A HOOD Y SU GENTE
    function secuenciaNoAyuda(){

        borradoCuerpoTexto();
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
            }, 2000)
           

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
            }, 5500);
        })
    }
    
    // Mientras lucháis veis a Hood luchando con su pistola y su espada.
    function novenaSecuenciaEF(){
        
        retornarDeFight();
        borradoCuerpoTexto();
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
            }, 3500);
        });    
    }

    // Notáis que las fuerzas comienzan a faltar
    function decimaSecuenciaEF(){
        
        retornarDeFight();
        borradoCuerpoTexto();
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
            }, 4500);

            setTimeout(()=>{
                borradoCuerpoTexto();
                $("#imagenes img").attr({
                    src : "images/ElForajidoImg/Rulo.jpg",
                    width : "450px"
                });
                itinerador = 23;
                //RULO: ¡Nos estaban esperando Hood! 
                llamadaTexto(itinerador);
            }, 7500);

            setTimeout(()=>{
                borradoCuerpoTexto();
                $("#imagenes img").attr({
                    src : "images/ElForajidoImg/Hood.jpg",
                    width : "450px"
                });
                itinerador = 24;
                //HOOD: - ¡Mierda! ¡Os necesito! 
                llamadaTexto(itinerador);
            }, 10500);

            setTimeout(()=>{
                borradoCuerpoTexto();
                $("#imagenes img").attr({
                    src : "images/ElForajidoImg/correrPorElBosque.jpg",
                    width : "450px"
                });
                itinerador = 25;
                // Corréis, como no habéis corrido nunca 
                llamadaTexto(itinerador);
            }, 13500);

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

        $(`<div> <span style="color: red"> SI </span> <span style="color: red"> NO </span></div>`)
        .appendTo("#textoOpciones").hide().fadeIn(2000);
    }

    function bruum(){
        reproducirCuerno();
        $(`<img id="imagenBrum" src="images/ElForajidoImg/cuernoNegro.jpg" style="position: absolute; width: 90%; margin-top: 1px; z-index: 5; opacity: 0.6">`)
        .appendTo("#padreCuerpo").hide().fadeIn(2500);
    }