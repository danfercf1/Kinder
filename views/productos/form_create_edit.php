<div class="contentcontainer" id="graphs">
    <div class="headings alt">
        <h2 class="left">Crear Producto</h2>
        <ul class="smltabs">
        	<li><a href="#details">Detalles Producto</a></li>
        </ul>
    </div>
 
    <div class="contentbox" id="details">
    <form action="<?php echo ROOT_PATH;?>products/create"  method="POST" name="poll_create" id="poll_create" enctype='multipart/form-data'>	   
       
            <p>
                <label for="NOMBRE_PRODUCTO"><strong>Nombre producto:</strong></label>
                <input type="text" id="NOMBRE_PRODUCTO" class="inputbox required" name="NOMBRE_PRODUCTO" value="<?php echo $_POST['NOMBRE_PRODUCTO'];?>"/> <br />  
                <label class="smltxt">(Ejemplo para colocar descripcion del campo)</label>              
            </p>
            
            <p>
                <label for="DESCRIPCION_PRODUCTO"><strong>Descripci&oacute;n:</strong></label>
                <textarea class="text-input textarea required" id="DESCRIPCION_PRODUCTO" name="DESCRIPCION_PRODUCTO" rows="5" cols="75"><?php echo $_POST['DESCRIPCION_PRODUCTO'];?></textarea>
                <label class="smltxt">(Ejemplo para colocar descripcion del campo)</label>
            </p>
            
            <p>
                <label for="IMAGEN_PRODUCTO"><strong>Imagen</strong></label><br/>
                <a><img src="<?php echo IMAGES_PATH."/imagen_jpg.png";?>" style="width: 100px; height:100px"/></a><br /><br />
                <input id="IMAGEN_PRODUCTO" name="IMAGEN_PRODUCTO" value="" type="file" class="inputbox" <?php if($editar=="info"){echo "readonly";}?>/>
                </p>
                
                <p>
                <label for="INFONUTRICIONAL_PRODUCTO"><strong>Informaci&oacute;n Nutricional</strong></label><br/>
                <a><img src="" /></a>
                <textarea class="text-input textarea" id="INFONUTRICIONAL_PRODUCTO" name="INFONUTRICIONAL_PRODUCTO" rows="5" cols="65" <?php if($editar=="info"){echo "readonly";}?>><?php echo $_POST['INFONUTRICIONAL_PRODUCTO'];?></textarea>
                </p>
                
                <p>
                <input type="hidden" id="ESTADO_PRODUCTO" name="ESTADO_PRODUCTO" value="0"/>
                <input type="submit" value="Registrar" class="btn" id="enviar"/>
                </p>
                 
    </form>     
       
    </div>
 
</div>