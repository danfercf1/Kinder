/***Objeto Guardian***/

var guardian_azul = new function(){
    
    this.obj = new Container();
    
    this.guardian_azul_img = new Bitmap("images/azul/guardian.png");
    this.ojoscerrados_img = new Bitmap("images/azul/eyes.png");
    
    this.init = function(){
        
        stage_azul.addChild(guardian_azul.obj);
        this.init_guardian_azul();
        this.init_ojos_cerrados();
        this.resize();
        
    }
    
    this.init_guardian_azul = function(){
        guardian_azul.obj.addChild(guardian_azul.guardian_azul_img);
    }
    
    this.init_ojos_cerrados = function(){
        
        guardian_azul.ojoscerrados_img.x = 285;
        guardian_azul.ojoscerrados_img.y = 120;
        
        guardian_azul.obj.addChild(guardian_azul.ojoscerrados_img);
    }
    
    this.resize = function(){
        
        guardian_azul.obj.x = (canvas_azul.width/2) - 20;
        guardian_azul.obj.y = (canvas_azul.height/2) - 220;
        
    }
}

/***Objeto carro verde***/

var carro_verde = new function(){
    
    this.obj = new Container();
    
    this.carro_verde_img = new Bitmap("images/azul/green_car.png");
    
    this.init = function(){
        
        stage_azul.addChild(carro_verde.obj);
        this.init_carro_verde();
        this.resize();
        
    }
    
    this.init_carro_verde = function(){
        carro_verde.obj.addChild(carro_verde.carro_verde_img);
    }
    
    
    this.resize = function(){
        
        carro_verde.obj.x = 440;
        carro_verde.obj.y = (canvas_azul.height/2) + 210;
        
    }    
    
}


/***Objeto carro rosa***/

var carro_rosa = new function(){
    
    this.obj = new Container();
    
    this.carro_rosa_img = new Bitmap("images/azul/pink_car.png");
    
    this.init = function(){
        
        stage_azul.addChild(carro_rosa.obj);
        this.init_carro_rosa();
        this.resize();
        
    }
    
    this.init_carro_rosa = function(){
        carro_rosa.obj.addChild(carro_rosa.carro_rosa_img);
    }
    
    
    this.resize = function(){
        
        carro_rosa.obj.x = (canvas_azul.width/2) + 235;
        carro_rosa.obj.y = (canvas_azul.height/2) + 93;
        
    }    
    
}

/***Objeto ovni***/

var ovni = new function(){
    
    this.obj = new Container();
    
    this.ovni_img = new Bitmap("images/azul/ovni.png");
    
    this.init = function(){
        
        stage_azul.addChild(ovni.obj);
        this.init_ovni();
        this.resize();
        
    }
    
    this.init_ovni = function(){
        ovni.obj.addChild(ovni.ovni_img);
    }
    
    
    this.resize = function(){
        
        ovni.obj.x = (canvas_azul.width/2) - 320;
        ovni.obj.y = (canvas_azul.height/2) - 150;
        
    }    
    
}

/***Objeto muneco azul***/

var muneco_azul = new function(){
    
    this.obj = new Container();
    
    this.muneco_azul_img = new Bitmap("images/azul/blue.png");
    
    this.muneco_azul_imgc = new Bitmap("images/azul/blue2.png");
    
    this.init = function(){
        
        stage_azul.addChild(muneco_azul.obj);
        this.init_muneco_azul();
        this.init_muneco_azulc();
        this.resize();
        
    }
    
    this.init_muneco_azul = function(){
        muneco_azul.obj.addChild(muneco_azul.muneco_azul_img);
    }
    
    this.init_muneco_azulc = function(){
        
        muneco_azul.muneco_azul_imgc.x = 10;
        muneco_azul.muneco_azul_imgc.y = -30;
        muneco_azul.muneco_azul_imgc.alpha = 0;
        
        muneco_azul.obj.addChild(muneco_azul.muneco_azul_imgc);
    }
    
    
    this.resize = function(){
        
        muneco_azul.obj.x = (canvas_azul.width/2) - 130;
        muneco_azul.obj.y = (canvas_azul.height/2) + 167;
        
    }    
    
}

/***Objeto muneco plomo***/

var muneco_plomo = new function(){
    
    this.obj = new Container();
    
    this.muneco_plomo_img = new Bitmap("images/azul/gray.png");
    
    this.init = function(){
        
        stage_azul.addChild(muneco_plomo.obj);
        this.init_muneco_plomo();
        this.resize();
        
    }
    
    this.init_muneco_plomo = function(){
        muneco_plomo.obj.addChild(muneco_plomo.muneco_plomo_img);
    }
    
    
    this.resize = function(){
        
        muneco_plomo.obj.x = (canvas_azul.width/2) + 80;
        muneco_plomo.obj.y = (canvas_azul.height/2) + 225;
        
    }    
    
}

/***Objeto muneco verde***/

var muneco_verde = new function(){
    
    this.obj = new Container();
    
    this.muneco_verde_img = new Bitmap("images/azul/green.png");
    
    this.init = function(){
        
        stage_azul.addChild(muneco_verde.obj);
        this.init_muneco_verde();
        this.resize();
        
    }
    
    this.init_muneco_verde = function(){
        muneco_verde.obj.addChild(muneco_verde.muneco_verde_img);
    }
    
    
    this.resize = function(){
        
        muneco_verde.obj.x = (canvas_azul.width/2) - 307;
        muneco_verde.obj.y = (canvas_azul.height/2) + 235;
        
    }    
    
}


/***Objeto muneco marron***/

var muneco_marron = new function(){
    
    this.obj = new Container();
    
    this.muneco_marron_img = new Bitmap("images/azul/maroon2.png");
    
    this.init = function(){
        
        stage_azul.addChild(muneco_marron.obj);
        this.init_muneco_marron();
        this.resize();
        
    }
    
    this.init_muneco_marron = function(){
        muneco_marron.muneco_marron_img.scaleX = muneco_marron.muneco_marron_img.scaleY = 0.55; 
        muneco_marron.obj.addChild(muneco_marron.muneco_marron_img);
    }
    
    
    this.resize = function(){
        
        muneco_marron.obj.x = (canvas_azul.width/2) + 350;
        muneco_marron.obj.y = (canvas_azul.height/2) + 212;
        
    }    
    
}

/***Objeto muneco naranja***/

var muneco_naranja = new function(){
    
    this.obj = new Container();
    
    this.muneco_naranja_img = new Bitmap("images/azul/orange.png");
    
    this.muneco_naranja_imgc = new Bitmap("images/azul/orange2.png");
    
    this.init = function(){
        
        stage_azul.addChild(muneco_naranja.obj);
        this.init_muneco_naranja();
        this.init_muneco_naranjac();
        this.resize();
        
    }
    
    this.init_muneco_naranja = function(){
        muneco_naranja.obj.addChild(muneco_naranja.muneco_naranja_img);
    }
    
    this.init_muneco_naranjac = function(){
       
        
        muneco_naranja.muneco_naranja_imgc.x = 10;
        muneco_naranja.muneco_naranja_imgc.y = -30;
        muneco_naranja.muneco_naranja_imgc.alpha = 0;
     
        muneco_naranja.obj.addChild(muneco_naranja.muneco_naranja_imgc);
        
    }
    
    
    this.resize = function(){
        
        muneco_naranja.obj.x = (canvas_azul.width/2) + 362;
        muneco_naranja.obj.y = (canvas_azul.height/2) + 52;
        
    }    
    
}

/***Objeto muneco naranja2***/

var muneco_naranja2 = new function(){
    
    this.obj = new Container();
    
    this.muneco_naranja2_img = new Bitmap("images/azul/orange_2.png");
    this.muneco_naranja2_imgc = new Bitmap("images/azul/orange_2c.png");
    
    this.init = function(){
        
        stage_azul.addChild(muneco_naranja2.obj);
        this.init_muneco_naranja2();
        this.init_muneco_naranja2c();
        this.resize();
        
    }
    
    this.init_muneco_naranja2 = function(){
        muneco_naranja2.obj.addChild(muneco_naranja2.muneco_naranja2_img);
    }
    
    this.init_muneco_naranja2c = function(){
        
        muneco_naranja2.muneco_naranja2_imgc.x = -10;
        muneco_naranja2.muneco_naranja2_imgc.y = -40;
        muneco_naranja2.muneco_naranja2_imgc.alpha = 0;
        
        muneco_naranja2.obj.addChild(muneco_naranja2.muneco_naranja2_imgc);
    }
    
    
    this.resize = function(){
        
        muneco_naranja2.obj.x = (canvas_azul.width/2) + 353;
        muneco_naranja2.obj.y = (canvas_azul.height/2) + 270;
        
    }    
    
}

/***Objeto partes 1***/

var partes1 = new function(){
    
    this.obj = new Container();
    
    this.partes1_img = new Bitmap("images/azul/parts1.png");
    
    this.init = function(){
        
        stage_azul.addChild(partes1.obj);
        this.init_partes1();
        this.resize();
        
    }
    
    this.init_partes1 = function(){
        partes1.obj.addChild(partes1.partes1_img);
    }
    
    
    this.resize = function(){
        
        partes1.obj.x = (canvas_azul.width/2) + 85;
        partes1.obj.y = (canvas_azul.height/2) + 232;
        
    }    
    
}

/***Objeto muneco rosa***/

var muneco_rosa = new function(){
    
    this.obj = new Container();
    
    this.muneco_rosa_img = new Bitmap("images/azul/pink.png");
    
    this.muneco_rosa_imgc = new Bitmap("images/azul/pink2.png");
    
    this.init = function(){
        
        stage_azul.addChild(muneco_rosa.obj);
        this.init_muneco_rosa();
        this.init_muneco_rosac();
        this.resize();
        
    }
    
    this.init_muneco_rosa = function(){
        muneco_rosa.obj.addChild(muneco_rosa.muneco_rosa_img);
    }
    
    this.init_muneco_rosac = function(){
        
        muneco_rosa.muneco_rosa_imgc.x = -7;
        muneco_rosa.muneco_rosa_imgc.y = -50;
        muneco_rosa.muneco_rosa_imgc.alpha = 0;
        
        muneco_rosa.obj.addChild(muneco_rosa.muneco_rosa_imgc);
    }
    
    this.resize = function(){
        
        muneco_rosa.obj.x = (canvas_azul.width/2) - 217;
        muneco_rosa.obj.y = (canvas_azul.height/2) + 286;
        
    }    
    
}

/***Objeto muneco purpura***/

var muneco_purpura = new function(){
    
    this.obj = new Container();
    
    this.muneco_purpura_img = new Bitmap("images/azul/purple.png");
    
    this.muneco_purpura_imgc = new Bitmap("images/azul/purple2.png");
    
    this.init = function(){
        
        stage_azul.addChild(muneco_purpura.obj);
        this.init_muneco_purpura();
        this.init_muneco_purpurac();
        this.resize();
        
    }
    
    this.init_muneco_purpura = function(){
        muneco_purpura.obj.addChild(muneco_purpura.muneco_purpura_img);
    }
    
    this.init_muneco_purpurac = function(){
        
        muneco_purpura.muneco_purpura_imgc.x = -2;
        muneco_purpura.muneco_purpura_imgc.y = -30;
        muneco_purpura.muneco_purpura_imgc.alpha = 0;
        
        muneco_purpura.obj.addChild(muneco_purpura.muneco_purpura_imgc);
    }
    
    
    this.resize = function(){
        
        muneco_purpura.obj.x = (canvas_azul.width/2) - 40;
        muneco_purpura.obj.y = (canvas_azul.height/2) + 253;
        
    }    
    
}

/***Objeto muneco rojo***/

var muneco_rojo = new function(){
    
    this.obj = new Container();
    
    this.muneco_rojo_img = new Bitmap("images/azul/red.png");
    
    this.init = function(){
        
        stage_azul.addChild(muneco_rojo.obj);
        this.init_muneco_rojo();
        this.resize();
        
    }
    
    this.init_muneco_rojo = function(){
        muneco_rojo.obj.addChild(muneco_rojo.muneco_rojo_img);
    }
    
    
    this.resize = function(){
        
        muneco_rojo.obj.x = (canvas_azul.width/2) + 250;
        muneco_rojo.obj.y = (canvas_azul.height/2) + 198;
        
    }    
    
}

/***Objeto muneco rojo2***/

var muneco_rojo2 = new function(){
    
    this.obj = new Container();
    
    this.muneco_rojo2_img = new Bitmap("images/azul/red_2.png");
    
    this.init = function(){
        
        stage_azul.addChild(muneco_rojo2.obj);
        this.init_muneco_rojo2();
        this.resize();
        
    }
    
    this.init_muneco_rojo2 = function(){
        muneco_rojo2.obj.addChild(muneco_rojo2.muneco_rojo2_img);
    }
    
    
    this.resize = function(){
        
        muneco_rojo2.obj.x = (canvas_azul.width/2) - 345;
        muneco_rojo2.obj.y = (canvas_azul.height/2) + 83;
        
    }    
    
}

/***Objeto muneco celeste***/

var muneco_celeste = new function(){
    
    this.obj = new Container();
    
    this.muneco_celeste_img = new Bitmap("images/azul/skyblue.png");
    /*this.muneco_celeste_imgc = new Bitmap("images/azul/skyblue2.png");*/
    
    this.init = function(){
        
        stage_azul.addChild(muneco_celeste.obj);
        this.init_muneco_celeste();
        this.resize();
        
    }
    
    this.init_muneco_celeste = function(){
        muneco_celeste.obj.addChild(muneco_celeste.muneco_celeste_img);
    }

    this.resize = function(){
        
        muneco_celeste.obj.x = (canvas_azul.width/2) + 116;
        muneco_celeste.obj.y = (canvas_azul.height/2) + 154;
        
    }    
    
}

/***Objeto muneco celeste2***/

var muneco_celeste2 = new function(){
    
    this.obj = new Container();
    
    this.muneco_celeste2_img = new Bitmap("images/azul/skyblue_2.png");
    
    this.muneco_celeste2_imgc = new Bitmap("images/azul/skyblue_2c.png");
    
    this.init = function(){
        
        stage_azul.addChild(muneco_celeste2.obj);
        this.init_muneco_celeste2();
        this.init_muneco_celeste2c();
        this.resize();
        
    }
    
    this.init_muneco_celeste2 = function(){
        
        muneco_celeste2.obj.addChild(muneco_celeste2.muneco_celeste2_img);
        
    }
    
    this.init_muneco_celeste2c = function(){
        
        muneco_celeste2.muneco_celeste2_imgc.x = -10;
        muneco_celeste2.muneco_celeste2_imgc.y = -40;
        muneco_celeste2.muneco_celeste2_imgc.alpha = 0;
        
         
        muneco_celeste2.obj.addChild(muneco_celeste2.muneco_celeste2_imgc);
    }
    
    
    this.resize = function(){
        
        muneco_celeste2.obj.x = 438;
        muneco_celeste2.obj.y = (canvas_azul.height/2) + 139;
        
    }    
    
}

/***Objeto humo***/

var humo = new function(){
    
    this.obj = new Container();
    
    this.humo_img = new Bitmap("images/azul/smoke.png");
    
    this.init = function(){
        
        stage_azul.addChild(humo.obj);
        this.init_humo();
        this.resize();
        
    }
    
    this.init_humo = function(){
        humo.obj.addChild(humo.humo_img);
    }
    
    
    this.resize = function(){
        
        humo.obj.x = (canvas_azul.width/2) + 78;
        humo.obj.y = (canvas_azul.height/2) - 85;
        
    }    
    
}

/***Objeto estrellas***/

var estrellas = new function(){
    
    this.obj = new Container();
    
    this.estrellas_img = new Bitmap("images/azul/stars.png");
    
    this.init = function(){
        
        stage_azul.addChild(estrellas.obj);
        this.init_estrellas();
        this.resize();
        
    }
    
    this.init_estrellas = function(){
        estrellas.obj.addChild(estrellas.estrellas_img);
    }
    
    
    this.resize = function(){
        
        estrellas.obj.x = (canvas_azul.width/2) + 254;
        estrellas.obj.y = (canvas_azul.height/2) + 225;
        
    }    
    
}

/***Objeto sube y baja***/

var subeybaja = new function(){
    
    this.obj = new Container();
    
    this.subeybaja_img = new Bitmap("images/azul/up.png");
    
    this.init = function(){
        
        stage_azul.addChild(subeybaja.obj);
        this.init_subeybaja();
        this.resize();
        
    }
    
    this.init_subeybaja = function(){
        subeybaja.obj.addChild(subeybaja.subeybaja_img);
    }
    
    
    this.resize = function(){
        
        subeybaja.obj.x = (canvas_azul.width/2) - 395;
        subeybaja.obj.y = (canvas_azul.height/2) + 195;
        
    }    
    
}

/***Objeto flor1***/

var flor1 = new function(){
    
    this.obj = new Container();
    
    this.flor1_img = new Bitmap("images/azul/flower1.png");
    
    this.init = function(){
        
        stage_azul.addChild(flor1.obj);
        this.init_flor1();
        this.resize();
        
    }
    
    this.init_flor1 = function(){
        flor1.obj.addChild(flor1.flor1_img);
    }
    
    
    this.resize = function(){
        
        flor1.obj.x = (canvas_azul.width/2) - 510;
        flor1.obj.y = (canvas_azul.height/2) + 268;
        
    }    
    
}



/***Pajaros blancos azul***/

var pajarosblancos1a = new function(){
    
    this.itemsbit = new Array();
    
    this.obj = new Container();
    
    this.items = new Array(
    new Array("images/azul/white_bird1.png",15,20),
    new Array("images/azul/white_bird1.png",-50,60),
    new Array("images/azul/white_bird2.png",0,105),
    new Array("images/azul/white_bird2.png",80,50)
    );
    
    this.init = function(){
        
        for (var i=0; i < pajarosblancos1a.items.length;i++){
            this.itemsbit[i] = new Bitmap(pajarosblancos1a.items[i][0]);
              
        }
        
        stage_azul.addChild(pajarosblancos1a.obj);
        this.init_pajarosblancos1a();
        this.resize();
        
    }
    
    this.init_pajarosblancos1a = function(){
        for (var i=0; i < pajarosblancos1a.items.length;i++){
            this.position(pajarosblancos1a.itemsbit[i],pajarosblancos1a.items[i][1],pajarosblancos1a.items[i][2]);
            pajarosblancos1a.obj.addChild(pajarosblancos1a.itemsbit[i]);
        }
    }
    
    
    this.resize = function(){
        
        pajarosblancos1a.obj.x = (canvas_azul.width) + 250;
        pajarosblancos1a.obj.y = (canvas_azul.height/2) - 350;
        
    }
    
    this.position = function(o,x,y){
        o.x = x;
        o.y = y;
    }
}

