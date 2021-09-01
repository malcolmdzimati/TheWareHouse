  <header id="mheader">
        <a href="../../PA1/HTML/index.php">
            <img class="mainlogo" src="../../PA1/img/logo.png" alt="Logo2">
        </a>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

            <?php
                  session_start();

                  if (isset($_SESSION['loggedIn']) && $_SESSION['loggedIn'] == true) {
                        echo "<a id='Un' href='#'>" . $_SESSION['User'] . "</a><button id='logout'>LogOut</button>";
                        echo "<button id='theme'>Set Prefrences</button>";
                  } else {
                        echo "<button id='login'>Login</button><button id='Reg'>Register</button>";
                         echo "<button id='theme'>Dark</button>";
                 }
             ?>

    </header>

    <nav id="nav">
        <a class="headerlink" href="../../PA1/HTML/Trending.php">Trending</a>
        <a class="headerlink" href="../../PA1/HTML/NewReleases.php">New Releases</a>
        <a class="headerlink" href="../../PA1/HTML/TopRated.php">Top Rated</a>
        <a class="headerlink" href="../../PA1/HTML/Featured.php">Featured</a>
        <a class="headerlink" href="../../PA1/HTML/Calendar.php">Calendar</a>

    </nav>
<?php include_once 'config.php';?>
<?php include_once 'signup.php';?>
  <?php include_once 'login.php';?>
