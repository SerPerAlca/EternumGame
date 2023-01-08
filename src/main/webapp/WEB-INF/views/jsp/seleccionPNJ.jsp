<%--
  Created by IntelliJ IDEA.
  User: Sergio
  Date: 02/01/2023
  Time: 1:41
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<html>
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/principal.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="js/seleccionPNJ.js"></script>
    <script src="js/Servicios/ServiciosGenerales.js"></script>
    <script src="js/TratamientoAudio.js"></script>

    <title>Seleccion de Personaje</title>
</head>
<body>
    <div class="container-fluid">
        <div class="row cabecera">
            <div id="playerActual"><h2></h2></div>
        </div>
        <div class="row cuerpo">
            <div id="formPNJ" class="col-md-8">
                <form:form id="seleccionPnj" action="/registroHeroe" method="POST">
                    <input type="hidden" id="numeroJugadores" value=<%= session.getAttribute("numeroJugadores") %>>
                    <input type="hidden" id="jugadorActual" value=<%= session.getAttribute("jugadorActual") %>>
                    <input type="hidden" id="heroesElegidos" value="">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <c:forEach var="heroe" items="${heroes}" varStatus="loop">
                                <div id="${heroe}Carousel" class="carousel-item
                                    <c:if test="${loop.index == 0}">
                                        active
                                    </c:if>
                                ">
                                    <img src="images/Heroes/${heroe}Fondo.png" id="imagenCarousel" class="d-block w-100" alt="...">
                                </div>
                            </c:forEach>
                        </div>
                        <a href="#carouselExampleIndicators" class="carousel-control-prev" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Anterior</span>
                        </a>
                        <a href="#carouselExampleIndicators" class="carousel-control-next" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Siguiente</span>
                        </a>
                    </div>
                    <div class="row">
                        <div id="aliasPlayer" class="col-md-12">
                            <p>
                                <label>Introduce tu nombre / alias: </label>
                                <input type="text" id="namePlayer" name="namePlayer" required
                                       minlength="2" maxlength="10" size="12">
                                <button type="button" id="botonSubmit" class="btn btn-warning">Guardar</button>
                            </p>
                        </div>
                    </div>
                </form:form>
            </div>
            <div id="descripcionCarousel" class="col-md-4">
                <div id="DescripcionPnj">
                    <h2 id="nombrePnj"></h2>
                    <h4 id="sobreNombre"></h4>
                    <h6 id="raza"></h6>
                    <div id="descripcionHeroe"></div>
                </div>
            </div>
        </div>
    </div>

<!--<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

</body>
</html>
