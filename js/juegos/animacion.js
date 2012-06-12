var animacion_juegos = new function(){
    
    this.index = 0;
    
    this.estrellas = function(t,cantidad,tipo_estrella,escala){
        
        this.itemsbit = new Array();
    
        this.obj = new Container();
        
        switch(tipo_estrella){
            
            case 1: this.estrella = "images/juegos/stars1.png";
            break;
            case 2: this.estrella = "images/juegos/stars11.png";
            break;
            case 3: this.estrella = "images/juegos/stars13.png";
            break;
            case 4: this.estrella = "images/juegos/stars20.png";
            break;
            case 5: this.estrella = "images/juegos/stars4.png";
            break;
            default:this.estrella = "images/juegos/stars10.png";
        }
        
        this.contenedor = new Container();
        
        this.w = canvas_juegos.width;
	    
        this.h = canvas_juegos.height;
        
        for (var i=1; i <= cantidad; i++) {
            
            this.bmpAnim = new Bitmap(this.estrella);
            
            this.bmpAnim.name = "stars"+i;
            
            this.bmpAnim.id = "stars"+i;
    		
    	    this.sparkle = this.bmpAnim;
            
           	this.sparkle.alpha = Math.random()*0.5 + 0.5;
            
    		this.sparkle.scaleX = this.sparkle.scaleY = Math.random()+escala;
            
            this.sparkle.x = Math.random()*(this.w)+0|0;
		    
            this.sparkle.y = Math.random()*(this.h-250)+0|0;
            
            this.sparkle = this.sparkle.clone(); 
            
            stage_juegos.addChild(this.sparkle);
            
            Tween
            .get(this.sparkle,{loop: true}, true)
            .to({x:Math.random()*(this.w)+60|0 , y: Math.random()*(this.h-250)+60|0, alpha:0}, t*1000)
            .wait(1000);
            
            stage_juegos.update();
        }        
        
    }
    
    this.vertical = function(objeto,y0,t,w,tipoeasing){
        
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
        .wait(w*1000) 
        .to({y: objeto.obj.y + y0,scaleY:0.85}, t*1000, easing) 
        .wait(w*1000)
        .to({y: objeto.obj.y,scaleY:1}, t*1000, easing2);
       
    }
    
    this.diagonal = function(objeto,x0,y0,t,w,tipoeasing){
       
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
        .wait(w*1000);
    }
    
    this.voltear = function(objeto,grados){
        objeto.skewY = grados;
    }
    
    this.ufo_complejo = function(objeto,xf,yf,distancia,t,w){
        
        var i = objeto.obj.x;
        
        while(i <= xf){
            
            Tween
            .get(objeto.obj, {loop: true}, true)
            .to({x: objeto.obj.x + distancia}, t*1000)
            .wait(w*1000)
            .to({x: objeto.obj.x + distancia,y: objeto.obj.y + distancia}, t*1000)
            .wait(t*1000)
            .to({x: objeto.obj.x,y: objeto.obj.y}, t*1000)
            .wait(w*1000);
            i = i + distancia;
            
        }
    }
    
    this.saltar = function(objeto,y0,t){
        Tween
        .get(objeto.obj, {loop: true}, true) 
        .to({y: objeto.obj.y + y0}, t*1000, Ease.getBackInOut(1)) 
        .wait(1000)
        .to({y: objeto.obj.y}, t*1000)
        .wait(1000);
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
    
    this.puntero = function(objeto){
        
        objeto.onMouseOver = function(){
            
                oncanvas_juegos.mouse.cursor("pointer");
                //animacion_juegos.escalado(objeto,1.02,1);
                stage_juegos.update();
                
        }
        
        objeto.onMouseOut = function(){
            
                oncanvas_juegos.mouse.cursor("default");
                //animacion_juegos.escalado(objeto,0,0);
                stage_juegos.update();
                
        }
    }
    
    this.botones = function(obj){
        
        obj.onClick = function(evt){
        
           if(obj.name == "der"){
            
                  if(animacion_juegos.index+1 <navegador.bitmap_juegos.length){
                    
                    animacion_juegos.index++;
                    
                  }else{
                    
                    animacion_juegos.index = 0;
                    
                  }
                  
                  //animacion_juegos.fadein(navegador.add_juegos.sorpresa);
                  
                  navegador.juegos.removeAllChildren();
                
                  navegador.add_juegos(navegador.bitmap_juegos[animacion_juegos.index]);
                  animacion_juegos.link(navegador.bitmap_juegos[animacion_juegos.index]);
                  animacion_juegos.puntero(navegador.bitmap_juegos[animacion_juegos.index]);
                                    
           }
           
           if(obj.name == "izq"){
                
                    if(animacion_juegos.index > 0){
                        
                        animacion_juegos.index--;
                            
                    }else{
                        
                        animacion_juegos.index = navegador.bitmap_juegos.length-1;
                    }
                    
                    navegador.juegos.removeAllChildren();
                    
                    navegador.add_juegos(navegador.bitmap_juegos[animacion_juegos.index]);
                    animacion_juegos.link(navegador.bitmap_juegos[animacion_juegos.index]);
                    animacion_juegos.puntero(navegador.bitmap_juegos[animacion_juegos.index]);
           }
        }
    }
    
    this.link = function(objeto){
        
        objeto.onClick = function(evt){
            
            if(objeto.name=="velocidad"){
                //_gaq.push(['_trackEvent', 'Links_Juegos', 'Velocidad']);
                _gaq.push(['_trackEvent', 'Juegos', 'Velocidad', 'Velocidad']);

                window.open("http://www.kindervelocidad.com/");
            }if(objeto.name=="skater"){
                //_gaq.push(['_trackEvent', 'Links_Juegos', 'Skater']);
                _gaq.push(['_trackEvent', 'Juegos', 'Skater', 'Skater']);
                window.open("http://skater.kinder.com.ar/");
            }
        }
        
    }

}