$(document).ready(function() {



    var sumar = function() {
        var numero1 = parseInt($("#numero1").val());
        var numero2 = parseInt($("#numero2").val());

        $("#resultado").val(numero1 + numero2);

    }
    $("#btnoperacion1").click(sumar)


    var restar = function() {
        var numero1 = $("#numero1").val();
        var numero2 = $("#numero2").val();
        $("#resultado").val(numero1 - numero2);
    }
    $("#btnoperacion2").click(restar)

    var multiplicar = function() {
        var numero1 = $("#numero1").val();
        var numero2 = $("#numero2").val();
        $("#resultado").val(numero1 * numero2);
    }
    $("#btnoperacion3").click(multiplicar)


    var dividir = function() {
        var numero1 = $("#numero1").val();
        var numero2 = $("#numero2").val();
        $("#resultado").val(numero1 / numero2);
    }
    $("#btnoperacion4").click(dividir)

})

// var sumar = function() {
//     var numero1 = parseInt(document.getElementById("numero1").value)
//     var numero2 = parseInt(document.getElementById("numero2").value)
//     total = numero1 + numero2;
//     parseInt(document.getElementById("resultado").value = total);


// }
// sumar()


// var restar = function() {
//     var numero1 = document.getElementById("numero1").value;
//     var numero2 = document.getElementById("numero2").value;
//     total = numero1 - numero2;
//     document.getElementById("resultado").value = total;


// }
// restar()


// var multiplicar = function() {
//     var numero1 = document.getElementById("numero1").value
//     var numero2 = document.getElementById("numero2").value
//     total = numero1 * numero2;
//     document.getElementById("resultado").value = total;


// }

// multiplicar()

// var dividir = function() {
//     var numero1 = document.getElementById("numero1").value
//     var numero2 = document.getElementById("numero2").value
//     total = numero1 / numero2;
//     document.getElementById("resultado").value = total;

// }
// dividir()