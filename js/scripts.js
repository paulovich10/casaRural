// inicialización
$(window).on('load', function(){

  $('#overlay').fadeOut(800);
});

//scroll opacity
$(window).on('scroll', function(){

let scrollUsuario = $(window).scrollTop();

let profundidad = $('.descripcion').offset().top - $(window).innerHeight() * .8;

  if (scrollUsuario > profundidad) {

    $('.descripcion').addClass('visible');
  }

});

$(window).on('scroll', function(){

let scrollUsuario = $(window).scrollTop();

let profundidad = $('.lateral').offset().top - $(window).innerHeight() * .8;

  if (scrollUsuario > profundidad) {

    $('.lateral').addClass('visible');
  }

});

$(window).on('scroll', function(){

let scrollUsuario = $(window).scrollTop();

let profundidad = $('.lateral2').offset().top - $(window).innerHeight() * .8;

  if (scrollUsuario > profundidad) {

    $('.lateral2').addClass('visible');
  }

});





//carga de documeto
$(document).ready(function(){



//desciende con barra de menu
$('.desplazar').on('click', function(){

  let id = $(this).data('nivel');     
  let profundidad = $(id).offset().top;

  $('html').animate({
    scrollTop: profundidad
  }, 1000);

});


 //menu responsive
    $('.barras').on('click', muestraMenu);
    $('#cerrar').on('click', muestraMenu);
    $('.desplazar').on('click', muestraMenu);



      function muestraMenu() {
      $('#menu').toggleClass('abierto');
    }

});




//validacion formulario
function validacion() {

  let nombre = document.getElementById("campoNombre").value;
  let telefono = document.getElementById("campoTelefono").value;
  let email = document.getElementById("campoEmail").value;
  let adultos = document.getElementById("numeroAdultos").value;
  let ninhos = document.getElementById("numeroInfantes").value;
  let total = document.getElementById("totalPersonas").value;
  let perros = document.getElementById("numeroPerros").value;
  let mensaje = document.getElementById("campoMensaje").value;
  let politicaDatos = document.getElementById("politica").checked;
  let entrada = document.getElementById("fechaEnt").value;
  let salida = document.getElementById("fechaSal").value;



           if (nombre === null || telefono === null  || email === null || adultos === null || ninhos === null || perros === null || entrada === null || salida === null) {

            msg("No se enviaron los datos. Por favor, inténtelo de nuevo");
            return false;
      
             } else { 

            if (/^\s+$/.test(nombre) ||  nombre.length < 2 || /[0-9]/.test(nombre)) {

                  msg("El campo 'Nombre' no es correcto.", 5000);
                  return false;
            }

            else if (!/^\d{9}$/.test(telefono)) {

                  msg("El campo 'Teléfono' no es correcto. Es obligatorio, y debe  contener 9 dígitos.", 5000);
                  return false;

            }


            else if (!/^\d{2}[./-]\d{2}[./-]\d{2,4}$/.test(entrada) ) {

                  msg("Por favor, pon una fecha de entrada (dd/mm/aaaa).");
                  return false;

            }

            else if (!/^\d{2}[./-]\d{2}[./-]\d{2,4}$/.test(salida) ) {

                  msg("Por favor, pon una fecha de salida (dd/mm/aaaa).");
                  return false;

            }



            else if ( email.length === 0 || email.indexOf("@") < 1 || email.indexOf(".") < 1 ){

                  msg("El campo 'Email' no es correcto. Por favor, revísalo.");
                  return false;

            }

            

            else if (!/^\d{1,2}$/.test(adultos)) {

                  msg("El campo 'número de adultos' es obligatorio.", 5000);
                  return false;

            }

            else if (!/^\d{1,2}$/.test(ninhos)) {

                  msg("El campo 'menores de 7 años' es obligatorio, pon un 0 si no hay niños menores de 7 años.", 5000);
                  return false;

            }


            else if (!/^\d{1,2}$/.test(total)) {

                  msg("El campo 'total personas inc bebés' es obligatorio.", 5000);
                  return false;

            }

            else if (!/^\d{1,2}$/.test(perros)) {

                  msg("El campo 'número de perros' es obligatorio,por favor pon un 0 si no os acompañan perros.", 5000);
                  return false;

            }

            else if ( !politicaDatos ) {

                  msg("Por favor, acepta la política de datos.", 5000);
                  return false;

            }  else {

                  return true;
            }

          }
          
      }




function msg(par1, par2 = 2000) {

      document.getElementById('mensaje').innerHTML = par1;

      document.getElementById('alerta').classList.add('visible');

      setTimeout( function(){
            document.getElementById('alerta').classList.remove('visible');
      }, par2);

}




var array = ["2018-12-12","2018-12-13","2018-12-25", "2019-02-25"]

$('.fecha').datepicker({
    format: "dd/mm/yyyy",
    changeMonth: true,
    changeYear: true,
    inline: true,
    showOtherMonths: true,
    beforeShowDay: function(date){
        var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
        return [ array.indexOf(string) == -1 ]
    }



});








