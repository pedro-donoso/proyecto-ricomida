$(function () {
    $('[data-toggle="tooltip"]').tooltip()

})

// enviar correo
$(document).ready(function () {
    $("#enviarCorreo").click(function () {
        alert('El correo fue enviado correctamente...');
    });
});

// cambio de color
$(document).ready(function () {
    $(".cambio").dblclick(function () {
        $(this).css({
            "color": "red"
        });
    });
});

// remover clases
$(".remover").on("click", function () {
    $(".removido").toggle();
});