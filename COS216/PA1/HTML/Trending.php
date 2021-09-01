<!DOCTYPE html>
<html>
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js?v=<?php echo time(); ?>"></script>
        <script src="../../PA2/javascript/sign.js?v=<?php echo time(); ?>"></script>
        <script src="../../PA2/javascript/trending.js?v=<?php echo time(); ?>"></script>
        <link rel="stylesheet" href="../CSS/nav.css?v=<?php echo time(); ?>">
        <link rel="stylesheet" href="../../PA1/CSS/Trending.css?v=<?php echo time(); ?>">
        <title>
            TheWareHouse
        </title>
        <link rel="icon" href="../img/favicon.png" type="image/png">
    </head>
    <?php include_once '../../PA3/PHP/header.php';?>

    <body>
      <div id="filterct">
          <button>Genre
            <div class="dropdown-content">
              <a href="#" id="GAction">Action</a>
              <a href="#" id="GAdvent">Adventure</a>
              <a href="#" id="GRacing">Racing</a>
              <a href="#" id="GSport">Sports</a>
            </div>
          </button>
          <button>Platform
            <div class="dropdown-content">
              <a href="#" id="PS4Pla">PlayStation</a>
              <a href="#" id="XBPla">XBox</a>
              <a href="#" id="PCPla">PC</a>
            </div>
          </button>
              <input id="txta", placeholder="Search..", name="search">
              <button id="sbmtbtn" onclick="search()">Find</button>
        </div>

      <div class="mainct", id="trendingmainct"></div>
      <div id="loading"></div>
    </body>
    <?php include '../../PA3/PHP/footer.php';?>
</html>
