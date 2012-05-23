var animacion_verde = new function(){
    
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
        .to({y: objeto.obj.y+yf}, t*1000, Ease.getBackIn(2)) 
        .wait(1000)
        .to({y: objeto.obj.y}, t*1000)
        .wait(1000);
    } 
    
    this.mortal = function(objeto,grados,t){
        Tween
        .get(objeto.obj, {loop: true}, true) 
        .to({skewX:grados,skewY:grados}, t*1000) 
        .wait(1000)
    }
    
    this.salir_cueva = function(objeto,t){
        Tween
        .get(objeto.obj, {loop: true}, true) 
        .to({x: objeto.obj.x+2}, t*1000)
        .to({x: objeto.obj.x-5,alpha:0},2000)
        .to({x: objeto.obj.x,alpha:1},2000)
        .wait(1000)
    }
    
    
}