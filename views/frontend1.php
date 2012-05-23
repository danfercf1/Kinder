<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">


<?php

/***Listado de sorpresas***/

$path = "../images/sorpresas/";
$dir = dir($path);
$sorpresas = Array();

while ($elemento = $dir->read()){
    if ($elemento != "." && $elemento != ".." && $elemento != ""){
        array_push($sorpresas,$elemento);
    }
    if(!empty($sorpresas))$sorpresas_json = json_encode($sorpresas);
    //echo $sorpresas_json;
    //print_r($sorpresas);
}

?>
<head>
    <meta http-equiv="content-type" content="text/html" /> 
    <title>Kinder</title>
    <link rel="stylesheet" href="<?php echo CSS_PATH;?>fancybox-front/jquery.fancybox-1.3.4.css" type="text/css" media="screen" />
    <link rel="stylesheet" href="<?php echo CSS_PATH;?>jquery.mCustomScrollbar.css" type="text/css" media="screen" />
    <link href="<?php echo CSS_PATH;?>main.css" rel="stylesheet" type="text/css" />

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>


<script>
    
    var _imagenes;  
    var _productos;
    
    jQuery(function(){
        
        _imagenes = $.parseJSON('<?php echo $sorpresas_json;?>');
        
        _productos = jQuery.parseJSON('<?php echo $productos_json;?>');
        
    });
</script>

<script type="text/javascript" src="<?php echo JS_PATH;?>easel.js"></script>

<script type="text/javascript" src="http://tweenjs.com/src/tweenjs/Tween.js"></script>
<script type="text/javascript" src="http://tweenjs.com/src/tweenjs/Ease.js"></script>

<script type="text/javascript" src="<?php echo JS_PATH;?>ocanvas-2.0.0.min.js"></script>

<script type="text/javascript" src="<?php echo JS_PATH;?>jquery.fancybox-1.3.4.js"></script>

<!--<script type="text/javascript" src="<?php echo JS_PATH;?>jquery.scrollTo.js"></script>-->
<script type="text/javascript" src="<?php echo JS_PATH;?>jquery.scrollTo-min.js"></script>

<script type="text/javascript" src="<?php echo JS_PATH;?>jquery.queryloader2.js"></script>


<script type="text/javascript" src="<?php echo JS_PATH;?>funcion.js"></script>

<script type="text/javascript" src="<?php echo JS_PATH;?>posicionar.js"></script>

<script type="text/javascript" src="<?php echo JS_PATH;?>movimiento_pantalla.js"></script>


<script type="text/javascript" src="<?php echo JS_PATH;?>home/main_home.js"></script>
<script type="text/javascript" src="<?php echo JS_PATH;?>home/objetos_home.js"></script>
<script type="text/javascript" src="<?php echo JS_PATH;?>home/animacion.js"></script>

<script type="text/javascript" src="<?php echo JS_PATH;?>museo/objetos_museo.js"></script>
<script type="text/javascript" src="<?php echo JS_PATH;?>museo/main_museo.js"></script>
<script type="text/javascript" src="<?php echo JS_PATH;?>museo/animacion.js"></script>


<script type="text/javascript" src="<?php echo JS_PATH;?>juegos/main_juegos.js"></script>
<script type="text/javascript" src="<?php echo JS_PATH;?>juegos/objetos_juegos.js"></script>
<script type="text/javascript" src="<?php echo JS_PATH;?>juegos/animacion.js"></script>


<script type="text/javascript" src="<?php echo JS_PATH;?>contacto/main_contacto.js"></script>
<script type="text/javascript" src="<?php echo JS_PATH;?>contacto/objetos_contacto.js"></script>
<script type="text/javascript" src="<?php echo JS_PATH;?>contacto/animacion.js"></script>

<script type="text/javascript" src="<?php echo JS_PATH;?>productos/main_productos.js"></script>
<script type="text/javascript" src="<?php echo JS_PATH;?>productos/objetos_productos.js"></script>
<script type="text/javascript" src="<?php echo JS_PATH;?>productos/animacion.js"></script>

<script type="text/javascript" src="<?php echo JS_PATH;?>menu.js"></script>

<script type="text/javascript" src="<?php echo JS_PATH;?>jquery.easing.1.3.js"></script>

<script type="text/javascript" src="<?php echo JS_PATH;?>jquery.mousewheel.min.js"></script>

<script type="text/javascript" src="<?php echo JS_PATH;?>jquery.mCustomScrollbar.js"></script>

<script>
$(document).ready(function(){
   
   /*init_home();
   
   init_museo();
   
   init_juegos();
   
   init_contacto();
   
   init_productos();
   
   menu.init();
   
   posicionar.init();
   
   movimiento_pantalla.init();
   
   $("#mcs4_container").mCustomScrollbar("vertical",200,"easeOutCirc",1.25,"fixed","yes","no",0);
   */
   jQuery('body').queryLoader2({
        barColor: "#6e6d73",
        backgroundColor: "#000000",
        percentage: true,
        barHeight: 30,
        deepSearch: true,
        completeAnimation: "grow",
        onComplete: function(){
            
           
        }
    });
           init_home();
           
           init_museo();
           
           init_juegos();
           
           init_contacto();
           
           init_productos();
           
           menu.init();
           
           posicionar.init();
           
           movimiento_pantalla.init();
           
           jQuery("#mcs4_container").mCustomScrollbar("vertical",200,"easeOutCirc",1.25,"fixed","yes","no",0);
});

</script>
</head>
<body>
    <nav class="menu_soy" id="menu_soy">
        <a id="link_soypadre"><span></span></a>
    </nav>
    <nav class="nav_menu_soy_chico" id="nav_menu_soy_chico">    
        <ul>
            <ul id="menu_soy_padre">
                <li id="link_productos"><a></a></li>
                <li id="link_contacto"><a></a></li>
            </ul>
            
            <ul id="menu_soy_chico">
                <li id="link_coleccion"><a></a></li>
                <li id="link_museo"><a></a></li>
                <li id="link_juegos"><a></a></li>
            </ul>
            
        </ul>
    </nav>
    
    <section style="display:none;">
           <img src="../images/images_home/background_home2.jpg" />
           <img src="../images/images_home/arbol.png" />
           <img src="../images/images_home/guardian_tierra.png" />
           
           <img src="../images/museo/background_museo2.jpg" />
           <img src="../images/museo/oyster.png" />
           <img src="../images/museo/guardian.png" />
           
           <img src="../images/juegos/background_juegos2.jpg" />
           <img src="../images/juegos/background-nuevo.png" />
           <img src="../images/juegos/guardian.png" />
           
           
           <img src="../images/contacto/background_contacto2.jpg" />
           <img src="../images/contacto/ipad-background.png" />
           
           
           <img src="../images/productosf/background_productos2.jpg" />
           <img src="../images/productosf/machine-lights.png" />
           <img src="../images/productosf/machine-operator.png" />
           
           
    </section>
    
    
    <div id="contenedor">
    
            <section id="contenedor_productos" class="contenedor_canvas">
                <canvas width="1920" height="1080" id="canvas_productos" name="canvas_productos"></canvas>
                <div id="img_infonutricional" class="" style="display: none;"></div>
                <div id="mcs4_container">
                	<div class="customScrollBox">
                		<div class="container">
                    		<div class="content">
                        		<p>KINDER® CHOCOLATE es la tableta de chocolate creada especialmente para los niños, ya que 100g de KINDER® CHOCOLATE contienen el calcio y algunas vitaminas de ¼ de litro de leche y toda la garantía del chocolate KINDER®.</p>
                			</div>
                		</div>
                		<div class="dragger_container">
                    		<div class="dragger"></div>
                
                		</div>
                	</div>
                </div>
            </section>
            
            <section id="contenedor_contacto" class="contenedor_canvas">
                <canvas width="1920" height="1080" id="canvas_contacto" name="canvas_contacto"></canvas>
            </section>
    
            <section id="contenedor_home" class="contenedor_canvas">
                <canvas width="1920" height="1080" id="canvas_home" name="canvas_home"></canvas>
            </section>
            
            <section id="contenedor_museo" class="contenedor_canvas">
                <canvas width="1920" height="1080" id="canvas_museo" name="canvas_museo"></canvas>
            </section>
            
            <section id="contenedor_juegos" class="contenedor_canvas">
                <canvas width="1920" height="1080" id="canvas_juegos" name="canvas_juegos"></canvas>
            </section>
    </div>
</body>
</html>