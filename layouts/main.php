<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Panel de control</title>
<link href="<?php echo CSS_PATH;?>styles/layout.css" rel="stylesheet" type="text/css" />
<link href="<?php echo CSS_PATH;?>styles/wysiwyg.css" rel="stylesheet" type="text/css" />
<link href="<?php echo CSS_PATH;?>themes/green/styles.css" rel="stylesheet" type="text/css" />
<link href="<?php echo CSS_PATH;?>fancybox/jquery.fancybox-1.3.4.css" rel="stylesheet" type="text/css" />
<?php if(isset($css_files) and count($css_files)>0):?>
    <?php foreach($css_files as $css):?>
        <link href="<?php echo CSS_PATH.$css;?>.css" rel="stylesheet" type="text/css" />
    <?php endforeach;?>
<?php endif;?>
<script type="text/javascript">
var ROOT_PATH="<?php echo ROOT_PATH;?>";
<?php 
    if(!empty($varlist)){
        echo 'var varlist='.$varlist.';';
    }
?>
</script>
<!-- Notifications Box/Pop-Up End --> 
    
    <script type="text/javascript" src="http://dwpe.googlecode.com/svn/trunk/_shared/EnhanceJS/enhance.js"></script>	
    <script type='text/javascript' src='http://dwpe.googlecode.com/svn/trunk/charting/js/excanvas.js'></script>
	<script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js'></script>
    <script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.6/jquery-ui.min.js'></script>
    <!--<script src="http://maps.google.com/maps?file=api&v=1&key=ABQIAAAAnfs7bKE82qgb3Zc2YyS-oBT2yXp_ZAY8_ufC3CFXhHIE1NvwkxSySz_REpPq-4WZA27OwgbtyR3VcA" type="text/javascript"></script>   
    
    <script type='text/javascript' src='<?php echo JS_PATH;?>jquery.googlemaps1.01.js'></script>-->
    <script type='text/javascript' src='<?php echo JS_PATH;?>fancybox/jquery.fancybox-1.3.4.js'></script>
	<script type='text/javascript' src='<?php echo JS_PATH;?>scripts/jquery.wysiwyg.js'></script>
    <script type='text/javascript' src='<?php echo JS_PATH;?>scripts/visualize.jQuery.js'></script>
    <script type="text/javascript" src='<?php echo JS_PATH;?>scripts/functions.js'></script>
    <?php if(isset($js_files) and count($js_files)>0):?>
        <?php foreach($js_files as $js):?>
            <script type="text/javascript" src='<?php echo JS_PATH.$js;?>.js'></script>
        <?php endforeach;?>
    <?php endif;?>
    <!--[if IE 6]>
    <script type='text/javascript' src='<?php echo JS_PATH;?>scripts/png_fix.js'></script>
    <script type='text/javascript'>
      DD_belatedPNG.fix('img, .notifycount, .selected');
    </script>
    <![endif]--> 
</head>
<body id="homepage">
	<div id="header">
    	<a href="<?php echo ROOT_PATH;?>" title=""><img src="<?php echo IMAGES_PATH;?>cp_logo.png" alt="Control Panel" class="logo" /></a>
    	<!--<div id="searcharea">
            <p class="left smltxt"><a href="#" title="">Advanced</a></p>
            <input type="text" class="searchbox" value="Search control panel..." onclick="if (this.value =='Search control panel...'){this.value=''}"/>
            <input type="submit" value="Search" class="searchbtn" />
        </div>-->
    </div>
        
    <!-- Top Breadcrumb Start -->
    <div id="breadcrumb">
    	<ul>	
        	<li><img src="<?php echo IMAGES_PATH;?>icons/icon_breadcrumb.png" alt="Location" /></li>
        	<li><strong>Location:</strong></li>
            <li><a href="#" title="">Sub Section</a></li>
            <li>/</li>
            <li class="current">Control Panel</li>
        </ul>
    </div>
    <!-- Top Breadcrumb End -->
       
    <!-- Right Side/Main Content Start -->
    <div id="rightside"> 
    
    <?php
        /*
            Vista -> views/status_misc/status_message
            $status_message=array(
                                "title"=>"Titulo del mensaje",
                                "message"=>"Cuerpo del mensaje",
                                "status"=>"Tipo de mensaje");    
            Tipos de mensaje:
            - warning (amarillo)
            - success (verde)
            - error (rojo)
            - info (azul)
        */
        //$status_message=array("title"=>"Atenci&oacute;n","status"=>"warning","message"=>"OMG!!!!"); 
        
        if(isset($status_mensajes) && !empty($status_mensajes)){
            $this->loadPartialView("status_misc/status_message", array("status_message"=>$status_mensajes[0]));
        }if(isset($_SESSION['status_mensajes']) && !empty($_SESSION['status_mensajes'])){
            $this->loadPartialView("status_misc/status_message", array("status_message"=>$_SESSION['status_mensajes']));
            unset($_SESSION['status_mensajes']);
        }
    ?>
     
        <?php echo $contentView;?>
        
        <div id="footer">
        	&copy; Copyright 2011 Sysdecom
        </div> 
          
    </div>
    <!-- Right Side/Main Content End -->
    
    <!-- Left Bar -->
    <div id="leftside">
        <!-- Account Info -->
        <?php if(isset($leftbar["account"])):?>
    	<div class="user">
        	<img src="<?php echo $leftbar["account"]["img"];?>" width="44" height="44" class="hoverimg" alt="Avatar" />
            <p>Bienvenido:</p>
            <!--<p class="username"><?php echo $leftbar["account"]["name"];?></p>-->
            <p class="username"><?php echo $_SESSION["ULOGIN_SESSION"];?>
            <!--<p class="userbtn"><a href="<?php echo ROOT_PATH."profile";?>" title="Perfil">Perfil</a></p>-->
            <p class="userbtn"><a href="<?php echo ROOT_PATH?>login/logout" title="">Salir</a></p>
        </div>
        <?php endif;?>
        <!-- Fin Account Info -->
        
        <!-- Links Generales-->
        <?php if(isset($leftbar["links"]) and count($leftbar["links"])>0):?>
        <ul id="nav">
            <?php foreach($leftbar["links"] as $l):?>
            <li>
                <?php if($active_page!=$l["slug"]):?><a class="collapsed heading"><?php echo $l["name"];?></a><?php endif;?>
                <ul class="navigation">
                    <?php if($active_page==$l["slug"]):?><li class="heading selected"><?php echo $l["name"];?></li><?php endif;?>
                    <?php if(isset($l["childrens"])):?>
                        <?php foreach($l["childrens"] as $child):?>
                            <li><a href="<?php echo $child["noroot"]?$child["url"]:$l["url"]."/".$child["url"];?>" title="<?php echo $child["title"];?>" ><?php echo $child["title"];?></a></li>
                        <?php endforeach;?>                    
                    <?php endif;?>                  
                </ul>
            </li>
            <?php endforeach;?>
        </ul>
        <?php endif;?>
        <!-- Fin Links Generales-->
        
        <div class="notifications">
            <p>Administrar</p>
        </div>
        
        <!-- Links Menu-->        
        <?php if(isset($leftbar["linksmenu"]) and count($leftbar["linksmenu"])>0):?>
        <ul id="nav">
            <?php foreach($leftbar["linksmenu"] as $l):?>
            <li>
                <?php if($active_page!=$l["slug"]):?><a class="collapsed heading"><?php echo $l["name"];?></a><?php endif;?>
                <ul class="navigation">
                    <?php if($active_page==$l["slug"]):?><li class="heading selected"><?php echo $l["name"];?></li><?php endif;?>
                    <?php if(!$l["noparent"]):?>
                    <!--NO SE PUEDE CREAR USUARIOS-->
                    <?php if($l["slug"]!="users"){?><li><a href="<?php echo $l["url"]?>/create" title="Crear" >Crear nuevo</a></li><?php }?>
                    <li><a href="<?php echo $l["url"]?>/" title="Listar" >Listado</a></li>
                    <?php endif;?>
                </ul>
            </li>
            <?php endforeach;?>
        </ul>
        <?php endif;?>
        <!-- Fin Links Menu-->        
    </div>
    <!-- Left Bar --> 
    
    <!-- Notifications Box/Pop-Up Start --> 
    <div id="notificationsbox">
        <h4>Notifications</h4>
        <ul>
            <li>
            	<a href="#" title=""><img src="img/icons/icon_square_close.png" alt="Close" class="closenot" /></a>
            	<h5><a href="#" title="">New member registration</a></h5>
                <p>Admin eve joined on 18.12.2010</p>
            </li>
            <li>
            	<a href="#" title=""><img src="img/icons/icon_square_close.png" alt="Close" class="closenot" /></a>
            	<h5><a href="#" title="">New member registration</a></h5>
                <p>Jackson Michael joined on 16.12.2010</p>
            </li>
            <li>
            	<a href="#" title=""><img src="img/icons/icon_square_close.png" alt="Close" class="closenot" /></a>
                <h5><a href="#" title="">New blog post created</a></h5>
                <p>New post created on 15.12.2010</p>
            </li>
            <li>
            	<a href="#" title=""><img src="img/icons/icon_square_close.png" alt="Close" class="closenot" /></a>
            	<h5><a href="#" title="">New group created</a></h5>
                <p>“Web Design” group created on 12.12.2010</p>
            </li>
            <li>
            	<a href="#" title=""><img src="img/icons/icon_square_close.png" alt="Close" class="closenot" /></a>
            	<h5><a href="#" title="">1 new private message</a></h5>
                <p>New message from Joe sent on 21.11.2010</p>
            </li>
            <li>
            	<a href="#" title=""><img src="img/icons/icon_square_close.png" alt="Close" class="closenot" /></a>
            	<h5><a href="#" title="">New member registration</a></h5>
                <p>Graham joined on 20.11.2010</p>
            </li>
        </ul>
        <p class="loadmore"><a href="#" title="">Load more notifications</a></p>
    </div>
</body>
</html>
