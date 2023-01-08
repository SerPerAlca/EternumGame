$(document).ready(function() {

    $("#playersNumbers").on('input', function(){
        var number = document.getElementById("playersNumbers").value;
       $("#listaAlias li").remove();
       for( var i=0; i < number; i++){
           $(`<li>Introduce Nombre/Alias: <input type="text" id="name" name="name" required
            minlength="2" maxlength="10" size="12"></li>`)
               .appendTo("#listaAlias");
       }
    })


});