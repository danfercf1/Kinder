var animacion_productos = new function()
{   
    
    this.index = 0;
    
    /***Movimiento horizontal***/
    
    this.horizontal = function(objeto,x0,t,w0,w,tipoeasing){
        
        this.objeto = objeto;
        
        switch (tipoeasing){
            case 1: 
            easing = Ease.bounceIn;
            easing2 = Ease.bounceOut;
            break;
            case 2: 
            easing = Ease.bounceOut;
            easing2 = Ease.bounceIn;  
            break;
            case 0:
            easing = false;
            easing2 = false;  
            break;
            
        }
        
        Tween
        .get(this.objeto.obj, {loop: true}, true)
        .wait(w0*1000) 
        .to({x: x0}, t*1000, easing)
        .wait(w*1000)
        .to({x: this.objeto.obj.x}, t*1000, easing2)
        .wait(w*1000)
    }
    
    /***Apagar luces***/
    
    this.apagar_luz = function(objeto,t,w,onoff){
        
        Tween
        .get(objeto.obj, {loop: false}, true)
        .to({alpha: onoff}, t*1000)
    }
    
    this.mover_palanca = function(objeto){
        
        objeto.obj.onClick = function(evt){
            
            if(maquina.json_consulta!=""){
            
                    if(animacion_productos.index+1 < maquina.json_consulta.length){
                            
                           animacion_productos.index++;
                            
                    }else{
                            
                           animacion_productos.index = 0;
                            
                    }
                    
                    maquina.productos.removeAllChildren();
                    
                    //maquina.add_productos("images/productos/"+maquina.json_consulta[animacion_productos.index]['IMAGEN_PRODUCTO']);
                    
                    if(maquina.json_consulta[animacion_productos.index]['IMAGEN_PRODUCTO']!=""){
                    
                        maquina.add_productos(ROOT_PATH+"frontend/resize_image/"+maquina.json_consulta[animacion_productos.index]['IMAGEN_PRODUCTO']+"/199/133");
                    
                    }else{
                        
                    }
                    
                    jQuery('#descripcion_producto p').html(maquina.json_consulta[animacion_productos.index]['DESCRIPCION_PRODUCTO']);
                    
                    $('.scroll-pane').jScrollPane();
                   
                    jQuery('#img_infonutricional').attr('var',maquina.json_consulta[animacion_productos.index]['NOMBRE_PRODUCTO']);
                     
                    animacion_productos.apagar_luz(lucesmaquina,1,0,1);
                    animacion_productos.mover_ruedas(movruedas,0.7,1);
                    
                    animacion_productos.retornar_palanca(objeto,0.7);
                
              }
        }
    }
    
    /***Puntero***/
    
    this.puntero = function(objeto){
        
        objeto.obj.onMouseOver = function(){
            
                oncanvas_productos.mouse.cursor("pointer");
                stage_productos.update();
                
        }
        
        objeto.obj.onMouseOut = function(){
            
                oncanvas_productos.mouse.cursor("default");
                stage_productos.update();
                
        }
    }
    
    /***Movimiento Ruedas***/
    
    this.mover_ruedas = function(objeto,t,onoff){
        
        Tween
        .get(objeto.obj, {loop: true}, true)
        .to({alpha: onoff}, t*1000)
    }
    
    /***Informacion Nutricional***/
    
    this.boton_infonutricional = function(objeto,url){
       
       if(jQuery('#img_infonutricional').attr('var')!=" "){
           
           objeto.obj.onClick = function(){
                    var imagen = jQuery('#img_infonutricional').attr('var');
                    jQuery.fancybox({'href':url+imagen,'showCloseButton':true,'opacity':true});
                    
           }
       }
    }
    
    this.movimiento_palanca = function(objeto){
        
        if(maquina.json_consulta!=""){
            
           objeto.obj.onPress = function(evt) {
				// bump the objeto in front of it's siblings:
				
				var offset = {x:objeto.obj.x-evt.stageX, y:0};
                
				// add a handler to the event object's onMouseMove callback
				// this will be active until the user releases the mouse button:
				evt.onMouseMove = function(ev) {
				    if(ev.stageY != 652){
				           if(ev.stageX > 703 && ev.stageX < 769 ){
                               ev.stageY = 652;
        				       objeto.obj.x = ev.stageX+offset.x;
        					   objeto.obj.y = ev.stageY;
                               
                               if(objeto.obj.x <= 700){
                                    valor = 725-objeto.obj.x;

                                    if(animacion_productos.index > 0){
                            
                                           animacion_productos.index--;
                                            
                                    }else{
                                            
                                           animacion_productos.index = maquina.json_consulta.length-1;
                                            
                                    }
                                    
                                    maquina.productos.removeAllChildren();
                                    
                                    maquina.add_productos("images/productos/"+maquina.json_consulta[animacion_productos.index]['IMAGEN_PRODUCTO']);
                                    
                                    jQuery('#descripcion_producto p').html(maquina.json_consulta[animacion_productos.index]['DESCRIPCION_PRODUCTO']);
                                    
                                    $('.scroll-pane').jScrollPane();
                                   
                                    jQuery('#img_infonutricional').attr('var',maquina.json_consulta[animacion_productos.index]['NOMBRE_PRODUCTO']);
                                    
                                    animacion_productos.retornar_palanca(objeto,0.5,valor);
                                    
                               }
                               if(objeto.obj.x >= 745){
                                    valor = (objeto.obj.x-725)*(-1);

                                    if(animacion_productos.index+1 < maquina.json_consulta.length){
                            
                                           animacion_productos.index++;
                                            
                                    }else{
                                            
                                           animacion_productos.index = 0;
                                            
                                    }
                                    
                                    maquina.productos.removeAllChildren();
                                    
                                    maquina.add_productos("images/productos/"+maquina.json_consulta[animacion_productos.index]['IMAGEN_PRODUCTO']);
                                    
                                    jQuery('#descripcion_producto p').html(maquina.json_consulta[animacion_productos.index]['DESCRIPCION_PRODUCTO']);
                                    
                                    $('.scroll-pane').jScrollPane();
                                   
                                    jQuery('#img_infonutricional').attr('var',maquina.json_consulta[animacion_productos.index]['NOMBRE_PRODUCTO']);
                                    
                                    animacion_productos.retornar_palanca(objeto,0.5,valor);
                               }
                           }
				    }
					

				}
                
                stage_productos.update();
            }
        }
	}
    
    this.retornar_palanca = function(objeto,t){
        
        Tween
        .get(objeto.obj, {loop: false}, true)
        .to({x:objeto.obj.x+70}, t*1000)
        .to({x: objeto.obj.x},t*1000)
        .wait(2000);
    }
    
    this.girar_logo = function(){
        
    }
    
    this.pestanear = function(objeto,wi,wf){
        
        Tween
        .get(objeto, {loop: true}, true)
        .wait(wi*1000)
        .to({alpha:0},1)
        .wait(wf*1000);
    }
       
} 