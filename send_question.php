<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $pregunta = $_POST['pregunta'];

    $sql = "INSERT INTO preguntas (nombre, email, pregunta) VALUES ('$nombre', '$email', '$pregunta')";

    if ($conn->query($sql) === TRUE) {
        echo "Pregunta enviada correctamente";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>