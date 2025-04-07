<?php 
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $name =$_POST["name"];
    $email=$_POST["email"];

$conn=new mysqli('localhost','root','','delivery');
if($conn->connect_error)
    {
        die("connection failed:".$conn->connect_error);
    }
else{
        $stmt=$conn->prepare("insert into sign(name,email) values(?,?)");
        $stmt->bind_param("ss",$name,$email);
        $stmt->execute();
        echo "signin successfull";
      
        $stmt->close();
        $conn->close();
    }
}
?>