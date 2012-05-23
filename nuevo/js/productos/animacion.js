var animacion_productos = new function()
{   
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
            
            if(lucesmaquina.obj.alpha == 1){ //Apagar
            
                animacion_productos.apagar_luz(lucesmaquina,1,0,0);
                movruedas.obj.alpha = 0;
                Tween
                .removeTweens(movruedas.obj);
                   
            }else{                          //Encender
            
                animacion_productos.apagar_luz(lucesmaquina,1,0,1);
                animacion_productos.mover_ruedas(movruedas,0.7,1);
                
            }
            
            
        }
    }
    
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
    
    this.mover_ruedas = function(objeto,t,onoff){
        
        Tween
        .get(objeto.obj, {loop: true}, true)
        .to({alpha: onoff}, t*1000)
    }  
       
} 