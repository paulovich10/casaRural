
<?php

if (isset($_POST['enviar'])) {

$nombre = $_POST('nombre');
    $telefono = $_POST('telefono');
    $email = $_POST('email');
    $adultos = $_POST('adultos');
    $infantes = $_POST('infantes');
    $total= $_POST('total');
    $perros= $_POST('perros');
    $mensaje= $_POST('mensaje');
    $fechaEntrada= $_POST('fechaEntrada');
    $fechaSalida= $_POST('fechaSalida');




// Datos del email
$para = 'elcallejondelagata@gmail.com';
$titulo = 'Solicitud de información';
$header = 'From: ' . $email;
$msjCorreo = "Nombre:".$nombre."\n".
                    "Email: ".$email."\n".
                    "Telefono: ".$telefono."\n".
                    "Numero de adultos: ".$adultos."\n".
                    "Numero de niños: ".$infantes."\n".
                    "Total de personas: ".$total."\n".
                    "Perros: ".$perros."\n".
                    "Fecha de entrada: ".$fechaEntrada."\n".
                    "Fecha de salida: ".$fechaSalida."\n";
if (mail($para, $titulo, $msjCorreo, $header)) {

    echo "
    alert('Mensaje enviado, muchas gracias por contactar con nosotros.');
    ";
    } else {
        echo 'Falló el envio';
    }
}

?>