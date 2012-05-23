/***Posicionamiento de la pantalla y Menus***/

var posicionar = new function(){
       
       this.tamano_pantalla = jQuery(window).height();
       
       var click = 0;
       
       if(jQuery.browser.msie){
                
                var velocidad = 3000;
                
           }if(jQuery.browser.webkit){
                
                var velocidad = 3000;
                
           }else{
            
                 var velocidad = 3000;
           }
        
       this.menu_soy = function(){
        
            if(jQuery('.menu_soy #link_soypadre span').attr('class') == 'soy_padre'){
                
                jQuery('.menu_soy #link_soypadre span').attr('class','soy_chico');
               
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

                jQuery('.nav_menu_soy_chico #menu_soy_padre').show();
                
                switch (click){
                    case 4:jQuery("body").scrollTo("#anchor_verde", 0, {queue:false});
                    break;
                    case 5:jQuery("body").scrollTo("#anchor_azul", 0, {queue:false});
                    break;
                    case 6:jQuery("body").scrollTo("#anchor_museo", 0, {queue:false});
                    break;
                    case 7:jQuery("body").scrollTo("#anchor_juegos", 0, {queue:false});
                    break;
                    default:jQuery("body").scrollTo("#anchor_home", 0, {queue:false});
                    break;
                    
                }
                                
                //jQuery("body").scrollTo("#anchor_home", 0, {queue:false}); 
                                
                setTimeout(function(){
                    
                    jQuery("body").scrollTo("#anchor_productos", velocidad, {
                        queue:false,
                        onAfter: function(){
                            jQuery.fancybox({'href':'frontend/propaganda','showCloseButton':true,'opacity':false});
                        }
                        });    
                        
                },100);
                
                
            }else{
                
                ostra.sorpresas.removeAllChildren();
            
                if(ostra.json_consultasorpresa[animacion_museo.index]['IMAGEN_SORPRESA']!=""){
                            
                            ostra.add_sorpresas(ROOT_PATH+"frontend/resize_images/"+ostra.json_consultasorpresa[0]['IMAGEN_SORPRESA']+"/196/172");
                        
                }else{
                            
                }
                
                jQuery('.menu_soy #link_soypadre span').attr('class','soy_padre');
                
                jQuery('.nav_menu_soy_chico #menu_soy_chico').show();
                
                jQuery('.nav_menu_soy_chico #menu_soy_padre').hide();
                
               
                jQuery("body").scrollTo("#anchor_home", velocidad, {queue:false});
               
                setTimeout(function(){
                    
                    jQuery('#canvas_contacto').hide();   

                    jQuery('#canvas_productos').hide();
                    
                    //jQuery(document).scrollTop(434);
                    
                    jQuery("body").scrollTo("#anchor_home", 0, {queue:false});
                    
                },velocidad);
              
            }
                
       } 
       
       this.init = function(){
        
           jQuery('.menu_soy #link_soypadre span').attr('class','soy_padre');
           
           jQuery('.nav_menu_soy_chico #menu_soy_padre').hide();
           
          
           $('#link_productos').click(function(){
                
                 jQuery("body").scrollTo("#anchor_productos", velocidad, {queue:false});
                 
                 click = 1;
                 
           });
           
           $('#link_contacto').click(function()
           {    
            
                jQuery("body").scrollTo("#anchor_contacto", velocidad, {queue:false});
                
                click = 2;  
                  
           });
           
           $('#link_coleccion').click(function()
           {    
            
                jQuery("body").scrollTo("#anchor_home", velocidad, {queue:false});
                
                click = 3;  
                  
           });
           
           $('#link_verde').click(function(){
            
                jQuery("body").scrollTo("#anchor_verde", velocidad, {queue:false});
                
                click = 4;
                
           });
           
           
           $('#link_azul').click(function(){
            
                jQuery("body").scrollTo("#anchor_azul", velocidad, {queue:false});
                
                click = 5;
                
           });
           
           
           $('#link_museo').click(function(){
            
                ostra.sorpresas.removeAllChildren();
            
                if(ostra.json_consultasorpresa[animacion_museo.index]['IMAGEN_SORPRESA']!=""){
                            
                            ostra.add_sorpresas(ROOT_PATH+"frontend/resize_images/"+ostra.json_consultasorpresa[0]['IMAGEN_SORPRESA']+"/196/172");
                        
                }else{
                            
                }
            
                jQuery("body").scrollTo("#anchor_museo", velocidad, {queue:false});
                
                click = 6;
                
           });
           
           $('#link_juegos').click(function()
           {    
               
                jQuery("body").scrollTo("#anchor_juegos", velocidad, {queue:false});
                
                click = 7;
                  
                  
           });
          
       }
       
}