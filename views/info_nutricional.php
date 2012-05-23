<style>
#fancybox-close {
    background: url("./images/nutricional/cerrar.png") no-repeat scroll center center transparent;
    height: 51px;
    right: 82px;
    top: -4px;
    width: 39px;
    z-index: 1103;
}

#fancybox-wrap{
    
    /*top: 250px !important;*/
        
}

</style>
<section id="content_nutricional">
    <section id="imagen_centro"><?php if(empty($imagenes)){echo '<p class="error_ipad">No existe Informaci&oacute;n<p>';}?></section>
</section>
<script>
    jQuery(function(){
        jQuery('#imagen_centro').css('background','url("./images/nutricional/<?php echo $imagenes?>") no-repeat scroll center center transparent');
    });
</script>