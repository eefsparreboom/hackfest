<?php
error_reporting(E_ALL ^ E_NOTICE);
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Hackfest app</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Loading Bootstrap -->
    <link href="flat-ui/bootstrap/css/bootstrap.css" rel="stylesheet">

    <!-- Loading Flat UI -->
    <link href="flat-ui/css/flat-ui.css" rel="stylesheet">
    <!-- bxSlider CSS file -->
    <link href="plugins/bxslider/jquery.bxslider.css" rel="stylesheet" />
    <link href="css/animate.css" rel="stylesheet" />
    <link href="css/style.css" rel="stylesheet" />
    <link rel="shortcut icon" href="flat-ui/images/favicon.ico">

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements. All other JS at the end of file. -->
    <!--[if lt IE 9]>
      <script src="js/html5shiv.js"></script>
      <script src="js/respond.min.js"></script>
    <![endif]-->
  </head>
  <body data-page="<?php echo $page; ?>">
      <?php if($page==="index"){ ?>
      
      <?php } else { ?>
      <nav class="navbar navbar-inverse headernav" role="navigation">
         <div class="navbar-header">
      
             <a class="navbar-brand" href="#"><img src="img/logo.png" /></a>
             <h6 style="color:#FFF;">
                 LITTLECOOK
             </h6>
    </div>
          
      </nav>
      <?php } ?>
      <?php if($bg){ ?>
      <div class="bgAnimation">
          <img src="img/<?php echo $bg; ?>" />
      </div>
      <?php } ?>
    <div class="container">