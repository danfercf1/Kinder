<div class="contentcontainer">
    <div class="headings alt">
        <h2>Informaci&oacute;n JUEGO</h2>
    </div>
    <div class="contentbox info_form">
        <form id="form_edit" action="<?php echo ROOT_PATH;?>games/edit" method="POST">  
        <p>
        <span>Nombre</span><br/><br/>
        <input id="NOMBRE_JUEGO" name="NOMBRE_JUEGO" value="<?php echo $juego->nombre_juego;?>" type="text" class="inputbox" <?php if($editar=="info"){echo "readonly";}?>/>
        </p>
        <p>
        <span>Descripci&oacute;n</span><br/><br/>
        <textarea class="text-input textarea" id="DESCRIPCION_JUEGO" name="DESCRIPCION_JUEGO" rows="5" cols="65" <?php if($editar=="info"){echo "readonly";}?>><?php echo $juego->descripcion_juego;?></textarea>
        </p>
                
        <?php if($editar=="editar"){?>
        <p>
            <input type="submit" value="Actualizar" class="btn" id="enviar"/>
            <input type="hidden" id="ID_JUEGO" name="ID_JUEGO" value="<?php echo $juego->id_juego;?>"/>
        </p>
        <?php }?>
        </form>
   </div>
</div>