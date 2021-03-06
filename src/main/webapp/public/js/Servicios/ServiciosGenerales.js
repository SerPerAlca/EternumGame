

// LLAMA A LOS JSON QUE CONTIENEN EL TEXTO COMÚN DE LOS DIÁLOGOS
        function llamadaTexto(itinerador){

            reproducirTexto(itinerador);

            var cookieDirectorio = readCookie("capitulo");
            var ramificacion = readCookie("ramificacion");

            let directorio = cookieDirectorio + "_texto";
            if (cookieDirectorio != "LaIglesiaEnTodosLados" && cookieDirectorio != "Despertar"){
                directorio += ramificacion;
            }
            directorio += itinerador;
            directorio += ".json";

            fetch('json/' + cookieDirectorio + '/'+ directorio)
            .then(res => res.json())
            .then(data =>{
                for(let index of Object.values(data)){
                    pintarTexto(index.contenido)
                }
            });
        }

        /* Llamada que se realiza después de tirar el dado */
        function llamadaDespuesDeDado(resultado, itinerador){

            var cookieDirectorio = readCookie("capitulo");
            var ramificacion = readCookie("ramificacion");

            let directorio = cookieDirectorio + "_opcDado";
            if (cookieDirectorio != "LaIglesiaEnTodosLados" && cookieDirectorio != "Despertar"){
                directorio += ramificacion;
            }
            directorio += itinerador;
            directorio += ".json";

            fetch('json/' + cookieDirectorio + '/'+ directorio)
            .then(res => res.json())
            .then(data =>{
                for(let index of Object.values(data)){

                    var requerido = Number.parseInt(index.requisito);

                    if(resultado > requerido && index.tipo == "acierto"){
                        pintarTexto(index.texto);
                       enseniarSig();
                    }
                    if(resultado <= requerido && index.tipo == "error"){
                        pintarTexto(index.texto);
                        administrarPifiaGeneral(itinerador);
                    }
                    if(resultado <= requerido){
                        administrarPifiaGeneral(itinerador);
                    }
                    if (resultado > requerido){
                        controladorAciertosGeneral();
                    }
                }
            });
        }

// LLAMA A LOS JSON QUE CONTIENEN LAS RESPUESTAS EN LOS DIÁLOGOS EN LOS CAPITULOS 1 Y 2.
        function llamadaRespuestas(id, itinerador){
            var idRecibido = id;
            var It = itinerador;

            $("#textoRespuestas").text("");

            var cookieDirectorio = readCookie("capitulo");
            var ramificacion = readCookie("ramificacion");

            let directorio = cookieDirectorio + "_respuestas";

            if (cookieDirectorio != "LaIglesiaEnTodosLados" && cookieDirectorio != "Despertar"){
                directorio += ramificacion;
            }
            directorio += itinerador;
            directorio += ".json";

            fetch('json/' + cookieDirectorio + '/' + directorio)
            .then(res => res.json())
            .then(data =>{
                for(let texto of Object.values(data)){
                    if (id == texto.id){

                       pintarRespuesta(texto.respuesta);
                      reproducirRespuesta(idRecibido,It);
                    }
                }
            });
            ValidarOpcionDialogoClave(id, itinerador);
        }

        /** FUNCION que carga la info de todas las tiendas
        según en la localización que nos encontremos **/
        function llamadaTiendas(){
            fetch('json/Tiendas.json')
            .then(res => res.json())
            .then(data => {
                 for(let index of Object.values(data)){
                    for(let localizaciones of Object.values(index.tiendas)) {
                        $(`<h2 style="color:black"> ${localizaciones.localizacion} </h2>`).appendTo("#texto");
                        for(let establecimientos of Object.values(localizaciones.tipos)) {
                           $(`<h3 style="color:purple"> ${establecimientos.establecimiento} </h3>`).appendTo("#texto");
                           $(`<p style="color:red; font-weight: bold; "> ${establecimientos.cartel} </p>`).appendTo("#texto");
                           for(let obj of Object.values(establecimientos.objetos)) {
                            $(`<p style="color:black; font-weight: bold;"> ${obj.objeto} <span style="color:#ffbf00; text-shadow: 0 0 2px black;">
                                ${obj.precio} </span> <br/> ${obj.comentario} </p>`).appendTo("#texto");
                           }
                        }
                    }
                 }
            });
        }

        
// V.1 --> LLAMA A LOS JSON QUE CONTIENEN LAS OPCIONES DE DIÁLOGO  EN EL CAPITULO 1 Y 2.
        function llamadaOpcionesConPausa(itinerador){

            var cookieDirectorio = readCookie("capitulo");
            var ramificacion = readCookie("ramificacion");

            let directorio = cookieDirectorio + "_opciones";
            
            if (cookieDirectorio != "LaIglesiaEnTodosLados" && cookieDirectorio != "Despertar"){
                directorio += ramificacion;
            }
            directorio += itinerador;
            directorio += ".json";

            fetch('json/'+ cookieDirectorio + '/'+ directorio)
                .then(res => res.json())
                .then(data =>{
                    for(let texto of Object.values(data)){
                        var opcionObligada = false;
                        if ( texto.obligatoria == "SI") {
                            opcionObligada= true;
                            pintarOpcionesConPausa(opcionObligada, texto.id, texto.pregunta);
                        } else {
                            pintarOpcionesConPausa(opcionObligada, texto.id, texto.pregunta);
                        }
                        console.log(texto.pregunta);
                    }
                });
        }

// V.2 --> LLAMA A LOS JSON QUE CONTIENEN LAS OPCIONES DE DIÁLOGO A PARTIR DEL CAPITULO 2.
        function llamadaOpcionesPausaV2(itinerador){

            var cookieDirectorio = readCookie("capitulo");
            var ramificacion = readCookie("ramificacion");

            let directorio = cookieDirectorio + "_opciones";
            directorio += ramificacion;
            directorio += itinerador;
            directorio += ".json";

            fetch('json/'+ cookieDirectorio + '/'+ directorio)
                .then(res => res.json())
                .then(data =>{
                    for(let texto of Object.values(data)){
                        var opcionObligada = false;
                        if ( texto.obligatoria == "SI") {
                            opcionObligada= true;
                            pintarOpcionesPausaV2(opcionObligada, texto.id, texto.pregunta, texto.rama);
                        } else {
                            pintarOpcionesPausaV2(opcionObligada, texto.id, texto.pregunta, texto.rama);
                        }

                            console.log(texto.pregunta);
                    }
            });
        }

        /* llamada que se realiza a los json que traen opcion
            de combate o tirar los dados */
        function llamadaOpcionesDadoOCombate(itinerador){

            var especial = false;

            var cookieDirectorio = readCookie("capitulo");
            var ramificacion = readCookie("ramificacion");

            let directorio = cookieDirectorio + "_opciones";
            
            if (cookieDirectorio != "LaIglesiaEnTodosLados" && cookieDirectorio != "Despertar"){
                directorio += ramificacion;
            }
            directorio += itinerador;
            directorio += ".json";

            fetch('json/'+ cookieDirectorio + '/'+ directorio)
                .then(res => res.json())
                .then(data =>{
                    for(let texto of Object.values(data)){
                        var especial = false;
                        if ( texto.especial == "SI") {
                            especial= true;
                            pintarOpcionesConPruebaSuerte(especial, texto.id, texto.pregunta);
                        } else {
                            pintarOpcionesConPruebaSuerte(especial, texto.id, texto.pregunta);
                        }
                        console.log(texto.pregunta);
                    }
                });
        }

