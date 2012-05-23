<div class="contentcontainer">   
    <div class="headings altheading">
        <h2>Encuestas</h2>
    </div>
    <div class="contentbox">
        <form id="listado">
    	<table width="100%" id="listado_paquete" >
        	<thead>
            	<tr>
                	<th rowspan="2">Nombre Encuesta</th>
                    <th rowspan="2">Descripci&oacute;n Encuesta</th>
                    <th rowspan="2">Estado</th>
                    <th colspan="5" rowspan="1" class="acciones">Acciones</th>
                </tr>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        <div class="extrabottom">
        	<ul>
            	<li><img src="<?php echo IMAGES_PATH;?>/icons/icon_info.png" alt="Info" /> Ver</li>
                <li><img src="<?php echo IMAGES_PATH;?>/icons/icon_edit.png" alt="Edit" /> Editar</li>
                <li><img src="<?php echo IMAGES_PATH;?>/icons/icon_approve.png" alt="Active" /> Activar</li>
                <li><img src="<?php echo IMAGES_PATH;?>/icons/icon_unapprove.png" alt="Deactive" /> Desactivar</li>
                <li><img src="<?php echo IMAGES_PATH;?>/icons/icon_delete.png" alt="Delete" /> Eliminar</li>
            </ul>
            <div class="bulkactions">
            	<select name="opciones" id="opciones">
                	<option value="0">Elegir opci&oacute;n</option>
                    <option value="1">Eliminar</option>
                    <option value="2">Activar</option>
                </select>
                <input type="submit" value="Apply" class="btn" />
            </div>
        </div>
        </form>
        <div style="clear: both;"></div>
    </div>
    
</div>