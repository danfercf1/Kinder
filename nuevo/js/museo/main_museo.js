function init_museo(){
    
    var left= -(1920 - document.body.clientWidth)/2;  
    jQuery("#canvas_museo").css({left:(left)});
    
    resize_canvas();
   
    canvas_museo = document.getElementById("canvas_museo");
    
    stage_museo = new Stage(canvas_museo);
    
    
    oncanvas_museo = oCanvas.create({
	   canvas: "#canvas_museo"
	});
    
    stage_museo.mouseEventsEnabled = true;
    
    stage_museo.enableMouseOver();
    
    
     /**
    ***Inicialización de Objetos
    ***
    **/
    
    
    
    /**
    ***Animacion Burbujas
    ***
    **/
    
    
    animacion_museo.burbujas(8,1300,1000,50,570,-500,18,3);
    
    animacion_museo.burbujas(15,1300,1000,125,410,-500,30,1);
    
    animacion_museo.burbujas(10,1300,1000,210,560,-500,28,3);
    
    animacion_museo.burbujas(6,1300,1000,460,755,-500,20,3);
    
    animacion_museo.burbujas(6,1300,1000,555,760,-500,25,3);
    
    animacion_museo.burbujas(4,1300,1000,725,480,-500,25,3);
    
    animacion_museo.burbujas(10,0,0,880,330,-500,25,3);
    
    animacion_museo.burbujas(9,0,0,1235,700,-500,25,3);
    
    animacion_museo.burbujas(12,0,0,1285,640,-500,18,3);
    
    animacion_museo.burbujas(10,0,0,1470,550,-500,18,3);
    
    animacion_museo.burbujas(13,0,0,1620,405,-500,18,3);
    
    
    ostra.init();
    
    guardian.init();
    
    pecesrojos1.init();
    
    pecesrojos2.init();
    
    //titulo.init();
    
    titulo_separado.init();
    
    pecesamarillos1.init();
    
    pulpo1.init();
    
    pulpo2.init();
    
    pecesrojos3.init();
    
    pecesamarillos2.init();
    
    pecesrojos4.init();
    
    pecesamarillos3.init();
    
    pulpo3.init();
    
    pulpo4.init();
    
    pulpo5.init();
    
    plantanaranja1.init();
    
    plantanaranja2.init();
    
    plantanaranja3.init();
    
    plantanaranja4.init();
    
    pecesamarillos4.init();
    
    
    /**
    ***Animacion Pulpos
    ***
    **/
    
    animacion_museo.vertical(pulpo1,400,10,1);
    
    animacion_museo.vertical(pulpo2,300,8,1);
    
    animacion_museo.diagonal(pulpo3,800,100,12,1,0);
    
    animacion_museo.diagonal(pulpo4,600,100,13,2,0);
    
    animacion_museo.diagonal(pulpo5,500,100,14,3,0);
    
    /**
    ***Animacion Peces
    ***
    **/
    
    animacion_museo.horizontal(pecesrojos1,1950,20,0); //Inicio Izquierda
    
    animacion_museo.horizontal(pecesrojos2,-100,23,0);  //Inicio Derecha
    
    animacion_museo.horizontal(pecesrojos3,-100,26,0); //Inicio Derecha
    
    animacion_museo.horizontal(pecesrojos4,1950,18,0); 
    
    animacion_museo.horizontal(pecesamarillos1,-100,16,0); //Inicio Derecha
    
    animacion_museo.horizontal(pecesamarillos2,1950,20,0); //Inicio Izquierda
    
    animacion_museo.horizontal(pecesamarillos3,1950,19,0);
    
    animacion_museo.horizontal(pecesamarillos4,1950,13,0); //Inicio Izquierda
    
    
    /**
    ***Animacion Guardian
    ***
    **/
    
    animacion_museo.saltar(guardian,500,10);
    
    
    /**
    ***Animacion Cursores
    ***
    **/
    
    animacion_museo.botones(ostra.cursorleft);
    
    animacion_museo.botones(ostra.cursorright);
    
    animacion_museo.escalado(ostra.cursorright,1.02);
    
    animacion_museo.escalado(ostra.cursorleft,1.02);
    
    /**
    ***Animacion titulo
    ***
    **/
    
    animacion_museo.flotar(titulo_separado,50,3,1);
    
    animacion_museo.burbujas(7,0,0,300,800,-100,25,4);
    
    animacion_museo.burbujas(10,0,0,1550,800,-100,30,4);
    
    
    
    ticker_all();
}

