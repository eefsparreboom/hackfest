<?php
$page='index';
$back='#';
$next='#';
$bg = 'cooking.jpg';
include('header.php');
?>
        <div class="bxslider">
            <div class="slide slide1">
                <img src="img/logo_big.png" align="right" />
                <br />
                <br />
                <h1>Hi there!</h1>
                <p>Welcome to the Albert Heijn littlecook app. My name is Eddie the hamster and I am going to help you to cook something deliciousss!</p>
                <img src="img/hamster.png" />
                
            </div>
            <div class="slide">
                <img src="img/logo_big.png" align="right" />
                <br />
                <br />
                <h1></h1>
                <img src="img/icon_whisk.png" width="100px" class="pull-left"/>
                
                <br />
                <br />
                <p>I will show you what cooking stuff to use, <br />and wich ingredients<img src="img/icon_egg.png" width="100px" class="pull-right" /></p>
                <br />
                <br />
                <center>
                    <img src="img/hamster.png" width="250px"  />
                </center>
                
            </div>
            <div class="slide">
                <img src="img/logo_big.png" align="right" />
                <br />
                <h1></h1>
                <img src="img/icon_parent.png" width="150px" />
                <br />
                <p>Don't forget to ask your mom or dad to help you. For some of this stuff you need an adult!</p>
                <center><a href="courses.php" class='btn btn-primary btn-lg'>
                    Start cooking!
                    </a></center>
                <br />
                <center>
                    <img src="img/hamster.png" width="250px"  />
                </center>
            </div>
            
        </div>
        <?php
        include('footer.php');
        
        ?>