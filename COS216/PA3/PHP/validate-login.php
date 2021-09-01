<?php
require_once("config.php");
$db = Database_Connection::getInstance();
session_start();

if ($_SERVER["REQUEST_METHOD"]=="POST"){
    $email=$_POST["email"];
    $password=$_POST["psw"];

    $sql="SELECT email, password, uname, API_key FROM user WHERE email = '$email'";
    $result=$db->getConnection()->query($sql);

    if ($result->num_rows>0) {
        while ($row=$result->fetch_assoc()) {
            if (password_verify($password,$row["password"])) {
                $_SESSION["User"]=$row["uname"];
                $_SESSION["loggedIn"]=true;


                header('location: ../../PA1/HTML/index.php');

                echo '<div id="dom-target" style="display: none;">';
                echo htmlspecialchars($row[API_key]);
                echo '</div>';
            }
            else
                $message = "Invalid Username or Password!";
        }
    }
    else
        header("location: login.php");
}
?>


