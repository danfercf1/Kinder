function init_contacto(){
    
    var left = -(1920 - document.body.clientWidth)/2;
    
    jQuery("#canvas_contacto").css({left:(left)});
    
    resize_canvas();
   
    canvas_contacto = document.getElementById("canvas_contacto");
    
    stage_contacto = new Stage(canvas_contacto);
    
    
    /*oncanvas_contacto = oCanvas.create({
	   canvas: "#canvas_contacto"
	});*/
    
    stage_contacto.mouseEventsEnabled = true;
    
    stage_contacto.enableMouseOver();
    
    
    /**
    ***Inicialización de Objetos
    ***
    **/
    
    /*nube1.init();
    
    nube2.init();
    
    nube3.init();*/
    
    ipad.init();
    
    
    /**Despues del fondo**/
    
    //bg_contacto.init();
    
    operadoripad.init();
    
    operador.init();
    
    lampara1.init();
    
    lampara2.init();
    
    lampara3.init();
    
    lampara4.init();
    
    lampara5.init();
    
    lampara6.init();
    
    lampara7.init();
    
    lampara8.init();
    
    lampara9.init();
    
    lampara10.init();
    
    lampara11.init();
    
    lampara12.init();
    
    lampara13.init();
    
    lampara14.init();
    
    lampara15.init();
    
    lampara16.init();
    
    
    /***
    ****Animaciones
    ***/
    
    animacion_contacto.horizontal(nube1,1960,40,2,1,0);
    
    animacion_contacto.horizontal(nube2,1960,50,4,2,0);
    
    animacion_contacto.horizontal(nube3,1960,80,6,3,0);
    
    
    /***
    ****Actualizacion de Stage
    ***/
    
    ticker_all();
}

