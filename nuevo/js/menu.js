var menu = new function()
{ 
  this.init= function()
  {
        
        var right = 22;
        var r_nuevo = 0;
        var alto = 35 ;
      
        if(jQuery.browser.msie){
            
           var top = ((screen.height - (alto*6))/2) - 50;
            
        }else{
            
           var top = ((screen.height - (alto*6))/2) - 50;
                
        }
        
        
        //console.log(document.body.clientHeight);
                
        this.menu_li = jQuery('#nav_menu_soy_chico li');
        
        this.menu_li.each(function(li)
        {
                jQuery(this).css('top',top) ; 
                r_nuevo =(jQuery(this).width()-right)*(-1) ;
                jQuery(this).css('left',r_nuevo);
                jQuery(this).css('cursor','pointer'); 
                top+=alto ;
        });
        
         this.menu_li.mouseover(function(obj)
         {
              menu.sacar_menu(this) ;   
         });
         
         this.menu_li.mouseout(function(obj)
         {
              menu.meter_menu(this,300);
         });
        
    }
    
    this.sacar_menu = function(obj)
    {
        
        var tam = $(obj).width() ;
          
        
             $(obj).animate
             ({
                  left: -10  
              } , 400, 
          function() 
          {
                $(obj).stop().animate
                ({
                    
                    
                } , 50  ) ;
                  
             
          });
    }
    
    
    this . meter_menu = function(obj,t) 
    {          
        var right = 22  ; 
        var r_nuevo = 0 ; 
        var tam = $(obj).width(); 
        
        r_nuevo =($(obj).width()-right)*-1 ;
        
         $(obj).animate({
            left: r_nuevo  
          }, t, function()
           {
             $(obj).stop().animate
                ({
                    
                    
                } , 0  ) ;
                  
             
          });
    }
    
}
