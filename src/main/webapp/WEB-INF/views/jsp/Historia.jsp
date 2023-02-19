<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>

<!DOCTYPE html>
<head>

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

    <script src="js/Despertar.js"></script>
    <script src="js/LaIglesiaEnTodosLados.js"></script>
    <script src="js/ElForajido.js"></script>
    <script src="js/Averlan.js"></script>
    <script src="js/Servicios/ServiciosLIEL.js"></script>
    <script src="js/Servicios/ServiciosGenerales.js"></script>
    <script src="js/TratamientoAudio.js"></script>
    <script src="js/Dado.js"></script>
    <script src="js/Itineracion.js"></script>
    <script src="js/AJAXcombate.js"></script>
    <script src="js/Tiendas.js"></script>
    <script src="js/M1.js"></script>
    <script src="js/Servicios/ServiciosSecundarias.js"></script>
    <script src="js/FuncionesCompartidas.js"></script>
    <script src="js/Ubicaciones.js"></script>


    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/principal.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/dado.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/sidebar.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/fight.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/combate.css">


</head>
<body>
<!--<div class="container-fluid"> -->
<div class="row cabecera">
    <jsp:include page="Cabecera.jsp"/>
</div>
<div id="padreCuerpo" class="row mt-6">
    <div id="cuerpo" class="row">
        <div id="imagenes" class="col-md-6"></div>
        <div id="cuerpo-texto" class="col-md-6">
            <div id="texto"></div>
            <div id="textoOpciones"></div>
            <div id="textoRespuestas"></div>
        </div>
        <div class="conte-texto"></div>
        <div class="conte-degradado"></div>
    </div>
</div>
<div class="row">
    <div id="siguiente" class="col align-self-center">
        <button type="button" class="btn btn-success" id="btn_empezar">Empezar</button>
        <button type="button" class="btn btn-secondary" id="btn_siguiente" onclick="ControladorBotonSiguiente()">Página Siguiente</button>
    </div>
</div>
<div class="row">
    <div id="itineracion" class="col">
        <p> <button type="button" class="btn btn-secondary" id="btn_botin">OBTENER BOTÍN</button>
            <button type="button" class="btn btn-secondary" id="btn-Salir">Salir de la Ciudad</button>
            <a id="abrir" class="abrir-cerrar" href="javascript:void(0)" onclick="mostrarDado()">Abrir Dado</a>
            <button type="button" class="btn btn-secondary" value="itinerar" id="btn-itinerar">Siguiente Capítulo
            </button>
            <a id="cerrar" class="abrir-cerrar" href="#" onclick="ocultarDado()">Ocultar Dado</a>
        </p>
    </div>
</div>
<div class="row mt-4">
    <div class="col-md-4"></div>
    <div id="textoItineracion" class="col-md-5"></div>
    <div class="col-md-3"></div>
    <div>
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-3"></div>
        </div>
    </div>
    <div id="infoDebug">
        <p> Secuencia: <span id="infoDebugSecuencia"></span></p>
        <p> JSON Texto: <span id="infoDebugTexto"></span></p>
        <p> Audio: <span id="infoDebugAudio"></span></p>
    </div>
    <div id="sidebar" class="sidebar">
        <a href="#" class="boton-cerrar" onclick="ocultarDado()"><i class="bi bi-arrow-left-circle-fill">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
            </svg>
        </i></a>
        <div class="scene">
            <div class="cube">
                <div class="cube__face cube__face--1"></div>
                <div class="cube__face cube__face--2"></div>
                <div class="cube__face cube__face--3"></div>
                <div class="cube__face cube__face--4"></div>
                <div class="cube__face cube__face--5"></div>
                <div class="cube__face cube__face--6"></div>
            </div>
            <button class="rollBtn">Tira el dado</button>
        </div>
        <div id="resultado"></div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
            integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
            crossorigin="anonymous"></script>
</body>
</html>