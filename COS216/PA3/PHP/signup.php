<link rel="stylesheet" href="../../PA1/CSS/signin.css?v=<?php echo time(); ?>">
<script src="../../PA2/javascript/sign.js?v=<?php echo time(); ?>"></script>
<div id="su">
  <span onclick="document.getElementById('su').style.display='none'" class="close">close</span>
  <form class="signupf" action="../../PA3/PHP/validate-signup.php" method="post">
    <div class="container">
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr>

      <label for="name"><b>Name</b></label>
      <input type="text" placeholder="Enter Name" name="name" required>

      <label for="surname"><b>Surname</b></label>
      <input type="text" placeholder="Enter Surname" name="surname" required>

      <label for="email"><b>Email</b></label>
      <input id="em" type="text" placeholder="Enter Email" name="email" required>

      <label for="psw"><b>Password</b></label>
      <input id="pas" type="password" placeholder="Enter Password" name="psw" required>

      <label for="psw-repeat"><b>Repeat Password</b></label>
      <input id="rpas" type="password" placeholder="Repeat Password" name="psw-repeat" required><br>

      <div class="clearfix">
        <button type="button" onclick="document.getElementById('su').style.display='none'" class="cancelbtn">Cancel</button>
        <button type="submit" class="signupbtn">Sign Up</button>
      </div>
    </div>
  </form>
</div>
