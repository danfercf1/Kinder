<div class="contentcontainer">   
    <div class="headings altheading">
        <h2>Eventos</h2>
    </div>
    <div class="contentbox">
        <form id="listado">
    	<table width="100%" id="listado_paquete" >
        	<thead>
            	<tr>
                	<th rowspan="2">Nombre Evento</th>
                    <th rowspan="2">Descripci&oacute;n</th>
                    <th rowspan="2">Fecha</th>
                    <th colspan="4" rowspan="1" class="acciones">Acciones</th>
                </tr>
                <tr>
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
                <li><img src="<?php echo IMAGES_PATH;?>/icons/icon_delete.png" alt="Delete" /> Eliminar</li>
            </ul>
            <div class="bulkactions">
            	<select name="opciones" id="opciones">
                	<option value="0">Elegir opci&oacute;n</option>
                    <option value="1">Eliminar</option>
                </select>
                <input type="submit" value="Apply" class="btn" />
            </div>
        </div>
        </form>
        <div style="clear: both;"></div>
    </div>
    
</div>