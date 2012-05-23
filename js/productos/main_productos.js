function init_productos(){
    
    var left= -(1920 - document.body.clientWidth)/2;  
    
    jQuery("#canvas_productos").css({left:(left)});
    
    var textarea = jQuery('#descripcion_producto');        
    
    var left_prod = (document.body.clientWidth/2)-138;
    
    textarea.css({'left':left_prod,'top':'720px','z-index':'999','width':'270','height':'70'});
    
    resize_canvas();
   
    
   canvas_productos = document.getElementById("canvas_productos");
    
    
   stage_productos = new Stage(canvas_productos);
   
   if (Touch.isSupported()) { Touch.enable(stage_productos); } 
    
    oncanvas_productos = oCanvas.create({
	   canvas: "#canvas_productos"
	});
    
    stage_productos.mouseEventsEnabled = true;
    
    // enable touch interactions if supported on the current device:
	//if (Touch.isSupported()) { Touch.enable(stage); }

	// enabled mouse over / out events
	stage_productos.enableMouseOver();
    
    jQuery.getJSON('frontend/products/',function(data){
        
        maquina.json_consulta=data;
            
    });
    
    /**
    ***Inicializaci�n de Objetos
    ***
    **/
    
    
    var logoKinder = new logoKinderGirando();
    
    logoKinder.init(492, 815, stage_productos, canvas_productos);
    
    maquina_logo.init();
    
    maquina.init();
    
    operadormaquina.init();
    
    operadorcajas.init();
    
    mandomaquina.init();
    
    lucesmaquina.init();
    
    infonutricional.init();
    
    textokinder.init();
    
    movruedas.init();
    
    ojosoperadorcarro.init();
    
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
    
    animacion_productos.puntero(infonutricional);
    
    animacion_productos.mover_palanca(mandomaquina);
    
   
    
    animacion_productos.boton_infonutricional(infonutricional,'frontend/info_nutricional/');
    
    animacion_productos.pestanear(operadormaquina.ojoscerrados_img,3,5);
    
    animacion_productos.pestanear(ojosoperadorcarro.ojoscerrados_img,4,5);
    
    /***
    ****Actualizacion de Stage
    ***/
    
    ticker_all();
}

