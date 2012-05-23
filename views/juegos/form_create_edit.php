<div class="contentcontainer" id="graphs">
    <div class="headings alt">
        <h2 class="left">Registrar juego</h2>
        <ul class="smltabs">
        	<li><a href="#details">Detalles Juego</a></li>
        </ul>
    </div>
 
    <div class="contentbox" id="details">
    <form action="<?php echo ROOT_PATH;?>games/create"  method="POST" name="poll_create" id="poll_create">	   
       
            <p>
                <label for="NOMBRE_JUEGO"><strong>Nombre juego:</strong></label>
                <input type="text" id="NOMBRE_JUEGO" class="inputbox required" name="NOMBRE_JUEGO" value="<?php echo $_POST['NOMBRE_JUEGO']?>" /> <br />  
                <label class="smltxt">(Ejemplo para colocar descripcion del campo)</label>              
            </p>
            
            <p>
                <label for="DESCRIPCION_JUEGO"><strong>Descripci&oacute;n:</strong></label>
                <textarea class="text-input textarea required" id="DESCRIPCION_JUEGO" name="DESCRIPCION_JUEGO" rows="5" cols="75"><?php echo $_POST['DESCRIPCION_JUEGO']?></textarea>
                <label class="smltxt">(Ejemplo para colocar descripcion del campo)</label>
            </p>
            
            <p>
            <input type="submit" value="Registrar" class="btn" id="enviar"/>
            </p>
                 
    </form>     
       
    </div>
 
</div>