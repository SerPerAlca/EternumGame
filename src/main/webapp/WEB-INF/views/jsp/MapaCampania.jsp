<%--
  Created by IntelliJ IDEA.
  User: Sergio
  Date: 10/01/2023
  Time: 13:53
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<html>
<head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

  <link rel="stylesheet type="text/css" href="${pageContext.request.contextPath}/css/mapaCampania.css">
  <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/dado.css">
  <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/sidebar.css">

  <script src="js/Dado.js"></script>
  <script src="js/Itineracion.js"></script>
  <script src="js/FuncionesCompartidas.js"></script>

  <title>Mapa Campaña</title>
</head>
<body>
  <div class="container-fluid">
    <div class="row cabecera">
      <a id="abrir" class="abrir-cerrar" href="javascript:void(0)" onclick="mostrarDado()">Abrir Dado</a>
      <a id="cerrar" class="abrir-cerrar" href="#" onclick="ocultarDado()">Ocultar Dado</a>
    </div>
    <div id="rowDosCabecera" class="row">
      <div id="descripcionItineracion" class="col">
        <h1>Resultado Necesario:</h1>
        <p></p>
      </div>
      <div id="progreso" class="col">
        <div id="barraProgreso"></div>
      </div>
      <div id="divMapa" class="col">
        <img id="divImagen" usemap="#mapaImperio" onclick="coordenadas(event)" src="images/Mapas/Imperio.jpg" />
        <map name="mapaImperio">
          <area id="areaImperium" shape="rect" coords="447,350,570,430" alt="Write" href="#" />
        </map>
      </div>
    </div>
    <div id="sidebar" class="sidebar">
      <a href="#" class="boton-cerrar" onclick="ocultarDado()"><i class="bi bi-arrow-left-circle-fill">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
        </svg>
      </i></a>
      <div class = "scene">
        <div class="cube">
          <div class="cube__face cube__face--1"></div>
          <div class="cube__face cube__face--2"></div>
          <div class="cube__face cube__face--3"></div>
          <div class="cube__face cube__face--4"></div>
          <div class="cube__face cube__face--5"></div>
          <div class="cube__face cube__face--6"></div>
        </div>
        <button class = "rollBtn">Tira el dado</button>
      </div>
      <div id="resultado"></div>
    </div>

  </div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>
