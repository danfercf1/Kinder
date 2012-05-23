
/**Operador con lentes 3D**/

var operador_lentes3D = new function(){
    
    this.obj = new Container();
    
    this.operador_lentes3D_img = new Bitmap("images/agenda/op_glasses.png");
    this.brazoizq_img = new Bitmap("images/agenda/op_glassesLeft.png");
    this.brazoder_img = new Bitmap("images/agenda/op_glassesRight.png");
    
    this.init = function(){
        
        stage_agenda.addChild(operador_lentes3D.obj);
        this.init_operador_lentes3D();
        this.resize();
        
    }
    
    this.init_operador_lentes3D = function(){
        
        /**Brazo izquierdo**/
        
        operador_lentes3D.brazoizq_img.x = 73;
        
        operador_lentes3D.brazoizq_img.y = 21;
        
        /**Brazo derecho**/
        
        operador_lentes3D.brazoder_img.x = 29;
        
        operador_lentes3D.brazoder_img.y = 74;
        
        
        operador_lentes3D.obj.addChild(operador_lentes3D.brazoizq_img);
        
        operador_lentes3D.obj.addChild(operador_lentes3D.operador_lentes3D_img);
        
        operador_lentes3D.obj.addChild(operador_lentes3D.brazoder_img);
    }
    
    this.resize = function(){
        
        operador_lentes3D.obj.x = 594;
        operador_lentes3D.obj.y = 718;
        
    }
}

/**Operador PC**/

var operadorPC = new function(){
    
    this.obj = new Container();
    
    this.operadorPC_img = new Bitmap("images/agenda/op_pc.png");
    this.ojoscerrados_img = new Bitmap("images/agenda/op_pcEyes.png");
    this.luz_img = new Bitmap("images/agenda/op_pcLight.png");
    
    this.init = function(){
        
        stage_agenda.addChild(operadorPC.obj);
        this.init_operadorPC();
        this.init_ojoscerrados();
        this.init_luz();
        this.resize();
        
    }
    
    this.init_operadorPC = function(){
        operadorPC.obj.addChild(operadorPC.operadorPC_img);
    }
    
    this.init_ojoscerrados = function(){
        
        operadorPC.ojoscerrados_img.x = 49;
        
        operadorPC.ojoscerrados_img.y = 12;
        
        operadorPC.obj.addChild(operadorPC.ojoscerrados_img);
    }
    
    this.init_luz = function(){
        
        operadorPC.luz_img.x = 4;
        
        operadorPC.luz_img.y = 20;
        
        operadorPC.obj.addChild(operadorPC.luz_img);
    }
    
    
    this.resize = function(){
        
        operadorPC.obj.x = 1250;
        operadorPC.obj.y = 690;
        
    }
}
