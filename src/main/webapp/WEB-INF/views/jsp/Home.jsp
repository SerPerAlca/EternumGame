<%--
  Created by IntelliJ IDEA.
  User: Sergio
  Date: 05/01/2023
  Time: 22:39
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/bootstrapHome.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/home.css">
    <title>Home</title>
</head>
<body>
    <!-- header section -->
    <header class="header_section">
        <div class="container">
            <nav class="navbar navbar-expand-lg custom_nav-container ">
                <a class="navbar-brand" href="#">
                    <div class="logo_box">
                        <img src="../images/logoEternum.png" alt="" />
                    </div>
                </a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mr-2">
                        <li class="nav-item  active">
                            <a class="nav-link" href="/numPnj">Empezar </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Introducción <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/historia">Historia</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="blog.html">Listado de elementos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html">Kit de juego</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sobre Eternum </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    <!-- end header section -->

    <!-- slider section -->
    <section class=" slider_section">
        <div id="carouselExampleIndicators" class="carousel slide vert" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="slider_box">
                        <div class="slider-detail">
                            <div class="slider_detail-heading">
                                <h1>
                                    E T E R N U M
                                </h1>
                            </div>
                            <div class="slider_detail-text">
                                <p>
                                    [...] El Creador hizo a los Elfos. Los más puros de los seres que habitaban GAIA. Amantes de la naturaleza, el mar y las estrellas.
                                    Conocedores de la corriente vital que recorre las raíces del mundo y constituye el ciclo de la vida y la muerte.
                                    Fueron los primeros en navegar los océanos, habitar los bosques y descubrir el poder de la magia. Pero, también fueron los primeros en
                                    corromperse y dejarse invadir por la oscuridad [...]
                                </p>
                                <p>
                                    [...] cogió una roca con sus manos. Un pedazo perfecto compuesto de minerales como la obsidiana, la riolita y el mármol y le insufló un soplo
                                    de vida desde sus adentros, para crear la raza mas dura y persistente de todas, el Enano. Aquella que habitaría el interior de la tierra y
                                    adoraría la magnificencia de las montañas que se levantan desafiando al cielo. Pero, la codicia y la avaricia puede romper el corazón de la roca más dura [...]
                                </p>
                                <p>
                                    [...]Tanto se maravilló de los animales, de la gracilidad de los felinos, del amor de los mamíferos por sus descendientes, de la búsqueda de
                                    la seguridad y confraternidad de la manada... que les dotó de la misma inteligencia que a otros seres; y éstos, se desarrollaron y construyeron
                                    maravillas, templos y ciudades al igual que las otras razas inteligentes que habitaban GAIA. Pero, al igual que heredaron las virtudes,
                                    heredaron los pecados, y se auto-condenaron a la decadencia [...]
                                </p>
                                <p>
                                    [...] Cansado de la perdida de virtud, de la corrupción, de la malignidad y el orgullo, de la avaricia y el deshonor... se dio una última oportunidad antes de abandonar este mundo.
                                    Observó, que el tiempo corrompía los corazones y mentes, y oxidaba la pureza de las otras razas. Por lo que decidió crear a un ser con menos esperanza
                                    de vida, y con ello, de corromperse. Y así, cogiendo un trozo de tierra, unas gotas de agua salada, y una bocanada de aire puro hizo nacer al ser humano.
                                    Y le dotó de la misma libertad y albedrío que a las otras razas, esperando que éste fuera el verdadero heredero de su legado, y, depositando su más fe
                                    ciega en él, abandonó el mundo para siempre...
                                </p>
                                <p> <cite>El libro de GAIA.</cite></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>
