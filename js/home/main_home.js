
function init_home()
{   
    var left= -(1920 - document.body.clientWidth)/2;  
        
    jQuery("#canvas_home").css({left:(left)}); 
    
    /*if(jQuery.browser.msie){
        jQuery("#canvas_home").css({left:(left)}); 
    }*/
    
    resize_canvas();
    
    canvas_home = document.getElementById("canvas_home");
    
    stage = new Stage(canvas_home) ;
    
    oncanvas_home = oCanvas.create
    ({
	     canvas: "#canvas_home"
	});

     
    stage.mouseEventsEnabled = true  ;
    
    stage.enableMouseOver();
    
    
    //fondo.init();
    
    avion.init();
    
    avionmini.init();
        
    nube_1.init();    
    nube_2.init();    
    nube_3.init();
    nube_4.init();
    
    nube_5.init();
    nube_6.init();
    nube_7.init();
    nube_8.init();
    
    pajaro_rojo_1.init();
    pajaro_rojo_2.init();    
    pajaro_rojo_3.init();    
    pajaro_rojo_4.init();
          
    pajaro_amarillo_1.init() ; 
    pajaro_amarillo_2.init() ;        
    pajaro_amarillo_3.init() ;
    pajaro_amarillo_4.init() ;
    pajaro_amarillo_5.init();
    pajaro_en_suelo.init() ;
  
    registrate.init() ;  
    logo_kinder.init() ;
    //soy_padre.init();
    flores_1.init();
    flores_2.init();
    flores_3.init();
    
    cursor_derecha.init()   ;
    cursor_izquierda.init() ;
    guardian_tierra.init()  ;
    manguera_agua.init();
    manguera_gotas_1.init();
    manguera_gotas_2.init();
    manguera_gotas_3.init();
    manguera_gotas_4.init();
    
    
    manguera_gotas_5.init(); 
    
    /**Cartel Propaganda**/
    
    /*propaganda.init();*/
    
    
    arbol.init();
        
    
    
    
            
     
     // *************** ANIMACION DE NUBES **************************
     
     
       Xf = canvas_home.width + 350 ;          
       tiempo= 50000+Math.round(Math.random()*(50000));
       tipoEfecto = 0 ;
       
             
     animacion_home.mover_nube_izq_der_horizontal( nube_1 , Xf , tiempo , tipoEfecto ) ;
     
       Xf=-200;
       //tiempo=5;
       tiempo= 50100+Math.round(Math.random()*(50000));
       
       
     animacion_home.mover_nube_der_izq_horizontal( nube_2 , Xf , tiempo , tipoEfecto ) ;
      
        Xf = canvas_home.width+350;
       //tiempo= 7*2800;
       tiempo= 50200+Math.round(Math.random()*(50000));
             
     animacion_home.mover_nube_izq_der_horizontal( nube_3 , Xf , tiempo , tipoEfecto ) ;
     
       Xf=-200;
     //  tiempo=7;
     tiempo= 50300+Math.round(Math.random()*(50000));
       
     animacion_home.mover_nube_der_izq_horizontal( nube_4 , Xf , tiempo , tipoEfecto ) ;



     Xf = canvas_home.width+350;
     //  tiempo= 13*4000;
     tiempo= 50400+Math.round(Math.random()*(50000));
             
     animacion_home.mover_nube_izq_der_horizontal( nube_5 , Xf , tiempo , tipoEfecto ) ;
     
       Xf=-200;
     //  tiempo=14*5000;
     tiempo= 50500+Math.round(Math.random()*(50000));
       
     animacion_home.mover_nube_der_izq_horizontal( nube_6 , Xf , tiempo , tipoEfecto ) ;
     
     Xf = canvas_home.width+350;
     //  tiempo= 8*2000;
     tiempo= 50600+Math.round(Math.random()*(50000));
             
     animacion_home.mover_nube_izq_der_horizontal( nube_7 , Xf , tiempo , tipoEfecto ) ;
     
       Xf=-200;
    //   tiempo=8;
    tiempo= 50700+Math.round(Math.random()*(50000));
       
     animacion_home.mover_nube_der_izq_horizontal( nube_8 , Xf , tiempo , tipoEfecto ) ;
     
     
      
     Xf = canvas_home.width+350;
   //    tiempo= 4*3100;
   tiempo= 50800+Math.round(Math.random()*(50000));
             
     animacion_home.mover_nube_izq_der_horizontal( nube_2 , Xf , tiempo , tipoEfecto ) ;
     
       Xf=-200;
   //    tiempo=4;
   tiempo= 50900+Math.round(Math.random()*(50000));
       
     animacion_home.mover_nube_der_izq_horizontal( nube_4 , Xf , tiempo , tipoEfecto ) ;
     
     
      
      Xf = canvas_home.width + 350 ;
      
      // tiempo= 10*1800;
      tiempo= 60000 + Math.round(Math.random()*(50000));
             
     animacion_home.mover_nube_izq_der_horizontal( nube_8 , Xf , tiempo , tipoEfecto ) ;
     
       Xf=-200;
    //   tiempo=10 ;
     tiempo= 60100+Math.round(Math.random()*(50000));
       
     animacion_home.mover_nube_der_izq_horizontal( nube_6 , Xf , tiempo , tipoEfecto ) ;
     
     
      
     Xf = canvas_home.width+350;
     //  tiempo= 9 * 2350 ;
     tiempo= 60200+Math.round(Math.random()*(50000));             
     animacion_home.mover_nube_izq_der_horizontal( nube_1 , Xf , tiempo , tipoEfecto ) ;     
      Xf=-200 ;         
     //   tiempo = 9 ;      
        tiempo= 60300+Math.round(Math.random()*(50000));       
        animacion_home.mover_nube_der_izq_horizontal( nube_3 , Xf , tiempo , tipoEfecto ) ;     
     
     /***Animacion Avion***/
        
        animacion_home.horizontal_avion(avion,-700,50,0,1,0,50);
        
        var xf = (canvas_home.width)+150;
        
        animacion_home.horizontal_avion(avionmini,xf,50,0,0.50,44,0);
     
     
   // *************** ANIMACION DE PAJAROS ROJOS **************************    
     
    
        tipoPajaro=1;
        tipoEfecto = 0;
        tiempo= 20000;        
        tiempo_espera = 500 ; 
                 
        Xf = (canvas_home.width /2) + 1800; 
        Yf =  - 100 ; 
        
        //animacion_home . pajaro_rojo_diagonal ( pajaro_rojo_1,Xf,Yf,tiempo,tiempo_espera,tipoEfecto,tipoPajaro ) ; 
       
        animacion_home.horizontal(pajaro_rojo_1,1950,15,0);
       
        tipoPajaro = 2  ; 
        tipoEfecto = 0  ;
        tiempo= 10000;        
        tiempo_espera = 500 ; 
                 
        Xf = canvas_home.width /2 + 1800 ; 
        Yf =  - 100 ;
        
        //animacion_home . pajaro_rojo_diagonal ( pajaro_rojo_2,Xf,Yf,tiempo,tiempo_espera,tipoEfecto,tipoPajaro ) ;
        
        animacion_home.horizontal(pajaro_rojo_2,2000,18,0);
       
       
        tipoPajaro = 3  ; 
        tipoEfecto = 0  ;
        tiempo= 12000;        
        tiempo_espera = 500 ; 
                 
        Xf = canvas_home.width /2 +2000 ; 
        Yf =  - 100 ;
       animacion_home . pajaro_rojo_diagonal ( pajaro_rojo_3,Xf,Yf,tiempo,tiempo_espera,tipoEfecto,tipoPajaro ) ;
        
       
        tipoPajaro = 4  ; 
        tipoEfecto = 0  ;
        tiempo= 15000;        
        tiempo_espera = 500 ; 
                 
        Xf = canvas_home.width /2 +2000 ; 
        Yf =  - 100 ;
        animacion_home . pajaro_rojo_diagonal ( pajaro_rojo_4,Xf,Yf,tiempo,tiempo_espera,tipoEfecto , tipoPajaro) ; 
        
        
        
    //*******************PAJAROS AMARILLO ******************         
        
        tipoPajaro = 1        ; 
        tipoEfecto = 0        ;
        tiempo= 5000          ;        
        tiempo_espera = 500   ;
        Xf  =  (canvas_home.width/2)-300  ;   
        Yf  =  - 100    ;
        //animacion_home . pajaro_amarillo_diagonal( pajaro_amarillo_1 ,Xf,Yf,tiempo,tiempo_espera,tipoEfecto , tipoPajaro ) ;
        
        animacion_home.horizontal(pajaro_amarillo_1,-100,19,0);
        
        tipoPajaro = 2        ; 
        tipoEfecto = 0        ;
        tiempo= 6000          ;        
        tiempo_espera = 500   ;
         
        Xf  =  canvas_home.width/2 -250 ;   
        Yf  =  - 100    ;
        animacion_home . pajaro_amarillo_diagonal( pajaro_amarillo_2 ,Xf,Yf,tiempo,tiempo_espera,tipoEfecto , tipoPajaro ) ;
        
        //animacion_home.horizontal(pajaro_amarillo_2,1950,22,0);
        
        tipoPajaro = 3        ; 
        tipoEfecto = 0        ;
        tiempo= 6500          ;        
        tiempo_espera = 500   ;
         
        Xf  =  canvas_home.width/2 -200 ;   
        Yf  =  - 100    ;
        animacion_home . pajaro_amarillo_diagonal( pajaro_amarillo_3 ,Xf,Yf,tiempo,tiempo_espera,tipoEfecto , tipoPajaro ) ;
        
        
        
        
        tipoPajaro = 4        ; 
        tipoEfecto = 0        ;
        tiempo= 7000          ;        
        tiempo_espera = 500   ;
         
        Xf  =  canvas_home.width/2 -150 ;   
        Yf  =  - 100    ;
        animacion_home . pajaro_amarillo_diagonal( pajaro_amarillo_4 ,Xf,Yf,tiempo,tiempo_espera,tipoEfecto , tipoPajaro ) ;
        
        
        tipoPajaro = 5         ; 
        tipoEfecto = 0         ;
        tiempo =  6800          ;         
        tiempo_espera = 500    ;
         
        Xf  =  canvas_home.width/2 - 100 ;   
        Yf  =  - 100    ; 
        animacion_home . pajaro_amarillo_diagonal( pajaro_amarillo_5 ,Xf,Yf,tiempo,tiempo_espera,tipoEfecto , tipoPajaro ) ;
        
        /*
         logo_kinder.obj.x = (canvas_home.width/2)  -345;         
        logo_kinder.obj.y = (canvas_home.height)-290 ;
        */
       
          
        tipoEfecto = 0         ;
        tiempo =  2000          ;         
        tiempo_espera = 2000    ;
        Yf  =  logo_kinder.obj.y + 7  ;
        animacion_home.mover_logo_kinder(logo_kinder,Yf,tiempo,tiempo_espera,tipoEfecto);
        
        
        
        
    /************* GUARDIA TIERRA *************** */       
        
        /*tipoEfecto = 0         ;
        tiempo =  100          ;         
        tiempo_espera = 500    ;
        
        Xf=guardian_tierra.obj.x  ;
        Yf  =  guardian_tierra.obj.y -10  ;        
        
        animacion_home.mover_guardian_tierra(guardian_tierra,manguera_agua,Xf,Yf,tiempo,tiempo_espera,tipoEfecto);*/
        
        
        tipoEfecto = 0         ;
        tiempo =  800          ;         
        tiempo_espera = 500    ;
        
         Xf=manguera_gotas_1.obj.x  ;
         Yf  =  manguera_gotas_1.obj.y+250 ;
         animacion_home . mover_manguera_gotas_1 ( manguera_gotas_1,Xf,Yf,tiempo,tiempo_espera,tipoEfecto ) ;
         
         
            tipoEfecto = 0         ;
            tiempo =  100          ;         
            tiempo_espera = 700    ;
            Xf=manguera_gotas_2.obj.x  ;
            Yf  =  manguera_gotas_2.obj.y-5 ;
            animacion_home . mover_manguera_gotas_2_5 ( manguera_gotas_2,Xf,Yf,tiempo,tiempo_espera,tipoEfecto ) ; 
        
                     
            tipoEfecto = 0         ;
            tiempo =  200          ;         
            tiempo_espera = 700    ;
            Xf=manguera_gotas_3.obj.x  ;
            Yf  =  manguera_gotas_3.obj.y-5 ;
            animacion_home . mover_manguera_gotas_2_5  ( manguera_gotas_3,Xf,Yf,tiempo,tiempo_espera,tipoEfecto ) ; 
        
            tipoEfecto = 0         ;
            tiempo =  300          ;         
            tiempo_espera = 700    ;
            Xf=manguera_gotas_4.obj.x  ;
            Yf  =  manguera_gotas_4.obj.y-5 ;
            animacion_home . mover_manguera_gotas_2_5  ( manguera_gotas_4,Xf,Yf,tiempo,tiempo_espera,tipoEfecto ) ; 
                
            tipoEfecto = 0         ;
            tiempo =  400          ;         
            tiempo_espera = 400   ;
            Xf=manguera_gotas_5.obj.x  ;
            Yf  =  manguera_gotas_5.obj.y-5 ;
            animacion_home . mover_manguera_gotas_2_5  ( manguera_gotas_5,Xf,Yf,tiempo,tiempo_espera,tipoEfecto ) ; 
            
        
            tipoEfecto = 0         ;
            tiempo =  600          ;         
            tiempo_espera = 500    ;                
            Xf  = manguera_gotas_1.obj.x  ;
            Yf  =  manguera_gotas_1.obj.y  + 110  ;
       
           
           animacion_home.puntero_objeto(registrate);
           
           animacion_home.objeto_fancy(registrate,'LoginFrontend/load_login');
                      
           
           //animacion_home.puntero_objeto(propaganda);
           
           
           
           //animacion_home.objeto_fancy(propaganda,'frontend/propaganda_home');
           
           animacion_home.puntero(cursor_derecha);
           
           animacion_home.puntero(cursor_izquierda);
         
         
         ticker_all();
        
         
}
 