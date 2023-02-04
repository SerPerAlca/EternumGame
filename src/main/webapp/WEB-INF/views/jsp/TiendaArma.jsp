<%--
  Created by IntelliJ IDEA.
  User: Sergio
  Date: 02/02/2023
  Time: 22:07
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/principal.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/tiendas.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="${pageContext.request.contextPath}/js/FuncionesCompartidas.js"></script>
    <script src="${pageContext.request.contextPath}/js/Tiendas.js"></script>
    <title>Tienda de Armas</title>
</head>
<body>
<div class="container">
    <form action="/comprar" method="POST" id="formularioArmas">
        <div class ="row justify-content-between">
            <h1><%= session.getAttribute("nombreTienda") %></h1>
            <h3><%= session.getAttribute("esloganTienda") %></h3>
        </div>
        <div class="row justify-content-between" >
            <div class="col-3">
                <img id="Vendedor" src="${pageContext.request.contextPath}/images/Herrero.png" />
            </div>
            <div class="col-4">
                <table id="tableShop" class="table">
                    <thead class="thead-dark">
                    <tr>
                        <th></th>
                        <th></th>
                        <th>ARMA</th>
                        <th>TIPO</th>
                        <th>DESCRIPCIÓN</th>
                        <th>TAMAÑO</th>
                        <th>ATAQ. FÍSICO</th>
                        <th>ATAQ. MÁGICO</th>
                        <th>ALCANCE</th>
                        <th>DESTREZA</th>
                        <th>PRECIO</th>
                    </tr>
                    </thead>
                    <tbody>
                    <c:forEach var="arma" items="${venta}" varStatus="idRow">
                        <tr id="venta${idRow.index}">
                            <td>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="ventas" id="radio${idRow.index}" value="${arma.idArma}">
                                </div>
                            </td>
                            <td><img id="imgElemento" src="${pageContext.request.contextPath}${arma.rutaImagen}" /></td>
                            <td>${arma.nombre}</td>
                            <td>${arma.tipoArmaDescripcion}</td>
                            <td>${arma.descripcion}</td>
                            <td>${arma.tamanio}</td>
                            <td>${arma.ataqueFisico}</td>
                            <td>${arma.ataqueMagico}</td>
                            <td>${arma.alcance}</td>
                            <td>${arma.destreza}</td>
                            <td id="precio${idRow.index}">${arma.precio}</td>
                            <input type="hidden" id="idVenta${idRow.index}" value="${arma.idArma}"/>
                            <input type="hidden" id="tipoObjeto${idRow.index}" value="${arma.tipoObjetoVenta}" />
                        </tr>
                    </c:forEach>
                    </tbody>
                </table>
                <input type="submit" class="btn btn-success" id="btn-comprar" value="Comprar"/>
                <input type="submit" class="btn btn-primary" id="btn-salirTienda" value="Salir"/>
            </div>
        </div>
    </form>
</div>
</body>
</html>
