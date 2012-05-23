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
       
} 