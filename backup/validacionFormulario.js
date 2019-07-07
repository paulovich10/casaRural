//validacion formulario
function validacion() {

  let nombre = document.getElementById("campoNombre").value;
  let telefono = document.getElementById("campoTelefono").value;
  let email = document.getElementById("campoEmail").value;
  let adultos = document.getElementById("numeroAdultos").value;
  let ninhos = document.getElementById("numeroInfantes").value;
  let perros = document.getElementById("numeroPerros").value;
  let mensaje = document.getElementById("campoMensaje").value;
  let politicaDatos = document.getElementById("politica").checked;
  let entrada = document.getElementById("fechaEnt").value;
  let salida = document.getElementById("fechaSal").value;

  if (nombre === null || telefono === null  ||  email === null || adultos === null || ninhos === null || perros === null || mensaje === null || entrada === null || salida === null) {

            msg("No se enviaron los datos. Por favor, inténtelo de nuevo");
            return false;

      } else {

            if (/^\s+$/.test(nombre) ||  nombre.length < 2 || /[0-9]/.test(nombre)) {

                  msg("El campo 'Nombre' no es correcto. Es obligatorio, de mínimo 2 letras y no puede contener números.", 5000);
                  return false;
            }

            else if (!/^\d{9}$/.test(telefono)) {

                  msg("El campo 'Teléfono' no es correcto. Es obligatorio, y el formato debe ser 000000000", 5000);
                  return false;

            }


            else if (!/^\d{2}[./-]\d{2}[./-]\d{2,4}$/.test(entrada) ) {

                  msg("La fecha no es correcta");
                  return false;

            }

            else if (!/^\d{2}[./-]\d{2}[./-]\d{2,4}$/.test(salida) ) {

                  msg("La fecha no es correcta");
                  return false;

            }



            else if ( email.length === 0 || email.indexOf("@") < 1 || email.indexOf(".") < 1 ){

                  msg("El campo 'Email' no es correcto. Es obligatorio, y debes indicar una '@' y un '.'");
                  return false;

            }

            

            else if (!/^\d{1,2}$/.test(adultos)) {

                  msg("El campo 'número de Adultos' es obligatorio", 5000);
                  return false;

            }

            else if (!/^\d{0,2}$/.test(ninhos)) {

                  msg("El campo 'número de niños' es obligatorio", 5000);
                  return false;

            }

            else if (!/^\d{0,2}$/.test(perros)) {

                  msg("El campo 'número de niños' es obligatorio", 5000);
                  return false;

            }

            else if ( !politicaDatos ) {

                  msg("Debes aceptar la política de datos");
                  return false;

            }
            
            else {
                  return true;
            }
      }
}
