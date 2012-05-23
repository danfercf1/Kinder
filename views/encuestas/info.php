<div class="contentcontainer">
    <div class="headings alt">
        <h2>Informaci&oacute;n Encuesta/Trivia</h2>
    </div>
    <div class="contentbox info_form">
        <form id="form_edit" action="<?php echo ROOT_PATH;?>polls/edit" method="POST">  
        <p>
        <span>Nombre encuesta</span><br/><br/>
        <input id="NOMBRE_ENCUESTA" name="NOMBRE_ENCUESTA" value="<?php echo $encuesta->nombre_encuesta;?>" type="text" class="inputbox" <?php if($editar=="info"){echo "readonly";}?>/>
        </p>
        <p>
        <span>Descripci&oacute;n Encuesta</span><br/><br/>
        <textarea class="text-input textarea" id="DESCRIPCION_ENCUESTA" name="DESCRIPCION_ENCUESTA" rows="5" cols="65" <?php if($editar=="info"){echo "readonly";}?>><?php echo $encuesta->descripcion_encuesta;?></textarea>
        </p>
        <p>
        <span>Respuestas encuesta</span>
        <ul id="opciones_encuesta">
            <?php foreach($encuesta->references("opcion") as $opcion): ?>
                <li><?php echo $opcion->nombre_opcion;?></li>
            <?php endforeach?>
        </ul>
        </p>
        <?php if($editar=="editar"){?>
        <p>
            <input type="submit" value="Actualizar" class="btn" id="enviar"/>
            <input type="hidden" id="ID_ENCUESTA" name="ID_ENCUESTA" value="<?php echo $encuesta->id_encuesta;?>"/>
        </p>
        <?php }?>
        </form>
   </div>
</div>