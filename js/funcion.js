 var logo; 
 var g;
 
 
 /***Canvas***/
  
 var canvas_home;
 var canvas_verde;
 var canvas_azul;
 var canvas_museo;
 var canvas_juegos;
 var canvas_contacto;
 var canvas_productos;
 var canvas_agenda;
 
 /***Variables objetos en posicion absoluta***/
 
 
 
 
 /***Variables Stages***/
 
 var stage;
 var stage_verde;
 var stage_azul;
 var stage_museo;
 var stage_juegos;
 var stage_contacto;
 var stage_productos;
 var stage_agenda;
 
 
 /***Oncanvas***/
 
 var oncanvas_home;
 var oncanvas_verde;
 var oncanvas_azul;
 var oncanvas_museo;
 var oncanvas_juegos;
 var oncanvas_agenda;
 
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
    stage_verde.update();
    stage_azul.update();
    stage_museo.update();
    stage_juegos.update();
    stage_contacto.update();
    stage_productos.update();
    stage_agenda.update();
}

function ticker_all(){
    Ticker.setFPS(60) ; 
    Ticker.addListener(window)
}


/**Resize todos los canvas***/

function resize_canvas(){
    
    if($.browser.webkit){
        var alto = document.body.clientHeight+154;
    }else{
        var alto = document.body.clientHeight+177;    
    }
    
    
    var ancho = document.body.clientWidth; //Quitar para posicion relative
    
    $('.contenedor_canvas').css('width',ancho);
    
}

var resizar_canvas = new function(){
    
    this.init = function(){
        jQuery(window).resize(function() {
            
            var left= -(1920 - document.body.clientWidth)/2;
            
            if(jQuery.browser.msie){
                
                jQuery("#canvas_home").css({left:(left)});
                jQuery("#canvas_verde").css({left:(left)}); 
                jQuery("#canvas_azul").css({left:(left)}); 
                jQuery("#canvas_museo").css({left:(left)});
                jQuery("#canvas_juegos").css({left:(left)});
                jQuery("#canvas_contacto").css({left:(left)});
                jQuery("#canvas_productos").css({left:(left)});
                jQuery("#canvas_agenda").css({left:(left)});
                            
            }
            
                jQuery("#canvas_home").css({left:(left)});
                jQuery("#canvas_verde").css({left:(left)}); 
                jQuery("#canvas_azul").css({left:(left)}); 
                jQuery("#canvas_museo").css({left:(left)});
                jQuery("#canvas_juegos").css({left:(left)});
                jQuery("#canvas_contacto").css({left:(left)});
                jQuery("#canvas_productos").css({left:(left)});
                jQuery("#canvas_agenda").css({left:(left)});
                
                var nuevo_left = (document.body.clientWidth/2)-195;
                
                jQuery('#formulario_contacto').css({left:(nuevo_left)});
                
                var left_prod = (document.body.clientWidth/2)-138;
                
                jQuery('#descripcion_producto').css({left:(left_prod)});
                
                /**Resize Calendario**/
                
                var left_agenda = (document.body.clientWidth/2)-321;
                jQuery('#calendario').css({left:(left_agenda)});
                
                /**Resize Iframe**/
                
                var left_iframe = (document.body.clientWidth/2) - 296;
                
                jQuery('.iframe_juego').css({left:(left_iframe)});
                
                resize_canvas();
        
        });
    }
}

resizar_canvas.init();