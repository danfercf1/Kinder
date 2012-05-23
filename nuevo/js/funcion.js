 var logo; 
 var g;
  
 var canvas_home;
 var canvas_museo;
 var canvas_juegos;
 var canvas_contacto;
 var canvas_productos;
 
 var stage;
 var stage_museo;
 var stage_juegos;
 var stage_contacto;
 var stage_productos;
 
 var oncanvas_home;
 var oncanvas_museo;
 var oncanvas_juegos;
 
var funcion = new function()
{
    this.resize = function(o,x0,y0)
    {
        o.x = (canvas.width/2) + x0;
        o.y = (canvas.height/2) + y0;
    }
    
}

function tick(){
    stage.update();
    stage_museo.update();
    stage_juegos.update();
    stage_contacto.update();
    stage_productos.update();
}

function ticker_all(){
    Ticker.setFPS(60) ; 
    Ticker.addListener(window)
}

function resize_canvas(){
    
    if($.browser.webkit){
        var alto = document.body.clientHeight+154;
    }else{
        var alto = document.body.clientHeight+177;    
    }
    
    //var alto = document.body.clientHeight+220;
    var ancho = document.body.clientWidth; //Quitar para posicion relative
    //$('.contenedor_canvas').css('height',alto);
    $('.contenedor_canvas').css('width',ancho);
    
}

jQuery(window).resize(function() {
    
    var left= -(1920 - document.body.clientWidth)/2;
    
    if(jQuery.browser.msie){
        
        jQuery("#canvas_home").css({left:(left)}); 
        jQuery("#canvas_museo").css({left:(left)});
        jQuery("#canvas_juegos").css({left:(left)});
        jQuery("#canvas_contacto").css({left:(left)});
        jQuery("#canvas_productos").css({left:(left)});
                    
    }
    
        jQuery("#canvas_home").css({left:(left)}); 
        jQuery("#canvas_museo").css({left:(left)});
        jQuery("#canvas_juegos").css({left:(left)});
        jQuery("#canvas_contacto").css({left:(left)});
        jQuery("#canvas_productos").css({left:(left)});
    
    resize_canvas();

});
