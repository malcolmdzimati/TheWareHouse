<link rel="stylesheet" href="../../PA1/CSS/signin.css?v=<?php echo time(); ?>">
<script src="../../PA2/javascript/sign.js?v=<?php echo time(); ?>"></script>
<div id="si">
    <span onclick="document.getElementById('si').style.display='none'" class="close">close</span>
    <form class="signupf" action="../../PA3/PHP/validate-login.php" method="post">
        <div class="container">
            <h1>Signin</h1>
            <p>Please fill in this form to Signin.</p>
            <hr>
            <label for="email"><b>Email</b></label>
            <input class="em" type="text" placeholder="Enter Email" name="email" required>

            <label for="psw"><b>Password</b></label>
            <input class="pas" type="password" placeholder="Enter Password" name="psw" required>

            <div class="clearfix">
                <button type="button" onclick="document.getElementById('si').style.display='none'" class="cancelbtn">Cancel</button>
                <button type="submit" class="signupbtn">Sign Up</button>
            </div>
        </div>
    </form>
</div>

<div id="lgout">
    <span onclick="document.getElementById('lgout').style.display='none'" class="close">close</span>
    <form class="signupf" action="../../PA3/PHP/logout.php" method="post">
        <div class="container">
            <h1>LogOut</h1>
            <p>Are You Sure You want to LogOut?</p>
            <div class="clearfix">
                <button type="button" onclick="document.getElementById('lgout').style.display='none'" class="cancelbtn">Cancel</button>
                <button type="submit" class="signupbtn">Logout</button>
            </div>
        </div>
    </form>
</div>