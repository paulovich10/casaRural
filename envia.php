<?php

//POST variables
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

//Generación del body, se han sustituido los <br> por \r\n dado que en esta función de email si envias el body como string sin utilizar template, te lo detecta como tal y no como html por lo que printaba los <br>.
$body = "Nombre:".$nombre."\r\n Email: ".$email."\r\n Telefono: ".$telefono."\r\n Numero de adultos: ".$adultos."\r\n Numero de niños: ".$infantes."\r\n Total de personas: ".$total."\r\n Perros: ".$perros."\r\n Fecha de entrada: ".$fechaEntrada."\r\n Fecha de salida: ".$fechaSalida;

//Email que recibira el correo
$recipient = "elcallejondelagata@gmail.com";

//Try catch para el envío del correo

    //Esta es la función mail por defecto de PHP la cual obtiene la configuración del archivo php.ini y smtp.ini del servidor web.
    //Recibe como parametros en ese orden : mail que recibira el mail, asunto, mensaje y FROM (este ultimo se puede establecer como variable en headers) 


if ($_POST["access"] == "irregeheim") {

  mail($recipient, 'Nueva petición presupuesto', $body, "From:" .$email);

} echo 'El mensaje ha sido enviado'; 

 ?>