function init_contacto(){
    
    var left = -(1920 - document.body.clientWidth)/2;
    
    var formulario = jQuery('#formulario_contacto');

    var nuevo_left = (document.body.clientWidth/2)-195;
        
    jQuery('#formulario_contacto').css({'left':(nuevo_left),'top':'39%','z-index':'999'});
    
    
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
    ***Inicializaci�n de Objetos
    ***
    **/
    
    var logoKinder = new logoKinderGirando();
    
    logoKinder.init(492, 806, stage_contacto, canvas_contacto);
    
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
    
    animacion_contacto.pestanear(operadoripad.ojoscerrados_img,2,5);
    
    animacion_contacto.mover_cejas(operadoripad.cejas_img,2,5,0);
    
    animacion_contacto.mover_cejas(operadoripad.cejas2_img,2,5,220);
    
    animacion_contacto.mover_brazo(operadoripad.brazoderecho_img,2,5,180);
    
    
    animacion_contacto.pestanear(operador.ojoscerrados_img,3,5);
    
    animacion_contacto.mover_cejas(operador.cejas1_img,3,5,0);
    
    animacion_contacto.mover_cejas(operador.cejas2_img,3,5,220);
    
    //animacion_contacto.mover_brazo2(operador.brazoizquierdo_img,3,5,10);
    
    
    /*animacion_contacto.horizontal(nube1,1960,40,2,1,0);
    
    animacion_contacto.horizontal(nube2,1960,50,4,2,0);
    
    animacion_contacto.horizontal(nube3,1960,80,6,3,0);*/
    
    
    
    /***
    ****Actualizacion de Stage
    ***/
    
    ticker_all();
}

