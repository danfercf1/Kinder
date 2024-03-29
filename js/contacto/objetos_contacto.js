/***
****Objeto background
***/
var bg_contacto = new function(){
    this.url = "images/contacto/background.png";
    this.init = function(){
        
        bg = new Bitmap(bg_contacto.url);
        
        stage_contacto.addChild(bg);
    } 
    
}

/***
****Objeto Operador Ipad
***/

var operadoripad = new function(){
    
    this.obj = new Container();
    
    this.operador_img = new Bitmap("images/contacto/operario-butaca/operator.png");
    this.cejas_img = new Bitmap("images/contacto/operario-butaca/eyebrows.png");
    
    this.cejas_img.skewX = this.cejas_img.skewY = 15;
    
    this.cejas2_img = new Bitmap("images/contacto/operario-butaca/eyebrows.png");
    
    //this.cejas2_img.skewX = this.cejas2_img.skewY = 220; 202
    
    this.cejas2_img.skewX = this.cejas2_img.skewY = 202;
    
    this.ojoscerrados_img = new Bitmap("images/contacto/operario-butaca/eyes.png");
    //this.ojoscerrados_img.alpha = 0;
    this.brazoderecho_img = new Bitmap("images/contacto/operario-butaca/right-arm.png");
    
    this.init = function(){
        
        stage_contacto.addChild(operadoripad.obj);
        
        this.brazo_init();
        this.operador_init();
        this.cejaizq_init();
        this.cejader_init();
        this.ojos_init();
        this.resize();
    }
    
    this.operador_init = function(){
        
        operadoripad.operador_img.x = 0;
        operadoripad.operador_img.y = 0;
        operadoripad.obj.addChild(operadoripad.operador_img);
        
    }
    
    this.cejaizq_init = function(){
        
        operadoripad.cejas_img.x = 22;
        operadoripad.cejas_img.y = 50;
        operadoripad.obj.addChild(operadoripad.cejas_img);
        
    }
    
    this.cejader_init = function(){
        
        operadoripad.cejas2_img.x = 91;
        operadoripad.cejas2_img.y = 65;
        operadoripad.obj.addChild(operadoripad.cejas2_img);
        
    }
    
    this.ojos_init = function(){
        
        operadoripad.ojoscerrados_img.x = 23;
        operadoripad.ojoscerrados_img.y = 58;
        //operadoripad.ojoscerrados_img.alpha = 0;
        operadoripad.obj.addChild(operadoripad.ojoscerrados_img);
        
    }
    
    this.brazo_init = function(){
        
        operadoripad.brazoderecho_img.x = 0;
        operadoripad.brazoderecho_img.y = 99;
        operadoripad.obj.addChild(operadoripad.brazoderecho_img);
        
    }
    
    this.resize = function(){
        
        operadoripad.obj.x = (canvas_contacto.width/2) - 354;
        operadoripad.obj.y = (canvas_contacto.height/2) - 8;
        
    }
}

/***
****Objeto Operador
***/

var operador = new function(){
    
    this.obj = new Container();
    
    this.operador_img = new Bitmap("images/contacto/operario/operator.png");
    this.ojoscerrados_img = new Bitmap("images/contacto/operario/eyes.png");
    this.cejas1_img = new Bitmap("images/contacto/operario/eyebrow.png");
    this.cejas1_img.skewX = this.cejas1_img.skewY = 15;
    
    this.cejas2_img = new Bitmap("images/contacto/operario/eyebrow.png");
    this.cejas2_img.skewX = this.cejas2_img.skewY = 202;
    
    this.brazoizquierdo_img = new Bitmap("images/contacto/operario/left-arm.png");
    
    
    this.init = function(){
        
        stage_contacto.addChild(operador.obj);
        
        this.init_brazo();
        this.init_operador();
        this.init_ojos();
        this.init_cejaizq();
        this.init_cejader();
        
        this.resize();
        
    }
    
    this.init_operador = function(){
        
        operador.operador_img.x = 0;
        operador.operador_img.y = 0;
        
        operador.obj.addChild(operador.operador_img);
    }
    
    
    this.init_ojos = function(){
        
        operador.ojoscerrados_img.x = 58;
        operador.ojoscerrados_img.y = 35;
        
        operador.obj.addChild(operador.ojoscerrados_img);
        
    }
    
    this.init_cejaizq = function(){
        
        operador.cejas1_img.x = 49;
        operador.cejas1_img.y = 24;
        
        operador.obj.addChild(operador.cejas1_img);
    }
    
    this.init_cejader = function(){
        
        operador.cejas2_img.x = 108;
        operador.cejas2_img.y = 40;
        
        operador.obj.addChild(operador.cejas2_img);
    }
    
    this.init_brazo = function(){
        
        operador.brazoizquierdo_img.x = 90; 
        operador.brazoizquierdo_img.y = 59;
        
        operador.obj.addChild(operador.brazoizquierdo_img);
    }
    
    
    this.resize = function(){
        
        operador.obj.x = (canvas_contacto.width/2) + 300;
        operador.obj.y = (canvas_contacto.height/2) + 105;
        
    }
}


/***
****Objeto nube1
***/


/*var nube1 = new function(){
    
    this.obj = new Container();
    
    this.nube1_img = new Bitmap("images/contacto/cloud1.png");
    
    this.init = function(){
        
        stage_contacto.addChild(nube1.obj);
        this.init_nube1();
        this.resize();
        
    }
    
    this.init_nube1 = function(){
        nube1.obj.addChild(nube1.nube1_img);
    }
    
    
    this.resize = function(){
        
        nube1.obj.x = -200;
        nube1.obj.y = 360;
        
    }
}

*/

/***
****Objetos lamparas
***/

var lampara1 = new function(){
    
    this.obj = new Container();
    
    this.lampara1_img = new Bitmap("images/contacto/lamp1.png");
    
    this.init = function(){
        
        stage_contacto.addChild(lampara1.obj);
        this.init_lampara1();
        this.resize();
        
    }
    
    this.init_lampara1 = function(){
        lampara1.obj.addChild(lampara1.lampara1_img);
    }
    
    
    this.resize = function(){
        
        lampara1.obj.x = 20;
        lampara1.obj.y = 0;
        
    }
}

var lampara2 = new function(){
    
    this.obj = new Container();
    
    this.lampara2_img = new Bitmap("images/contacto/lamp2.png");
    
    this.init = function(){
        
        stage_contacto.addChild(lampara2.obj);
        this.init_lampara2();
        this.resize();
        
    }
    
    this.init_lampara2 = function(){
        lampara2.obj.addChild(lampara2.lampara2_img);
    }
    
    
    this.resize = function(){
        
        lampara2.obj.x = 74;
        lampara2.obj.y = 0;
        
    }
}

var lampara3 = new function(){
    
    this.obj = new Container();
    
    this.lampara3_img = new Bitmap("images/contacto/lamp3.png");
    
    this.init = function(){
        
        stage_contacto.addChild(lampara3.obj);
        this.init_lampara3();
        this.resize();
        
    }
    
    this.init_lampara3 = function(){
        lampara3.obj.addChild(lampara3.lampara3_img);
    }
    
    
    this.resize = function(){
        
        lampara3.obj.x = 272;
        lampara3.obj.y = 0;
        
    }
}

var lampara4 = new function(){
    
    this.obj = new Container();
    
    this.lampara4_img = new Bitmap("images/contacto/lamp4.png");
    
    this.init = function(){
        
        stage_contacto.addChild(lampara4.obj);
        this.init_lampara4();
        this.resize();
        
    }
    
    this.init_lampara4 = function(){
        lampara4.obj.addChild(lampara4.lampara4_img);
    }
    
    
    this.resize = function(){
        
        lampara4.obj.x = 400;
        lampara4.obj.y = 0;
        
    }
}

var lampara5 = new function(){
    
    this.obj = new Container();
    
    this.lampara5_img = new Bitmap("images/contacto/lamp5.png");
    
    this.init = function(){
        
        stage_contacto.addChild(lampara5.obj);
        this.init_lampara5();
        this.resize();
        
    }
    
    this.init_lampara5 = function(){
        lampara5.obj.addChild(lampara5.lampara5_img);
    }
    
    
    this.resize = function(){
        
        lampara5.obj.x = 482;
        lampara5.obj.y = 0;
        
    }
}

var lampara6 = new function(){
    
    this.obj = new Container();
    
    this.lampara6_img = new Bitmap("images/contacto/lamp6.png");
    
    this.init = function(){
        
        stage_contacto.addChild(lampara6.obj);
        this.init_lampara6();
        this.resize();
        
    }
    
    this.init_lampara6 = function(){
        lampara6.obj.addChild(lampara6.lampara6_img);
    }
    
    
    this.resize = function(){
        
        lampara6.obj.x = 580;
        lampara6.obj.y = 0;
        
    }
}


var lampara7 = new function(){
    
    this.obj = new Container();
    
    this.lampara7_img = new Bitmap("images/contacto/lamp7.png");
    
    this.init = function(){
        
        stage_contacto.addChild(lampara7.obj);
        this.init_lampara7();
        this.resize();
        
    }
    
    this.init_lampara7 = function(){
        lampara7.obj.addChild(lampara7.lampara7_img);
    }
    
    
    this.resize = function(){
        
        lampara7.obj.x = 610;
        lampara7.obj.y = 0;
        
    }
}

var lampara8 = new function(){
    
    this.obj = new Container();
    
    this.lampara8_img = new Bitmap("images/contacto/lamp8.png");
    
    this.init = function(){
        
        stage_contacto.addChild(lampara8.obj);
        this.init_lampara8();
        this.resize();
        
    }
    
    this.init_lampara8 = function(){
        lampara8.obj.addChild(lampara8.lampara8_img);
    }
    
    
    this.resize = function(){
        
        lampara8.obj.x = 670;
        lampara8.obj.y = 0;
        
    }
}

var lampara9 = new function(){
    
    this.obj = new Container();
    
    this.lampara9_img = new Bitmap("images/contacto/lamp9.png");
    
    this.init = function(){
        
        stage_contacto.addChild(lampara9.obj);
        this.init_lampara9();
        this.resize();
        
    }
    
    this.init_lampara9 = function(){
        lampara9.obj.addChild(lampara9.lampara9_img);
    }
    
    
    this.resize = function(){
        
        lampara9.obj.x = 1227;
        lampara9.obj.y = 0;
        
    }
}

var lampara10 = new function(){
    
    this.obj = new Container();
    
    this.lampara10_img = new Bitmap("images/contacto/lamp10.png");
    
    this.init = function(){
        
        stage_contacto.addChild(lampara10.obj);
        this.init_lampara10();
        this.resize();
        
    }
    
    this.init_lampara10 = function(){
        lampara10.obj.addChild(lampara10.lampara10_img);
    }
    
    
    this.resize = function(){
        
        lampara10.obj.x = 1293;
        lampara10.obj.y = 0;
        
    }
}

var lampara11 = new function(){
    
    this.obj = new Container();
    
    this.lampara11_img = new Bitmap("images/contacto/lamp11.png");
    
    this.init = function(){
        
        stage_contacto.addChild(lampara11.obj);
        this.init_lampara11();
        this.resize();
        
    }
    
    this.init_lampara11 = function(){
        lampara11.obj.addChild(lampara11.lampara11_img);
    }
    
    
    this.resize = function(){
        
        lampara11.obj.x = 1333;
        lampara11.obj.y = 0;
        
    }
}

var lampara12 = new function(){
    
    this.obj = new Container();
    
    this.lampara12_img = new Bitmap("images/contacto/lamp12.png");
    
    this.init = function(){
        
        stage_contacto.addChild(lampara12.obj);
        this.init_lampara12();
        this.resize();
        
    }
    
    this.init_lampara12 = function(){
        lampara12.obj.addChild(lampara12.lampara12_img);
    }
    
    
    this.resize = function(){
        
        lampara12.obj.x = 1408;
        lampara12.obj.y = 0;
        
    }
}

var lampara13 = new function(){
    
    this.obj = new Container();
    
    this.lampara13_img = new Bitmap("images/contacto/lamp13.png");
    
    this.init = function(){
        
        stage_contacto.addChild(lampara13.obj);
        this.init_lampara13();
        this.resize();
        
    }
    
    this.init_lampara13 = function(){
        lampara13.obj.addChild(lampara13.lampara13_img);
    }
    
    
    this.resize = function(){
        
        lampara13.obj.x = 1482;
        lampara13.obj.y = 0;
        
    }
}

var lampara14 = new function(){
    
    this.obj = new Container();
    
    this.lampara14_img = new Bitmap("images/contacto/lamp14.png");
    
    this.init = function(){
        
        stage_contacto.addChild(lampara14.obj);
        this.init_lampara14();
        this.resize();
        
    }
    
    this.init_lampara14 = function(){
        lampara14.obj.addChild(lampara14.lampara14_img);
    }
    
    
    this.resize = function(){
        
        lampara14.obj.x = 1616;
        lampara14.obj.y = 0;
        
    }
}

var lampara15 = new function(){
    
    this.obj = new Container();
    
    this.lampara15_img = new Bitmap("images/contacto/lamp15.png");
    
    this.init = function(){
        
        stage_contacto.addChild(lampara15.obj);
        this.init_lampara15();
        this.resize();
        
    }
    
    this.init_lampara15 = function(){
        lampara15.obj.addChild(lampara15.lampara15_img);
    }
    
    
    this.resize = function(){
        
        lampara15.obj.x = 1801;
        lampara15.obj.y = 0;
        
    }
}

var lampara16 = new function(){
    
    this.obj = new Container();
    
    this.lampara16_img = new Bitmap("images/contacto/lamp16.png");
    
    this.init = function(){
        
        stage_contacto.addChild(lampara16.obj);
        this.init_lampara16();
        this.resize();
        
    }
    
    this.init_lampara16 = function(){
        lampara16.obj.addChild(lampara16.lampara16_img);
    }
    
    
    this.resize = function(){
        
        lampara16.obj.x = 1850;
        lampara16.obj.y = 0;
        
    }
}

