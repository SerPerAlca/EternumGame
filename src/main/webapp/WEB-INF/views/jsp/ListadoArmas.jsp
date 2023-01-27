<%--
  Created by IntelliJ IDEA.
  User: Sergio
  Date: 22/01/2023
  Time: 17:26
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/principal.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="js/FuncionesCompartidas.js"></script>
    <title>Listado de Armas</title>
</head>
<body>
<div class="container">
    <div class="panel panel-default">
        <div class="panel-body">
            <table id="tableEnemigos" class="table">
                <thead class="thead-dark">
                <tr>
                    <th>NOMBRE</th>
                    <th>TIPO DE ARMA</th>
                    <th>EFECTO ADICIONAL</th>
                    <th>ATAQUE FISICO</th>
                    <th>ATAQUE MÁGICO</th>
                    <th>TAMAÑO</th>
                    <th>ALCANCE</th>
                    <th>DESTREZA NECESARIA</th>
                    <th>IMAGEN</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach var="arma" items="${armas}">
                    <tr>
                        <td>${arma.nombre}</td>
                        <td>${arma.tipoArmaDescripcion}</td>
                        <td>${arma.descripcion}</td>
                        <td>${arma.ataqueFisico}</td>
                        <td>${arma.ataqueMagico}</td>
                        <td>${arma.tamanio}</td>
                        <td>${arma.alcance}</td>
                        <td>${arma.destreza}</td>
                        <td><img id="imgEnemigo" src="${pageContext.request.contextPath}${arma.rutaImagen}" /></td>
                    </tr>
                </c:forEach>
                </tbody>
            </table>
        </div>
        <button type="button" id="botonVolver" onclick="volverListados()" class="btn btn-primary">Volver</button>
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>
