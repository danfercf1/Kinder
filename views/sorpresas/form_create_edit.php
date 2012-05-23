<div class="contentcontainer" id="graphs">
    <div class="headings alt">
        <h2 class="left">Crear Sorpresa</h2>
        <ul class="smltabs">
        	<li><a href="#details">Detalles Sorpresa</a></li>
        </ul>
    </div>
 
    <div class="contentbox" id="details">
    <form action="<?php echo ROOT_PATH;?>surprises/create"  method="POST" name="poll_create" id="poll_create" enctype='multipart/form-data'>	   
       
            <p>
                <label for="NOMBRE_SORPRESA"><strong>Nombre:</strong></label>
                <input type="text" id="NOMBRE_SORPRESA" class="inputbox required" name="NOMBRE_SORPRESA" value="<?php echo $_POST['NOMBRE_SORPRESA'];?>"/> <br />  
                <label class="smltxt">(Ejemplo para colocar descripcion del campo)</label>              
            </p>
            <p>
                <label for="IMAGEN_SORPRESA"><strong>Imagen</strong></label><br/>
                <a><img src="<?php echo IMAGES_PATH."/imagen_jpg.png";?>" style="width: 100px; height:100px"/></a><br /><br />
                <input id="IMAGEN_SORPRESA" name="IMAGEN_SORPRESA" value="" type="file" class="inputbox required"/>
            </p>
            
            <p>
                <label for="CODIGO_SORPRESA"><strong>C&oacute;digo</strong></label>
                <input id="CODIGO_SORPRESA" name="CODIGO_SORPRESA" value="" type="text" class="inputbox required"/>
                <label class="smltxt">(Ejemplo para colocar descripcion del campo)</label>
            </p>
            
            <p>
                <label for="ANIO_SORPRESA"><strong>A&ntilde;o:</strong></label>
                <select id="ANIO_SORPRESA" class="inputbox required" name="ANIO_SORPRESA">
                    <option value="">Elija un a&ntilde;o</option>
                    <?php for ($i=2005;$i<=date("Y");$i++):?>
                    <option value="<?php echo $i?>" <?php if($_POST['ANIO_SORPRESA'] == $i){echo "selected";}?>><?php echo $i?></option>
                    <?php endfor?>
                </select>
                <br />
                <label class="smltxt">(Ejemplo para colocar descripcion del campo)</label>
            </p>
            
            <p>
                <label for="ID_CATEGORIA"><strong>Serie:</strong></label>
                <select id="ID_CATEGORIA" class="inputbox required" name="ID_CATEGORIA">
                    <option value="">Elija una serie</option>
                    <?php foreach($categoria as $opcion): ?>
                        <option value="<?php echo $opcion->id_categoria;?>" <?php if($_POST['ID_CATEGORIA'] == $opcion->id_categoria){echo "selected";}?>><?php echo $opcion->nombre_categoria;?></option>
                    <?php endforeach?>
                </select>
                <label class="smltxt">(Ejemplo para colocar descripcion del campo)</label>
            </p>
            
            <p>
            <input type="submit" value="Registrar" class="btn" id="enviar"/>
            </p>
                 
    </form>     
       
    </div>
 
</div>