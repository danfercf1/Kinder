<div class="contentcontainer">
    <div class="headings alt">
        <h2>Informaci&oacute;n Producto</h2>
    </div>
    <div class="contentbox info_form">
        <form id="form_edit" action="<?php echo ROOT_PATH;?>surprises/edit" method="POST" enctype='multipart/form-data'>  
        <p>
        <span>Nombre</span><br/><br/>
        <input id="NOMBRE_SORPRESA" name="NOMBRE_SORPRESA" value="<?php echo $sorpresa->nombre_sorpresa;?>" type="text" class="inputbox" readonly="" />
        </p>
        
        <p>
        <span>Imagen</span><br/><br/>
        <a><img id="mimagen_producto" src="<?php if($sorpresa->imagen_sorpresa==''){echo IMAGES_PATH."/imagen_jpg.png";}else{echo IMAGES_PATH."/sorpresas/".$sorpresa->imagen_sorpresa;}?>" /></a><br /><br />
        <input id="IMAGEN_SORPRESA" name="IMAGEN_SORPRESA" value="" type="file" class="inputbox" <?php if($editar=="info"){echo "disabled";}?>/>
        </p>
        
        <p>
            <span>C&oacute;digo</span><br/><br/>
            <input id="CODIGO_SORPRESA" name="CODIGO_SORPRESA" value="<?php echo $sorpresa->codigo_sorpresa;?>" type="text" class="inputbox" <?php if($editar=="info"){echo "readonly";}?>/>
        </p>
        
        <p>
            <label for="ANIO_SORPRESA"><strong>A&ntilde;o:</strong></label>
            <select id="ANIO_SORPRESA" class="inputbox required" name="ANIO_SORPRESA" <?php if($editar=="info"){echo "disabled";}?>>
                <option value="">Elija un a&ntilde;o</option>
                <?php for ($i=2005;$i<=date("Y");$i++):?>
                <option value="<?php echo $i;?>" <?php if($sorpresa->anio_sorpresa == $i){echo "selected";}?>><?php echo $i?></option>
                <?php endfor?>
            </select>
            <br />
            <label class="smltxt">(Ejemplo para colocar descripcion del campo)</label>
        </p>
            
        <p>
                <label for="ID_CATEGORIA"><strong>Serie:</strong></label>
                <select id="ID_CATEGORIA" class="inputbox required" name="ID_CATEGORIA" <?php if($editar=="info"){echo "disabled";}?>>
                    <option value="">Elija una serie</option>
                    <?php foreach($categoria as $opcion): ?>
                        <option value="<?php echo $opcion->id_categoria;?>" <?php if($sorpresa->id_categoria == $opcion->id_categoria){echo "selected";}?>><?php echo $opcion->nombre_categoria;?></option>
                    <?php endforeach?>
                </select>
                <label class="smltxt">(Ejemplo para colocar descripcion del campo)</label>
        </p>
                
        <?php if($editar=="editar"){?>
        <p>
            <input type="submit" value="Actualizar" class="btn" id="enviar"/>
            <input type="hidden" id="ID_SORPRESA" name="ID_SORPRESA" value="<?php echo $sorpresa->id_sorpresa;?>"/>
        </p>
        <?php }?>
        </form>
   </div>
</div>