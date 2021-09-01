<?php
    session_start();
    unset($_SESSION["User"]);
    $_SESSION["loggedIn"]=false;
    header("Location: ../../PA1/HTML/index.php");
?>