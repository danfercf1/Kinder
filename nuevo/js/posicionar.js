/***Posicionamiento de la pantalla y Menus***/

var posicionar = new function(){
    
       this.menu_soy = function(){
        
            if(jQuery('.menu_soy #link_soypadre span').attr('class') == 'soy_padre'){
                
                jQuery('.menu_soy #link_soypadre span').attr('class','soy_chico');
                
                jQuery('#canvas_contacto').show();   

                jQuery('#canvas_productos').show();
                
                //jQuery('.nav_menu_soy_chico #menu_soy_chico').hide();
                
                jQuery('.nav_menu_soy_chico #menu_soy_padre').show();
                
                this.iniciar_pantalla(0,5,0);
                
            }else{
                
                jQuery('.menu_soy #link_soypadre span').attr('class','soy_padre');
                
                jQuery('#canvas_contacto').hide();   

                jQuery('#canvas_productos').hide();
                
                jQuery('.nav_menu_soy_chico #menu_soy_chico').show();
                
                jQuery('.nav_menu_soy_chico #menu_soy_padre').hide();
                
                this.iniciar_pantalla(0,5,0);
                
            }
                
       } 
       
       this.init = function(){
        
           jQuery('.menu_soy #link_soypadre span').attr('class','soy_padre');
           
           jQuery('.nav_menu_soy_chico #menu_soy_padre').hide();
           
           this.iniciar_pantalla(0,0,0);
           
           var velocidad = 8000;
           
           
           $('#link_productos').click(function(){
                
                var pos = 0;
                
                var distancia = (jQuery('#canvas_productos').height()/2) - 200 + 1080*pos;
                
                if(jQuery.browser.msie){
                    $("body").scrollTo( distancia - 100, velocidad, {queue:true});    
                }else{
                    $("body").scrollTo( distancia, velocidad, {queue:true});
                }
                   
           });
           
           $('#link_contacto').click(function()
           {    
                var pos = 1;
                
                var distancia = (jQuery('#canvas_contacto').height()/2) - 200 + 1080*pos;
                
                if(jQuery.browser.msie){
                    $("body").scrollTo( distancia - 100, velocidad, {queue:true});    
                }else{
                    $("body").scrollTo( distancia, velocidad, {queue:true});
                }
                  
                  
           });
           
           $('#link_coleccion').click(function()
           {    
                if(jQuery('.menu_soy #link_soypadre span').attr('class') == 'soy_padre' && jQuery('body').height() < 5400){
                    var pos = 0;
                }else{
                    var pos = 2;    
                }
                
                var distancia = (jQuery('#canvas_home').height()/2) - 200 + 1080*pos;
                
                console.log(distancia);
                
                if(jQuery.browser.msie){
                    $("body").scrollTo( distancia - 100, velocidad, {queue:true});    
                }else{
                    $("body").scrollTo( distancia, velocidad, {queue:true});
                }
                  
                  
           });
           
           
           $('#link_museo').click(function(){
            
                if(jQuery('.menu_soy #link_soypadre span').attr('class') == 'soy_padre' && jQuery('body').height() < 5400){
                    var pos = 1;
                }else{
                    var pos = 3;    
                }
                
                var distancia = (jQuery('#canvas_museo').height()/2) - 200 + 1080*pos;
                
                if(jQuery.browser.msie){
                    $("body").scrollTo( distancia - 100, velocidad, {queue:true});    
                }else{
                    $("body").scrollTo( distancia, velocidad, {queue:true});
                }
                   
           });
           
           $('#link_juegos').click(function()
           {    
                
                if(jQuery('.menu_soy #link_soypadre span').attr('class') == 'soy_padre' && jQuery('body').height() < 5400){
                    var pos = 2;
                }else{
                    var pos = 4;    
                }
                
                var distancia = (jQuery('#canvas_juegos').height()/2) - 200 + 1080*pos;
                
                if(jQuery.browser.msie){
                    $("body").scrollTo( distancia - 100, velocidad, {queue:true});    
                }else{
                    $("body").scrollTo( distancia, velocidad, {queue:true});
                }
                  
                  
           });
          
       }
       
       this.iniciar_pantalla = function(pos,velocidad,onoff){
           
           switch (onoff){
            
            case 0 : width = 1080;
            case 1 : width = 2160;
            
           } 
           var distancia = (jQuery('#canvas_productos').height()/2) - 200 + width*pos;
            
           if(jQuery.browser.msie){
                $("body").scrollTo( distancia - 100, velocidad*1000, {queue:true});
           }else{
                $("body").scrollTo( distancia, velocidad*1000, {queue:true}); 
           }
       }
}