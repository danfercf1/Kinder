<div class="contentcontainer" id="graphs">
    <div class="headings alt">
        <h2 class="left">Crear Encuesta</h2>
        <ul class="smltabs">
        	<li><a href="#details">Detalles Encuesta</a></li>
            <li><a href="#options">Opciones</a></li>
        </ul>
    </div>
 <form action="<?php echo ROOT_PATH;?>polls/create"  method="POST" name="poll_create" id="poll_create">
    <div class="contentbox" id="details">
	   
       
            <p>
                <label for="NOMBRE_ENCUESTA"><strong>Nombre encuesta:</strong></label>
                <input type="text" id="NOMBRE_ENCUESTA" class="inputbox required" name="NOMBRE_ENCUESTA" /> <br />  
                <span class="smltxt">(Ejemplo para colocar descripcion del campo)</span>              
            </p>
            
            <p>
                <label for="DESCRIPCION_ENCUESTA"><strong>Descripci&oacute;n:</strong></label>
                <textarea class="text-input textarea required" id="DESCRIPCION_ENCUESTA" name="DESCRIPCION_ENCUESTA" rows="5" cols="75"></textarea>
                <span class="smltxt">(Ejemplo para colocar descripcion del campo)</span>
            </p>
            
            <p>
                <label for="CANTIDAD_OPCIONES"><strong>Cantidad de respuestas:</strong></label>
                <input type="text" id="CANTIDAD_OPCIONES" class="inputbox cant_opciones required number" name="CANTIDAD_OPCIONES" /><br />
            </p>
            
            <p>
            <label>Generar el listado de opciones para la encuesta</label>               
            <input type="button" value="Generar" class="btn" id="generar" />
            </p>
       
    </div>
    
    <div class="contentbox" id="options">
        
        <p>Ingrese los nombres de las opciones</p>
        <div id="formulario_opciones"></div>
        <input type="submit" value="Registrar" class="btn" id="enviar"/>    
        
    </div>
 </form>     
</div>