<%--
  Created by IntelliJ IDEA.
  User: Sergio
  Date: 04/02/2023
  Time: 11:07
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
    <title>Tienda de Armaduras</title>
</head>
<body>
<div class="container">
    <form action="/comprar" method="POST" id="formularioArmaduras">
        <div class ="row justify-content-between">
            <h1><%= session.getAttribute("nombreTienda") %></h1>
            <h3><%= session.getAttribute("esloganTienda") %></h3>
        </div>
        <div class="row justify-content-between" >
            <div class="col-3">
                <img id="Vendedor" src="${pageContext.request.contextPath}/images/maestroArmero.png" />
            </div>
            <div class="col-4">
                <table id="tableShop" class="table">
                    <thead class="thead-dark">
                    <tr>
                        <th></th>
                        <th></th>
                        <th>ARMADURA</th>
                        <th>TIPO</th>
                        <th>DESCRIPCIÓN</th>
                        <th>TAMAÑO</th>
                        <th>DEF. FÍSICA</th>
                        <th>DEF. MÁGICA</th>
                        <th>DESTREZA</th>
                        <th>PRECIO</th>
                    </tr>
                    </thead>
                    <tbody>
                    <c:forEach var="armadura" items="${venta}" varStatus="idRow">
                        <tr id="venta${idRow.index}">
                            <td>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="ventas" id="radio${idRow.index}" value="${armadura.idArmadura}">
                                </div>
                            </td>
                            <td><img id="imgElemento" src="${pageContext.request.contextPath}${armadura.rutaImagen}" /></td>
                            <td>${armadura.nombre}</td>
                            <td>${armadura.tipoArmaduraDescripcion}</td>
                            <td>${armadura.descripcion}</td>
                            <td>${armadura.tamanio}</td>
                            <td>${armadura.defensaFisica}</td>
                            <td>${armadura.defensaMagica}</td>
                            <td>${armadura.destreza}</td>
                            <td id="precio${idRow.index}">${armadura.precioBase}</td>
                            <input type="hidden" id="idVenta${idRow.index}" value="${armadura.idArmadura}"/>
                            <input type="hidden" id="tipoObjeto${idRow.index}" value="${armadura.tipoObjetoVenta}" />
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
