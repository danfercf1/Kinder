
/***Objeto Guardian***/

var guardian_verde = new function(){
    
    this.obj = new Container();
    
    this.guardian_verde_img = new Bitmap("images/verde/guardian.png");
    
    this.init = function(){
        
        stage_verde.addChild(guardian_verde.obj);
        this.init_guardian_verde();
        this.resize();
        
    }
    
    this.init_guardian_verde = function(){
        guardian_verde.obj.addChild(guardian_verde.guardian_verde_img);
    }
    
    
    this.resize = function(){
        
        guardian_verde.obj.x = (canvas_verde.width/2) - 480;
        guardian_verde.obj.y = (canvas_verde.height/2) + 125;
        
    }
}

/***Objeto arbusto***/

var arbusto = new function(){
    
    this.obj = new Container();
    
    this.arbusto_img = new Bitmap("images/verde/bush.png");
    
    this.init = function(){
        
        stage_verde.addChild(arbusto.obj);
        this.init_arbusto();
        this.resize();
        
    }
    
    this.init_arbusto = function(){
        arbusto.obj.addChild(arbusto.arbusto_img);
    }
    
    
    this.resize = function(){
        
        arbusto.obj.x = (canvas_verde.width/2) - 510;
        arbusto.obj.y = (canvas_verde.height/2) + 270;
        
    }
}

/***Objeto Tigre***/

var tigre = new function(){
    
    this.obj = new Container();
    
    this.tigre_img = new Bitmap("images/verde/tiger.png");
    
    this.init = function(){
        
        stage_verde.addChild(tigre.obj);
        this.init_tigre();
        this.resize();
        
    }
    
    this.init_tigre = function(){
        
        tigre.obj.addChild(tigre.tigre_img);
    }
    
    
    this.resize = function(){
        
        tigre.obj.x = (canvas_verde.width/2) - 225;
        tigre.obj.y = (canvas_verde.height/2) + 280;
        
    }
}

/***Objeto oso***/

var oso = new function(){
    
    this.obj = new Container();
    
    this.oso_img = new Bitmap("images/verde/bear.png");
    
    this.init = function(){
        
        stage_verde.addChild(oso.obj);
        this.init_oso();
        this.resize();
        
    }
    
    this.init_oso = function(){
        oso.obj.addChild(oso.oso_img);
    }
    
    
    this.resize = function(){
        
        oso.obj.x = (canvas_verde.width/2) - 455;
        oso.obj.y = (canvas_verde.height/2) - 58;
        
    }
}

/***Objeto oso2***/

var oso2 = new function(){
    
    this.obj = new Container();
    
    this.oso2_img = new Bitmap("images/verde/bear2.png");
    
    this.init = function(){
        
        stage_verde.addChild(oso2.obj);
        this.init_oso2();
        this.resize();
        
    }
    
    this.init_oso2 = function(){
        oso2.obj.addChild(oso2.oso2_img);
    }
    
    
    this.resize = function(){
        
        oso2.obj.x = (canvas_verde.width/2) + 63;
        oso2.obj.y = (canvas_verde.height/2) + 250;
        
    }
}


/***Objeto comadreja***/

var comadreja = new function(){
    
    this.obj = new Container();
    
    this.comadreja_img = new Bitmap("images/verde/weasel.png");
    
    this.init = function(){
        
        stage_verde.addChild(comadreja.obj);
        this.init_comadreja();
        this.resize();
        
    }
    
    this.init_comadreja = function(){
        comadreja.obj.addChild(comadreja.comadreja_img);
    }
    
    
    this.resize = function(){
        
        comadreja.obj.x = (canvas_verde.width/2) - 254;
        comadreja.obj.y = (canvas_verde.height/2) - 104;
        
    }
}




/***Objeto zorro***/

var zorro = new function(){
    
    this.obj = new Container();
    
    this.zorro_img = new Bitmap("images/verde/fox.png");
    
    this.init = function(){
        
        stage_verde.addChild(zorro.obj);
        this.init_zorro();
        this.resize();
        
    }
    
    this.init_zorro = function(){
        zorro.obj.addChild(zorro.zorro_img);
    }
    
    
    this.resize = function(){
        
        zorro.obj.x = (canvas_verde.width/2) + 250;
        zorro.obj.y = (canvas_verde.height/2) + 1;
        
    }
}

/***Objeto zorro2***/

var zorro2 = new function(){
    
    this.obj = new Container();
    
    this.zorro2_img = new Bitmap("images/verde/fox2.png");
    
    this.init = function(){
        
        stage_verde.addChild(zorro2.obj);
        this.init_zorro2();
        this.resize();
        
    }
    
    this.init_zorro2 = function(){
        zorro2.obj.addChild(zorro2.zorro2_img);
    }
    
    
    this.resize = function(){
        
        zorro2.obj.x = (canvas_verde.width/2) + 255;
        zorro2.obj.y = (canvas_verde.height/2) + 192;
        
    }
}

/***Objeto zorro3***/

var zorro3 = new function(){
    
    this.obj = new Container();
    
    this.zorro3_img = new Bitmap("images/verde/fox3.png");
    
    this.init = function(){
        
        stage_verde.addChild(zorro3.obj);
        this.init_zorro3();
        this.resize();
        
    }
    
    this.init_zorro3 = function(){
        zorro3.obj.addChild(zorro3.zorro3_img);
    }
    
    
    this.resize = function(){
        
        zorro3.obj.x = (canvas_verde.width/2) - 365;
        zorro3.obj.y = (canvas_verde.height/2) + 125;
        
    }
}

/***Objeto hoja2***/

var hoja2 = new function(){
    
    this.obj = new Container();
    
    this.hoja2_img = new Bitmap("images/verde/leaf2.png");
    
    this.init = function(){
        
        stage_verde.addChild(hoja2.obj);
        this.init_hoja2();
        this.resize();
        
    }
    
    this.init_hoja2 = function(){
        /*hoja2.obj.skewX = 360;
        hoja2.obj.skewY = 360;*/
        hoja2.obj.addChild(hoja2.hoja2_img);
    }
    
    
    this.resize = function(){
        
        hoja2.obj.x = (canvas_verde.width/2) + 265;
        hoja2.obj.y = (canvas_verde.height/2) + 175;
        
    }
}


/***Objeto liana1***/

var liana = new function(){
    
    this.obj = new Container();
    
    this.liana_img = new Bitmap("images/verde/liana1.png");
    
    this.init = function(){
        
        stage_verde.addChild(liana.obj);
        this.init_liana();
        this.resize();
        
    }
    
    this.init_liana = function(){
        liana.obj.addChild(liana.liana_img);
    }
    
    
    this.resize = function(){
        
        liana.obj.x = 60;
        liana.obj.y = 0;
        
    }
}


/***Objeto liana2***/

var liana2 = new function(){
    
    this.obj = new Container();
    
    this.liana2_img = new Bitmap("images/verde/liana2.png");
    
    this.init = function(){
        
        stage_verde.addChild(liana2.obj);
        this.init_liana2();
        this.resize();
        
    }
    
    this.init_liana2 = function(){
        liana2.obj.addChild(liana2.liana2_img);
    }
    
    
    this.resize = function(){
        
        liana2.obj.x = 300;
        liana2.obj.y = 0;
        
    }
}

/***Objeto liana3***/

var liana3 = new function(){
    
    this.obj = new Container();
    
    this.liana3_img = new Bitmap("images/verde/liana3.png");
    
    this.init = function(){
        
        stage_verde.addChild(liana3.obj);
        this.init_liana3();
        this.resize();
        
    }
    
    this.init_liana3 = function(){
        liana3.obj.addChild(liana3.liana3_img);
    }
    
    
    this.resize = function(){
        
        liana3.obj.x = 580;
        liana3.obj.y = 0;
        
    }
}


/***Objeto liana4***/

var liana4 = new function(){
    
    this.obj = new Container();
    
    this.liana4_img = new Bitmap("images/verde/liana4.png");
    
    this.init = function(){
        
        stage_verde.addChild(liana4.obj);
        this.init_liana4();
        this.resize();
        
    }
    
    this.init_liana4 = function(){
        liana4.obj.addChild(liana4.liana4_img);
    }
    
    
    this.resize = function(){
        
        liana4.obj.x = (canvas_verde.width/2) + 320;
        liana4.obj.y = 0;
        
    }
}


/***Objeto liana5***/

var liana5 = new function(){
    
    this.obj = new Container();
    
    this.liana5_img = new Bitmap("images/verde/liana5.png");
    
    this.init = function(){
        
        stage_verde.addChild(liana5.obj);
        this.init_liana5();
        this.resize();
        
    }
    
    this.init_liana5 = function(){
        liana5.obj.addChild(liana5.liana5_img);
    }
    
    
    this.resize = function(){
        
        liana5.obj.x = (canvas_verde.width/2) + 400;
        liana5.obj.y = 0;
        
    }
}

/***Objeto liana6***/

var liana6 = new function(){
    
    this.obj = new Container();
    
    this.liana6_img = new Bitmap("images/verde/liana6.png");
    
    this.init = function(){
        
        stage_verde.addChild(liana6.obj);
        this.init_liana6();
        this.resize();
        
    }
    
    this.init_liana6 = function(){
        liana6.obj.addChild(liana6.liana6_img);
    }
    
    
    this.resize = function(){
        
        liana6.obj.x = (canvas_verde.width/2) + 730;
        liana6.obj.y = 0;
        
    }
}

/***Objeto chango***/

var chango = new function(){
    
    this.obj = new Container();
    
    this.chango_img = new Bitmap("images/verde/monkey.png");
    
    this.init = function(){
        
        stage_verde.addChild(chango.obj);
        this.init_chango();
        this.resize();
        
    }
    
    this.init_chango = function(){
        /*chango.obj.skewX = 360;
        chango.obj.skewY = 360;*/
        chango.obj.addChild(chango.chango_img);
    }
    
    
    this.resize = function(){
        
        chango.obj.x = (canvas_verde.width/2) + 410;
        chango.obj.y = (canvas_verde.height/2) - 148;
        
    }
}

/***Objeto panda***/

var panda = new function(){
    
    this.obj = new Container();
    
    this.panda_img = new Bitmap("images/verde/panda.png");
    
    this.init = function(){
        
        stage_verde.addChild(panda.obj);
        this.init_panda();
        this.resize();
        
    }
    
    this.init_panda = function(){
        panda.obj.addChild(panda.panda_img);
    }
    
    
    this.resize = function(){
        
        panda.obj.x = (canvas_verde.width/2) + 388;
        panda.obj.y = (canvas_verde.height/2) + 128;
        
    }
}

/***Objeto conejo***/

var conejo = new function(){
    
    this.obj = new Container();
    
    this.conejo_img = new Bitmap("images/verde/rabbit.png");
    
    this.init = function(){
        
        stage_verde.addChild(conejo.obj);
        this.init_conejo();
        this.resize();
        
    }
    
    this.init_conejo = function(){
        conejo.obj.addChild(conejo.conejo_img);
    }
    
    
    this.resize = function(){
        
        conejo.obj.x = (canvas_verde.width/2) - 440;
        conejo.obj.y = (canvas_verde.height/2) + 268;
        
    }
}


/***Soporte izquierdo***/


var soporteizq = new function(){
    
    this.obj = new Container();
    
    this.soporteizq_img = new Bitmap("images/verde/supportl.png");
    
    this.init = function(){
        
        stage_verde.addChild(soporteizq.obj);
        this.init_soporteizq();
        this.resize();
        
    }
    
    this.init_soporteizq = function(){
        soporteizq.obj.addChild(soporteizq.soporteizq_img);
    }
    
    
    this.resize = function(){
        
        soporteizq.obj.x = (canvas_verde.width/2) - 150;
        soporteizq.obj.y = 0;
        
    }
}


/***Soporte derecho***/


var soporteder = new function(){
    
    this.obj = new Container();
    
    this.soporteder_img = new Bitmap("images/verde/supportr.png");
    
    this.init = function(){
        
        stage_verde.addChild(soporteder.obj);
        this.init_soporteder();
        this.resize();
        
    }
    
    this.init_soporteder = function(){
        soporteder.obj.addChild(soporteder.soporteder_img);
    }
    
    
    this.resize = function(){
        
        soporteder.obj.x = (canvas_verde.width/2) + 150;
        soporteder.obj.y = 0;
        
    }
}



/***Pajaros blancos***/

var pajarosblancos1 = new function(){
    
    this.itemsbit = new Array();
    
    this.obj = new Container();
    
    this.items = new Array(
    new Array("images/verde/white_bird1.png",15,20),
    new Array("images/verde/white_bird2.png",-50,60),
    new Array("images/verde/white_bird3.png",0,105),
    new Array("images/verde/white_bird4.png",80,50)
    );
    
    this.init = function(){
        
        for (var i=0; i < pajarosblancos1.items.length;i++){
            this.itemsbit[i] = new Bitmap(pajarosblancos1.items[i][0]);
              
        }
        
        stage_verde.addChild(pajarosblancos1.obj);
        this.init_pajarosblancos1();
        this.resize();
        
    }
    
    this.init_pajarosblancos1 = function(){
        for (var i=0; i < pajarosblancos1.items.length;i++){
            this.position(pajarosblancos1.itemsbit[i],pajarosblancos1.items[i][1],pajarosblancos1.items[i][2]);
            pajarosblancos1.obj.addChild(pajarosblancos1.itemsbit[i]);
        }
    }
    
    
    this.resize = function(){
        
        pajarosblancos1.obj.x = (canvas_verde.width) + 250;
        pajarosblancos1.obj.y = (canvas_verde.height/2) - 300;
        
    }
    
    this.position = function(o,x,y){
        o.x = x;
        o.y = y;
    }
}

/***Pajaros blancos2***/

var pajarosblancos2 = new function(){
    
    this.itemsbit = new Array();
    
    this.obj = new Container();
    
    this.items = new Array(
    new Array("images/verde/white_bird4.png",-50,20),
    new Array("images/verde/white_bird2.png",0,60),
    new Array("images/verde/white_bird1.png",40,30),
    new Array("images/verde/white_bird2.png",70,-20),
    new Array("images/verde/white_bird4.png",90,50),
    new Array("images/verde/white_bird4.png",120,30),
    new Array("images/verde/white_bird2.png",130,70)
    );
    
    this.init = function(){
        
        for (var i=0; i < pajarosblancos2.items.length;i++){
            this.itemsbit[i] = new Bitmap(pajarosblancos2.items[i][0]);
              
        }
        
        stage_verde.addChild(pajarosblancos2.obj);
        this.init_pajarosblancos2();
        this.resize();
        
    }
    
    this.init_pajarosblancos2 = function(){
        for (var i=0; i < pajarosblancos2.items.length;i++){
            this.position(pajarosblancos2.itemsbit[i],pajarosblancos2.items[i][1],pajarosblancos2.items[i][2]);
            pajarosblancos2.obj.addChild(pajarosblancos2.itemsbit[i]);
        }
    }
    
    
    this.resize = function(){
        
        pajarosblancos2.obj.x = (canvas_verde.width) + 250;
        pajarosblancos2.obj.y = (canvas_verde.height/2) - 470;
        
    }
    
    this.position = function(o,x,y){
        o.x = x;
        o.y = y;
    }
}

/***Objeto nube_verde1***/

var nube_verde1 = new function(){
    
    this.obj = new Container();
    
    this.nube_verde1_img = new Bitmap("images/contacto/cloud1.png");
    
    this.init = function(){
        
        stage_verde.addChild(nube_verde1.obj);
        this.init_nube_verde1();
        this.resize();
        
    }
    
    this.init_nube_verde1 = function(){
        nube_verde1.obj.addChild(nube_verde1.nube_verde1_img);
    }
    
    
    this.resize = function(){
        
        nube_verde1.obj.x = (canvas_verde.width) + 200;
        nube_verde1.obj.y = 30;
        
    }
}

/***Objeto nube_verde2***/

var nube_verde2 = new function(){
    
    this.obj = new Container();
    
    this.nube_verde2_img = new Bitmap("images/contacto/cloud2.png");
    
    this.init = function(){
        
        stage_verde.addChild(nube_verde2.obj);
        this.init_nube_verde2();
        this.resize();
        
    }
    
    this.init_nube_verde2 = function(){
        nube_verde2.obj.addChild(nube_verde2.nube_verde2_img);
    }
    
    
    this.resize = function(){
        
        nube_verde2.obj.x = -200 ;
        nube_verde2.obj.y = 250;
        
    }
}

/***Objeto nube_verde3***/

var nube_verde3 = new function(){
    
    this.obj = new Container();
    
    this.nube_verde3_img = new Bitmap("images/contacto/cloud3.png");
    
    this.init = function(){
        
        stage_verde.addChild(nube_verde3.obj);
        this.init_nube_verde3();
        this.resize();
        
    }
    
    this.init_nube_verde3 = function(){
        nube_verde3.obj.addChild(nube_verde3.nube_verde3_img);
    }
    
    
    this.resize = function(){
        
        nube_verde3.obj.x = (canvas_verde.width) +200;
        nube_verde3.obj.y = 120;
        
    }
}
