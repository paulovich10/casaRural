<?php

$nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];
    $adultos = $_POST['adultos'];
    $infantes = $_POST['infantes'];
    $total = $_POST['total'];
    $perros = $_POST['perros'];
    $mensaje = $_POST['mensaje'];
    $fechaEntrada = $_POST['fechaEntrada'];
    $fechaSalida = $_POST['fechaSalida'];

$body = "Nombre:".$nombre."<br>Email: ".$email."<br>Telefono: ".$telefono."<br>Numero de adultos: ".$adultos."<br>Numero de niños: ".$infantes."<br>Total de personas: ".$total."<br>Perros: ".$perros."<br>Fecha de entrada: ".$fechaEntrada."<br>Fecha de salida: ".$fechaSalida;

