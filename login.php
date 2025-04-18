<?php
session_start();

$conn = new mysqli("localhost", "root", "12345", "auth_demo");
if ($conn->connect_error) die("Connection failed: " . $conn->connect_error);

$email = htmlspecialchars($_POST['email']);
$password = $_POST['password'];

$stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $user = $result->fetch_assoc();

    if (password_verify($password, $user['password'])) {
        $_SESSION['user'] = $user['name'];
        echo "<script>window.location.href = 'main.html';</script>";
    } else {
        echo "<script>alert('Incorrect password'); window.location.href = 'login.html';</script>";
    }
} else {
    echo "<script>alert('User not found'); window.location.href = 'login.html';</script>";
}
?>
