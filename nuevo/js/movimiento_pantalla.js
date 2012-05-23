var movimiento_pantalla = new function(){
    
    this.init = function(){
        jQuery('#canvas_contacto').hide();
           
        jQuery('#canvas_productos').hide();
           
        jQuery('#link_soypadre').click(function(){
            posicionar.menu_soy();
        });
           
        jQuery(document).scroll(function(){
        
            if(jQuery('.menu_soy #link_soypadre span').attr('class') == 'soy_chico' && jQuery(document).scrollTop() > 2160) {
                
                jQuery('.menu_soy #link_soypadre span').attr('class','soy_padre');
                
                jQuery('.nav_menu_soy_chico #menu_soy_padre').hide();
                
            }if(jQuery('.menu_soy #link_soypadre span').attr('class') == 'soy_padre' && jQuery('body').height() ==  5400 && jQuery(document).scrollTop() < 2160) {
                
                jQuery('.menu_soy #link_soypadre span').attr('class','soy_chico');
                
                jQuery('.nav_menu_soy_chico #menu_soy_padre').show();
                
            }
        });
    }
}