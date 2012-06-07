/***
****Objeto Guardian
***/

var guardian = new function(){
    
    this.obj = new Container();
    
    this.guardian_img = new Bitmap("images/museo/guardian.png");
    
    this.init = function(){
        
        stage_museo.addChild(guardian.obj);
        this.init_guardian();
        this.resize();
        
    }
    
    this.init_guardian = function(){
        guardian.obj.addChild(guardian.guardian_img);
    }
    
    
    this.resize = function(){
        
        guardian.obj.x = (canvas_museo.width/2) - 350;
        guardian.obj.y = (canvas_museo.height/2) - 6;
        
    }
}


/***
****Objeto Ostra
***/

var ostra = new function(){
    
    this.json_consultasorpresa;
    
    this.obj = new Container();
    
    this.sorpresas = new Container();
    
    this.url = "images/museo/oyster.png";
    
    this.pezglobo1 = new Bitmap("images/museo/blowfish1.png");
    
    this.pezglobo2 = new Bitmap("images/museo/blowfish2.png");
    
    this.cursorleft = new Bitmap("images/museo/cursor-leftbig.png");
    
    this.cursorright = new Bitmap("images/museo/cursor-rightbig.png");
    
    
    this.init = function(){
        
        stage_museo.addChild(ostra.obj);
        
        ostra.init_bg();
        
        ostra.init_peces();
        
        ostra.init_cursores();
        
        //ostra.add_sorpresas("images/sorpresas/"+_imagenes[animacion_museo.index]);
        
        this.resize();
    
    }
    
    this.init_bg = function(){
        
        var ostra_imagen = new Bitmap(ostra.url);
        
        //Shape
        
        var s = new Shape(ostra_imagen);
        
        s.x = 10;
        
        s.y = 40;
        
        ostra.obj.addChild(s);
     }
    
    this.init_peces = function(){
       
        this.pezglobo1.x = 0;
        
        this.pezglobo1.y = 3;
        
        this.pezglobo2.x = 212;
        
        this.pezglobo2.y = 13;
        
      
       ostra.obj.addChild(ostra.pezglobo1);
       ostra.obj.addChild(ostra.pezglobo2);
    }
    
    this.init_cursores = function(){
       
        this.cursorleft.name = "izq";
        
        this.cursorleft.id = "izq";
         
        this.cursorleft.x = 50;
        
        this.cursorleft.y = 265;
        
        this.cursorright.name = "der";
        
        this.cursorright.id = "der";
        
        this.cursorright.x = 155;
        
        this.cursorright.y = 260;
        
      
       ostra.obj.addChild(ostra.cursorleft);
       ostra.obj.addChild(ostra.cursorright);
    }
    
    this.add_sorpresas = function(img){
       
        this.sorpresa = new Bitmap(img);
        
        ostra.sorpresas.x = 35;
        
        ostra.sorpresas.y = 82;
        
        ostra.sorpresa.alpha = 0;
        
        animacion_museo.fadein(this.sorpresa);
        
        //console.log(this.sorpresa.id);
        
        ostra.sorpresas.addChildAt(this.sorpresa,6);
        
        ostra.obj.addChild(ostra.sorpresas);
        
    }
    
    this.resize = function(){
        
        ostra.obj.x = (canvas_museo.width/2) - 123;
        
        ostra.obj.y = (canvas_museo.height/2) - 76;
    }
}

/***
****Objeto Peces amarillos1
***/

var pecesamarillos1 = new function(){
    
    this.itemsbit = new Array();
    
    this.obj = new Container();
    
    this.items = new Array(
    new Array("images/museo/yellowfish_down1.png",10,20),
    new Array("images/museo/yellowfish_down2.png",30,-45),
    new Array("images/museo/yellowfish_down3.png",95,-45),
    new Array("images/museo/yellowfish_down4.png",145,10),
    new Array("images/museo/yellowfish_down5.png",85,70)
    );
    
    this.init = function(){
        
        for (var i=0; i < pecesamarillos1.items.length;i++){
            this.itemsbit[i] = new Bitmap(pecesamarillos1.items[i][0]);
              
        }
        
        stage_museo.addChild(pecesamarillos1.obj);
        this.init_pecesamarillos1();
        this.resize();
        
    }
    
    this.init_pecesamarillos1 = function(){
        
        for (var i=0; i < pecesamarillos1.items.length;i++){
            this.position(pecesamarillos1.itemsbit[i],pecesamarillos1.items[i][1],pecesamarillos1.items[i][2]);
            pecesamarillos1.obj.addChild(pecesamarillos1.itemsbit[i]);
        }
    }
    
    
    this.resize = function(){
        
        pecesamarillos1.obj.x = 1980;
        pecesamarillos1.obj.y = (canvas_museo.height/2) + 94;
        
    }
    
    this.position = function(o,x,y){
        o.x = x;
        o.y = y;
    }
}

/***
****Objeto Peces amarillos2
***/

var pecesamarillos2 = new function(){
    
    this.itemsbit = new Array();
    
    this.obj = new Container();
    
    this.items = new Array(
    new Array("images/museo/yellowfish_midright1.png",80,-10),
    new Array("images/museo/yellowfish_midright2.png",80,20),
    new Array("images/museo/yellowfish_midright3.png",110,50),
    new Array("images/museo/yellowfish_midright4.png",150,20),
    new Array("images/museo/yellowfish_midright5.png",120,-5),
    new Array("images/museo/yellowfish_midright6.png",150,-20)
    );
    
    
    this.init = function(){
        
        for (var i=0; i < pecesamarillos2.items.length;i++){
            this.itemsbit[i] = new Bitmap(pecesamarillos2.items[i][0]);
              
        }
        
        stage_museo.addChild(pecesamarillos2.obj);
        this.init_pecesamarillos2();
        this.resize();
        
    }
    
    this.init_pecesamarillos2 = function(){
        
        for (var i=0; i < pecesamarillos2.items.length;i++){
            this.position(pecesamarillos2.itemsbit[i],pecesamarillos2.items[i][1],pecesamarillos2.items[i][2]);
            pecesamarillos2.obj.addChild(pecesamarillos2.itemsbit[i]);
        }
    }
    
    
    this.resize = function(){
        
        pecesamarillos2.obj.x = -100;
        pecesamarillos2.obj.y = (canvas_museo.height/2) - 126;
        
    }
    
    this.position = function(o,x,y){
        o.x = x;
        o.y = y;
    }
}


/***
****Objeto Peces amarillos3
***/

var pecesamarillos3 = new function(){
    
    this.itemsbit = new Array();
    
    this.obj = new Container();
    
    this.items = new Array(
    new Array("images/museo/yellowfish_upright1.png",-50,20),
    new Array("images/museo/yellowfish_upright2.png",-50,60),
    new Array("images/museo/yellowfish_upright3.png",0,105),
    new Array("images/museo/yellowfish_upright4.png",80,50),
    new Array("images/museo/yellowfish_upright5.png",30,20),
    new Array("images/museo/yellowfish_upright6.png",70,-5)
    );
    
    this.init = function(){
        
        for (var i=0; i < pecesamarillos3.items.length;i++){
            this.itemsbit[i] = new Bitmap(pecesamarillos3.items[i][0]);
              
        }
        
        stage_museo.addChild(pecesamarillos3.obj);
        this.init_pecesamarillos3();
        this.resize();
        
    }
    
    this.init_pecesamarillos3 = function(){
        for (var i=0; i < pecesamarillos3.items.length;i++){
            this.position(pecesamarillos3.itemsbit[i],pecesamarillos3.items[i][1],pecesamarillos3.items[i][2]);
            pecesamarillos3.obj.addChild(pecesamarillos3.itemsbit[i]);
        }
    }
    
    
    this.resize = function(){
        
        pecesamarillos3.obj.x = -100;
        pecesamarillos3.obj.y = (canvas_museo.height/2) - 476;
        
    }
    
    this.position = function(o,x,y){
        o.x = x;
        o.y = y;
    }
}

/***
****Objeto Peces amarillos4
***/

var pecesamarillos4 = new function(){
    
    this.itemsbit = new Array();
    
    this.obj = new Container();
    
    this.items = new Array(
    new Array("images/museo/yellowfish_back1.png",-20,60)
    );
    
    this.init = function(){
        
        for (var i=0; i < pecesamarillos4.items.length;i++){
            this.itemsbit[i] = new Bitmap(pecesamarillos4.items[i][0]);
              
        }
        
        stage_museo.addChild(pecesamarillos4.obj);
        this.init_pecesamarillos4();
        this.resize();
        
    }
    
    this.init_pecesamarillos4 = function(){
        
        for (var i=0; i < pecesamarillos4.items.length;i++){
            this.position(pecesamarillos4.itemsbit[i],pecesamarillos4.items[i][1],pecesamarillos4.items[i][2]);
            pecesamarillos4.obj.addChild(pecesamarillos4.itemsbit[i]);
             
        }
    }
    
    
    this.resize = function(){
        
        pecesamarillos4.obj.x = -100;
        pecesamarillos4.obj.y = (canvas_museo.height/2) + 99;
        
    }
    
    this.position = function(o,x,y){
        o.x = x;
        o.y = y;
    }
}

/***
****Objeto Peces rojos1
***/


var pecesrojos1 = new function(){
    
    this.itemsbit = new Array();
    
    this.obj = new Container();
    
    this.items = new Array(
    new Array("images/museo/redfish_downleft1.png",35,20),
    new Array("images/museo/redfish_downleft2.png",-20,20),
    new Array("images/museo/redfish_downleft3.png",-60,35),
    new Array("images/museo/redfish_downleft4.png",-10,105)
    );
    
    this.init = function(){
        
        for (var i=0; i < pecesrojos1.items.length;i++){
            this.itemsbit[i] = new Bitmap(pecesrojos1.items[i][0]);
              
        }
        
        stage_museo.addChild(pecesrojos1.obj);
        this.init_pecesrojos1();
        this.resize();
        
    }
    
    this.init_pecesrojos1 = function(){
        
       for (var i=0; i < pecesrojos1.items.length;i++){
            this.position(pecesrojos1.itemsbit[i],pecesrojos1.items[i][1],pecesrojos1.items[i][2]);
            pecesrojos1.obj.addChild(pecesrojos1.itemsbit[i]);
             
        }
    }
    
    
    this.resize = function(){
        
        pecesrojos1.obj.x = -100;
        pecesrojos1.obj.y = (canvas_museo.height/2) + 124;
        
    }
    
    this.position = function(o,x,y){
        o.x = x;
        o.y = y;
    }
}


/***
****Objeto Peces rojos2
***/

var pecesrojos2 = new function(){
    
    this.itemsbit = new Array();
    
    this.obj = new Container();
    
    this.items = new Array(
    new Array("images/museo/redfish_downright1.png",-20,60),
    new Array("images/museo/redfish_downright2.png",60,5),
    new Array("images/museo/redfish_downright3.png",95,35),
    new Array("images/museo/redfish_downright4.png",40,105)
    );
    
    
    this.init = function(){
        
        for (var i=0; i < pecesrojos2.items.length;i++){
            this.itemsbit[i] = new Bitmap(pecesrojos2.items[i][0]);
              
        }
        
        stage_museo.addChild(pecesrojos2.obj);
        this.init_pecesrojos2();
        this.resize();
        
    }
    
    this.init_pecesrojos2 = function(){
       
        for (var i=0; i < pecesrojos2.items.length;i++){
            this.position(pecesrojos2.itemsbit[i],pecesrojos2.items[i][1],pecesrojos2.items[i][2]);
            pecesrojos2.obj.addChild(pecesrojos2.itemsbit[i]);
             
        }
        
    }
    
    
    this.resize = function(){
        
        pecesrojos2.obj.x = 1950;
        pecesrojos2.obj.y = (canvas_museo.height/2) + 94;
        
    }
    
    this.position = function(o,x,y){
        o.x = x;
        o.y = y;
    }
}


/***
****Objeto Peces rojos3
***/

var pecesrojos3 = new function(){
    
    this.itemsbit = new Array();
    
    this.obj = new Container();
    
    this.items = new Array(
    new Array("images/museo/redfish_up1.png",20,25),
    new Array("images/museo/redfish_up2.png",60,20),
    new Array("images/museo/redfish_up3.png",95,55),
    new Array("images/museo/redfish_up4.png",40,105)
    );
    
    
    this.init = function(){
        
        
        for (var i=0; i < pecesrojos3.items.length;i++){
            this.itemsbit[i] = new Bitmap(pecesrojos3.items[i][0]);
              
        }
        
        stage_museo.addChild(pecesrojos3.obj);
        this.init_pecesrojos3();
        this.resize();
        
    }
    
    this.init_pecesrojos3 = function(){
        
        for (var i=0; i < pecesrojos3.items.length;i++){
            this.position(pecesrojos3.itemsbit[i],pecesrojos3.items[i][1],pecesrojos3.items[i][2]);
            pecesrojos3.obj.addChild(pecesrojos3.itemsbit[i]);
             
        }
       
    }
    
    
    this.resize = function(){
        
        pecesrojos3.obj.x = 1980;
        pecesrojos3.obj.y = (canvas_museo.height/2) - 246;
        
    }
    
    this.position = function(o,x,y){
        o.x = x;
        o.y = y;
    }
}


/***
****Objeto Peces rojos4
***/

var pecesrojos4 = new function(){
    
    this.itemsbit = new Array();
    
    this.obj = new Container();
    
    this.items = new Array(
    new Array("images/museo/redfish_downleft1.png",35,20),
    new Array("images/museo/redfish_downleft2.png",-20,20),
    new Array("images/museo/redfish_downleft3.png",-60,35),
    new Array("images/museo/redfish_downleft4.png",-10,105)
    );
    
    this.init = function(){
        
        for (var i=0; i < pecesrojos4.items.length;i++){
            this.itemsbit[i] = new Bitmap(pecesrojos4.items[i][0]);
              
        }
        
        stage_museo.addChild(pecesrojos4.obj);
        this.init_pecesrojos4();
        this.resize();
        
    }
    
    this.init_pecesrojos4 = function(){
        
        for (var i=0; i < pecesrojos4.items.length;i++){
            this.position(pecesrojos4.itemsbit[i],pecesrojos4.items[i][1],pecesrojos4.items[i][2]);
            pecesrojos4.obj.addChild(pecesrojos4.itemsbit[i]);
             
        }
    }
    
    
    this.resize = function(){
        
        pecesrojos4.obj.x = -100;
        pecesrojos4.obj.y = (canvas_museo.height/2) - 486;
        
    }
    
    this.position = function(o,x,y){
        o.x = x;
        o.y = y;
    }
}


/***
****Objeto Planta naranja1
***/


var plantanaranja1 = new function(){
    
    this.obj = new Container();
    
    this.plantanaranja1_img = new Bitmap("images/museo/orange_plants1.png");
    
    this.init = function(){
        
        stage_museo.addChild(plantanaranja1.obj);
        this.init_plantanaranja1();
        this.resize();
        
    }
    
    this.init_plantanaranja1 = function(){
        plantanaranja1.obj.addChild(plantanaranja1.plantanaranja1_img);
    }
    
    
    this.resize = function(){
        
        plantanaranja1.obj.x = (canvas_museo.width/2) - 930;
        plantanaranja1.obj.y = (canvas_museo.height/2) + 129;
        
    }
}

/***
****Objeto Planta naranja2
***/

var plantanaranja2 = new function(){
    
    this.obj = new Container();
    
    this.plantanaranja2_img = new Bitmap("images/museo/orange_plants2.png");
    
    this.init = function(){
        
        stage_museo.addChild(plantanaranja2.obj);
        this.init_plantanaranja2();
        this.resize();
        
    }
    
    this.init_plantanaranja2 = function(){
        plantanaranja2.obj.addChild(plantanaranja2.plantanaranja2_img);
    }
    
    
    this.resize = function(){
        
        plantanaranja2.obj.x = (canvas_museo.width/2) - 515;
        plantanaranja2.obj.y = (canvas_museo.height/2) + 274;
        
    }
}

/***
****Objeto Planta naranja3
***/

var plantanaranja3 = new function(){
    
    this.obj = new Container();
    
    this.plantanaranja3_img = new Bitmap("images/museo/orange_plants3.png");
    
    this.init = function(){
        
        stage_museo.addChild(plantanaranja3.obj);
        this.init_plantanaranja3();
        this.resize();
        
    }
    
    this.init_plantanaranja3 = function(){
        plantanaranja3.obj.addChild(plantanaranja3.plantanaranja3_img);
    }
    
    
    this.resize = function(){
        
        plantanaranja3.obj.x = (canvas_museo.width/2) + 285;
        plantanaranja3.obj.y = (canvas_museo.height/2) + 232;
        
    }
}


/***
****Objeto Planta naranja4
***/

var plantanaranja4 = new function(){
    
    this.obj = new Container();
    
    this.plantanaranja4_img = new Bitmap("images/museo/orange_plants4.png");
    
    this.init = function(){
        
        stage_museo.addChild(plantanaranja4.obj);
        this.init_plantanaranja4();
        this.resize();
        
    }
    
    this.init_plantanaranja4 = function(){
        plantanaranja4.obj.addChild(plantanaranja4.plantanaranja4_img);
    }
    
    
    this.resize = function(){
        
        plantanaranja4.obj.x = (canvas_museo.width/2) + 720;
        plantanaranja4.obj.y = (canvas_museo.height/2) + 174;
        
    }
}


/***
****Objeto pulpo1
***/

var pulpo1 = new function(){
    
    this.obj = new Container();
    
    this.pulpo1_img = new Bitmap("images/museo/pulpo1.png");
    
    this.init = function(){
        
        stage_museo.addChild(pulpo1.obj);
        this.init_pulpo1();
        this.resize();
        
    }
    
    this.init_pulpo1 = function(){
        pulpo1.obj.addChild(pulpo1.pulpo1_img);
            
    }
    
    
    this.resize = function(){
        
        pulpo1.obj.x = (canvas_museo.width/2) + 370;
        pulpo1.obj.y = (canvas_museo.height/2) - 16;
        
    }
}


/***
****Objeto pulpo2
***/

var pulpo2 = new function(){
    
    this.obj = new Container();
    
    this.pulpo2_img = new Bitmap("images/museo/pulpo2.png");
    
    this.init = function(){
        
        stage_museo.addChild(pulpo2.obj);
        this.init_pulpo2();
        this.resize();
        
    }
    
    this.init_pulpo2 = function(){
        pulpo2.obj.addChild(pulpo2.pulpo2_img);
    }
    
    
    this.resize = function(){
        
        pulpo2.obj.x = (canvas_museo.width/2) + 360;
        pulpo2.obj.y = (canvas_museo.height/2) - 86;
        
    }
}


/***
****Objeto pulpo3
***/


var pulpo3 = new function(){
    
    this.obj = new Container();
    
    this.pulpo3_img = new Bitmap("images/museo/pulpo3.png");
    
    this.init = function(){
        
        stage_museo.addChild(pulpo3.obj);
        this.init_pulpo3();
        this.resize();
        
    }
    
    this.init_pulpo3 = function(){
        pulpo3.obj.addChild(pulpo3.pulpo3_img);
    }
    
    
    this.resize = function(){
        
        pulpo3.obj.x = (canvas_museo.width/2) - 370;
        pulpo3.obj.y = (canvas_museo.height/2) - 221;
        
    }
}


/***
****Objeto pulpo4
***/


var pulpo4 = new function(){
    
    this.obj = new Container();
    
    this.pulpo4_img = new Bitmap("images/museo/pulpo4.png");
    
    this.init = function(){
        
        stage_museo.addChild(pulpo4.obj);
        this.init_pulpo4();
        this.resize();
        
    }
    
    this.init_pulpo4 = function(){
        pulpo4.obj.addChild(pulpo4.pulpo4_img);
    }
    
    
    this.resize = function(){
        
        pulpo4.obj.x = (canvas_museo.width/2) - 700;
        pulpo4.obj.y = (canvas_museo.height/2) - 216;
        
    }
}


/***
****Objeto pulpo5
***/

var pulpo5 = new function(){
    
    this.obj = new Container();
    
    this.pulpo5_img = new Bitmap("images/museo/pulpo5.png");
    
    this.init = function(){
        
        stage_museo.addChild(pulpo5.obj);
        this.init_pulpo5();
        this.resize();
        
    }
    
    this.init_pulpo5 = function(){
        pulpo5.obj.addChild(pulpo5.pulpo5_img);
    }
    
    
    this.resize = function(){
        
        pulpo5.obj.x = (canvas_museo.width/2) - 780;
        pulpo5.obj.y = (canvas_museo.height/2) - 156;
        
    }
}


/***
****Objeto titulo
***/


var titulo_separado = new function(){
    
    this.itemsbit = new Array();
    
    this.obj = new Container();
    
    this.items = new Array(
    new Array("images/museo/titulo/m.png",0,0),
    new Array("images/museo/titulo/u.png",58,3),
    new Array("images/museo/titulo/s.png",100,0),
    new Array("images/museo/titulo/e.png",137,3),
    new Array("images/museo/titulo/o.png",167,0),
    new Array("images/museo/titulo/k.png",230,0),
    new Array("images/museo/titulo/i.png",270,3),
    new Array("images/museo/titulo/n.png",292,3),
    new Array("images/museo/titulo/d.png",330,0),
    new Array("images/museo/titulo/e.png",373,3),
    new Array("images/museo/titulo/r.png",407,0)
    );
    
    this.init = function(){
        
        for (var i=0; i < titulo_separado.items.length;i++){
            this.itemsbit[i] = new Bitmap(titulo_separado.items[i][0]);
              
        }
        
        stage_museo.addChild(titulo_separado.obj);
        this.init_titulo_separado();
        this.resize();
        
    }
    
    this.init_titulo_separado = function(){
        
        for (var i=0; i < titulo_separado.items.length;i++){
            this.position(titulo_separado.itemsbit[i],titulo_separado.items[i][1],titulo_separado.items[i][2]);
            titulo_separado.obj.addChild(titulo_separado.itemsbit[i]);
        }
    }
    
    
    this.resize = function(){
        
        titulo_separado.obj.x = (canvas_museo.width/2) - 220;
        titulo_separado.obj.y = (canvas_museo.height/2) - 166;
        
    }
    
    this.position = function(o,x,y){
        o.x = x;
        o.y = y;
    }
}
