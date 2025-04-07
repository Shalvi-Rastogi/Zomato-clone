<?php 

session_start();
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $name =$_POST["name"];
    $password=$_POST["password"];

$conn=new mysqli('localhost','root','','delivery');
if($conn->connect_error)
    {
        die("connection failed:".$conn->connect_error);
    }
else{
        $stmt=$conn->prepare("select password from users where name=?");
        $stmt->bind_param("s",$name);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            echo "LOGIN SUCCESFULL";
            $_SESSION['username'] = $name;
            echo "<script>alert('Login Successful!'); window.location.href = 'db2.php';</script>";
        } 
        else{
            // Login failed
            echo "<script>alert('Wrong name or password! Please try again.'); window.location.href = 'login.html';</script>";
        }
        $stmt->close();
        $conn->close();
    }
}
?>