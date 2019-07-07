<?php
   //Reseteamos variables a 0.
   $nombre = $telefono = $email = $adultos = $infantes = $total = $perros = $mensaje = $fechaEntrada = $fechaSalida = $para = $headers = $msjCorreo = NULL;

   if (isset($_POST['submit'])) {
      //Obtenemos valores input formulario
    $nombre = $_POST["nombre"];
    $telefono = $_POST["telefono"];
    $email = $_POST["email"];
    $adultos = $_POST["adultos"];
    $infantes = $_POST["infantes"];
    $total = $_POST["total"];
    $perros = $_POST["perros"];
    $mensaje = $_POST["mensaje"];
    $fechaEntrada = $_POST["fechaEntrada"];
    $fechaSalida = $_POST["fechaSalida"];
    $para = 'elcallejondelagata@gmail.com';


      //Creamos cabecera.
      $headers = 'From' . " " . $email . "\r\n";
      $headers .= "Content-type: text/html; charset=utf-8";

      //Componemos cuerpo correo.
      $msjCorreo = "Nombre: ".$nombre."<br>Email: ".$email."<br>Telefono: ".$telefono."<br>Numero de adultos: ".$adultos."<br>Numero de niños: ".$infantes."<br>Total de personas: ".$total."<br>Perros: ".$perros."<br>Fecha de entrada: ".$fechaEntrada."<br>Fecha de salida: ".$fechaSalida;


    if (mail($para, $msjCorreo, $headers)) {
         echo "<script language='javascript'>
            alert('Mensaje enviado, muchas gracias.');
            window.history.go(-1);
         </script>";
    } else {
         echo "<script language='javascript'>
            alert('no se pudo enviar el mensaje');
            window.history.go(-1);
         </script>";
    }
  }
?>
