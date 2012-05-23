<style>
#fancybox-close {
    background: url('./images/agenda/popup_close.png') no-repeat scroll center center transparent;
    height: 30px;
    right: 45px;
    top: 25px;
    width: 30px;
    z-index: 1103;
}

</style>

<section id="content_evento">
    <div class="contenedor_descripcion">
        <div class="header"><h2><?php echo $descripcion[0]['NOMBRE_EVENTO'];?></h2></div>
        <div class="scroll-pane">
            <p class="descripcion_evento"><?php echo $descripcion[0]['DESCRIPCION_EVENTO'];?></p>
        </div>
    </div>
</section>
