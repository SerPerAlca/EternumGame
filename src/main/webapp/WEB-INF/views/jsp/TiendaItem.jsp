<%--
  Created by IntelliJ IDEA.
  User: Sergio
  Date: 30/01/2023
  Time: 15:13
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
    <title>Tienda de Items</title>
</head>
<body>
        <div class="container">
            <form action="/comprar" method="POST" id="formularioItems">
                <div class ="row justify-content-between">
                    <h1><%= session.getAttribute("nombreTienda") %></h1>
                    <h3><%= session.getAttribute("esloganTienda") %></h3>
                </div>
                <div class="row justify-content-between" >
                    <div class="col-3">
                        <img id="Vendedor" src="${pageContext.request.contextPath}/images/VendedorItems.png" />
                    </div>
                    <div class="col-4">
                        <table id="tableShop" class="table">
                            <thead class="thead-dark">
                                <tr>
                                    <th>ITEM</th>
                                    <th>DESCRIPCIÓN</th>
                                    <th>TAMAÑO</th>
                                    <th>PRECIO</th>
                                    <th>&nbsp;</th>
                                    <th>CANTIDAD</th>
                                </tr>
                            </thead>
                            <tbody>
                            <c:forEach var="item" items="${venta}" varStatus="idRow">
                                <tr id="venta${idRow.index}">
                                    <td>${item.nombre}</td>
                                    <td>${item.descripcion}</td>
                                    <td>${item.tamanio}</td>
                                    <td id="precio${idRow.index}">${item.precioBase}</td>
                                    <td><img id="imgElemento" src="${pageContext.request.contextPath}${item.rutaImagen}" /></td>
                                    <td>
                                        <input type="number" class="number"  name="objects" id="cantidad${idRow.index}"
                                                   min="0" max="100">
                                    </td>
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
