<?php
$name = $_POST['name'];
$num = $_POST['num'];
$sub = $_POST['sub'];
$msg = $_POST['msg'];

// Database connection
$conn = new mysqli('localhost', 'root', '', 'projectly');
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
} else {
    $stmt = $conn->prepare("INSERT INTO formdata (name, num, pro, msg) VALUES (?, ?, ?, ?)");
    if (!$stmt) {
        die('Error preparing statement: ' . $conn->error);
    }

    $stmt->bind_param("ssss", $name, $num, $sub, $msg);
    $result = $stmt->execute();
    if (!$result) {
        die('Error executing statement: ' . $stmt->error);
    }

    echo '<script>alert("Data Sent Successfully")</script>';
    // Redirect to another page after successful data insertion
    header("Location: index.html");

    $stmt->close();
    $conn->close();
}
?>
