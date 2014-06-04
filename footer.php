 </div>
    <!-- /.container -->

<nav class="navbar navbar-inverse navbar-fixed-bottom footernav" role="navigation">
         <ul class="nav navbar-nav footer">
        <li class='col-xs-4'>
            <?php if($back){ ?>
            <a href="<?php echo $back;?>" class='back'><span class="fui-arrow-left"></span></a>
            <?php } ?>
        </li>
        <li class='col-xs-4 active'><a href="/" class='home'><span class="glyphicon glyphicon-home"></span></a></li>
        <li class='col-xs-4'>
            <?php if($next){ ?>
            <a href="<?php echo $next;?>" class='next'><span class="fui-arrow-right"></span></a>
            <?php } ?>
        </li>
        
      </ul>
      </nav>
    <!-- Load JS here for greater good =============================-->
    <script src="flat-ui/js/jquery-1.8.3.min.js"></script>
    <script src="flat-ui/js/jquery-ui-1.10.3.custom.min.js"></script>
    <script src="flat-ui/js/jquery.ui.touch-punch.min.js"></script>
    <script src="flat-ui/js/bootstrap.min.js"></script>
    <script src="flat-ui/js/bootstrap-select.js"></script>
    <script src="flat-ui/js/bootstrap-switch.js"></script>
    <script src="flat-ui/js/flatui-checkbox.js"></script>
    <script src="flat-ui/js/flatui-radio.js"></script>
    <script src="flat-ui/js/jquery.tagsinput.js"></script>
    <script src="flat-ui/js/jquery.placeholder.js"></script>
    <script src="plugins/bxslider/jquery.bxslider.min.js"></script>
    <script src="js/app.js"></script>
    
  </body>
</html>