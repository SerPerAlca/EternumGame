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

  <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/mapaCampania.css">
  <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/dado.css">
  <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/sidebar.css">

  <script src="js/Dado.js"></script>
  <script src="js/Itineracion.js"></script>
  <script src="js/FuncionesCompartidas.js"></script>
  <script src="js/Servicios/ServiciosGenerales.js"></script>

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

      <!-- MAPA DE CAMPAÑA --------------------------------->
      <div id="divMapa" onclick="coordenadas(event)" class="col">
        <img id="divImagen" usemap="#mapaImperio" src="images/Mapas/Imperio.jpg" />
        <map id="mapaImperio" name="mapaImperio">
          <!-- Areas para la descripcion de las ubicaciones -->
          <area id="ElImperio" shape="rect" coords="19,24,351,99" alt="Write" href="#" />
          <area id="Imperium" shape="rect" coords="447,350,570,430" alt="Write" href="#" />
          <area id="Kislev" shape="rect" coords="725,148,786,186" alt="Write" href="#" />
          <area id="Carreburgo" shape="rect" coords="2,404,94,459" alt="Write" href="#" />
          <area id="Averlan" shape="rect" coords="910,391,982,451" alt="Write" href="#" />
          <area id="Stirland" shape="rect" coords="429,162,500,195" alt="Write" href="#" />
          <area id="Wislen" shape="rect" coords="651,556,734,609" alt="Write" href="#" />
          <area id="Transilvania" shape="rect" coords="559,721,642,754" alt="Write" href="#" />
          <area id="TumbaDeSigmar" shape="rect" coords="284,365,313,381" alt="Write" href="#" />
          <area id="PrisiónDeLaRoca" shape="rect" coords="121,527,155,544" alt="Write" href="#" />
          <area id="AldeaFresno" shape="rect" coords="131,687,191,711" alt="Write" href="#" />
          <area id="AtalayaDelEscudo" shape="rect" coords="56,704,89,734" alt="Write" href="#" />
          <area id="PosadaPoniPisador" shape="rect" coords="437,562,468,580" alt="Write" href="#" />
          <area id="TorreOlvidadaHoet" shape="rect" coords="409,903,437,937" alt="Write" href="#" />
          <area id="CarreraBlanca" shape="rect" coords="868,827,921,860" alt="Write" href="#" />
          <area id="PuertaNorte" shape="rect" coords="844,58,917,92" alt="Write" href="#" />
          <area id="PuertaSur" shape="rect" coords="814,949,873,995" alt="Write" href="#" />
          <area id="campamento_grerius" shape="rect" coords="964,250,977,266" alt="Write" href="#" />
          <area id="campamento_hood" shape="rect" coords="788,521,796,535" alt="Write" href="#" />
          <!-- Areas para delimitar las zonas de combate -->
          <area id="zonaKISLEV" shape="rect" coords="751,58,988,274" alt="Write" href="#" />
          <area id="zonaAVERLAN" shape="rect" coords="621,235,982,582" alt="Write" href="#" />
          <area id="zonaIMPERIUM" shape="rect" coords="379,236,596,454" alt="Write" href="#" />
          <area id="zonaSTIRLAN" shape="rect" coords="327,109,602,249" alt="Write" href="#" />
          <area id="zonaTIERRAS_INTERMEDIAS" shape="rect" coords="180,207,478,581" alt="Write" href="#" />
          <area id="zonaCARREBURGO" shape="rect" coords="0,285,363,777" alt="Write" href="#" />
          <area id="zonaTRANSILVANIA" shape="rect" coords="466,638,659,740" alt="Write" href="#" />
          <area id="zonaWISLEN" shape="rect" coords="480,550,879,658" alt="Write" href="#" />
          <area id="zonaTIERRAS_DE_HOET" shape="rect" coords="242,810,641,991" alt="Write" href="#" />
          <area id="zonaCARRERA_BLANCA" shape="rect" coords="642,775,999,966" alt="Write" href="#" />
        </map>
      </div>
    </div>
    <!--- Cuadro de texto donde se muestra la leyenda de los lugares del mapa ---------->
    <div class="row">
      <div id="cuadroDescripcion" class="col">&nbsp;</div>
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
