<?php
//Database configuration
$servername = "localhost";
$username = "root"; // Default xampp username for mysql
$password = "";   // Default xampp password for mysql (empty by default)
$dbname = "testdb";  // the name of your database

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
// Inserting data into the users table 
$name = "Abhishek Sharma";
$email = "abhi@gmail.com";

$sql = "INSERT INTO users (name, email) VALUES ('$name', '$email')";
if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

// Query to select data from the users table
$sql = "SELECT id, name, email FROM users";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
// Output data for each row
while($row = $result->fetch_assoc()) {
echo "id:" . $row["id"]." - Name" . $row["name"]. " - Email" . $row["email"]. "<br>";
}
} else {
echo "O results";
}
$conn->close();

// echo " Connected successfully";
?>