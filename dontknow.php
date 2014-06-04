<?php
$page='dontknow';
$back ='start.php';
$next=false;
include('header.php');
?>
        <div class="row search-page-top">
            <div class="search-page-block-search col-sm-6 palette palette-sun-flower">
                <h3>Search</h3>
                <form action="chooser.php" method="GET" >
                <div class="form-group has-feedback">
                    <input name="q" type="text" class="form-control" id="inputSuccess2" placeholder="search">
                    <span class="input-icon fui-search"></span>
                  </div>
                </form>
            </div>
            <div class="search-page-block-bonus col-sm-6 palette palette-carrot">
                <a href="chooser.php?q=bonus"><h3>Bonus</h3></a>
            </div>
        </div>
        <div class="row">
        <div class="col-sm-12 palette palette-pumpkin">
            <a href="chooser.php?q=popular"><h3>Popular</h3></a>
        </div>
        </div>
        <?php
        include('footer.php');
        
        ?>