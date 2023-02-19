<%--
  Created by IntelliJ IDEA.
  User: Sergio
  Date: 04/01/2023
  Time: 21:35
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/principal.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/combate.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="js/AJAXcombate.js"></script>
    <script src="js/FuncionesCompartidas.js"></script>
    <script src="js/Dado.js"></script>
    <script src="js/Itineracion.js"></script>
    <script src="js/TratamientoAudio.js"></script>

    <title>Fight</title>
</head>
<body>
<div class="container-fluid">
    <div class="row cabecera">
        <jsp:include page="Cabecera.jsp"/>
    </div>
    <div id="padreCuerpo" class="row mt-6">
        <div id="cuerpo" class="row">
            <!--- Aqui se pintaran las cartas de enemigos --->
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
            <button type="button" class="btn btn-secondary" id="btn_botin">OBTENER BOTÍN</button>
            <!--<button type="button" class="btn btn-secondary" id="btn_Combate">Combate</button> -->
            <button type="button" class="btn btn-secondary" id="btn_salir" onclick="salir()">VOLVER AL MAPA DE CAMPAÑA</button>
            <button type="button" class="btn btn-secondary" id="btn_siguiente" onclick="ControladorBotonSiguiente()">
                Página Siguiente
            </button>
        </div>
    </div>
    <div class="row mt-4">
        <div class="col-md-4"></div>
        <div id="textoItineracion" class="col-md-5"></div>
        <div class="col-md-3"></div>
    </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
</body>
</html>
