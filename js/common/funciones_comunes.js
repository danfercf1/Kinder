/**
** Funciones comunes
**/

function logoKinderGirando (){
        
         this.obj = new Container();
     
         this.kinder_animacion = new SpriteSheet({
            "frames": {
                "width": 180,
                "regX" : 2,
                "regY" : 2,
                "height": 92
            },
            "animations": {"spin": [0,23,"spin",5]},
            "images": ["images/productosf/logo.png"]
         
         });
         
         
         this.init = function(x, y, stage, canvas){
            stage.addChild(this.obj);        
            this.init_logoKinderGirando();
            this.resize(canvas, x, y);
         }
         
         this.init_logoKinderGirando = function(){
            
            var bmpAnimation = new BitmapAnimation(this.kinder_animacion);
            
            bmpAnimation.gotoAndPlay("spin");//animate
            
            
            this.obj.addChild(bmpAnimation);
            
         }
         
         this.resize = function(canvas, x , y){
            
            this.obj.x = x;
            
            this.obj.y = y;
        }

}

/**
 *  Agregar Componentes
 *
 */

function addComponentes() {
    this.obj = new Container();
    this.compImg = null;

    this.init = function (obj, x, y, stage){
        this.compImg = new Bitmap(obj);
        stage.addChild(this.obj);
        this.init_addComponente(this.compImg);
        this.resize(x, y);
    }

    this.init_addComponente = function (obj) {
        this.obj.addChild(obj);
    }


    this.resize = function (x, y) {
        this.obj.x = x;
        this.obj.y = y;
    }
}
