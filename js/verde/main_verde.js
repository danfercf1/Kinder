function init_verde(){
    
    var left= -(1920 - document.body.clientWidth)/2;  
    jQuery("#canvas_verde").css({left:(left)});
    
    resize_canvas();
   
    canvas_verde = document.getElementById("canvas_verde");
    
    stage_verde = new Stage(canvas_verde);
    
    
    oncanvas_verde = oCanvas.create({
	   canvas: "#canvas_verde"
	});
    
    stage_verde.mouseEventsEnabled = true;
    
    stage_verde.enableMouseOver();
    
    
    /***Inicializacion objetos***/
    
    guardian_verde.init();
    
    arbusto.init();
    
    tigre.init();
    
    oso.init();
    
    oso2.init();
    
    comadreja.init();
    
    zorro.init();
    
    hoja2.init();
    
    zorro2.init();
    
    zorro3.init();
    
    
    soporteder.init();
    
    soporteizq.init();
    
    //hoja.init();
    
   
    
    nube_verde1.init();
    
    nube_verde2.init();
    
    nube_verde3.init();
    
    pajarosblancos1.init();
    
    pajarosblancos2.init();
    
    //nube_verde4.init();
    
    liana.init();
    
    liana2.init();
    
    liana3.init();
    
    liana4.init();
    
    liana5.init();
    
    liana6.init();
    
    chango.init();
    
    panda.init();
    
    conejo.init();
    
    
    animacion_verde.horizontal(nube_verde1,-200,350,0,1,0);
    
    animacion_verde.horizontal(nube_verde2,1960,250,3,2,0);
    
    animacion_verde.horizontal(nube_verde3,-200,300,0,1,0);
    
    animacion_verde.horizontal_pajaros(pajarosblancos1,-200,80,0);
    
    animacion_verde.horizontal_pajaros(pajarosblancos2,-200,50,0);
    
    animacion_verde.saltar(guardian_verde,15,4);
    
    //animacion_verde.mortal(chango,360,5);
    
    animacion_verde.salir_cueva(comadreja,3);
    
    
    ticker_all();
}

