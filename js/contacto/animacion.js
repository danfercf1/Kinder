var animacion_contacto = new function()
{   
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
    
    this.pestanear = function(objeto,wi,wf){
        
        Tween
        .get(objeto, {loop: true}, true)
        .wait(wi*1000)
        .to({alpha:0},1)
        .wait(wf*1000);
    }
    
    this.mover_cejas = function(objeto,wi,wf,grados){
        
        Tween
        .get(objeto, {loop: true}, true)
        .wait(wi*1000)
        .to({skewX:grados,skewY:grados},1)
        .wait(wf*1000);
        
    }
    
    this.mover_brazo = function(objeto,wi,wf,grados){
        
        Tween
        .get(objeto, {loop: true}, true)
        .wait(wi*1000)
        .to({skewX:grados},1)
        .wait(wf*1000);
        
    }    
    
    this.mover_brazo2 = function(objeto,wi,wf,grados){
        
        Tween
        .get(objeto, {loop: true}, true)
        .wait(wi*1000)
        .to({skewX:grados,skewY:grados},1)
        .wait(wf*1000);
        
    }
       
} 