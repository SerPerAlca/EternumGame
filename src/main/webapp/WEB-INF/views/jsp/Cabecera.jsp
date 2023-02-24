<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>

<head>


<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>


    <script src="js/Despertar.js"></script>
    <script src="js/Llamadas.js"></script>
    <script src="js/TratamientoAudio.js"></script>
    <script src="js/FuncionesCompartidas.js"></script>
    <script src="js/Cabecera.js"></script>
    <script src="js/Itineracion.js"></script>


    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/cabecera.css">

</head>
<body>

       
                <div class="container">
                    <div id="rowUnoCabecera" class="row mt-12">
                        <div id="botonesCabecera" class="col-md-6">
                            <button type="button" class="btn btn-secondary" value="itinerar" id="btn-itinerar">
                                <span>Siguiente Capítulo &nbsp; &nbsp;</span>
                            </button>
                            &nbsp; &nbsp;
                            <!--<button type="button" class="btn btn-secondary" value="mostrarMapaNacional" id="btn-mostrarMapa">Mostrar Mapa</button> -->
                            <a href="javascript:abrirMapaCampania()">Viaje Campaña</a>
                            &nbsp;&nbsp;
                            <button type="button" class="btn btn-success" onclick="limpiarCache()" id="btn_cache">
                                Limpiar Caché
                            </button>
                        </div>

                        <div id="capiActual" class="col-md-4"></div>
                    </div> 
                    <div id="rowDosCabecera" class="row"> 
                        <div id="descripcionItineracion" class="col">
                            <h1>Resultado Necesario:</h1>
                            <p></p>
                        </div> 
                        <div id="progreso" class="col">
                            <div id="barraProgreso"></div>
                        </div>                                         
                        <div id="divMapa" class="col">
                            <img id="divImagen" usemap="#mapaImperio" onclick="coordenadas(event)" src="images/Mapas/Imperio.jpg" />
                            <map name="mapaImperio">
                                <area id="areaImperium" shape="rect" coords="447,350,570,430" alt="Write" href="#" /> 
                            </map>
                        </div>                   
                    </div>                  
                </div>

	 <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
</body>
</html>