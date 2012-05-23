var animacion_azul = new function(){
    
    this.horizontal_pajaros = function(objeto,x0,t,tipoeasing){
        
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
        .to({x: x0}, t*1000, easing)
        .call(this.voltear,[objeto,180])
        .to({x: this.objeto.obj.x}, t*1000, easing2)
        .call(this.voltear,[objeto,0]);
       
    }
    
    this.voltear = function(objeto,grados){
        for (var i=0; i < objeto.itemsbit.length;i++){
            objeto.itemsbit[i].skewY = grados;
        }
    }
    
    this.saltar = function(objeto,yf,t){
        Tween
        .get(objeto.obj, {loop: true}, true) 
        .to({y: objeto.obj.y+yf}, t*1000, Ease.elasticIn)
        .to({y: -200},t*1000) 
        .wait(1000)
        .to({y: objeto.obj.y}, t*1000)
        .wait(1000);
    }
    
    this.flotar = function(objeto,yf,t,w){
        
        Tween
        .get(objeto.obj, {loop: true}, true)
        .to({y: objeto.obj.y + (Math.random()*15)}, t*1000, Ease.sineIn())
        .wait(w*1000)
        .to({y: objeto.obj.y}, t*1000, Ease.sineIn())
        .to({y: objeto.obj.y - (Math.random()*15)}, t*1000, Ease.sineIn())
        .wait(w*1000)
        .to({y: objeto.obj.y}, t*1000, Ease.sineIn())
        
    }
    
    this.humo = function(objeto,yf,t,w){
        
        Tween
        .get(objeto.obj, {loop: true}, true)
        .to({y: objeto.obj.y+yf,alpha:0}, t*1000, Ease.sineIn())
        .to({y: objeto.obj.y,alpha:0}, t*1000, Ease.sineIn())
        
    }
    
    /***Objeto particular***/
    
    this.pestanear = function(objeto,wi,wf){
        
        Tween
        .get(objeto, {loop: true}, true)
        .wait(wi*1000)
        .to({alpha:0},1)
        .wait(wf*1000);
    }
    
    
    this.salir_escondite = function(objeto,xf,t,w){
        
        var antiguo = objeto.obj.x;
        
        objeto.obj.onMouseOver = function(){
            
            objeto.obj.scaleX = objeto.scaleY = 1.01;
            
            oncanvas_azul.mouse.cursor("pointer");
        }
        
        objeto.obj.onMouseOut = function(){
                
                objeto.obj.scaleX = objeto.scaleY = 1;
                
                oncanvas_azul.mouse.cursor("default");
        }
        
        objeto.obj.onClick= function(){
            
            if(xf > 0 && objeto.obj.x <= antiguo+xf){
                
                console.log(objeto.obj.x);
                
                Tween
                .get(objeto.obj, {loop: false}, true)
                .to({x:objeto.obj.x+xf},t*1000)
                .wait(t*1000)
                .to({x:objeto.obj.x},t*1000);
                
            }if(xf < 0 && objeto.obj.x >= antiguo+xf){
                
                Tween
                .get(objeto.obj, {loop: false}, true)
                .to({x:objeto.obj.x+xf},t*1000)
                .wait(t*1000)
                .to({x:objeto.obj.x},t*1000);
                
            }else{
                
                objeto.obj.x = antiguo;
                return false;
                
                    
            }
            
            
        }
        
        //stage_azul.update();
    }
    
    
    this.salir_escondite2 = function(objeto,xf,t,w){
        
        objeto.obj.onMouseOver = function(){
            
            oncanvas_azul.mouse.cursor("pointer");
        }
        
        objeto.obj.onMouseOut = function(){
                
                oncanvas_azul.mouse.cursor("default");
             
        }
        
        objeto.obj.onClick = function(){
            Tween
            .get(objeto.obj, {loop: false}, true)
            .to({scaleX: 1.25 ,scaleY: 1.25},t*1000)
            .wait(t*1000)
            .to({scaleX: 1 ,scaleY: 1},t*1000);
            stage_azul.update();
        }
   }
    
    this.entrar_cueva = function(objeto,t){
        
        objeto.obj.onMouseOver = function(){
            
            objeto.obj.scaleX = objeto.scaleY = 1.01;
            oncanvas_azul.mouse.cursor("pointer");
            
            Tween
            .get(objeto.obj, {loop: false}, true) 
            .to({x: objeto.obj.x-5,alpha:0},2000)
            .wait(15000)
            .to({x: objeto.obj.x,alpha:1},2000)
            
        }
        
        objeto.obj.onMouseOut = function(){
            
            objeto.obj.scaleX = objeto.scaleY = 1;
            oncanvas_azul.mouse.cursor("default");
                
                /*Tween
                .get(objeto.obj, {loop: false}, true)
                .to({scaleX: 1 ,scaleY: 1},t*1000);*/
            
        }
    }
    
    this.ocultarse_piso = function(objeto,t){
        
        objeto.obj.onMouseOver = function(){
           
            objeto.obj.scaleX = objeto.scaleY = 1.01;
            
            oncanvas_azul.mouse.cursor("pointer");
            
            
            Tween
            .get(objeto.obj, {loop: false}, true) 
            .to({y: objeto.obj.y+3,alpha:0},2000)
            .wait(15000)
            .to({y: objeto.obj.y,alpha:1},2000)
            
        }
        
        objeto.obj.onMouseOut = function(){
            
            objeto.obj.scaleX = objeto.scaleY = 1;
            
            oncanvas_azul.mouse.cursor("default");
            
            
                /*Tween
                .get(objeto.obj, {loop: false}, true)
                .to({scaleX: 1 ,scaleY: 1},t*1000);*/
            
        }
    }
    
    this.mostrar_muneco = function(objeto,objeto2){
        
            objeto.onMouseOver = function(){
                
                objeto.scaleX = objeto.scaleY = 1.01; 
                
                oncanvas_azul.mouse.cursor("pointer");
                
            }
            
            objeto2.onMouseOver = function(){
                
                objeto.scaleX = objeto.scaleY = 1.01;
                
                oncanvas_azul.mouse.cursor("pointer");
                
            }
            
            objeto.onClick = function(){
                
                objeto.alpha = 0;    
                
                objeto2.alpha = 1;
                    
            }
            
            objeto2.onClick = function(){
                
                objeto.alpha = 1;
                
                objeto2.alpha = 0;
                
            }
            
            objeto.onMouseOut = function(){
                
                objeto.scaleX = objeto.scaleY = 1;
                oncanvas_azul.mouse.cursor("default");
                
                
            }
            
            objeto2.onMouseOut = function(){
                
                objeto.scaleX = objeto.scaleY = 1;
                
                oncanvas_azul.mouse.cursor("default");
                
                
            }            
            
            
            
    }
    
    this.movimiento_carro = function(objeto,t,w){
        
        objeto.onMouseOver = function(){
                
                objeto.scaleX = objeto.scaleY = 1.01;
                
                oncanvas_azul.mouse.cursor("pointer");
                
                
        }
        
        objeto.onMouseOut = function(){
                
                objeto.scaleX = objeto.scaleY = 1;
                
                oncanvas_azul.mouse.cursor("default");
                
        }
        
        objeto.onClick  = function(){
            
            Tween
            .get(objeto, {loop: false}, true) 
            .to({x: objeto.x-50,y:objeto.y+10},1000*t)
            .wait(1000*w)
            .to({x: objeto.x-400,y:objeto.y+50},1000*t)
            .to({x: objeto.x,y:objeto.y},1000*t)
        
        }
        
        
    }
} 