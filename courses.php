<?php
$page='courses';
$back='index.php';
$next=false;

include('header.php');
?>
        <div class="courses-page-container">
            <center><h4>Choose your course!</h4></center>
        <div class="col-xs-12" data-q="starters">
                <form action="chooser.php" method="GET" >
                <div class="form-group has-feedback">
                    <input name="q" type="text" class="form-control" id="inputSuccess2" placeholder="search">
                    <span class="input-icon fui-search"></span>
                  </div>
                </form>
        </div>
        <div class="col-xs-6">
              <img src="img/icon_starters.png" alt="Compas" class="tile-image big-illustration">
            <a class="btn btn-primary btn-lg btn-block" href="chooser.php?q=starters">STARTERS</a>
        </div>  
        <div class="col-xs-6">
              <img src="img/icon_main.png" alt="Compas" class="tile-image big-illustration">
            <a class="btn btn-primary btn-lg btn-block" href="chooser.php?q=main">MAIN</a>
        </div>  
        <div class="col-xs-6">
              <img src="img/icon_dessert.png" alt="Compas" class="tile-image big-illustration">
            <a class="btn btn-primary btn-lg btn-block" href="chooser.php?q=dessert">DESSERT</a>
        </div>  
        <div class="col-xs-6">
              <img src="img/icon_snacks.png" alt="Compas" class="tile-image big-illustration">
            <a class="btn btn-primary btn-lg btn-block" href="chooser.php?q=snacks">SNACKS</a>
        </div>  
        
    </div>
        <?php
        include('footer.php');
        
        ?>