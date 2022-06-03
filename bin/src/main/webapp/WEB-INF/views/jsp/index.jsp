<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet type="text/css" href="${pageContext.request.contextPath}/public/css/prueba.css">
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script>
    var contador = 0;
           $(document).ready(function(){
                    var btn = document.getElementById("btn_empezar");
                    btn.addEventListener("click", bucle, false);
                    $("#liOculta").css("display", "none");
           });

        function bucle() {
            for ( let i = 0; i < 4 ; i++) {
                let nombreClase = "preguntaJson";
                nombreClase += contador;
                console.log("****////****" + nombreClase + "*****/////*****");
                contador++;
                 $("#ull")
                     .find('li')
                     .last()
                     .after(`<li class="${nombreClase}" style="color:red;"> Soy el Texto </li>`);
             }
        }

    </script>

</head>
<body>
    <ul id="ull">
        <li id="liOculta"></li>
	<ul>
	<button id="btn_empezar">Empezar</button>
</body>
</html>