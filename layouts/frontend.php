<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<?php 
/*$path = IMAGES_PATH."sorpresas/";
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
*/
?>

<script type="text/javascript" src="<?php echo JS_PATH;?>jquery-1.7.min.js"></script>

<script>
    var _imagenes;  
    jQuery(function(){
        _imagenes = $.parseJSON('<?php echo $sorpresas_json;?>');
        //console.log(_imagenes);
    });
</script>

<script type="text/javascript" src="<?php echo JS_PATH;?>easel.js"></script>

<!--
<script src="http://easeljs.com/src/easeljs/utils/UID.js"></script>
<script src="http://easeljs.com/src/easeljs/geom/Matrix2D.js"></script>
<script src="http://easeljs.com/src/easeljs/events/MouseEvent.js"></script>
<script src="http://easeljs.com/src/easeljs/geom/Point.js"></script>
<script src="http://easseljs.com/src/easeljs/display/SpriteSheet.js"></script>
<script src="http://easeljs.com/src/easeljs/display/Shadow.js"></script>
<script src="http://easeljs.com/src/easeljs/display/DisplayObject.js"></script>
<script src="http://easeljs.com/src/easeljs/display/Container.js"></script>
<script src="http://easeljs.com/src/easeljs/display/Stage.js"></script>
<script src="http://easeljs.com/src/easeljs/display/Bitmap.js"></script>
<script src="http://easeljs.com/src/easeljs/display/Graphics.js"></script>
<script src="http://easeljs.com/src/easeljs/display/Shape.js"></script>
<script src="http://easeljs.com/src/easeljs/utils/Ticker.js"></script>
-->


<script type="text/javascript" src="http://tweenjs.com/src/tweenjs/Tween.js"></script>
<script type="text/javascript" src="http://tweenjs.com/src/tweenjs/Ease.js"></script>

<script type="text/javascript" src="<?php echo JS_PATH;?>ocanvas-2.0.0.js"></script>

<script type="text/javascript" src="<?php echo JS_PATH;?>jquery.fancybox-1.3.4.js"></script>

<script type="text/javascript" src="<?php echo JS_PATH;?>jquery.scrollTo.js"></script>
<script type="text/javascript" src="<?php echo JS_PATH;?>jquery.scrollTo-min.js"></script>


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

<script>
$(document).ready(function(){
   
   init_home();
   
   init_museo();
   
   init_juegos();
   
   init_contacto();
   
   init_productos();
   
   menu.init();
   
   posicionar.init();
   
   movimiento_pantalla.init();
});

</script>


<head>
    <meta http-equiv="content-type" content="text/html" /> 
    <meta name="author" content="giovi" />
    <title>Kinder</title>
    <link href="<?php echo CSS_PATH;?>main.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="<?php echo CSS_PATH;?>fancybox-front/jquery.fancybox-1.3.4.css" type="text/css" media="screen" />
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
    
    
    
    <!--<div id="overlay"><iframe id="iframe_registro" src="registro.php"></iframe></div>-->
    
    <div id="contenedor">
    
            <section id="contenedor_productos" class="contenedor_canvas">
                <canvas width="1920" height="1080" id="canvas_productos" name="canvas_productos"></canvas>
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