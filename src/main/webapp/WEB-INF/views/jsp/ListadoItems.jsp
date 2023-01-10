<%--
  Created by IntelliJ IDEA.
  User: Sergio
  Date: 08/01/2023
  Time: 18:42
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
    <title>Listado de Items</title>
</head>
<body>
    <div class="container">
        <div class="panel panel-default">
            <div class="panel-body">
                <table id="tableEnemigos" class="table">
                    <thead class="thead-dark">
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Imagen</th>
                    </tr>
                    </thead>
                    <tbody>
                    <c:forEach var="item" items="${items}">
                        <tr>
                            <td>${item.nombreItem}</td>
                            <td>${item.descripcionItem}</td>
                            <td><img id="imgItem" src="${pageContext.request.contextPath}${item.rutaImagen}" /></td>
                        </tr>
                    </c:forEach>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>
