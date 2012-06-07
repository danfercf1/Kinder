<style>
#fancybox-close {

    right: 74px;
    
}
</style>

<section id="content_gracias">
        <div class="tituloGracias">
        <?php if($datos!=" "){echo '<span class="titulo_grande">Gracias</span>';}else{echo '<span class="titulo_pequeno">Gracias por registrarte!</span>';}?>
        </div>
        <article>
            <?php if($datos!=" "){echo '<p>'.$datos.'</p>';}else{echo '<p class="flecha_top">Nos estaremos contactando v&iacute;a e-mail para completar el registro</p>';}?>
        </article>
</section>
