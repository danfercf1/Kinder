/***Posicionamiento de la pantalla y Menus***/

var click = 0;

var posicionar = new function(){
       
       if(jQuery.browser.msie){
                
                var velocidad = 3000;
                
           }if(jQuery.browser.webkit){
                
                var velocidad = 3000;
                
           }else{
            
                 var velocidad = 3000;
           }
        
       this.menu_soy = function(){
        
            if(jQuery('.menu_soy #link_soypadre span').attr('class') == 'soy_padre'){
                
                
               
                maquina.productos.removeAllChildren();
                
                if(maquina.json_consulta[0]['IMAGEN_PRODUCTO']!=""){
                    
                    maquina.add_productos(ROOT_PATH+"frontend/resize_image/"+maquina.json_consulta[0]['IMAGEN_PRODUCTO']+"/199/133");
            
                    jQuery('#descripcion_producto p').html(maquina.json_consulta[0]['DESCRIPCION_PRODUCTO']);
                    
                }
                
                
                $('.scroll-pane').jScrollPane();
               
                jQuery('#img_infonutricional').attr('var',maquina.json_consulta[0]['NOMBRE_PRODUCTO']);
                
                animacion_productos.apagar_luz(lucesmaquina,1,0,1);
                animacion_productos.mover_ruedas(movruedas,0.7,1);
                
                jQuery('#canvas_contacto').show();   

                jQuery('#canvas_productos').show();
                
                jQuery('#canvas_agenda').show();

                jQuery('.nav_menu_soy_chico #menu_soy_padre').show();
                
                
                switch (click){
                    case 5:jQuery('body').scrollTo(1080*4 + (1080-jQuery(window).innerHeight()) -52, 0, {queue:false});
                    break;
                    case 6:jQuery('body').scrollTo(1080*5 + (1080-jQuery(window).innerHeight()) -52, 0, {queue:false});
                    break;
                    case 7:jQuery('body').scrollTo(1080*6 + (1080-jQuery(window).innerHeight()) -52, 0, {queue:false});
                    break;
                    case 8:jQuery('body').scrollTo(1080*7 + (1080-jQuery(window).innerHeight()) -52, 0, {queue:false});
                    break;
                    default:jQuery('body').scrollTo(1080*3 + (1080-jQuery(window).innerHeight()) -52, 0, {queue:false});
                    break;
                    
                }
                                
                
                
                                
                jQuery('body').scrollTo(0 + (1080-jQuery(window).innerHeight()) -52, velocidad, {
                        queue:false,
                        onAfter: function(){
                            
                            //jQuery('.menu_soy #link_soypadre span').attr('class','soy_chico');
                            /**POPUP PASCUAS**/
                            
                            /*jQuery.fancybox({'href':'frontend/propaganda','showCloseButton':true,'opacity':false});*/
                        }
                });    
                        
                           
                
            }else{
                
                ostra.sorpresas.removeAllChildren();
            
                if(ostra.json_consultasorpresa[animacion_museo.index]['IMAGEN_SORPRESA']!=""){
                            
                            ostra.add_sorpresas(ROOT_PATH+"frontend/resize_images/"+ostra.json_consultasorpresa[0]['IMAGEN_SORPRESA']+"/196/172");
                        
                }else{
                            
                }
                
                jQuery('.menu_soy #link_soypadre span').attr('class','soy_padre');
                
                jQuery('.nav_menu_soy_chico #menu_soy_chico').show();
                
                jQuery('.nav_menu_soy_chico #menu_soy_padre').hide();
                
               
                jQuery("body").scrollTo(1080*3 + (1080-jQuery(window).innerHeight()) - 52, velocidad, {queue:false});
               
                setTimeout(function(){
                    
                    jQuery('#canvas_contacto').hide();   

                    jQuery('#canvas_productos').hide();
                    
                    jQuery('#canvas_agenda').hide();
                    
                    //jQuery(document).scrollTop(434);
                    
                    jQuery("body").scrollTo(1080*0 + (1080-jQuery(window).innerHeight()) - 52, 0, {queue:false});
                    
                },velocidad);
                
                click = 0;
            }
                
       } 
       
       this.init = function(){
        
           jQuery('.menu_soy #link_soypadre span').attr('class','soy_padre');
           
           jQuery('.nav_menu_soy_chico #menu_soy_padre').hide();
           
           var distancia = 0 + (1080-jQuery(window).innerHeight()) -52;
                 
           jQuery("body").scrollTo(distancia, 0, {queue:false});
           
          
           $('#link_productos').click(function(){
                 
                 
                 var pos = 0;
                 
                 var distancia = 1080*pos + (1080-jQuery(window).innerHeight()) -52;
                 
                 jQuery("body").scrollTo(1080*pos + (1080-jQuery(window).innerHeight()) - 52, velocidad, {queue:false});
                 
                 click = 1;
                 
           });
           
           $('#link_contacto').click(function()
           {    
                var pos = 1;
                
                var distancia = 1080*pos + (1080-jQuery(window).innerHeight()) -52;
                 
                jQuery("body").scrollTo(1080*pos + (1080-jQuery(window).innerHeight()) - 52, velocidad, {queue:false});
                
                click = 2;  
                  
           });
           
           
            $('#link_agenda').click(function()
           {    
                var pos = 2;
                
                var distancia = 1080*pos + (1080-jQuery(window).innerHeight()) -52;
                 
                jQuery("body").scrollTo(1080*pos + (1080-jQuery(window).innerHeight()) - 52, velocidad, {queue:false});
                
                click = 3;  
                  
           });
           
           $('#link_coleccion').click(function()
           {    
                if(jQuery('.menu_soy #link_soypadre span').attr('class') == 'soy_padre' && jQuery('body').height() <= 5400){
                    var pos = 0;
                }else{
                    var pos = 3;    
                }
                
                var distancia = 1080*pos + (1080-jQuery(window).innerHeight()) -52;
                
                jQuery("body").scrollTo(1080*pos + (1080-jQuery(window).innerHeight()) - 52, velocidad, {queue:false});
                
                click = 4;  
                  
           });
           
           $('#link_verde').click(function(){
            
                if(jQuery('.menu_soy #link_soypadre span').attr('class') == 'soy_padre' && jQuery('body').height() <= 5400){
                    var pos = 1;
                }else{
                    var pos = 4;    
                }
                
                var distancia = 1080*pos + (1080-jQuery(window).innerHeight()) -52;
                
                jQuery("body").scrollTo(1080*pos + (1080-jQuery(window).innerHeight()) - 52, velocidad, {queue:false});
                
                click = 5;
                
           });
           
           
           $('#link_azul').click(function(){
            
                if(jQuery('.menu_soy #link_soypadre span').attr('class') == 'soy_padre' && jQuery('body').height() <= 5400){
                    var pos = 2;
                }else{
                    var pos = 5;    
                }
                
                var distancia = 1080*pos + (1080-jQuery(window).innerHeight()) -52;
                
                jQuery("body").scrollTo(1080*pos + (1080-jQuery(window).innerHeight()) - 52, velocidad, {queue:false});
                
                click = 6;
                
           });
           
           
           $('#link_museo').click(function(){
            
                ostra.sorpresas.removeAllChildren();
            
                if(ostra.json_consultasorpresa[animacion_museo.index]['IMAGEN_SORPRESA']!=""){
                            
                            ostra.add_sorpresas(ROOT_PATH+"frontend/resize_images/"+ostra.json_consultasorpresa[0]['IMAGEN_SORPRESA']+"/196/172");
                        
                }else{
                            
                }
            
                if(jQuery('.menu_soy #link_soypadre span').attr('class') == 'soy_padre' && jQuery('body').height() <= 5400){
                    var pos = 3;
                }else{
                    var pos = 6;    
                }
                
                var distancia = 1080*pos + (1080-jQuery(window).innerHeight()) -52;
                
                jQuery("body").scrollTo(1080*pos + (1080-jQuery(window).innerHeight()) - 52, velocidad, {queue:false});
                
                click = 7;
                
           });
           
           $('#link_juegos').click(function()
           {    
               
                if(jQuery('.menu_soy #link_soypadre span').attr('class') == 'soy_padre' && jQuery('body').height() <= 5400){
                    var pos = 4;
                }else{
                    var pos = 7;    
                }
                
                var distancia = 1080*pos + (1080-jQuery(window).innerHeight()) -52;
                
                jQuery("body").scrollTo(1080*pos + (1080-jQuery(window).innerHeight()) - 52, velocidad, {queue:false});
                
                click = 8;
                  
                  
           });
          
       }
       
}