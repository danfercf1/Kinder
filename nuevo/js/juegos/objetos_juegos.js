/***
****Objeto background
***/
var bg_juegos = new function(){
    
    this.url = "images/juegos/background-nuevo.png";
    
    this.init = function(){
        
        bg_img = new Bitmap(bg_juegos.url);
        
        stage_juegos.addChild(bg_img);
        
        this.resize();
    }
    
    this.resize = function(){
        
        bg_img.x = 0;
        bg_img.y = (canvas_juegos.height/2) + 198;
        
    } 
    
}

/***
****Objeto Guardian
***/

var guardian_juegos = new function(){
    
    this.obj = new Container();
    
    this.guardian_img = new Bitmap("images/juegos/guardian.png");
    
    //this.guardian_img.shadow = new Shadow("#FECB47",0,80,200);
    
    this.init = function(){
        
        stage_juegos.addChild(guardian_juegos.obj);
        this.init_guardian();
        this.resize();
        
    }
    
    this.init_guardian = function(){
        guardian_juegos.obj.addChild(guardian_juegos.guardian_img);
    }
    
    
    this.resize = function(){
        
        guardian_juegos.obj.x = (canvas_juegos.width/2) - 420;
        guardian_juegos.obj.y = (canvas_juegos.height/2) - 45;
        
    }
}


/***
****Objeto Navegador
***/

var navegador = new function(){
    
    this.obj = new Container();
    
    //this.sorpresas = new Container();
    
    this.url = "images/juegos/navigator.png";
    
    this.cuadrado = new Bitmap("images/juegos/square.png");
    
    this.cursorizq = new Bitmap("images/juegos/cursorleft.png");
    
    this.cursorder = new Bitmap("images/juegos/cursorright.png");
    
    
    this.init = function(){
        
        stage_juegos.addChild(navegador.obj);
        
        navegador.init_cuadrado();
        
        navegador.init_bg();
        
        navegador.init_cursores();
        
       
        
        //navegador.add_sopresas("images/juegos/blowfish1.png");
        
        this.resize();
    
    }
    
    this.init_bg = function(){
        
        var navegador_imagen = new Bitmap(navegador.url);
        
        //Shape
        
        var s = new Shape(navegador_imagen);
        
        s.x = 15;
        
        s.y = 40;
        
        navegador.obj.addChild(s);
     }
    
    this.init_cuadrado = function(){
       
        navegador.cuadrado.x = 80;
        
        navegador.cuadrado.y = -20;
        
        navegador.obj.addChild(navegador.cuadrado);
    }
    
    this.init_cursores = function(){
       
        this.cursorizq.name = "izq";
        
        this.cursorizq.id = "izq";
         
        this.cursorizq.x = -25;
        
        this.cursorizq.y = this.cursorder.y = 60;
        
        this.cursorder.name = "der";
        
        this.cursorder.id = "der";
        
        this.cursorder.x = 200;
        
      
       navegador.obj.addChild(navegador.cursorizq);
       navegador.obj.addChild(navegador.cursorder);
    }
    
    /*this.add_sorpresas = function(img){
       
        this.sorpresa = new Bitmap(img);
        
        navegador.sorpresas.x = 60;
        
        navegador.sorpresas.y = 110;
        
        navegador.sorpresa.alpha = 0;
        
        animacion_juegos.fadein(this.sorpresa);
        
        //console.log(this.sorpresa.id);
        
        navegador.sorpresas.addChildAt(this.sorpresa,6);
        
        navegador.obj.addChild(navegador.sorpresas);
        
    }*/
    
    this.resize = function(){
        
        navegador.obj.x = (canvas_juegos.width/2) - 90;
        
        navegador.obj.y = (canvas_juegos.height/2) + 80;
    }
}

/***
****Objeto Bichos
***/

var bichos1 = new function(){
    
    this.obj = new Container();
    
    this.bichos1_img = new Bitmap("images/juegos/bugs1.png");
    
    this.init = function(){
        
        stage_juegos.addChild(bichos1.obj);
        this.init_bichos1();
        this.resize();
        
    }
    
    this.init_bichos1 = function(){
        bichos1.obj.addChild(bichos1.bichos1_img);
            
    }
    
    
    this.resize = function(){
        
        bichos1.obj.x = 70;
        bichos1.obj.y = (canvas_juegos.height/2) + 293;
        
    }
 
}

var bichos2 = new function(){
    
    this.obj = new Container();
    
    this.bichos2_img = new Bitmap("images/juegos/bugs2.png");
    
    this.init = function(){
        
        stage_juegos.addChild(bichos2.obj);
        this.init_bichos2();
        this.resize();
        
    }
    
    this.init_bichos2 = function(){
        bichos2.obj.addChild(bichos2.bichos2_img);
            
    }
    
    
    this.resize = function(){
        
        bichos2.obj.x = (canvas_juegos.width/2) + 240;
        bichos2.obj.y = (canvas_juegos.height/2) + 230;
        
    }
 
}

var lava1 = new function(){
    
    this.obj = new Container();
    
    this.lava1_img = new Bitmap("images/juegos/volcano1.png");
    
    this.init = function(){
        
        stage_juegos.addChild(lava1.obj);
        this.init_lava1();
        this.resize();
        
    }
    
    this.init_lava1 = function(){
        lava1.obj.addChild(lava1.lava1_img);
            
    }
    
    
    this.resize = function(){
        
        lava1.obj.x = 85;
        lava1.obj.y = (canvas_juegos.height/2) + 190;
        
    }
 
}

var lava2 = new function(){
    
    this.obj = new Container();
    
    this.lava2_img = new Bitmap("images/juegos/volcano2.png");
    
    this.init = function(){
        
        stage_juegos.addChild(lava2.obj);
        this.init_lava2();
        this.resize();
        
    }
    
    this.init_lava2 = function(){
        lava2.obj.addChild(lava2.lava2_img);
            
    }
    
    
    this.resize = function(){
        
        lava2.obj.x = (canvas_juegos.width/2) - 417;
        lava2.obj.y = (canvas_juegos.height/2) + 100;
        
    }
 
}

var lava3 = new function(){
    
    this.obj = new Container();
    
    this.lava3_img = new Bitmap("images/juegos/volcano3.png");
    
    this.init = function(){
        
        stage_juegos.addChild(lava3.obj);
        this.init_lava3();
        this.resize();
        
    }
    
    this.init_lava3 = function(){
        lava3.obj.addChild(lava3.lava3_img);
            
    }
    
    
    this.resize = function(){
        
        lava3.obj.x = (canvas_juegos.width/2) - 222;
        lava3.obj.y = (canvas_juegos.height/2) + 240;
        
    }
 
}

var lava4 = new function(){
    
    this.obj = new Container();
    
    this.lava4_img = new Bitmap("images/juegos/volcano4.png");
    
    this.init = function(){
        
        stage_juegos.addChild(lava4.obj);
        this.init_lava4();
        this.resize();
        
    }
    
    this.init_lava4 = function(){
        lava4.obj.addChild(lava4.lava4_img);
            
    }
    
    
    this.resize = function(){
        
        lava4.obj.x = (canvas_juegos.width/2) + 743;
        lava4.obj.y = (canvas_juegos.height/2) + 114;
        
    }
 
}

var lava5 = new function(){
    
    this.obj = new Container();
    
    this.lava5_img = new Bitmap("images/juegos/volcano5-1.png");
    
    this.init = function(){
        
        stage_juegos.addChild(lava5.obj);
        this.init_lava5();
        this.resize();
        
    }
    
    this.init_lava5 = function(){
        lava5.obj.addChild(lava5.lava5_img);
            
    }
    
    
    this.resize = function(){
        
        lava5.obj.x = (canvas_juegos.width/2) - 195;
        lava5.obj.y = (canvas_juegos.height/2) + 318;
        
    }
 
}

var lava6 = new function(){
    
    this.obj = new Container();
    
    this.lava6_img = new Bitmap("images/juegos/volcano6-1.png");
    
    this.init = function(){
        
        stage_juegos.addChild(lava6.obj);
        this.init_lava6();
        this.resize();
        
    }
    
    this.init_lava6 = function(){
        lava6.obj.addChild(lava6.lava6_img);
            
    }
    
    
    this.resize = function(){
        
        lava6.obj.x = (canvas_juegos.width/2) + 705;
        lava6.obj.y = (canvas_juegos.height/2) + 281;
        
    }
 
}

var planeta1 = new function(){
    
    this.obj = new Container();
    
    this.planeta1_img = new Bitmap("images/juegos/planets1.png");
    
    this.init = function(){
        
        stage_juegos.addChild(planeta1.obj);
        this.init_planeta1();
        this.resize();
        
    }
    
    this.init_planeta1 = function(){
        planeta1.obj.addChild(planeta1.planeta1_img);
            
    }
    
    
    this.resize = function(){
        
        planeta1.obj.x = 175;
        planeta1.obj.y = (canvas_juegos.height/2) + 220;
        
    }
 
}

var planeta2 = new function(){
    
    this.obj = new Container();
    
    this.planeta2_img = new Bitmap("images/juegos/planets2.png");
    
    this.init = function(){
        
        stage_juegos.addChild(planeta2.obj);
        this.init_planeta2();
        this.resize();
        
    }
    
    this.init_planeta2 = function(){
        planeta2.obj.addChild(planeta2.planeta2_img);
            
    }
    
    
    this.resize = function(){
        
        planeta2.obj.x = (canvas_juegos.width/2) - 0;
        planeta2.obj.y = (canvas_juegos.height/2) + 268;
        
    }
 
}

var planeta3 = new function(){
    
    this.obj = new Container();
    
    this.planeta3_img = new Bitmap("images/juegos/planets3.png");
    
    this.init = function(){
        
        stage_juegos.addChild(planeta3.obj);
        this.init_planeta3();
        this.resize();
        
    }
    
    this.init_planeta3 = function(){
        planeta3.obj.addChild(planeta3.planeta3_img);
            
    }
    
    
    this.resize = function(){
        
        planeta3.obj.x = (canvas_juegos.width/2) + 130;
        planeta3.obj.y = (canvas_juegos.height/2) + 10;
        
    }
 
}

var planeta4 = new function(){
    
    this.obj = new Container();
    
    this.planeta4_img = new Bitmap("images/juegos/planets4.png");
    
    this.init = function(){
        
        stage_juegos.addChild(planeta4.obj);
        this.init_planeta4();
        this.resize();
        
    }
    
    this.init_planeta4 = function(){
        planeta4.obj.addChild(planeta4.planeta4_img);
            
    }
    
    
    this.resize = function(){
        
        planeta4.obj.x = (canvas_juegos.width/2) - 430;
        planeta4.obj.y = (canvas_juegos.height/2) - 80;
        
    }
 
}


var planeta5 = new function(){
    
    this.obj = new Container();
    
    this.planeta5_img = new Bitmap("images/juegos/planets5.png");
    
    this.init = function(){
        
        stage_juegos.addChild(planeta5.obj);
        this.init_planeta5();
        this.resize();
        
    }
    
    this.init_planeta5 = function(){
        planeta5.obj.addChild(planeta5.planeta5_img);
            
    }
    
    
    this.resize = function(){
        
        planeta5.obj.x = (canvas_juegos.width/2) + 420;
        planeta5.obj.y = (canvas_juegos.height/2) - 180;
        
    }
 
}

var planeta6 = new function(){
    
    this.obj = new Container();
    
    this.planeta6_img = new Bitmap("images/juegos/planets6.png");
    
    this.init = function(){
        
        stage_juegos.addChild(planeta6.obj);
        this.init_planeta6();
        this.resize();
        
    }
    
    this.init_planeta6 = function(){
        planeta6.obj.addChild(planeta6.planeta6_img);
            
    }
    
    
    this.resize = function(){
        
        planeta6.obj.x = 300;
        planeta6.obj.y = 150;
        
    }
 
}

/*var titulo_juegos = new function(){
    
    this.obj = new Container();
    
    this.titulo_img = new Bitmap("images/juegos/title.png");
    
    this.init = function(){
        
        stage_juegos.addChild(titulo_juegos.obj);
        this.init_titulo();
        this.resize();
        
    }
    
    this.init_titulo = function(){
        titulo_juegos.obj.addChild(titulo_juegos.titulo_img);
            
    }
    
    
    this.resize = function(){
        
        titulo_juegos.obj.x = (canvas_juegos.width/2) - 123;
        titulo_juegos.obj.y = (canvas_juegos.height/2) - 180;
        
    }
 
}*/

var titulo_juegos = new function(){
    
    this.itemsbit = new Array();
    
    this.obj = new Container();
    
    this.items = new Array(
    new Array("images/juegos/titulo/j.png",0,8),
    new Array("images/juegos/titulo/u.png",48,0),
    new Array("images/juegos/titulo/eg.png",105,0),
    new Array("images/juegos/titulo/o.png",200,0),
    new Array("images/juegos/titulo/s.png",260,8)
    );
    
    this.init = function(){
        
        for (var i=0; i < titulo_juegos.items.length;i++){
            this.itemsbit[i] = new Bitmap(titulo_juegos.items[i][0]);
              
        }
        
        stage_juegos.addChild(titulo_juegos.obj);
        this.init_titulo_juegos();
        this.resize();
        
    }
    
    this.init_titulo_juegos = function(){
        
        for (var i=0; i < titulo_juegos.items.length;i++){
            this.position(titulo_juegos.itemsbit[i],titulo_juegos.items[i][1],titulo_juegos.items[i][2]);
            titulo_juegos.obj.addChild(titulo_juegos.itemsbit[i]);
        }
    }
    
    
    this.resize = function(){
        
        titulo_juegos.obj.x = (canvas_juegos.width/2) - 135;
        titulo_juegos.obj.y = (canvas_juegos.height/2) - 140;
        
    }
    
    this.position = function(o,x,y){
        o.x = x;
        o.y = y;
    }
}


var cohete1 = new function(){
    
    this.obj = new Container();
    
    this.cohete1_img = new Bitmap("images/juegos/rocket1.png");
    
    if($.browser.webkit){
        //this.cohete1_img.shadow = new Shadow("#FECB47",90,30,1);
    }else{
        this.cohete1_img.shadow = new Shadow("#FECB47",90,30,50);    
    }
    
    this.init = function(){
        
        stage_juegos.addChild(cohete1.obj);
        this.init_cohete1();
        this.resize();
        
    }
    
    this.init_cohete1 = function(){
        cohete1.obj.addChild(cohete1.cohete1_img);
            
    }
    
    
    this.resize = function(){
        
        cohete1.obj.x = (canvas_juegos.height/2) + 290;
        cohete1.obj.y = (canvas_juegos.height/2) + 400;
        
    }
 
}


var cohete2 = new function(){
    
    this.obj = new Container();
    
    this.cohete2_img = new Bitmap("images/juegos/rocket2.png");
    
    this.init = function(){
        
        stage_juegos.addChild(cohete2.obj);
        this.init_cohete2();
        this.resize();
        
    }
    
    this.init_cohete2 = function(){
        cohete2.obj.addChild(cohete2.cohete2_img);
            
    }
    
    
    this.resize = function(){
        
        cohete2.obj.x = (canvas_juegos.width/2) - 130;
        cohete2.obj.y = (canvas_juegos.height/2) + 20;
        
    }
 
}


var cohete3 = new function(){
    
    this.obj = new Container();
    
    this.cohete3_img = new Bitmap("images/juegos/rocket3.png");
    
    if($.browser.webkit){
        //this.cohete1_img.shadow = new Shadow("#FECB47",90,30,1);
    }else{
        this.cohete3_img.shadow = new Shadow("#FECB47",90,30,22);    
    }
    
    
    this.init = function(){
        
        stage_juegos.addChild(cohete3.obj);
        this.init_cohete3();
        this.resize();
        
    }
    
    this.init_cohete3 = function(){
        cohete3.obj.addChild(cohete3.cohete3_img);
            
    }
    
    
    this.resize = function(){
        
        cohete3.obj.x = (canvas_juegos.width/2) + 1000;
        cohete3.obj.y = (canvas_juegos.height/2) + 70;
        
    }
 
}


var cohete4 = new function(){
    
    this.obj = new Container();
    
    this.cohete4_img = new Bitmap("images/juegos/rocket4.png");
    
    this.init = function(){
        
        stage_juegos.addChild(cohete4.obj);
        this.init_cohete4();
        this.resize();
        
    }
    
    this.init_cohete4 = function(){
        cohete4.obj.addChild(cohete4.cohete4_img);
            
    }
    
    
    this.resize = function(){
        
        cohete4.obj.x = (canvas_juegos.width/2) + 680;
        cohete4.obj.y = (canvas_juegos.height/2) - 100;
        
    }
 
}

var cohete5 = new function(){
    
    this.obj = new Container();
    
    this.cohete5_img = new Bitmap("images/juegos/rocket5.png");
    
    
    if($.browser.webkit){
        //this.cohete1_img.shadow = new Shadow("#FECB47",90,30,1);
    }else{
        this.cohete5_img.shadow = new Shadow("#FECB47",50,15,10);    
    }
    
    
    this.init = function(){
        
        stage_juegos.addChild(cohete5.obj);
        this.init_cohete5();
        this.resize();
        
    }
    
    this.init_cohete5 = function(){
        cohete5.obj.addChild(cohete5.cohete5_img);
            
    }
    
    
    this.resize = function(){
        
        cohete5.obj.x = (canvas_juegos.width/2) + 270;
        cohete5.obj.y = (canvas_juegos.height/2) - 120;
        
    }
 
}

var cohete6 = new function(){
    
    this.obj = new Container();
    
    this.cohete6_img = new Bitmap("images/juegos/rocket6.png");
    
    this.init = function(){
        
        stage_juegos.addChild(cohete6.obj);
        this.init_cohete6();
        this.resize();
        
    }
    
    this.init_cohete6 = function(){
        cohete6.obj.addChild(cohete6.cohete6_img);
            
    }
    
    
    this.resize = function(){
        
        cohete6.obj.x = (canvas_juegos.width/2) - 200;
        cohete6.obj.y = (canvas_juegos.height/2) - 260;
        
    }
 
}

var cohete7 = new function(){
    
    this.obj = new Container();
    
    this.cohete7_img = new Bitmap("images/juegos/rocket7.png");
    
    if($.browser.webkit){
        //this.cohete1_img.shadow = new Shadow("#FECB47",90,30,1);
    }else{
        this.cohete7_img.shadow = new Shadow("#FECB47",50,15,10);    
    }
    
    this.init = function(){
        
        stage_juegos.addChild(cohete7.obj);
        this.init_cohete7();
        this.resize();
        
    }
    
    this.init_cohete7 = function(){
        cohete7.obj.addChild(cohete7.cohete7_img);
            
    }
    
    
    this.resize = function(){
        
        cohete7.obj.x = (canvas_juegos.width/2) + 950;
        cohete7.obj.y = (canvas_juegos.height/2) - 200;
        
    }
 
}

var cohete8 = new function(){
    
    this.obj = new Container();
    
    this.cohete8_img = new Bitmap("images/juegos/rocket8.png");
    
    this.init = function(){
        
        stage_juegos.addChild(cohete8.obj);
        this.init_cohete8();
        this.resize();
        
    }
    
    this.init_cohete8 = function(){
        cohete8.obj.addChild(cohete8.cohete8_img);
            
    }
    
    
    this.resize = function(){
        
        cohete8.obj.x = (canvas_juegos.width/2) + 350;
        cohete8.obj.y = (canvas_juegos.height/2) - 450;
        
    }
 
}

var cohete9 = new function(){
    
    this.obj = new Container();
    
    this.cohete9_img = new Bitmap("images/juegos/rocket9.png");
    
    if($.browser.webkit){
        //this.cohete1_img.shadow = new Shadow("#FECB47",90,30,1);
    }else{
        this.cohete9_img.shadow = new Shadow("#FECB47",90,30,50);    
    }
    
    
    this.init = function(){
        
        stage_juegos.addChild(cohete9.obj);
        this.init_cohete9();
        this.resize();
        
    }
    
    this.init_cohete9 = function(){
        cohete9.obj.addChild(cohete9.cohete9_img);
            
    }
    
    
    this.resize = function(){
        
        cohete9.obj.x = (canvas_juegos.width/2) + 950;
        cohete9.obj.y = (canvas_juegos.height/2) - 500;
        
    }
 
}
