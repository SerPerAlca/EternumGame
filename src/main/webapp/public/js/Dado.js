
var resultadoDado="";

 $(document).ready(function() {
    var cube = document.querySelector(".cube");
    var rollBtn = document.querySelector(".rollBtn");
    var currentClass = "";


    function rollDice() {

        $(".rollBtn").hide();

        setTimeout(function(){
           dado();
        }, 200);
        setTimeout(function(){
           dado();
        }, 500);
        setTimeout(function(){
            dado();
        }, 800);
        setTimeout(function(){
            dado();
        }, 1100);
        setTimeout(function(){
            dado();
        }, 1400);
        setTimeout(function(){
            dado();
        }, 1700);
        setTimeout(function(){
            dado();
        }, 2000);
        setTimeout(function(){
            dado();
        }, 2300);
        setTimeout(function(){
            dado();
        }, 2600);
        setTimeout(function(){
            dado();
        }, 3000);
        setTimeout(function(){
            dado();
            // Si nos encontramos en el mapa de campaña viajando...
            if (booleanItinerando){
                calcularRecorrido();
            } else {
                ControladorTiradaDadoGeneral(randNum, itinerador);
            }
        }, 3400);

        
        setTimeout( function(){
            $("#resultado").show().fadeIn();
        }, 4000);


    }

    function dado(){
        randNum = getRandomInt(1, 7);
        var showClass = "show-" + randNum;
        if (currentClass) {
            cube.classList.remove(currentClass);
        }

        cube.classList.add(showClass);
        currentClass = showClass;

        var divResultado = document.getElementById("resultado");
        divResultado.innerHTML=`<p style="color:white;"> ${randNum} </p>`;
        resultadoDado = randNum;
        //$(`<p style="color:white; font-weight: bold;"> ${randNum} </p>`).appendTo("#resultado");
    }

    rollBtn.addEventListener("click", rollDice);

 });




     //fUNCION PARA MOSTRAR EL SIDEBAR DEL DADO
     function mostrarDado() {
        // Si hay un evento mostrado en el mapa de campaña borramos el texto
        var eventoMapa = document.getElementById("textoEvento");
        if(eventoMapa){
            $("#textoEvento").text("");
        }
        $(".rollBtn").show();
        document.getElementById("sidebar").style.width = "300px";
        document.getElementById("abrir").style.display = "none";
        document.getElementById("cerrar").style.display = "inline";
     }

     //fUNCION PARA OCULTAR EL SIDEBAR DEL DADO
     function ocultarDado() {
        $("#resultado p").text(" ");
        document.getElementById("sidebar").style.width = "0";
        document.getElementById("abrir").style.display = "inline";
        document.getElementById("cerrar").style.display = "none";
     }