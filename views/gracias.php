<style>
#fancybox-close {
    
   right: 62px;    
    
}
</style>

<section id="content_gracias">
        
        <?php if($datos!=" "){echo '<span class="titulo_grande">Gracias</span>';}else{echo '<span class="titulo_pequeno">Gracias por registrarte!</span>';}?>
        <article>
            <?php if($datos!=" "){echo '<p>'.$datos.'</p>';}else{echo '<p class="flecha_top">Nos estaremos contactando v&iacute;a e-mail para completar el registro</p>';}?>
        </article>
</section>
