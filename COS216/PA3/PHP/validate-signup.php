<?php
    require_once("config.php");
    $db=Database_Connection::getInstance();
    session_start();

    function generateKeyID(){
        $string="ABCDEFGHIJKLMNOPQRSTUVWXYY0123456789";
        $EmpID="";

        for ($i=0;$i<12;$i++)
            $EmpID=$EmpID . $string[rand(0,strlen($string)-1)];
        return $EmpID;
    }

    function checkDuplicate($c){
        $EmpID=generateKeyID();
        $query="SELECT $EmpID FROM user WHERE API_key = '$EmpID'";
        $result=$c->query($query);

        if ($result->num_rows>0)
            checkDuplicate($c);
        else
            return $EmpID;
    }

    if ($_SERVER["REQUEST_METHOD"]=="POST") {
        $email=$_POST["email"];
        $name=$_POST["name"];
        $surname=$_POST["surname"];
        $password=password_hash($_POST["psw"],PASSWORD_DEFAULT);

        $query="SELECT email FROM user WHERE email = 'email'";
        $conn=$db->getConnection();
        $result=$db->getConnection()->query($query);

        if ($result->num_rows>0)
            header('location: ../../PA1/HTML/index.php');
        else {
            $query = "SELECT email FROM user WHERE email = '$email'";
            $result = $conn->query($query);

            if ($result->num_rows <= 0)
                header('signup.php');

            $keyID = checkDuplicate($db->getConnection());


            $stmt = $conn->prepare("INSERT INTO user(uname, usurname, email, password, API_key) VALUES (?,?,?,?,?)");

            mysqli_stmt_bind_param($stmt, "sssss",$name,$surname,$email, $password, $keyID);

            mysqli_stmt_execute($stmt);

            if ($result) {
                $_SESSION["name"] = $name;
                $_SESSION["staffloggedin"] = true;
                header("location: ../../PA1/HTML/index.php");
            } else
                header('location: ../../PA1/HTML/index.php');
        }
}
?>
