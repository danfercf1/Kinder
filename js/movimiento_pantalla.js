var movimiento_pantalla = new function(){
    
    this.init = function(){
        jQuery('#canvas_contacto').hide();
           
        jQuery('#canvas_productos').hide();
        
        jQuery('#canvas_agenda').hide();
           
        jQuery('#link_soypadre').click(function(){
            posicionar.menu_soy();
        });
           
        jQuery(document).scroll(function(evt){
            
            if(jQuery('.menu_soy #link_soypadre span').attr('class') == 'soy_chico' && jQuery(document).scrollTop() > 3240) {
                
                jQuery('.menu_soy #link_soypadre span').attr('class','soy_padre');
                
                jQuery('.nav_menu_soy_chico #menu_soy_padre').hide();
           
            }if(jQuery('.menu_soy #link_soypadre span').attr('class') == 'soy_padre' && jQuery('body').height() >=  8640 && jQuery(document).scrollTop() < 3240) {
                
                jQuery('.menu_soy #link_soypadre span').attr('class','soy_chico');
                
                jQuery('.nav_menu_soy_chico #menu_soy_padre').show();
                                
                
            } 
        });
    }
}