
var maquina_logo = new function(){
     
     this.obj = new Container();
     
     this.maquina_logo_img = new Bitmap("images/productosf/machine_logo.png");
     
     this.init = function(){
        stage_productos.addChild(maquina_logo.obj);        
        this.init_maquina_logo();
        this.resize();
     }
     
     this.init_maquina_logo = function(){
        maquina_logo.obj.addChild(maquina_logo.maquina_logo_img);
     }
     
     this.resize = function(){
        
        maquina_logo.obj.x = (canvas_productos.width/2) - 280;
        
        maquina_logo.obj.y = (canvas_productos.height/2) - 58;
    }
}

/***
****Objeto Interior Maquina
***/


var maquina = new function(){
    
    this.json_consulta;
    
    this.obj = new Container();
    
    this.productos = new Container();
    
    this.init = function(){
        
        stage_productos.addChild(maquina.obj);
        
        /*maquina.add_productos("images/productos/"+json_consulta[0]['IMAGEN_PRODUCTO']);
        
        jQuery('#descripcion_producto p').html(json_consulta[0]['DESCRIPCION_PRODUCTO']);
        
        $('.scroll-pane').jScrollPane();
       
        jQuery('#img_infonutricional').attr('var',json_consulta[0]['NOMBRE_PRODUCTO']);*/
        
        maquina.add_productos();
        
        this.resize();
    
    }
    
    this.add_productos = function(img){
       
        this.producto = new Bitmap(img);
        
        maquina.productos.x = 21;
        
        maquina.productos.y = 105;
        
        maquina.productos.addChildAt(this.producto,1);
        
        maquina.obj.addChild(maquina.productos);
        
    }
    
    this.resize = function(){
        
        maquina.obj.x = (canvas_productos.width/2) - 123;
        
        maquina.obj.y = (canvas_productos.height/2) - 103;
    }
}




/***
****Objeto Operador Maquina
***/

var operadormaquina = new function(){
    
    this.obj = new Container();
    
    this.operadormaquina_img = new Bitmap("images/productosf/machine-operator.png");
    this.ojoscerrados_img = new Bitmap("images/productosf/operario-maquina/eyes.png");
    
    this.init = function(){
        
        stage_productos.addChild(operadormaquina.obj);
        this.init_operadormaquina();
        this.init_ojoscerrados();
        this.resize();
        
    }
    
    this.init_operadormaquina = function(){
        operadormaquina.obj.addChild(operadormaquina.operadormaquina_img);
    }
    
    this.init_ojoscerrados = function(){
        
        operadormaquina.ojoscerrados_img.x = 73;
        
        operadormaquina.ojoscerrados_img.y = 21;
        
        operadormaquina.obj.addChild(operadormaquina.ojoscerrados_img);
    }
    
    
    this.resize = function(){
        
        operadormaquina.obj.x = (canvas_productos.width/2) - 445;
        operadormaquina.obj.y = (canvas_productos.height/2) + 98;
        
    }
}


var ojosoperadorcarro = new function(){
    
    this.ojoscerrados_img = new Bitmap("images/productosf/operario/eyes.png");
    
    this.init = function(){
        
        this.init_ojoscerrados();
        
        
    }
    
    this.init_ojoscerrados = function(){
        
        ojosoperadorcarro.ojoscerrados_img.x = (canvas_productos.width/2) + 424;
        ojosoperadorcarro.ojoscerrados_img.y = (canvas_productos.height/2) + 63;
        
        stage_productos.addChild(ojosoperadorcarro.ojoscerrados_img);
    }
}


/***
****Objeto Operador Cajas
***/

var operadorcajas = new function(){
    
    this.obj = new Container();
    
    this.operadorcajas_img = new Bitmap("images/productosf/boxes-operator.png");
    
    this.init = function(){
        
        stage_productos.addChild(operadorcajas.obj);
        this.init_operadorcajas();
        this.resize();
        
    }
    
    this.init_operadorcajas = function(){
        operadorcajas.obj.addChild(operadorcajas.operadorcajas_img);
    }
    
    
    this.resize = function(){
        
        operadorcajas.obj.x = (canvas_productos.width/2) - 562;
        operadorcajas.obj.y = (canvas_productos.height/2) + 165;
        
    }
}


/***
****Objeto Mando Maquina
***/

var mandomaquina = new function(){
    
    this.obj = new Container();
    
    this.mandomaquina_img = new Bitmap("images/productosf/machine-joystick.png");
    
    this.init = function(){
        
        stage_productos.addChild(mandomaquina.obj);
        this.init_mandomaquina();
        this.resize();
        
    }
    
    this.init_mandomaquina = function(){
        mandomaquina.obj.addChild(mandomaquina.mandomaquina_img);
    }
    
    
    this.resize = function(){
        
        mandomaquina.obj.x = (canvas_productos.width/2) - 270;
        mandomaquina.obj.y = (canvas_productos.height/2) + 83;
        
    }
}

var lucesmaquina = new function(){
    
    this.obj = new Container();
    
    this.obj.alpha = 0;
    
    this.lucesmaquina_img = new Bitmap("images/productosf/machine-lights.png");
    
    this.init = function(){
        
        stage_productos.addChild(lucesmaquina.obj);
        this.init_lucesmaquina();
        this.resize();
        
    }
    
    this.init_lucesmaquina = function(){
        lucesmaquina.obj.addChild(lucesmaquina.lucesmaquina_img);
    }
    
    
    this.resize = function(){
        
        lucesmaquina.obj.x = (canvas_productos.width/2) - 172;
        lucesmaquina.obj.y = (canvas_productos.height/2) - 24;
        
    }
}


/***
****Objeto Informacion nutricional
***/

var infonutricional = new function(){
    
    this.obj = new Container();
    
    this.infonutricional_img = new Bitmap("images/productosf/nutritionalinfo.png");
    
    this.init = function(){
        
        stage_productos.addChild(infonutricional.obj);
        this.init_infonutricional();
        this.resize();
        
    }
    
    this.init_infonutricional = function(){
        infonutricional.obj.addChild(infonutricional.infonutricional_img);
    }
    
    this.resize = function(){
        
        infonutricional.obj.x = (canvas_productos.width/2) + 141;
        infonutricional.obj.y = (canvas_productos.height/2) + 219;
        
    }
}

/***
****Objeto Texto kinder
***/


var textokinder = new function(){
    
    this.obj = new Container();
    
    //this.textokinder_img = new Bitmap("images/productosf/kinder-text.png");
    
    //this.textokinder_img = new Text();
    
    this.scroll_img = new Bitmap("images/productosf/scroll.png");
    
    this.init = function(){
        
        stage_productos.addChild(textokinder.obj);
        //this.init_textokinder();
        //this.init_scroll();
        this.resize();
        
    }
    
    this.init_textokinder = function(text){
        textokinder.obj.addChild(text);
    }
    
    this.init_scroll = function(){
        
        textokinder.scroll_img.x = 270;
        
        textokinder.scroll_img.y = 2;
        
        textokinder.obj.addChild(textokinder.scroll_img);
    }
    
    this.resize = function(){
        
        textokinder.obj.x = (canvas_productos.width/2) - 145;
        textokinder.obj.y = (canvas_productos.height/2) + 177;
        
    }
}


/***
****Objeto Movimiento ruedas
***/

var movruedas = new function(){
    
    this.obj = new Container();
    
    this.obj.alpha = 0;
    
    this.movruedas_img = new Bitmap("images/productosf/movbelt.png");
    
    this.init = function(){
        
        stage_productos.addChild(movruedas.obj);
        this.init_movruedas();
        this.resize();
        
    }
    
    this.init_movruedas = function(){
        movruedas.obj.addChild(movruedas.movruedas_img);
    }
    
    this.resize = function(){
        
        movruedas.obj.x = (canvas_productos.width/2) + 170;
        movruedas.obj.y = (canvas_productos.height/2) + 148;
        
    }
}


/***
****Objetos lamparas
***/

var lampara_prod1 = new function(){
    
    this.obj = new Container();
    
    this.lampara_prod1_img = new Bitmap("images/productosf/lamp1.png");
    
    this.init = function(){
        
        stage_productos.addChild(lampara_prod1.obj);
        this.init_lampara_prod1();
        this.resize();
        
    }
    
    this.init_lampara_prod1 = function(){
        lampara_prod1.obj.addChild(lampara_prod1.lampara_prod1_img);
    }
    
    
    this.resize = function(){
        
        lampara_prod1.obj.x = 55;
        lampara_prod1.obj.y = 0;
        
    }
}

var lampara_prod2 = new function(){
    
    this.obj = new Container();
    
    this.lampara_prod2_img = new Bitmap("images/productosf/lamp2.png");
    
    this.init = function(){
        
        stage_productos.addChild(lampara_prod2.obj);
        this.init_lampara_prod2();
        this.resize();
        
    }
    
    this.init_lampara_prod2 = function(){
        lampara_prod2.obj.addChild(lampara_prod2.lampara_prod2_img);
    }
    
    
    this.resize = function(){
        
        lampara_prod2.obj.x = 189;
        lampara_prod2.obj.y = 0;
        
    }
}

var lampara_prod3 = new function(){
    
    this.obj = new Container();
    
    this.lampara_prod3_img = new Bitmap("images/productosf/lamp3.png");
    
    this.init = function(){
        
        stage_productos.addChild(lampara_prod3.obj);
        this.init_lampara_prod3();
        this.resize();
        
    }
    
    this.init_lampara_prod3 = function(){
        lampara_prod3.obj.addChild(lampara_prod3.lampara_prod3_img);
    }
    
    
    this.resize = function(){
        
        lampara_prod3.obj.x = 338;
        lampara_prod3.obj.y = 0;
        
    }
}

var lampara_prod4 = new function(){
    
    this.obj = new Container();
    
    this.lampara_prod4_img = new Bitmap("images/productosf/lamp4.png");
    
    this.init = function(){
        
        stage_productos.addChild(lampara_prod4.obj);
        this.init_lampara_prod4();
        this.resize();
        
    }
    
    this.init_lampara_prod4 = function(){
        lampara_prod4.obj.addChild(lampara_prod4.lampara_prod4_img);
    }
    
    
    this.resize = function(){
        
        lampara_prod4.obj.x = 415;
        lampara_prod4.obj.y = 0;
        
    }
}

var lampara_prod5 = new function(){
    
    this.obj = new Container();
    
    this.lampara_prod5_img = new Bitmap("images/productosf/lamp5.png");
    
    this.init = function(){
        
        stage_productos.addChild(lampara_prod5.obj);
        this.init_lampara_prod5();
        this.resize();
        
    }
    
    this.init_lampara_prod5 = function(){
        lampara_prod5.obj.addChild(lampara_prod5.lampara_prod5_img);
    }
    
    
    this.resize = function(){
        
        lampara_prod5.obj.x = 514;
        lampara_prod5.obj.y = 0;
        
    }
}

var lampara_prod6 = new function(){
    
    this.obj = new Container();
    
    this.lampara_prod6_img = new Bitmap("images/productosf/lamp6.png");
    
    this.init = function(){
        
        stage_productos.addChild(lampara_prod6.obj);
        this.init_lampara_prod6();
        this.resize();
        
    }
    
    this.init_lampara_prod6 = function(){
        lampara_prod6.obj.addChild(lampara_prod6.lampara_prod6_img);
    }
    
    
    this.resize = function(){
        
        lampara_prod6.obj.x = 609;
        lampara_prod6.obj.y = 0;
        
    }
}


var lampara_prod7 = new function(){
    
    this.obj = new Container();
    
    this.lampara_prod7_img = new Bitmap("images/productosf/lamp7.png");
    
    this.init = function(){
        
        stage_productos.addChild(lampara_prod7.obj);
        this.init_lampara_prod7();
        this.resize();
        
    }
    
    this.init_lampara_prod7 = function(){
        lampara_prod7.obj.addChild(lampara_prod7.lampara_prod7_img);
    }
    
    
    this.resize = function(){
        
        lampara_prod7.obj.x = 662;
        lampara_prod7.obj.y = 0;
        
    }
}

var lampara_prod8 = new function(){
    
    this.obj = new Container();
    
    this.lampara_prod8_img = new Bitmap("images/productosf/lamp8.png");
    
    this.init = function(){
        
        stage_productos.addChild(lampara_prod8.obj);
        this.init_lampara_prod8();
        this.resize();
        
    }
    
    this.init_lampara_prod8 = function(){
        lampara_prod8.obj.addChild(lampara_prod8.lampara_prod8_img);
    }
    
    
    this.resize = function(){
        
        lampara_prod8.obj.x = 890;
        lampara_prod8.obj.y = 0;
        
    }
}

var lampara_prod9 = new function(){
    
    this.obj = new Container();
    
    this.lampara_prod9_img = new Bitmap("images/productosf/lamp9.png");
    
    this.init = function(){
        
        stage_productos.addChild(lampara_prod9.obj);
        this.init_lampara_prod9();
        this.resize();
        
    }
    
    this.init_lampara_prod9 = function(){
        lampara_prod9.obj.addChild(lampara_prod9.lampara_prod9_img);
    }
    
    
    this.resize = function(){
        
        lampara_prod9.obj.x = 1114;
        lampara_prod9.obj.y = 0;
        
    }
}

var lampara_prod10 = new function(){
    
    this.obj = new Container();
    
    this.lampara_prod10_img = new Bitmap("images/productosf/lamp10.png");
    
    this.init = function(){
        
        stage_productos.addChild(lampara_prod10.obj);
        this.init_lampara_prod10();
        this.resize();
        
    }
    
    this.init_lampara_prod10 = function(){
        lampara_prod10.obj.addChild(lampara_prod10.lampara_prod10_img);
    }
    
    
    this.resize = function(){
        
        lampara_prod10.obj.x = 1207;
        lampara_prod10.obj.y = 0;
        
    }
}

var lampara_prod11 = new function(){
    
    this.obj = new Container();
    
    this.lampara_prod11_img = new Bitmap("images/productosf/lamp11.png");
    
    this.init = function(){
        
        stage_productos.addChild(lampara_prod11.obj);
        this.init_lampara_prod11();
        this.resize();
        
    }
    
    this.init_lampara_prod11 = function(){
        lampara_prod11.obj.addChild(lampara_prod11.lampara_prod11_img);
    }
    
    
    this.resize = function(){
        
        lampara_prod11.obj.x = 1279;
        lampara_prod11.obj.y = 0;
        
    }
}

var lampara_prod12 = new function(){
    
    this.obj = new Container();
    
    this.lampara_prod12_img = new Bitmap("images/productosf/lamp12.png");
    
    this.init = function(){
        
        stage_productos.addChild(lampara_prod12.obj);
        this.init_lampara_prod12();
        this.resize();
        
    }
    
    this.init_lampara_prod12 = function(){
        lampara_prod12.obj.addChild(lampara_prod12.lampara_prod12_img);
    }
    
    
    this.resize = function(){
        
        lampara_prod12.obj.x = 1345;
        lampara_prod12.obj.y = 0;
        
    }
}

var lampara_prod13 = new function(){
    
    this.obj = new Container();
    
    this.lampara_prod13_img = new Bitmap("images/productosf/lamp13.png");
    
    this.init = function(){
        
        stage_productos.addChild(lampara_prod13.obj);
        this.init_lampara_prod13();
        this.resize();
        
    }
    
    this.init_lampara_prod13 = function(){
        lampara_prod13.obj.addChild(lampara_prod13.lampara_prod13_img);
    }
    
    
    this.resize = function(){
        
        lampara_prod13.obj.x = 1610;
        lampara_prod13.obj.y = 0;
        
    }
}

var lampara_prod14 = new function(){
    
    this.obj = new Container();
    
    this.lampara_prod14_img = new Bitmap("images/productosf/lamp14.png");
    
    this.init = function(){
        
        stage_productos.addChild(lampara_prod14.obj);
        this.init_lampara_prod14();
        this.resize();
        
    }
    
    this.init_lampara_prod14 = function(){
        lampara_prod14.obj.addChild(lampara_prod14.lampara_prod14_img);
    }
    
    
    this.resize = function(){
        
        lampara_prod14.obj.x = 1683;
        lampara_prod14.obj.y = 0;
        
    }
}


