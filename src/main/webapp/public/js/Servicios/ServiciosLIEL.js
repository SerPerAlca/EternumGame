        /* Llamada auxiliar para el final del capitulo II */
        function llamadaEspecialLIEL(itinerador){

            var cookieDirectorio = readCookie("capitulo");
            let directorio = cookieDirectorio + "_opciones";

            directorio += itinerador;
            directorio += ".json";

            fetch('json/'+ cookieDirectorio + '/'+ directorio)
                .then(res => res.json())
                .then(data =>{
                    for(let jeyson of Object.values(data)){
                        let booleanInqui = false;
                        if (jeyson.inquisicion == "SI"){
                            booleanInqui = true;
                            pintadoEspecial(booleanInqui, jeyson.pregunta, jeyson.id);
                        } else {
                            pintadoEspecial(booleanInqui, jeyson.pregunta, jeyson.id);
                        }
                    }
                });
        }
        /* Llamada Auxiliar 2 capitulo II */
        function llamadaEspecialLIELDos(){

            reproducirTextoEspLIEL(itinerador);

            var cookieDirectorio = readCookie("capitulo");
            let directorio = cookieDirectorio + "_esp";
            directorio += itinerador;
            directorio += ".json";

            fetch('json/'+ cookieDirectorio + '/'+ directorio)
                .then(res => res.json())
                .then(data =>{
                    for(let jeyson of Object.values(data)){
                        pintarTexto(jeyson.texto);
                    }
                });
        }

        /* obtiene los datos de la carta en el campamento de Bron
        Es llamada despues de tirar los dados */
        function llamadaCarta(resultado){
            let booleanPintaGarabatos = false;

            fetch('json/' + "/LaIglesiaEnTodosLados/cartaCampamentoBron.json")
                .then( res => res.json())
                .then(data => {
                    for (let jeyson of Object.values(data)){
                        if (resultado > jeyson.requisito){
                           booleanPintaGarabatos = false;
                           pintarCarta( jeyson.texto, jeyson.id, booleanPintaGarabatos, jeyson.requisito );
                        }else {
                           booleanPintaGarabatos = true;
                           pintarCarta( jeyson.texto, jeyson.id, booleanPintaGarabatos, jeyson.requisito );
                        }
                        if (resultado > jeyson.requisito && jeyson.id == 2){
                            masDoscientosG();
                        }
                        if (jeyson.id == 4){
                            pintarRemitente();
                            mostrarBotónSalir();
                        }
                    }
                });
        }