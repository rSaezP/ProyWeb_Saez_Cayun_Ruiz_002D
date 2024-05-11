$(document).ready(function() {
    $('#Formulario').submit(function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente


        // Realizar validaciones
        var expr = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

       
        var nombre = $("#nombre").val();
        var apellido = $("#apellido").val();
    
        var celular = $("#celular").val();
    
        var email = $("#email").val();
        var interes = $("#intereses").val();
       
         //validar los campos

        if (nombre == "") {
            $("#mensaje2").fadeIn();
            return false;
        } else {
            $("#mensaje2").fadeOut();
        }

        if (apellido == "") {
            $("#mensaje3").fadeIn();
            return false;
        } else {
            $("#mensaje3").fadeOut();
        }

       

        if (celular == "") {
            $("#mensaje5").fadeIn();
            return false;
        } else {
            $("#mensaje5").fadeOut();
        }


        if (email == "" || !expr.test(email)) {
            $("#mensaje7").fadeIn();
            return false;
        } else {
            $("#mensaje7").fadeOut();
        }

        if(intereses ==""){
            alert("Por favor, selecciona una opción de interés.");
            return false;
        }
        



        // Si todos los campos son válidos, enviar el formulario
        return true;
    });
});
