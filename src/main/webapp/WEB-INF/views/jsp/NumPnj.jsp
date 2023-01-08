<%--
  Created by IntelliJ IDEA.
  User: Sergio
  Date: 07/01/2023
  Time: 17:57
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/login.css">
    <!--<script src="js/login.js"></script> -->
    <title>Login Jugadores</title>
</head>
<body>
    <div class="container">
        <c:forEach begin="0" step="1" end="8" var="variable">
            <div class="row">&nbsp;</div>
        </c:forEach>
        <div class="row">
            <div class="col-sm-6">
                <form:form action="/registroPlayer" method="POST" modelAttribute="listaPlayers">
                    <div class="card-body">
                        <div class="form-group">
                            <label><h5>Introduce número de jugadores</h5> </label>
                            <input type="number" id="playersNumbers" name="playersNumbers"
                                    min="03" max="08">
                        </div>
                        <div id="alias" class="form-group">
                            <ol id="listaAlias"></ol>
                        </div>
                    </div>
                    <div class="card-footer">
                        <input type="submit" value="Guardar" class="btn btn-success">
                    </div>
                </form:form>
            </div>
        </div>
    </div>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>
