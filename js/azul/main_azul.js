function init_azul(){
    
    var left= -(1920 - document.body.clientWidth)/2;  
    jQuery("#canvas_azul").css({left:(left)});
    
    resize_canvas();
   
    canvas_azul = document.getElementById("canvas_azul");
    
    stage_azul = new Stage(canvas_azul);
    
    
    oncanvas_azul = oCanvas.create({
	   canvas: "#canvas_azul"
	});
    
    stage_azul.mouseEventsEnabled = true;
    
    stage_azul.enableMouseOver();
    
    
    /***Inicializacion objetos***/
    
    humo.init();
    
    guardian_azul.init();
    
    carro_verde.init();
    
    carro_rosa.init();
    
    ovni.init();
    
    muneco_azul.init();
    
    muneco_plomo.init();
    
    muneco_verde.init();
    
    muneco_marron.init();
    
    muneco_naranja.init();
    
    muneco_naranja2.init();
    
    partes1.init();
    
    muneco_rosa.init();
    
    muneco_purpura.init();
    
    muneco_rojo.init();
    
    muneco_rojo2.init();
    
    muneco_celeste.init();
    
    muneco_celeste2.init();
    
    flor1.init();
    
    estrellas.init();
    
    subeybaja.init();
    
    pajarosblancos1a.init();
    
    /***Animaciones***/
    
    animacion_azul.horizontal_pajaros(pajarosblancos1a,-250,80,0);
    
    animacion_azul.saltar(ovni,-200,3);
    
    animacion_azul.flotar(guardian_azul,10,4,1);
    
    animacion_azul.humo(humo,-50,3,1);
    
    animacion_azul.pestanear(guardian_azul.ojoscerrados_img,3,5);
    
    animacion_azul.salir_escondite(muneco_verde,30,0.5,3);
    
    animacion_azul.salir_escondite(muneco_plomo,-30,0.5,2);
    
    animacion_azul.salir_escondite(muneco_rojo,-25,0.5,4);
    
    animacion_azul.salir_escondite2(muneco_marron,0,1,2);
    
    animacion_azul.entrar_cueva(muneco_rojo2,5);
    
    //animacion_azul.ocultarse_piso(muneco_purpura,5);
    
    animacion_azul.mostrar_muneco(muneco_azul.muneco_azul_img,muneco_azul.muneco_azul_imgc);
    
    animacion_azul.mostrar_muneco(muneco_rosa.muneco_rosa_img,muneco_rosa.muneco_rosa_imgc);
    
    animacion_azul.mostrar_muneco(muneco_purpura.muneco_purpura_img,muneco_purpura.muneco_purpura_imgc);
    
    animacion_azul.mostrar_muneco(muneco_naranja.muneco_naranja_img,muneco_naranja.muneco_naranja_imgc);
    
    animacion_azul.mostrar_muneco(muneco_naranja2.muneco_naranja2_img,muneco_naranja2.muneco_naranja2_imgc);    
    
    animacion_azul.mostrar_muneco(muneco_celeste2.muneco_celeste2_img,muneco_celeste2.muneco_celeste2_imgc);
    
    animacion_azul.ocultarse_piso(muneco_celeste,5000);
    
    animacion_azul.movimiento_carro(carro_verde.carro_verde_img,5,1);
    
    ticker_all();
}

