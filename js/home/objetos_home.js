var arbol = new function()
{
     this.obj = new Container();  
          
     this.url = "images/images_home/arbol.png";
     
     /*var preload = new Bitmap("images/preload/preload2.jpg");*/
     var nube10 = new Bitmap("images/preload/nube10.png");
     var nube20 = new Bitmap("images/preload/nube20.png");
     var nube30 = new Bitmap("images/preload/nube30.png");
     var nube40 = new Bitmap("images/preload/nube40.png");
     var nube50 = new Bitmap("images/preload/nube50.png");
     var nube60 = new Bitmap("images/preload/nube60.png");
     var nube70 = new Bitmap("images/preload/nube70.png");
     var nube80 = new Bitmap("images/preload/nube80.png");
     var nube90 = new Bitmap("images/preload/nube90.png");
     var nube100 = new Bitmap("images/preload/nube100.png");
     var avioncito_preload = new Bitmap("images/preload/avioncito_preload.png");
     
    
        
    this.init = function()
    {
        
        stage.addChild(arbol.obj);        
        arbol.init_fondo();       
                
        this.resize();
    
    }
    
    
    this.init_fondo = function()
    {
        
        var arbol_imagen = new Bitmap(arbol.url);
        
        //Shape
        
        var s = new Shape(arbol_imagen);
        
        s.x = 10;
        
        s.y = 40;
        
        arbol.obj.addChild(s);
        
    }
       
    this.resize = function()
    {        
        arbol.obj.x = (canvas_home.width/2) - 180;         
        arbol.obj.y = (canvas_home.height/2) - 136;
    }
}


var pajaro_en_suelo = new function()
{
    
    this.obj = new Container(); 
    
    this.url = "images/images_home/pajaro_en_suelo.png";
        
    this.init = function()
    {
        
        stage.addChild(pajaro_en_suelo.obj);        
        pajaro_en_suelo.init_fondo();
                
        this.resize();
    
    }
    
    
    this.init_fondo = function()
    {
        
        var pajaro_en_suelo_imagen = new Bitmap(pajaro_en_suelo.url);
        
        //Shape
        
        var s = new Shape(pajaro_en_suelo_imagen);
        
        s.x = 10;
        
        s.y = 40;
        
        pajaro_en_suelo.obj.addChild(s);
        
    }

    
    this.resize = function()
    {
        pajaro_en_suelo.obj.x = 20 ;         
        pajaro_en_suelo.obj.y = 754 ;
    }
}


var registrate = new function()
{
    
    this.obj = new Container();        
    this.url = "images/images_home/registrate.png";
        
    this.init = function()
    {        
        stage.addChild(registrate.obj);        
        registrate.init_fondo(); 
        
        this.resize();    
    }    
    this.init_fondo = function()
    {        
        
        var registrate_imagen = new Bitmap(registrate.url);                
        var s = new Shape(registrate_imagen);
        
        s.x = 10  ;         
        s.y = 40  ;
        
        registrate.obj.addChild(s);
        
    }
       
    this.resize = function()
    {        
        registrate.obj.x = (canvas_home.width/2)  + 200;         
        registrate.obj.y = (canvas_home.height) - 276 ;
    }

}

var logo_kinder = new function()
{
    
    this.obj = new Container();        
    this.url = "images/images_home/logo_kinder.png";
    
        
    this.init = function()
    {
        
        stage.addChild(logo_kinder.obj);        
        logo_kinder.init_fondo();       
                
        this.resize();
    
    }
    
    
    this.init_fondo = function()
    {
        
        var logo_kinder_imagen = new Bitmap(logo_kinder.url);
        
        //Shape
        
        var s = new Shape(logo_kinder_imagen);
        
        s.x = 10;
        
        s.y = 40;
        
        logo_kinder.obj.addChild(s);
        
    }
       
    this.resize = function()
    {        
        logo_kinder.obj.x = (canvas_home.width/2)  - 345;         
        logo_kinder.obj.y = (canvas_home.height) - 326 ;
    }
}

var flores_1 = new function()
{
    
    this.obj = new Container();        
    this.url = "images/images_home/flores_1.png";
    
        
    this.init = function()
    {
        
        stage.addChild(flores_1.obj);        
        flores_1.init_fondo();       
                
        this.resize();
    
    }
    
    
    this.init_fondo = function()
    {
        
        var flores_1_imagen = new Bitmap(flores_1.url);
        
        //Shape
        
        var s = new Shape(flores_1_imagen);
        
        s.x = 10;
        
        s.y = 40;
        
        flores_1.obj.addChild(s);
        
    }
           
    this.resize = function() 
    {   
        flores_1.obj.x = (canvas_home.width/2)  - 500;         
        flores_1.obj.y = (canvas_home.height)- 286 ;
    }
}

var flores_2 = new function()
{
    
    this.obj = new Container();        
    this.url = "images/images_home/flores_2.png";
    
        
    this.init = function()
    {
        
        stage.addChild(flores_2.obj);        
        flores_2.init_fondo();       
                
        this.resize();
    
    }
    
    
    this.init_fondo = function()
    {
        
        var flores_2_imagen = new Bitmap(flores_2.url);
        
        //Shape
        
        var s = new Shape(flores_2_imagen);
        
        s.x = 10;
        
        s.y = 40;
        
        flores_2.obj.addChild(s);
        
    }
           
    this.resize = function() 
    {  
        flores_2.obj.x = (canvas_home.width/2)  - 750;         
        flores_2.obj.y = (canvas_home.height) - 326 ;
    }
}

var flores_3 = new function()
{
    
    this.obj = new Container();        
    this.url = "images/images_home/flores_3.png";
    
        
    this.init = function()
    {
        
        stage.addChild(flores_3.obj);        
        flores_3.init_fondo();       
                
        this.resize();
    
    }
    
    this.init_fondo = function()
    {
        
        var flores_3_imagen = new Bitmap(flores_3.url);
        
        //Shape
        
        var s = new Shape(flores_3_imagen);
        
        s.x = 10;
        
        s.y = 40;
        
        flores_3.obj.addChild(s);
        
    }
           
    this.resize = function() 
    {  
        flores_3.obj.x = (canvas_home.width)  - 190;         
        flores_3.obj.y = (canvas_home.height) - 296 ;
    }
}

var cursor_derecha = new function()
{
    
    this.obj = new Container();        
    
    this.obj.name="der";
    
    this.obj.id="der";
    
    this.url = "images/images_home/cursor-right.png";
    
    this.cursor_derecha_imagen = new Bitmap(this.url);
    
    this.cursor_right_url = "images/images_home/cursor-derecha.png";
    
    this.cursor_right_imagen = new Bitmap(this.cursor_right_url);
    
        
    this.init = function()
    {  
       stage.addChild(cursor_derecha.obj) ;         
       
       cursor_derecha.init_fondo() ;  
       
       cursor_derecha.init_cursorroll();
       
       this.resize(); 
    }
        
    this.init_fondo = function()
    {   
        
          
          cursor_derecha.cursor_derecha_imagen.x = 5;
          
          cursor_derecha.cursor_derecha_imagen.y = 40;
          
          cursor_derecha.obj.addChild(cursor_derecha.cursor_derecha_imagen);
        
                
    }
    
    this.init_cursorroll = function()
    {
        
        cursor_derecha.cursor_right_imagen.x = 15;
        
        cursor_derecha.cursor_right_imagen.y = 47;
        
        cursor_derecha.cursor_right_imagen.alpha = 0;
        
        cursor_derecha.obj.addChild(cursor_derecha.cursor_right_imagen);
        
    }     
                  
    this.resize = function() 
    {         
        cursor_derecha.obj.x = (canvas_home.width/2) - 60   ;          
        cursor_derecha.obj.y = (canvas_home.height/2) + 202  ;
        
    }
}

var cursor_izquierda = new function()
{
    
    this.obj = new Container();        
    
    this.obj.name="izq";
    
    this.obj.id="izq";
    
    this.url = "images/images_home/cursor-left.png";
    
    this.cursor_izquierda_imagen = new Bitmap(this.url);
    
    this.cursor_left_url = "images/images_home/cursor-izquierda.png";
    
    this.cursor_left_imagen = new Bitmap(this.cursor_left_url);
    
        
    this.init = function()
    {  
       stage.addChild(cursor_izquierda.obj) ;         
       
       cursor_izquierda.init_fondo() ;  
       
       cursor_izquierda.init_cursorroll();
       
       this.resize(); 
    }
        
    this.init_fondo = function()
    {   
        
          
          cursor_izquierda.cursor_izquierda_imagen.x = 5;
          
          cursor_izquierda.cursor_izquierda_imagen.y = 40;
          
          cursor_izquierda.obj.addChild(cursor_izquierda.cursor_izquierda_imagen);
        
                
    }
    
    this.init_cursorroll = function()
    {
        
        cursor_izquierda.cursor_left_imagen.x = 0;
        
        cursor_izquierda.cursor_left_imagen.y = 47;
        
        cursor_izquierda.cursor_left_imagen.alpha = 0;
        
        cursor_izquierda.obj.addChild(cursor_izquierda.cursor_left_imagen);
        
    } 
           
    this.resize = function() 
    {  
        
        cursor_izquierda.obj.x = (canvas_home.width/2) - 115   ;          
        cursor_izquierda.obj.y = (canvas_home.height/2) + 200  ;
        
    }
}

var guardian_tierra = new function()
{
    
    this.obj = new Container();        
    this.url = "images/images_home/guardian_tierra.png";
    
    
        
    this.init = function()
    {
        
        stage.addChild(guardian_tierra.obj);        
        guardian_tierra.init_fondo();       
                
        this.resize();
    
    }
    
    this.init_fondo = function()
    {
        
        var guardian_tierra_imagen = new Bitmap(guardian_tierra.url);
        
        var s = new Shape(guardian_tierra_imagen);
        
        s.x = 10;
        
        s.y = 40;        
        guardian_tierra.obj.addChild(s);
            }
           
    this.resize = function() 
    {   
       guardian_tierra.obj.x = (canvas_home.width/2) + 250  ;          
       guardian_tierra.obj.y = (canvas_home.height/2) + 1 ;
        
    }
}
var manguera_agua = new function()
{
    
    this.obj = new Container();        
    this.url = "images/images_home/manguera_agua.png";
        
    this.init = function()
    {        
        stage.addChild(manguera_agua.obj);        
        manguera_agua.init_fondo(); 
        this.resize(); 
    }
    
    this.init_fondo = function()
    {
        
        var manguera_agua_imagen = new Bitmap(manguera_agua.url);
        
        //Shape
        
        var s = new Shape(manguera_agua_imagen);
        
        s.x = 10;
        
        s.y = 40;
        
        manguera_agua.obj.addChild(s);
        
    }
           
    this.resize = function() 
    {   
         manguera_agua.obj.x = (canvas_home.width/2) - 2 ;          
         manguera_agua.obj.y = (canvas_home.height/2) + 138 ; 
         
    }
}

 var manguera_gotas_1 = new function()
 {
    
    this.obj = new Container();        
    this.url = "images/images_home/manguera_gotas_1.png";
    
    this.init = function()
    {        
        stage.addChild(manguera_gotas_1.obj);        
        manguera_gotas_1.init_fondo();        
        this.resize(); 
    }
        
        
    this.init_fondo = function()
    {
        var manguera_gotas_1_imagen = new Bitmap(manguera_gotas_1.url);
        // Shape 
                
        var s = new Shape(manguera_gotas_1_imagen);        
        s.x = 10 ;         
        s.y = 40 ;        
        manguera_gotas_1.obj.addChild(s) ; 
    }
               
    this.resize = function() 
    {  
        
       manguera_gotas_1.obj.x = (canvas_home.width/2) + 250  ;          
       manguera_gotas_1.obj.y = (canvas_home.height/2) + 139 ;
        
    }
}
 var manguera_gotas_2 = new function()
 {
    
    this.obj = new Container();        
    this.url = "images/images_home/manguera_gotas_2.png";
    
    this.init = function()
    {        
        stage.addChild(manguera_gotas_2.obj);        
        manguera_gotas_2.init_fondo();        
        this.resize(); 
    }
        
    this.init_fondo = function()
    {
        
        var manguera_gotas_2_imagen = new Bitmap(manguera_gotas_2.url);
        
        //Shape
        
        var s = new Shape(manguera_gotas_2_imagen);
        
        s.x = 10 ;         
        s.y = 40 ;        
        manguera_gotas_2.obj.addChild(s) ; 
    }
           
    this.resize = function() 
    { 
       manguera_gotas_2.obj.x = (canvas_home.width/2) - 5 ;          
       manguera_gotas_2.obj.y = (canvas_home.height/2) + 234 ;
        
    }
}

 var manguera_gotas_3 = new function()
 {
    
    this.obj = new Container();        
    this.url = "images/images_home/manguera_gotas_3.png";
    
    this.init = function()
    {        
        stage.addChild(manguera_gotas_3.obj);        
        manguera_gotas_3.init_fondo();        
        this.resize(); 
    }
        
    this.init_fondo = function()
    {
        
        var manguera_gotas_3_imagen = new Bitmap(manguera_gotas_3.url);
        
        //Shape
        
        var s = new Shape(manguera_gotas_3_imagen);
        
        s.x = 10 ;         
        s.y = 40 ;        
        manguera_gotas_3.obj.addChild(s) ; 
    }
           
    this.resize = function() 
    { 
       manguera_gotas_3.obj.x = (canvas_home.width/2) - 2 ;          
       manguera_gotas_3.obj.y = (canvas_home.height/2) + 239 ;
        
    }
}

 var manguera_gotas_4 = new function()
 {
    
    this.obj = new Container();        
    this.url = "images/images_home/manguera_gotas_4.png";
    
    this.init = function()
    {        
        stage.addChild(manguera_gotas_4.obj);        
        manguera_gotas_4.init_fondo();        
        this.resize(); 
    }
        
    this.init_fondo = function()
    {
        
        var manguera_gotas_4_imagen = new Bitmap(manguera_gotas_4.url);
        
        //Shape
        
        var s = new Shape(manguera_gotas_4_imagen);
        
        s.x = 10 ;         
        s.y = 40 ;        
        manguera_gotas_4.obj.addChild(s) ; 
    }
           
    this.resize = function() 
    {  
       manguera_gotas_4.obj.x = (canvas_home.width/2) + 8 ;          
       manguera_gotas_4.obj.y = (canvas_home.height/2) + 244 ;
        
    }
}

 var manguera_gotas_5 = new function()
 {
    
    this.obj = new Container();        
    this.url = "images/images_home/manguera_gotas_5.png";
    
    this.init = function()
    {        
        stage.addChild(manguera_gotas_5.obj);        
        manguera_gotas_5.init_fondo();        
        this.resize(); 
    }
        
    this.init_fondo = function()
    {
        
        var manguera_gotas_5_imagen = new Bitmap(manguera_gotas_5.url);         
        // Shape ...
        
        var s = new Shape(manguera_gotas_5_imagen) ;   
        
        s.x = 10 ;         
        s.y = 40 ;        
        manguera_gotas_5.obj.addChild(s) ; 
    }
               
    this.resize = function() 
    {  
       manguera_gotas_5.obj.x = (canvas_home.width/2) + 10   ;          
       manguera_gotas_5.obj.y =(canvas_home.height/2) + 239 ;
        
    }
}

var nube_1=new function()
{   
    this.obj = new Container();          
    this.url = "images/images_home/nube_1.png";    
    
        
    this.init = function()
    {
        stage.addChild(nube_1.obj);        
        nube_1.init_fondo() ;                        
        this.resize();   
    }    
    this.init_fondo = function()
    {   
       var nube_1_imagen = new Bitmap(nube_1.url);         
        // Shape ...
        
        var s = new Shape(nube_1_imagen); 
        
        s.x = 10;
        
        s.y = 40;
        nube_1.obj.addChild(s);
    }
           
    this.resize = function() 
    {                   
          nube_1.obj.x = (canvas_home.width) + 50 ;
        // nube_1.obj.x = -200  ;          
         nube_1.obj.y = (canvas_home.height/2);
          
    }
    
}

var nube_2=new function()
{   
    this.obj = new Container();          
    this.url = "images/images_home/nube_2.png";    
    
        
    this.init = function()
    {
        stage.addChild(nube_2.obj);        
        nube_2.init_fondo() ;                        
        this.resize();   
    }    
    this.init_fondo = function()
    {   
       var nube_2_imagen = new Bitmap(nube_2.url);         
        // Shape ...
        
        var s = new Shape(nube_2_imagen); 
        
        s.x = 10;
        
        s.y = 40;
        
        nube_2.obj.addChild(s);
        
    }
           
    this.resize = function() 
    {                  
        nube_2.obj.x = (canvas_home.width/2) + 150    ;          
       // nube_2.obj.x = (canvas_home.width) + 350   ;
        nube_2.obj.y = (canvas_home.height/2) - 356  ;
        
    }
    
}
var nube_3=new function()
{   
    this.obj = new Container();          
    this.url = "images/images_home/nube_3.png";    
    
        
    this.init = function()
    {
        stage.addChild(nube_3.obj);        
        nube_3.init_fondo() ;                        
        this.resize();   
    }    
    this.init_fondo = function()
    {   
       var nube_3_imagen = new Bitmap(nube_3.url);         
       // Shape ...
        
        var s = new Shape(nube_3_imagen); 
        
        s.x = 10;
        
        s.y = 40;
        
        nube_3.obj.addChild(s);
        
    }
           
    this.resize = function() 
    {                  
        nube_3.obj.x = 50     ;
      // nube_3.obj.x = -200  ;          
        nube_3.obj.y = 24  ;
        
    }
    
}
var nube_4=new function()
{   
    this.obj = new Container();          
    this.url = "images/images_home/nube_4.png";    
    
        
    this.init = function()
    {
        stage.addChild(nube_4.obj);        
        nube_4.init_fondo() ;                        
        this.resize();   
    }    
    this.init_fondo = function()
    {   
        
       var nube_4_imagen = new Bitmap(nube_4.url) ;                        
       // Shape ... 
       
        var s = new Shape(nube_4_imagen); 
        
        s.x = 10 ;
        
        s.y = 40 ;
        
        nube_4.obj.addChild(s);
        
    }
           
    this.resize = function() 
    {                  
       // nube_4.obj.x = 700     ;
        nube_4.obj.x = (canvas_home.width) + 350   ;          
        nube_4.obj.y = 124  ;
        
    }
    
}
var nube_5=new function()
{   
    this.obj = new Container();          
    this.url = "images/images_home/nube_5.png";
    
    this.init = function()
    {
        stage.addChild(nube_5.obj);        
        nube_5.init_fondo() ;                        
        this.resize();   
    }    
    this.init_fondo = function()
    {   
       var nube_5_imagen = new Bitmap(nube_5.url);         
       // Shape ...
       
        var s = new Shape(nube_5_imagen); 
        
        s.x = 10;
        s.y = 40;
        
        nube_5.obj.addChild(s) ;          
    }           
    this.resize = function() 
    {   
                
        nube_5.obj.x = 580  ;
        //nube_5.obj.x = -200  ;          
        nube_5.obj.y = 474; 
         
    }
    
}

var nube_6=new function()
{   
    this.obj = new Container();          
    this.url = "images/images_home/nube_6.png";
    
    this.init = function()
    {
        stage.addChild(nube_6.obj);        
        nube_6.init_fondo() ;                        
        this.resize();   
    }    
    this.init_fondo = function()
    {   
       var nube_6_imagen = new Bitmap(nube_6.url);         
       // Shape ...
       
        var s = new Shape(nube_6_imagen); 
        
        s.x = 10;
        s.y = 40;
        
        nube_6.obj.addChild(s) ;          
    }           
    this.resize = function() 
    {           
        nube_6.obj.x = 680  ;
       // nube_6.obj.x = (canvas_home.width) + 350   ;          
        nube_6.obj.y = 574; 
         
    }
    
}
var nube_7=new function()
{   
    this.obj = new Container();          
    this.url = "images/images_home/nube_7.png";
    
    this.init = function()
    {
        stage.addChild(nube_7.obj);        
        nube_7.init_fondo() ;                        
        this.resize();   
    }    
    this.init_fondo = function()
    {   
       var nube_7_imagen = new Bitmap(nube_7.url);         
       // Shape ...
       
        var s = new Shape(nube_7_imagen); 
        
        s.x = 10;
        s.y = 40;
        
        nube_7.obj.addChild(s) ;          
    }           
    this.resize = function() 
    {           
        nube_7.obj.x =(canvas_home.width /2) + 440 ;
       // nube_7.obj.x = -200  ;          
        nube_7.obj.y = (canvas_home.height /2) + 54   ; 
         
    }
    
}
var nube_8=new function()
{   
    this.obj = new Container();          
    this.url = "images/images_home/nube_8.png";
    
    this.init = function()
    {
        stage.addChild(nube_8.obj);        
        nube_8.init_fondo() ;                        
        this.resize();   
    }    
    this.init_fondo = function()
    {   
       var nube_8_imagen = new Bitmap(nube_8.url);         
       // Shape ...
       
        var s = new Shape(nube_8_imagen); 
        
        s.x = 10;
        s.y = 40;
        
        nube_8.obj.addChild(s) ;          
    }           
    this.resize = function() 
    {           
        nube_8.obj.x =(canvas_home.width /2) +160 ;
      //  nube_8.obj.x = (canvas_home.width) + 350   ;    
             
        nube_8.obj.y = (canvas_home.height /2) - 86   ; 
         
    }
    
}
/*
var nube_9=new function()
{   
    this.obj = new Container();          
    this.url = "images/images_home/nube_9.png";
    
    this.init = function()
    {
        stage.addChild(nube_9.obj);        
        nube_9.init_fondo() ;                        
        this.resize();   
    }    
    this.init_fondo = function()
    {   
       var nube_9_imagen = new Bitmap(nube_9.url);         
       // Shape ...
       
        var s = new Shape(nube_9_imagen); 
        
        s.x = 10;
        s.y = 40;
        
        nube_9.obj.addChild(s) ;          
    }           
    this.resize = function() 
    {           
        nube_9.obj.x =(canvas_home.width /2)-150 ;
      // nube_9.obj.x = -200  ;          
        nube_9.obj.y = 0   ; 
         
    }
    
}
var nube_10=new function()
{   
    this.obj = new Container();          
    this.url = "images/images_home/nube_10.png";
    
    this.init = function()
    {
        stage.addChild(nube_10.obj);        
        nube_10.init_fondo() ;                        
        this.resize();   
    }    
    this.init_fondo = function()
    {   
       var nube_10_imagen = new Bitmap(nube_10.url);         
       // Shape ...
       
        var s = new Shape(nube_10_imagen); 
        
        s.x = 10;
        s.y = 40;
        
        nube_10.obj.addChild(s) ;          
    }           
    this.resize = function() 
    {           
         nube_10.obj.x =(canvas_home.width /2)+280  ;
        // nube_10.obj.x = (canvas_home.width) + 350   ;          
        nube_10.obj.y = (canvas_home.height/2 )- 226  ; 
    }
}

var nube_11=new function()
{   
    this.obj = new Container();          
    this.url = "images/images_home/nube_11.png";
    
    this.init = function()
    {
        stage.addChild(nube_11.obj);        
        nube_11.init_fondo() ;                        
        this.resize();   
    }    
    this.init_fondo = function()
    {   
       var nube_11_imagen = new Bitmap(nube_11.url);         
       // Shape ...
       
        var s = new Shape(nube_11_imagen); 
        
        s.x = 10;
        s.y = 40;
        
        nube_11.obj.addChild(s) ;          
    }           
    this.resize = function() 
    {           
        nube_11.obj.x =(canvas_home.width /2)+280 ;
        //nube_11.obj.x = -200  ;          
        nube_11.obj.y = 124 ; 
         
    }
    
}

var nube_12=new function()
{   
    this.obj = new Container();          
    this.url = "images/images_home/nube_12.png";
    
    this.init = function()
    {
        stage.addChild(nube_12.obj);        
        nube_12.init_fondo() ;                        
        this.resize();   
    }    
    this.init_fondo = function()
    {   
       var nube_12_imagen = new Bitmap(nube_12.url);         
       // Shape ...
       
        var s = new Shape(nube_12_imagen); 
        
        s.x = 10;
        s.y = 40;
        
        nube_12.obj.addChild(s) ;          
    }           
    this.resize = function() 
    {   
        nube_12.obj.x = (canvas_home.width) + 350   ;          
        nube_12.obj.y = 24 ;
         
    }
    
}
var nube_13=new function()
{   
    this.obj = new Container();          
    this.url = "images/images_home/nube_13.png";
    
    this.init = function()
    {
        stage.addChild(nube_13.obj);        
        nube_13.init_fondo() ;                        
        this.resize();   
    }    
    this.init_fondo = function()
    {   
       var nube_13_imagen = new Bitmap(nube_13.url);         
       // Shape ...
       
        var s = new Shape(nube_13_imagen); 
        
        s.x = 10;
        s.y = 40;
        
        nube_13.obj.addChild(s) ;          
    }           
    this.resize = function() 
    {   
        nube_13.obj.x =(canvas_home.width/2) -250 ;
                
        nube_13.obj.y = (canvas_home.height/2)-296 ;
         
    }
    
}

var nube_14=new function()
{   
    this.obj = new Container();          
    this.url = "images/images_home/nube_14.png";
    
    this.init = function()
    {
        stage.addChild(nube_14.obj);        
        nube_14.init_fondo() ;                        
        this.resize();   
    }    
    this.init_fondo = function()
    {   
       var nube_14_imagen = new Bitmap(nube_14.url);         
       // Shape ...
       
        var s = new Shape(nube_14_imagen); 
        
        s.x = 10;
        s.y = 40;
        
        nube_14.obj.addChild(s) ;          
    }           
    this.resize = function() 
    {  
        
          nube_14.obj.x =canvas_home.width -150 ;
          nube_14.obj.y = (canvas_home.height/2) ; 
         
    }
    
}
*/
var pajaro_rojo_1=new function()
{   
    this.obj = new Container();          
    this.url = "images/images_home/pajaro_rojo_1.png";
    
    this.init = function()
    {
        stage.addChild(pajaro_rojo_1.obj);        
        pajaro_rojo_1.init_fondo() ;                        
        this.resize();   
    }    
    this.init_fondo = function()
    {   
        var pajaro_rojo_1_imagen = new Bitmap(pajaro_rojo_1.url);
        
           
        
        // Shape ...
              
        var s = new Shape(pajaro_rojo_1_imagen);
        
        s.skewY = s.skewX = 15; 
        
        s.x = 10;
        s.y = 40;
        
        pajaro_rojo_1.obj.addChild(s) ;          
    }           
    this.resize = function() 
    {  
        pajaro_rojo_1.obj.x =-100 ;
        pajaro_rojo_1.obj.y = 324 ;
        
         
    }
    
}

var pajaro_rojo_2=new function()
{   
    this.obj = new Container();          
    this.url = "images/images_home/pajaro_rojo_2.png";
    
    this.init = function()
    {
        stage.addChild(pajaro_rojo_2.obj);        
        pajaro_rojo_2.init_fondo() ;                        
        this.resize();   
    }    
    this.init_fondo = function()
    {  
        
       var pajaro_rojo_2_imagen = new Bitmap(pajaro_rojo_2.url);         
       // Shape ...
              
        var s = new Shape(pajaro_rojo_2_imagen);
        
        s.skewY = s.skewX = 15;
        
        s.x = 10 ;
        s.y = 40 ;
        
        pajaro_rojo_2.obj.addChild(s) ;          
    }           
    this.resize = function() 
    {            
        pajaro_rojo_2.obj.x =- 90   ; 
        pajaro_rojo_2.obj.y = 374  ;  
        
    }
        
}

var pajaro_rojo_3=new function()
{   
    this.obj = new Container();          
    this.url = "images/images_home/pajaro_rojo_3.png";
    
    this.init = function()
    {
        stage.addChild(pajaro_rojo_3.obj);        
        pajaro_rojo_3.init_fondo() ;                        
        this.resize();   
    }    
    this.init_fondo = function()
    {   
       var pajaro_rojo_3_imagen = new Bitmap(pajaro_rojo_3.url);         
       // Shape ...
       
        var s = new Shape(pajaro_rojo_3_imagen); 
        
        //s.skewY = s.skewX = 30;
        
        s.x = 10;
        s.y = 40;
        
        pajaro_rojo_3.obj.addChild(s) ;          
    }           
    this.resize = function() 
    {            
        pajaro_rojo_3.obj.x =- 80   ; 
        pajaro_rojo_3.obj.y = 624  ; 
         
    }
    
}
var pajaro_rojo_4=new function()
{   
    this.obj = new Container();          
    this.url = "images/images_home/pajaro_rojo_4.png";
    
    this.init = function()
    {
        stage.addChild(pajaro_rojo_4.obj);        
        pajaro_rojo_4.init_fondo() ;                        
        this.resize();   
    }
        
    this.init_fondo = function()
    {   
       var pajaro_rojo_4_imagen = new Bitmap(pajaro_rojo_4.url); 
       
       // Shape ...
              
        var s = new Shape(pajaro_rojo_4_imagen); 
        
        //s.skewY = s.skewX = 45;
        
        s.x = 10;
        s.y = 40;
        
        pajaro_rojo_4.obj.addChild(s) ;          
    }
       
    this.resize = function() 
    {         
        pajaro_rojo_4.obj.x  = - 70   ; 
        pajaro_rojo_4.obj.y  =   624  ; 
        
    }
    
}


var pajaro_amarillo_1=new function()
{   
    
     this.obj = new Container();          
     this.url = "images/images_home/pajaro_amarillo_1.png" ; 
    
    this.init = function()
    {
        stage.addChild(pajaro_amarillo_1.obj);        
        pajaro_amarillo_1.init_fondo() ;                        
        this.resize();   
    }
        
    this.init_fondo = function()
    {           
        var pajaro_amarillo_1_imagen = new Bitmap(pajaro_amarillo_1.url) ;  
        var s = new Shape(pajaro_amarillo_1_imagen) ;  
        
        s.skewY = s.skewX = 345;
        
         s.x = 10;
         s.y = 40;
                 
        pajaro_amarillo_1.obj.addChild(s) ;          
    }
               
    this.resize = function() 
    {   
          pajaro_amarillo_1.obj.x = canvas_home.width    ;                  
          pajaro_amarillo_1.obj.y = (canvas_home.height/2) - 226  ;
          
    }
    
}

var pajaro_amarillo_2=new function()
{   
    this.obj = new Container();          
    this.url = "images/images_home/pajaro_amarillo_2.png";
    
    this.init = function()
    {
        stage.addChild(pajaro_amarillo_2.obj);        
        pajaro_amarillo_2.init_fondo() ;                        
        this.resize();   
    }    
    this.init_fondo = function()
    {   
       var pajaro_amarillo_2_imagen = new Bitmap(pajaro_amarillo_2.url);         
       // Shape ...
       
        var s = new Shape(pajaro_amarillo_2_imagen); 
        
        s.x = 10;
        s.y = 40;
        
        pajaro_amarillo_2.obj.addChild(s) ;          
    }           
    this.resize = function() 
    {   
            pajaro_amarillo_2.obj.x =(canvas_home.width) ;          
            pajaro_amarillo_2.obj.y =canvas_home.height/2 + 174 ;  
         
    }
    
}

var pajaro_amarillo_3=new function()
{   
    this.obj = new Container();          
    this.url = "images/images_home/pajaro_amarillo_3.png";
    
    this.init = function()
    {
        stage.addChild(pajaro_amarillo_3.obj);        
        pajaro_amarillo_3.init_fondo() ;                        
        this.resize();   
    }    
    this.init_fondo = function()
    {   
       var pajaro_amarillo_3_imagen = new Bitmap(pajaro_amarillo_3.url);         
       // Shape ...
       
        var s = new Shape(pajaro_amarillo_3_imagen); 
        
        s.x = 10;
        s.y = 40;
        
        pajaro_amarillo_3.obj.addChild(s) ;          
    }           
    this.resize = function() 
    {   
            pajaro_amarillo_3.obj.x =(canvas_home.width) ;          
            pajaro_amarillo_3.obj.y =canvas_home.height/2 + 124 ;  
         
    }
    
}

var pajaro_amarillo_4=new function()
{   
    this.obj = new Container();          
    this.url = "images/images_home/pajaro_amarillo_4.png";
    
    this.init = function()
    {
        stage.addChild(pajaro_amarillo_4.obj);        
        pajaro_amarillo_4.init_fondo() ;                        
        this.resize();   
    }    
    this.init_fondo = function()
    {   
       var pajaro_amarillo_4_imagen = new Bitmap(pajaro_amarillo_4.url);         
       // Shape ...
       
        var s = new Shape(pajaro_amarillo_4_imagen); 
        
        s.x = 10;
        s.y = 40;
        
        pajaro_amarillo_4.obj.addChild(s) ;          
    }           
    this.resize = function() 
    {   
        pajaro_amarillo_4.obj.x =(canvas_home.width) ;          
        pajaro_amarillo_4.obj.y =canvas_home.height/2 + 74 ; 
        
    }
    
}
var pajaro_amarillo_5=new function()
{   
    this.obj = new Container();          
    this.url = "images/images_home/pajaro_amarillo_5.png";
    
    this.init = function()
    {
        stage.addChild(pajaro_amarillo_5.obj);        
        pajaro_amarillo_5.init_fondo() ;                        
        this.resize();   
    }    
    this.init_fondo = function()
    {   
       var pajaro_amarillo_5_imagen = new Bitmap(pajaro_amarillo_5.url);         
       // Shape ...
       
        var s = new Shape(pajaro_amarillo_5_imagen); 
        
        s.x = 10;
        s.y = 40;
        
        pajaro_amarillo_5.obj.addChild(s) ;          
    }           
    this.resize = function() 
    {   
        pajaro_amarillo_5.obj.x =(canvas_home.width) ;          
        pajaro_amarillo_5.obj.y =canvas_home.height/2 + 24 ; 
         
        
    }
    
}

var avion=new function()
{   
    this.obj = new Container();          
    this.url_avion = "images/images_home/airplane.png";
    this.url_logo = "images/images_home/logo-airplane.png";
     
    
    this.init = function()
    {
        stage.addChild(avion.obj);        
        avion.init_avion();                        
        avion.init_logo();
        this.resize();   
    }    
    
    this.init_avion = function()
    {   
       var avion_imagen = new Bitmap(avion.url_avion);
       
       avion_imagen.x = 0;
       avion_imagen.y = 15;
                
       avion.obj.addChild(avion_imagen);          
    }           
    
    this.init_logo = function()
    {   
       var logo_imagen = new Bitmap(avion.url_logo);
       
       logo_imagen.x = 100;
       logo_imagen.y = 15;
                
       avion.obj.addChild(logo_imagen);          
    }
    this.resize = function() 
    {   
        avion.obj.x =(canvas_home.width) + 150;          
        //avion.obj.x =(canvas_home.width)/2;
        avion.obj.y =canvas_home.height/2 - 100; 
         
        
    }
    
}
var avionmini=new function()
{   
    this.obj = new Container();          
    this.url_avionmini = "images/images_home/airplane-mini.png";
     
    
    this.init = function()
    {
        stage.addChild(avionmini.obj);        
        avionmini.init_avionmini();                        
        this.resize();   
    }    
    
    this.init_avionmini = function()
    {   
       var avionmini_imagen = new Bitmap(avionmini.url_avionmini);
       
       avionmini_imagen.x = 0;
       avionmini_imagen.y = 0;
                
       avionmini.obj.addChild(avionmini_imagen);          
    }           
    
    this.resize = function() 
    {   
        avionmini.obj.x = -250;          
        avionmini.obj.y =canvas_home.height/2 + 80; 
       
    }
    
}

var propaganda = new function(){
    
    this.obj = new Container();          
    this.url_propaganda = "images/images_home/advertise.png";
     
    
    this.init = function()
    {
        stage.addChild(propaganda.obj);        
        propaganda.init_propaganda();                        
        this.resize();   
    }    
    
    this.init_propaganda = function()
    {   
       var propaganda_imagen = new Bitmap(propaganda.url_propaganda);
       
       propaganda_imagen.x = 0;
       propaganda_imagen.y = 0;
                
       propaganda.obj.addChild(propaganda_imagen);          
    }           
    
    this.resize = function() 
    {   
        propaganda.obj.x = canvas_home.width/2 + 50;          
        propaganda.obj.y = canvas_home.height/2 + 240; 
       
    }
    
}

