<div class="contentcontainer">
    <div class="headings alt">
        <h2>Informaci&oacute;n Categoria</h2>
    </div>
    <div class="contentbox info_form">
        <form id="form_edit" action="<?php echo ROOT_PATH;?>categories/edit" method="POST" enctype='multipart/form-data'>  
        <p>
        <span>Nombre</span><br/><br/>
        <input id="NOMBRE_CATEGORIA" name="NOMBRE_CATEGORIA" value="<?php echo $categoria->nombre_categoria;?>" type="text" class="inputbox" <?php if($editar=="info"){echo "readonly";}?>/>
        </p>
        
        <?php if($editar=="editar"){?>
        <p>
            <input type="submit" value="Actualizar" class="btn" id="enviar"/>
            <input type="hidden" id="ID_CATEGORIA" name="ID_CATEGORIA" value="<?php echo $categoria->id_categoria;?>"/>
        </p>
        <?php }?>
        </form>
   </div>
</div>