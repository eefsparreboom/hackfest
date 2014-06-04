<?php
$page='courses';
$back='start.php';
$next=false;

include('header.php');
?>
        <div class="courses-page-container">
        <div class="col-sm-6 palette palette-clouds" data-q="starters">
                <form action="chooser.php" method="GET" >
                <div class="form-group has-feedback">
                    <input name="q" type="text" class="form-control" id="inputSuccess2" placeholder="search">
                    <span class="input-icon fui-search"></span>
                  </div>
                </form>
        </div>
        <div class="col-sm-6 palette palette-sun-flower" data-q="starters">
            <h5>Starters</h5>
        </div>
        <div class="col-sm-6 palette palette-carrot" data-q="main">
            <h5>Main</h5>
        </div>
        <div class="col-sm-6 palette palette-orange" data-q="dessert">
            <h5>Dessert</h5>
        </div>
        <div class="col-sm-6 palette palette-pumpkin" data-q="snacks">
            <h5>Snacks</h5>
        </div>
    </div>
        <?php
        include('footer.php');
        
        ?>