<%--
  Created by IntelliJ IDEA.
  User: Sergio
  Date: 08/01/2023
  Time: 16:39
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/principal.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="js/FuncionesCompartidas.js"></script>
    <title>Listado de elementos</title>
</head>
<body>
    <div class="container-fluid">
        <div class="row">&nbsp; </div>
        <div class="row">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="images/Armadura/armaduraSaqNorsca.png" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Armaduras</h5>
                    <p class="card-text">Si quieres sobrevivir a un mordisco de Hipogrifo, más te vale llevar una de estas</p>
                    <a href="/listarArmadura" class="btn btn-primary">Ver Armaduras</a>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="images/Arma/yoSoyGroot.png" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Armas</h5>
                    <p class="card-text">Lista de Armas de Eternum. Valen para defenderte o defender tu honor a partes iguales</p>
                    <a href="/listarArma" class="btn btn-primary">Ver Armas</a>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="images/Unidades/monstruos/Androgenes.png" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Enemigos</h5>
                    <p class="card-text">Lista de NPCs, enemigos, y demás hijos de puta que habitan el mundo de Eternum</p>
                    <a href="/listarEnemigos" class="btn btn-primary">Ver Enemigos</a>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="images/Item/pCurativa.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Items</h5>
                    <p class="card-text">Lista de Items consumibles de Eternum. Merece la pena llevarlos en tu mochila</p>
                    <a href="/listarItems" class="btn btn-primary">Ver Items</a>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <button type="button" id="botonVolverHome" onclick="volverHome()" class="btn btn-primary">Volver</button>
    </div>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>
