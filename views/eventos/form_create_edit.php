<div class="contentcontainer" id="graphs">
    <div class="headings alt">
        <h2 class="left">Crear Evento</h2>
        <ul class="smltabs">
        	<li><a href="#details">Detalles Evento</a></li>
        </ul>
    </div>
 
    <div class="contentbox" id="details">
    <form action="<?php echo ROOT_PATH;?>events/create" method="POST" name="poll_create" id="poll_create">	   
       
            <p>
                <label for="NOMBRE_EVENTO"><strong>Nombre evento:</strong></label>
                <input type="text" id="NOMBRE_EVENTO" class="inputbox required" name="NOMBRE_EVENTO" value="<?php echo $_POST['NOMBRE_EVENTO']?>" maxlength="25" size="25"/> <br />
                <label class="smltxt">(Ejemplo para colocar descripcion del campo)</label>              
            </p>
            
            <p>
                <label for="DESCRIPCION_EVENTO"><strong>Descripci&oacute;n:</strong></label>
                <textarea class="text-input textarea required" id="DESCRIPCION_EVENTO" name="DESCRIPCION_EVENTO" rows="5" cols="55"><?php echo $_POST['DESCRIPCION_EVENTO']?></textarea>
                <label class="smltxt">(Ejemplo para colocar descripcion del campo)</label>
            </p>
            
            <p>
                <!--<div id="map" style="width: 500px; height: 400px;"></div>-->
                <label for="LUGAR_EVENTO"><strong>Lugar</strong></label><br/>
                <input type="text" id="LUGAR_EVENTO" class="inputbox required" name="LUGAR_EVENTO" value="<?php echo $_POST['LUGAR_EVENTO']?>" /> <br />
            </p>
                
            <p>
                <span id="fecha_inicio">
                <label for="FECHA_EVENTO"><strong>Fecha</strong></label><br/>
                <input type="text" id="FECHA_EVENTO" class="input_date date-picker-text required" name="FECHA_EVENTO" readonly="readonly" value="<?php echo $_POST['FECHA_EVENTO']?>"/>
                <!--<input type="text" rel="FECHA_EVENTO" class="inputbox date-picker" /> <br /><br />-->
                </span>
            </p>
            <p>
            <input type="submit" value="Registrar" class="btn" id="enviar"/>
            </p>
                 
    </form>     
       
    </div>
 
</div>