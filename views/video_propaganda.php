<style>
    #fancybox-close {
        right: 30px;
        top: -37px;
   }
</style>
<script type="text/javascript" src="<?php echo JS_PATH;?>jwplayer/jwplayer.js"></script>
		<script type="text/javascript">
               //var player = document.getElementById('container'); 
		       jwplayer("container").setup({ 
                    flashplayer: "<?php echo JS_PATH;?>jwplayer/player.swf" 
               }); 
		</script>
<section id="video_propaganda">
    <video autoplay="" controls=""  
        src="<?php echo ROOT_PATH;?>comercial/comercial_kinder.flv"  
        height="270"  
        id="container"  
        width="480"> 
    </video> 
</section>
