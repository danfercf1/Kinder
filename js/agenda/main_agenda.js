function init_agenda(){
    
    var left= -(1920 - document.body.clientWidth)/2;  
    
    var left_agenda = (document.body.clientWidth/2)-321;
        
    jQuery('#calendario').css({'left':(left_agenda)});
    
    jQuery("#canvas_agenda").css({left:(left)});
    
    /**Calendario**/
    calendario_agenda.init();
    
    resize_canvas();
   
    
    canvas_agenda = document.getElementById("canvas_agenda");
    
    
    stage_agenda = new Stage(canvas_agenda);
   
   if (Touch.isSupported()) { Touch.enable(stage_agenda); } 
    
    oncanvas_agenda = oCanvas.create({
	   canvas: "#canvas_agenda"
	});
    
    stage_agenda.mouseEventsEnabled = true;
    
    
    /**
    ***Inicializacion de Objetos
    ***
    **/
    
    /**Despues del fondo**/
    
    operador_lentes3D.init();
    
    operadorPC.init();
    
    var logoKinder = new logoKinderGirando();
    
    logoKinder.init(492, 840, stage_agenda, canvas_agenda);


    /**
     * Animaciones
     */

    animacion_agenda.pestanear(operadorPC.ojoscerrados_img,3,5);

    animacion_contacto.mover_brazo2(operador_lentes3D.brazoizq_img,2,7,-10);

    animacion_contacto.mover_brazo2(operador_lentes3D.brazoder_img,2,7,-20);

    /***
    ****Actualizacion de Stage
    ***/
    
    ticker_all();
}

