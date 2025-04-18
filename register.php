<?php
session_start();


$conn = new mysqli("localhost", "root", "12345", "auth_demo");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$username = htmlspecialchars($_POST['username']);
$email = htmlspecialchars($_POST['email']);
$password = $_POST['password'];

echo "Username: $username, Email: $email<br>";  


$check = $conn->prepare("SELECT * FROM users WHERE email = ?");
$check->bind_param("s", $email);
$check->execute();
$result = $check->get_result();

if ($result->num_rows > 0) {
    echo "<script>alert('User already exists! Please login.'); window.location.href = 'login.html';</script>";
} else {
  
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

    $stmt = $conn->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $username, $email, $hashedPassword);

    if ($stmt->execute()) {
        $_SESSION['user'] = $username;
        echo "<script>window.location.href = 'main.html';</script>"; 
    } else {
        echo "Registration failed. Please try again.";
    }
}
?>
