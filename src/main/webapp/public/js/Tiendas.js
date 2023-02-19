
function abrirtienda(idTienda){
    var ubicacion= readCookie("ubicacion");
  //  var tipoTienda = idTienda.slice(7,idTienda.length);
  //  window.open("/mostrarTienda/"+tipoTienda);
    window.open("/mostrarTienda/"+idTienda+ "/" + ubicacion);
}

// VISTAS DE TIENDAS *********************************************//
$(document).ready(function() {
        $("#btn-salirTienda").show();
        $('form').submit(function(e) {
            e.preventDefault();
            // o return false;
        });
        var precio = 0;
        var id = 0;
        var tipoObject = "";
        $('body').on('click', '#btn-comprar', function() {

            const formulario = document.forms[0];

            if(comprobarSiSeleccionObjeto(formulario)){
                if (formulario.id == "formularioItems") {
                    precio = calcularPrecioItem(formulario, precio);
                    comprarItem(precio);
                } else {
                    var cantidadInputs = calcularCantidadInputs(formulario);
                    precio = calcularPrecioArm(cantidadInputs);
                    id = obtenerId(cantidadInputs);
                    tipoObject = obtenerTipoVenta();
                    comprarArm(precio, id, tipoObject);
                }
            } else {
                alert("Debes seleccionar un objeto antes de comprar");
            }
        });

        $('body').on('click', '#btn-salirTienda', function() {
            window.close();
        });

});

function comprobarSiSeleccionObjeto(formulario){
    const elementos = formulario.elements;
    for(element of elementos){
        //Comprobamos si hay input number y si alguno se ha utilizado
        if(element.type ==="number" && element.value != ""){
            return true;
        }
    }
    for(element of elementos){
        if(element.type ==="radio" && element.checked){
            return true;
        }
    }
    return false;
}

function calcularPrecioItem(formulario, precio){
    const elementos = formulario.elements;
    var cantidadInputs= 0;
    for(element of elementos){
        //Obtenemos el numero de inputs number
        if(element.type ==="number"){
            cantidadInputs++;
        }
    }
    for(var i = 0; i<cantidadInputs; i++){
        precio += document.getElementById("precio"+i).innerHTML
            * document.getElementById("cantidad"+i).value;
    }
    return precio;
}

//Calculo la cantidad de radio buttons
function calcularCantidadInputs(formulario){
    const elementos = formulario.elements;
    var cantidadInputs= 0;
    for(element of elementos){
        //Obtenemos el numero de inputs number
        if(element.type ==="radio"){
            cantidadInputs++;
        }
    }
    return cantidadInputs;
}
// Obtenemos el precio del arma / armadura seleccionada
function calcularPrecioArm(cantidadInputs){

    for(var i=0; i < cantidadInputs; i++){
        if(document.getElementById("radio"+i).checked){
            var price = document.getElementById("precio"+i).innerHTML;
        }
    }
    return price;
}

// Obtenemos el ID del arma / armadura seleccionado
function obtenerId(cantidadInputs){

    for(var i=0; i < cantidadInputs; i++){
        if(document.getElementById("radio"+i).checked){
            var idArm = document.getElementById("radio"+i).value;
        }
    }
    return idArm;
}

function obtenerTipoVenta(){
    var tipo = document.getElementById("tipoObjeto"+1).value;
    return tipo;
}



//Funcion AJAX para comprar Items
function comprarItem(precio){
    var data = { precio: precio}
    var requestItem = $.ajax({
        url: "/comprarItem",
        type: "POST",
        data: data,
        cache: false,
        timeout: 600000,
        encode: true
    });

    requestItem.fail(function (e, textStatus){
        alert("Compra Fallida: " + textStatus);
    });

    requestItem.done(function(data){
        alert(data);
        location.reload();

    });
}

// Funcion AJAX para comprar Armas o Armaduras
function comprarArm(precio, id, tipo) {
    var data = {
        precio: precio,
        id: id,
        tipo: tipo
    }
    var requestArm = $.ajax({
        url: "/comprarArm",
        type: "POST",
        data: data,
        cache: false,
        timeout: 600000,
        encode: true
    });

    requestArm.fail(function (e, textStatus){
        alert("Compra Fallida: " + textStatus);
    });

    requestArm.done(function(data){
        alert(data);
        location.reload();
    });

}