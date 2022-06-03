<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="ISO-8859-1">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script>


        var contador = 0;


        $(document).ready(function(){
            var btn = document.getElementById("btn_empezar");
            btn.addEventListener("click", llamada, false);
            $("#liOculta").css("display", "none");
            var question= document.getElementsByTagName("li");
        });

        function llamada(){
            $.ajax({
             url: "json/Dialogos.json",
             type: "GET",
             success: function(data) {
                data.forEach(function(conversacion, index) {

                    $("#texto").append("<h3> " + conversacion.titulo + "</h3>")

                    conversacion.mensajes.forEach(function(mensaje, index) {

                        /*  ******  DEBUGEO EN CONSOLA  ******* */
                            console.log("Tipo: " + mensaje.tipo);
                            console.log("Emisor: " + mensaje.emisor);
                            console.log("Contenido: " + mensaje.contenido);
                        /*  ****************************************** */

                            $("#texto").append("<p class='textoJson'> " + mensaje.contenido + "</p>");

                            if (typeof mensaje.opciones != "undefined") {

                                mensaje.opciones.forEach(function(opcion, index) {

                            /*  ******  DEBUGEO EN CONSOLA  ******* */
                                    console.log("Id: " + opcion.id);
                                    console.log("Id: " + opcion.pregunta);
                                    console.log("Id: " + opcion.respuesta);
                            /*  ****************************************** */
                                   let nombreClase = "preguntaJson";
                                       nombreClase += contador;

                                     console.log("****////**** " + nombreClase + " *****/////*****");
                                     contador++;

                                    $("#textoPregunta")
                                    .find('li').last()
                                    .after(`<li class="${nombreClase}" style="color:red;"> opcion.pregunta </li>`);
                                   /* .after("<li> " + opcion.pregunta + "</li>") */
                                   /* .addClass(nombreClase)
                                    .css({'color':'#106122'}); */
                                });

                                  /*  $("#textoPregunta")
                                    .find('li').last()
                                    .addClass("ultimaPregunta");  */

                            }
                            console.log("------------------------------------");
                        });
                    });
                }
             });
        }

        function NombreClase(contador){
           nombreClase += contador;
           return nombreClase;
        }

    </script>

    <link rel="stylesheet type="text/css" href="${pageContext.request.contextPath}/css/prueba.css">
</head>
<body>
    <div id="padre">
        <div id="texto">
            <ul id="textoPregunta">
                <li id="liOculta"></li>
            </ul>
        </div>
	    <div id="siguiente">
	        <button id="btn_empezar">Empezar</button>
	    </div>
	</div>
</body>
</html>