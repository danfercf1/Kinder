function init_juegos(){
    
    var left= -(1920 - document.body.clientWidth)/2;  
    jQuery("#canvas_juegos").css({left:(left)});
    
    resize_canvas();
   
    canvas_juegos = document.getElementById("canvas_juegos");
    
    stage_juegos = new Stage(canvas_juegos);
    
    
    oncanvas_juegos = oCanvas.create({
	   canvas: "#canvas_juegos"
    });
    
    stage_juegos.mouseEventsEnabled = true;
    
    stage_juegos.enableMouseOver();
   
    /**
    ***Inicialización de Objetos
    ***
    **/
    
    animacion_juegos.estrellas(300,30,1,0.2);
    
    animacion_juegos.estrellas(300,10,3,0.2);
    
    animacion_juegos.estrellas(300,10,2,0.2);
    
    animacion_juegos.estrellas(300,10,4,0.2);
    
    animacion_juegos.estrellas(300,5,5,0.2);
    
    planeta1.init();
    
    planeta2.init();
    
    /***
    ****Inicializacion Cohete1 y animacion detras del suelo
    ***/
    
    cohete1.init();
    
    animacion_juegos.diagonal(cohete1,-200,450,4,5,0);
    
    /***
    ****Inicializacion Cohete2 y animacion detras del suelo
    ***/
    
    cohete2.init();
    
    animacion_juegos.ufo_complejo(cohete2,canvas_juegos.width,0,1600,8,1);

    /***
    ****Inicializacion Lava1 y animacion detras del suelo
    ***/
    
    lava1.init();
    
    animacion_juegos.saltar(lava1,30,3,0);
    
    /***
    ****Inicializacion Lava2 y animacion detras del suelo
    ***/
    
    lava2.init();
    
    animacion_juegos.saltar(lava2,30,5,0);


    /***
    ****Inicializacion Lava2 y animacion detras del suelo
    ***/
    
    lava3.init();
        
    animacion_juegos.saltar(lava3,10,1,0);
    
    
    bg_juegos.init();
    
    guardian_juegos.init();
    
    navegador.init();
    
    bichos1.init();
    
    bichos2.init();
    
    lava4.init();
    
    lava5.init();
    
    lava6.init();
    
    planeta3.init();
    
    planeta4.init();
    
    planeta5.init();
    
    planeta6.init();
    
    titulo_juegos.init();
    
    cohete3.init();
    
    cohete4.init();
    
    cohete5.init();
    
    cohete6.init();
    
    cohete7.init();
    
    cohete8.init();
    
    cohete9.init();
    
    /***
    ****Animaciones
    ***/
    
    animacion_juegos.diagonal(cohete3,-200,100,10,5,0);
    
    animacion_juegos.ufo_complejo(cohete4,canvas_juegos.width,0,500,10,0);
    
    animacion_juegos.diagonal(cohete5,-200,100,5,3,0);
    
    animacion_juegos.vertical(cohete6,400,10,10,0);
    
    animacion_juegos.diagonal(cohete7,-200,-200,5,3,0);
    
    animacion_juegos.vertical(cohete8,300,8,5,0);
    
    animacion_juegos.diagonal(cohete9,500,-200,10,3,0);
    
    animacion_juegos.saltar(guardian_juegos,150,5);
    
    animacion_juegos.flotar(titulo_juegos,50,5,1);
    
    
    animacion_juegos.puntero(navegador.cursorizq);
    
    animacion_juegos.puntero(navegador.cursorder);
   
    ticker_all();
}
