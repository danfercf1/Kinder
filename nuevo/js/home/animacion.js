var animacion_museo = new function(){
    
    this.index = 0;
    
    this.objeto = null;
   
    this.horizontal = function(objeto,x0,t,tipoeasing){
        
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
    
    
    this.vertical = function(objeto,y0,t,tipoeasing){
        
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
        .get(objeto.obj, {loop: true}, true) 
        .to({y: y0,scaleY:0.65}, t*1000, easing) 
        .wait(1000)
        .to({y: objeto.obj.y,scaleY:1}, t*1000, easing2)
        .wait(1000);
    }
    
    this.saltar = function(objeto,y0,t){
        Tween
        .get(objeto.obj, {loop: true}, true) 
        .to({y: y0}, t*1000, Ease.getBackIn(2)) 
        .wait(1000)
        .to({y: objeto.obj.y}, t*1000)
        .wait(1000);
    }
    
    this.diagonal = function(objeto,x0,y0,t,w,tipoeasing){
       
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
        .get(objeto.obj, {loop: true}, true)
        .to({x: x0 , y: y0}, t*1000, easing)
        .wait(w*1000) 
        .to({x: objeto.obj.x,y: objeto.obj.y}, t*1000, easing2)
        .wait(w*1000)
    }
   
   this.burbujas = function(count, x, y, x0,y0,yf,t,bub) {
    
        switch(bub){
            case 1: this.url = "images/museo/bubbles19.png";
            break;
            case 2: this.url = "images/museo/bubbles20.png";
            break;
            case 3: this.url = "images/museo/bubbles21.png";
            break;
            case 4: this.url = "images/museo/bubbles-front.png";
            break;
        }
    
        this.bmpAnim = new Bitmap(this.url);
        
        this.contenedor = new Container();
        
        for (var i=1; i <= count; i++) {
            
            this.bmpAnim.name = "bubble"+i;
            this.bmpAnim.id = "bubble"+i;
    		//this.bmpAnim.speed = speed;
    		this.bmpAnim.direction = 90;
    		
            this.bmpAnim.y = this.bmpAnim.y + 20;
            
            this.bmpAnim.x = this.bmpAnim.x + Math.random()*3;
            
            //console.log(Math.random());
            
            this.sparkle = this.bmpAnim;
            
            //this.bmpAnim.x = x
            
    		this.sparkle.alpha = Math.random()*0.5 + 0.5;
            
    		this.sparkle.scaleX = this.sparkle.scaleY = Math.random()+0.3;
            
            this.sparkle = this.sparkle.clone(); 
            
            this.contenedor.x= x0;
            
            this.contenedor.y= y0;
            
            this.contenedor.addChild(this.sparkle);
            
    		stage_museo.addChild(this.contenedor);
            
            Tween
            .get(this.contenedor,{loop: true}, true)
            .to({y: yf}, t*1000);
            
            stage_museo.update();
        }
    }
    
    this.mover_burbujas = function(funcion,xi,yi,yf,t){
        
        this.w = canvas_museo.width;
	    this.h = canvas_museo.height;
        
        funcion.obj.x = xi;
        funcion.obj.y = yi;
          
        Tween
        .get(funcion.obj,{loop: true}, true)
        .to({y: yf}, t*1000);
    }
    
    this.botones = function(obj){
        
        obj.onClick = function(evt){
        
        //console.log(animacion_museo.index);
           
           if(obj.name == "der"){
            
                  if(animacion_museo.index+1 < _imagenes.length){
                    
                    animacion_museo.index++;
                    
                  }else{
                    
                    animacion_museo.index = 0;
                    
                  }
                  
                  //animacion_museo.fadein(ostra.add_sorpresas.sorpresa);
                  
                  ostra.sorpresas.removeAllChildren();
                
                  ostra.add_sorpresas("images/sorpresas/"+_imagenes[animacion_museo.index]);
           }
           
           if(obj.name == "izq"){
                
                    if(animacion_museo.index > 0){
                        
                        animacion_museo.index--;
                            
                    }else{
                        
                        animacion_museo.index = _imagenes.length-1;
                    }
                    
                    ostra.sorpresas.removeAllChildren();
                    ostra.add_sorpresas("images/sorpresas/"+_imagenes[animacion_museo.index]);
           }
        }
    }
    
    this.escalado = function(obj,tam){
        
        obj.scale = 1; 
        
        obj.onMouseOver = function(){
                obj.scaleX = obj.scaleY = obj.scale*tam;
                oncanvas_museo.mouse.cursor("pointer");
                stage_museo.update();
        }
        
		obj.onMouseOut = function(){
		        obj.scaleX = obj.scaleY = obj.scale;
                oncanvas_museo.mouse.cursor("default");
                stage_museo.update();
        }
    }
    
    this.fadein = function(objeto){
        Tween
        .get(objeto, {loop: false}, true)
        .to({x:00,y:00,alpha:1},4000)
        
    }
    
    this.fadeout = function(objeto){
        Tween
        .get(objeto, {loop: false}, true)
        .to({alpha:0},300)
    }
    
    this.flotar = function(objeto,yf,t,w){
        
        for (var i=0; i < objeto.itemsbit.length;i++){
            
            Tween
            .get(objeto.itemsbit[i], {loop: true}, true)
            .to({y: objeto.itemsbit[i].y + (Math.random()*15+i)}, t*1000, Ease.sineIn())
            .wait(w*1000)
            .to({y: objeto.itemsbit[i].y}, t*1000, Ease.sineIn())
            .to({y: objeto.itemsbit[i].y - (Math.random()*15+i)}, t*1000, Ease.sineIn())
            .wait(w*1000)
            .to({y: objeto.itemsbit[i].y}, t*1000, Ease.sineIn())
            
        }
        
    }
   
} 