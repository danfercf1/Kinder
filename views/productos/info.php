<div class="contentcontainer">
    <div class="headings alt">
        <h2>Informaci&oacute;n Producto</h2>
    </div>
    <div class="contentbox info_form">
        <form id="form_edit" action="<?php echo ROOT_PATH;?>products/edit" method="POST" enctype='multipart/form-data'>  
        <p>
        <span>Nombre</span><br/><br/>
        <input id="NOMBRE_PRODUCTO" name="NOMBRE_PRODUCTO" value="<?php echo $producto->nombre_producto;?>" type="text" class="inputbox" <?php if($editar=="info"){echo "readonly";}?>/>
        </p>
        <p>
        <span>Descripci&oacute;n</span><br/><br/>
        <textarea class="text-input textarea" id="DESCRIPCION_PRODUCTO" name="DESCRIPCION_PRODUCTO" rows="5" cols="65" <?php if($editar=="info"){echo "readonly";}?>><?php echo $producto->descripcion_producto;?></textarea>
        </p>
        
        <p>
        <span>Imagen</span><br/><br/>
        <a><img id="mimagen_producto" src="<?php if($producto->imagen_producto==''){echo IMAGES_PATH."/imagen_jpg.png";}else{echo IMAGES_PATH."/productos/".$producto->imagen_producto;}?>" /></a><br /><br />
        <input id="IMAGEN_PRODUCTO" name="IMAGEN_PRODUCTO" value="" type="file" class="inputbox" <?php if($editar=="info"){echo "readonly";}?>/>
        </p>
        
        <p>
        <span>Informaci&oacute;n Nutricional</span><br/><br/>
        <a><img src="" /></a>
        <textarea class="text-input textarea" id="INFONUTRICIONAL_PRODUCTO" name="INFONUTRICIONAL_PRODUCTO" rows="5" cols="65" <?php if($editar=="info"){echo "readonly";}?>><?php echo $producto->infonutricional_producto;?></textarea>
        </p>
                
        <?php if($editar=="editar"){?>
        <p>
            <input type="submit" value="Actualizar" class="btn" id="enviar"/>
            <input type="hidden" id="ID_PRODUCTO" name="ID_PRODUCTO" value="<?php echo $producto->id_producto;?>"/>
        </p>
        <?php }?>
        </form>
   </div>
</div>