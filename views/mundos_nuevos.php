<style>
    #fancybox-close{
         right: 82px;
         top: 33px;
    }
</style>
<section id="link_mundos_nuevos">
    
    <a id="link_mundoverde"></a>
    
    <a id="link_mundoazul"></a>

</section>

<script>
jQuery(function(){
    
            if(jQuery.browser.webkit){
                var velocidad = 3000;
            }else{
                var velocidad = 3000;
            }
            
            
            $('#link_mundoverde').click(function(){
            
                jQuery.fancybox.close();
                
                
                jQuery("body").scrollTo(1080*1 + (1080-jQuery(window).innerHeight()) - 52, velocidad, {queue:false});
                
                click = 4;
                
                
           });
           
           
           $('#link_mundoazul').click(function(){
            
               jQuery.fancybox.close();
               
               jQuery("body").scrollTo(1080*2 + (1080-jQuery(window).innerHeight()) - 52, velocidad, {queue:false});
               
               click = 5;
                
           });
});
</script>