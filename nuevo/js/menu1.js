var menu = new function()
{ 
  this.init= function()
  {
        
        var right = 22;
        var r_nuevo = 0;
        var alto = 35 ;
      
        
        
        var top = ((document.body.clientHeight - (alto*6))/2);
                
        this.menu_li = $('#menu li');
        
        this.menu_li.each(function(li)
        {
                $(this).css('top',top) ; 
                r_nuevo =($(this).width()-right)*(-1) ;  
                $(this).css('left',r_nuevo);
                $(this).css('cursor','pointer'); 
                top+=alto ;  
        });
        
         this.menu_li.mouseover(function(obj)
         {
              menu.animation(this) ;   
         });
         
         this.menu_li.mouseout(function(obj)
         {
              menu.animation_inicio(this,300);
         });
        
    }
    
    this.animation = function(obj)
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
    
    this.animation_inicio = function(obj,t)
    {
        var right = 22  ; 
        var r_nuevo = 0 ; 
        var tam = $(obj).width(); 
        
        r_nuevo =($(obj).width()-right)*-1 ;
        
         $(obj).animate({
            left: r_nuevo  
          }, t, function() {
             
          });
    }
    
}
