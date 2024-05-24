<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "sportconnect";
$port = 3307;

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
echo "Conexión exitosa";
?>