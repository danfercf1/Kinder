function init_productos(){
    
    var left= -(1920 - document.body.clientWidth)/2;  
    jQuery("#canvas_productos").css({left:(left)});
    
    resize_canvas();
   
    canvas_productos = document.getElementById("canvas_productos");
    
    stage_productos = new Stage(canvas_productos);
    
    
    oncanvas_productos = oCanvas.create({
	   canvas: "#canvas_productos"
	});
    
    stage_productos.mouseEventsEnabled = true;
    
    stage_productos.enableMouseOver();
    
    
    /**
    ***Inicialización de Objetos
    ***
    **/
    
    /*nubeprod1.init();
    
    nubeprod2.init();
    
    nubeprod3.init();*/
    
    /**Despues del fondo**/
    
    //bg_productos.init();
    
    operadormaquina.init();
    
    operadorcajas.init();
    
    mandomaquina.init();
    
    lucesmaquina.init();
    
    infonutricional.init();
    
    textokinder.init();
    
    movruedas.init();
    
    lampara_prod1.init();
    
    lampara_prod2.init();
    
    lampara_prod3.init();
    
    lampara_prod4.init();
    
    lampara_prod5.init();
    
    lampara_prod6.init();
    
    lampara_prod7.init();
    
    lampara_prod8.init();
    
    lampara_prod9.init();
    
    lampara_prod10.init();
    
    lampara_prod11.init();
    
    lampara_prod12.init();
    
    lampara_prod13.init();
    
    lampara_prod14.init();
    
    
    /***
    ****Animaciones
    ***/
    
    /*animacion_productos.horizontal(nubeprod1,1960,100,2,1,0);
    
    animacion_productos.horizontal(nubeprod2,1960,120,4,2,0);
    
    animacion_productos.horizontal(nubeprod3,1960,140,6,3,0);*/
    
    animacion_productos.puntero(mandomaquina);
    
    animacion_productos.mover_palanca(mandomaquina);
    
    
    
    
    /***
    ****Actualizacion de Stage
    ***/
    
    ticker_all();
}

