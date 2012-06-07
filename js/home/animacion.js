var animacion_home = new function()
{   
    this.objeto = null;
   
   // animacion.horizontal(pecesamarillos3,1200,13,0);

    this.horizontal = function(objeto,x0,t,tipoeasing)
    {           
            this.objeto = objeto;
                    
            switch (tipoeasing)
            {
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
        . get(this.objeto.obj, {loop: true}, true ) 
        . to({x: x0}, t*1000, easing)
        . call(this.voltear_solo,[objeto,180])
        . to({x: this.objeto.obj.x}, t*1000, easing2)
        . call(this.voltear_solo,[objeto,0]); 
        
    }
    
    /*this.horizontal_avion2 = function(objeto,x0,t,tipoeasing)
    {           
            this.objeto = objeto;
                    
            switch (tipoeasing)
            {
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
        . get(this.objeto.obj, {loop: true}, true ) 
        . to({x: x0}, t*1000, easing)
        . to({scaleX:0.25 ,scaleY:0.25, y: (canvas_home.height/2)+80})
        . call(this.voltear_solo,[objeto,180])
        . to({x: this.objeto.obj.x}, t*1000, easing2)
        . call(this.voltear_solo,[objeto,0]);
        
    }*/
    
    this.horizontal_avion = function(objeto,x0,t,tipoeasing,escala,wi,wf)
    {           
            this.objeto = objeto;
                    
            switch (tipoeasing)
            {
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
        . get(this.objeto.obj, {loop: true}, true )
        .wait(wi*1000)
        . to({scaleX:escala ,scaleY:escala})
        . to({x: x0}, t*1000, easing)
        .wait(wf*1000)
        
    }
    
    this.mover_nube_der_izq_horizontal = function(objeto,x0,t,tipoeasing)
    {           
        
            this.objeto = objeto ;                                  
            switch (tipoeasing)
            {
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
         . get(this.objeto.obj, {loop: true}, true ) 
         . to({x: x0,scaleX:1}, t, easing)         
         . to({x: canvas_home.width+350}, t, easing2);
          
                         
    }
    
     this.mover_nube_izq_der_horizontal = function(objeto,x0,t,tipoeasing)
    {           
        
            this.objeto = objeto ;                                  
            switch (tipoeasing)
            {
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
         . get(this.objeto.obj, {loop: true}, true ) 
         . to({x: x0,scaleX:1},t , easing)     
         . to({x: -200}, t, easing2);
          
                         
    }        
            
    this.iniciar_nube=function(objeto)
    {
        //alert(objeto.obj.x);
        objeto.obj.x=canvas_home.width+350 ;
        //alert(objeto.obj.x);

    }
    
    this.voltear = function(objeto,grados)
    {
        for (var i=0; i < objeto.itemsbit.length;i++)
        {
            objeto.itemsbit[i].skewY = grados;
        }
    }
    
    this.voltear_solo = function(objeto,grados)
    {
          objeto.obj.skewY = grados;
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
    
    this.diagonal = function(objeto,x0,y0,t,w,tipoeasing)
    {
       
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
      
    this.pajaro_rojo_diagonal = function(objeto,x0,y0,t,w,tipoeasing,tipoPajaro) 
    {
       
     //  alert("Xo:"+x0+","+"Yo:"+ y0 ) ;

        this.objeto = objeto;
        
        switch (tipoeasing)
        {
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
          
         // . call(this.voltear,[objeto,0]) ;

         Tween
                . get(objeto.obj, {loop: true}, true)
                . to({x: x0 , y: y0}, t, easing)
                .  wait(w) 
                . call(this.iniciar_pajaro_rojo,[objeto,tipoPajaro])                               
                . to({x: x0,y: y0}, t, easing2)
                
    }
     this.iniciar_pajaro_rojo=function(objeto,tipoPajaro)
    {
        


            if(tipoPajaro==1)
            {
                objeto.obj.x  = - 100 ;
                objeto.obj.y  = 340  ;     
            }
                    
            if(tipoPajaro == 2 )
            {
               objeto.obj.x  = - 90 ;
                objeto.obj.y  = 350  ;      
            }
            if(tipoPajaro == 3 )
            {
               objeto.obj.x  = - 80 ;
                objeto.obj.y  = 360  ;      
            }
            
            if(tipoPajaro == 4 )
            {
               objeto.obj.x  = - 80 ;
                objeto.obj.y  = 360  ;      
            }
        
    }
   
    this.pajaro_amarillo_diagonal = function(objeto,x0,y0,t,w,tipoeasing,tipoPajaro) 
    {
       
     //  alert("Xo:"+x0+","+"Yo:"+ y0 ) ;

        this.objeto = objeto;
        
        switch (tipoeasing)
        {
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
          
         // . call(this.voltear,[objeto,0]) ;

         Tween
              . get(objeto.obj, {loop: true}, true)
              . to({x: x0 , y: y0}, t, easing)
              .  wait(w) 
              . call(this.iniciar_pajaro_amarillo , [objeto,tipoPajaro])                                
              . to({x: x0,y: y0}, t, easing2)
              
                
    }
    
    this.iniciar_pajaro_amarillo=function(objeto,tipoPajaro)
    {
                           
            if(tipoPajaro==1)
            {        
                 objeto.obj.x =(canvas_home.width) ;          
                 objeto.obj.y =canvas_home.height/2 + 250 ; 
            }
            
                    
                   
                    if(tipoPajaro == 2 )
                    {
                        objeto.obj.x =(canvas_home.width) ;          
                        objeto.obj.y =canvas_home.height/2 + 200 ;  
                    }
                    
                    
                    if(tipoPajaro == 3 )
                    {
                       objeto.obj.x  = - (canvas_home.width) ; ;
                        objeto.obj.y  = canvas_home.height/2 + 150   ;      
                    }
                    
                    
                                        
                    if(tipoPajaro == 4 )
                    {
                       objeto.obj.x  = - (canvas_home.width) ;
                        objeto.obj.y  = canvas_home.height/2 + 100   ;      
                    }
                    
                       if(tipoPajaro == 5 )
                    {
                       objeto.obj.x  = - (canvas_home.width) ;
                        objeto.obj.y  = canvas_home.height/2 + 50   ;      
                    }
    }
    
    
    this.mover_logo_kinder = function(objeto,y0,t,w,tipoeasing,tipoPajaro) 
    {   
        this.objeto = objeto ;
                         
        switch (tipoeasing)
        {
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
              . get(objeto.obj, {loop: true}, true)
              . to({ y: y0}, t, easing)
              .  wait(w)             
              . to({y: objeto.obj.y}, t, easing2)
              .  wait(w)
    }
    
    
    this.mover_guardian_tierra = function(objeto,objeto2,x0,y0,t,w,tipoeasing) 
    {        
        
        this.objeto = objeto ;
                      
        switch (tipoeasing)
        {
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
                  . get(objeto.obj, {loop: true}, true)
                  . to({x:x0 , y: y0}, t, easing)
                  .  wait(w)             
                  . to({x:x0, y: y0}, t, easing2)
                  .  wait(w)
                  
                  
                  
        Tween
                  . get(objeto2.obj, {loop: true}, true)
                  . to({x:objeto2.obj.x , y: objeto2.obj.y-10}, t, easing)
                  .  wait(w)             
                  . to({x:objeto2.obj.x, y: objeto2.obj.y-10}, t, easing2)
                  .  wait(w)                  
    }


this.mover_soy_padre = function(objeto,x0,y0,t,w,tipoeasing) 
    {        
        
        this.objeto = objeto ;
                      
        switch (tipoeasing)
        {
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
                  . get(objeto.obj, {loop: true}, true)
                  . to({x:x0 , y: y0}, t, easing)
                  .  wait(w)             
                  . to({x:objeto.obj.x, y: objeto.obj.y}, t, easing2)
                  .  wait(w)
                      
    }
    
        
    this.mover_manguera_gotas_1 = function(objeto,x0,y0,t,w,tipoeasing) 
    {   
        
        this.objeto = objeto ; 
                                              
        switch (tipoeasing)
        {
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
                  . get(objeto.obj, {loop: true}, true)
                  . to({x:x0 , y: y0}, t, easing)
                  .  wait(w)
    }
    
     this.mover_manguera_gotas_2_5 = function(objeto,x0,y0,t,w,tipoeasing) 
    {   
        
        this.objeto = objeto ; 
                                              
        switch (tipoeasing)
        {
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
                  . get(objeto.obj, {loop: true}, true)
                  
                  . to({x:x0 , y: y0}, t, easing)
                  .  wait(w)


                //stage.update();
    }
    
    
    
    this.escalado_en_XoY = function(obj,tam,tipoEscalado)
    {
        
           obj.scale = 1; 
        
         switch (tipoEscalado)
        {
            case "X": 
                   obj.onMouseOver = function()
                    {
                            //obj.scaleX =  obj.scale*tam;

                            //oncanvas_home.mouse.cursor("pointer");

                            cursor_izquierda.init_fondo.removeAllChildren();
                            
                            stage.update();
                    }
                    
            		obj.onMouseOut = function(scaleXoY)
                    {
                            //obj.scaleX = obj.scale;

                            //oncanvas_home.mouse.cursor("default");

                            stage.update();
                    }
        
            break;
            case "Y":
            
                    obj.onMouseOver = function()
                    {
                            obj.scaleY =  obj.scale*tam;
                             //console.log( obj);

                            oncanvas_home.mouse.cursor("pointer");
                            stage.update();
                    }
                    
            		obj.onMouseOut = function(scaleXoY)
                    {
                            obj.scaleY = obj.scale;                             
                            oncanvas_home.mouse.cursor("default");
                            stage.update();
                    }
        
                       
            break;
              
            break;
            case "XY":
                obj.onMouseOver = function()
                    {
                        obj.scaleX=obj.scaleY =  obj.scale*tam;
                        
                         oncanvas_home.mouse.cursor("pointer");
                         stage.update();
                    }
                    
            		obj.onMouseOut = function(scaleXoY)
                    {
                            obj.scaleX =obj.scaleY = obj.scale;                             
                            oncanvas_home.mouse.cursor("default");
                            stage.update();
                    }            
            break;
            
            default:;
        }
        
        
        
                       
       
        
        
    }

  
   this.call_burbujas =  function(cantidad,x,y){
	   this.burbujas(cantidad, x, y,1);
   }

   this.burbujas = function(count, x, y, speed) {
    
        this.bmpAnim = new Bitmap("images/bubbles19.png");
        this.bmpAnimList = [];
    	
        this.w = canvas_home.width;
	    this.h = canvas_home.height;
        
        for (var i=0; i < count; i++) {
            
            this.bmpAnim.name = "bubble"+i;
            this.bmpAnim.id = "bubble"+i;
    		this.bmpAnim.speed = speed;
    		this.bmpAnim.direction = 90;
    		
            this.bmpAnim.y = this.bmpAnim.y + 20;
            
            this.sparkle = this.bmpAnim;
            
            this.sparkle.x = x;
            
    		this.sparkle.alpha = Math.random()*0.5+0.5;
            
    		this.sparkle.scaleX = this.sparkle.scaleY = Math.random()+0.3;
            
            this.sparkle.rotation = 45; 
           
            this.sparkle = this.sparkle.clone(); 
            
    		stage.addChild(this.sparkle);
            this.bmpAnimList.push(this.bmpAnim);
            //console.log(this.bmpAnim);
        }
    }
    
    this.parpadeo = function(objeto,t,alfa){
            Tween
            .get(objeto.obj, {loop: false}, true)
            .to({alpha: alfa}, t*1000)
            .to({alpha: 0}, t*1000)
            .to({alpha: alfa}, t*1000)
            .to({alpha: 0}, t*1000)
            .to({alpha: alfa}, t*1000)
    }
    
    
    this.botones = function(obj){
        
        obj.onClick = function(evt){
            
          
        }
    }
    
    
    this.puntero = function(objeto){
        
            objeto.obj.onMouseOver = function(){
                
                oncanvas_home.mouse.cursor("pointer");
                
                if(objeto.obj.name == "der"){
                    
                    cursor_derecha.cursor_derecha_imagen.alpha = 0;
                    
                    cursor_derecha.cursor_right_imagen.alpha = 1;                   
                      
                }
               
                if(objeto.obj.name == "izq"){
                    
                    cursor_izquierda.cursor_izquierda_imagen.alpha = 0;
                    
                    cursor_izquierda.cursor_left_imagen.alpha = 1; 
                      
                }    
                
                
                stage.update();
                
            }
            
           objeto.obj.onMouseOut = function(){
            
                oncanvas_home.mouse.cursor("default");
                
                if(objeto.obj.name == "der"){
                    
                    cursor_derecha.cursor_derecha_imagen.alpha = 1;
                    
                    cursor_derecha.cursor_right_imagen.alpha = 0;                   
                      
                }
               
                if(objeto.obj.name == "izq"){
                    
                    cursor_izquierda.cursor_izquierda_imagen.alpha = 1;
                    
                    cursor_izquierda.cursor_left_imagen.alpha = 0; 
                      
                }    
                
                stage.update();
                
           }
    }
    
    this.puntero_objeto = function(objeto){
        
            objeto.obj.onMouseOver = function(){
                
                oncanvas_home.mouse.cursor("pointer");
                
                stage.update();
                
            }
            
           objeto.obj.onMouseOut = function(){
            
                oncanvas_home.mouse.cursor("default");
                stage.update();
                
           }
    }
    
    this.objeto_fancy = function(objeto,url){
            
            objeto.obj.onClick = function(){
                jQuery.fancybox({'href':url,'showCloseButton':true,'opacity':true});
                
            }
    }
         

} 