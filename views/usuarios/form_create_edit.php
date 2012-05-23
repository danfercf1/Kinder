
<div class="contentcontainer" id="graphs">
    <div class="headings alt">
        <h2 class="left">Crear Producto</h2>
        <ul class="smltabs">
        	<li><a href="#details">Detalles Producto</a></li>
        </ul>
    </div>
 
    <div class="contentbox" id="details">
    <form action="<?php echo ROOT_PATH;?>products/create"  method="POST" name="poll_create" id="poll_create">	   
       
            <p>
                <label for="NOMBRE_PRODUCOT"><strong>Nombre encuesta:</strong></label>
                <input type="text" id="NOMBRE_PRODUCTO" class="inputbox required" name="NOMBRE_PRODUCTO" /> <br />  
                <span class="smltxt">(Ejemplo para colocar descripcion del campo)</span>              
            </p>
            
            <p>
                <label for="DESCRIPCION_PRODUCTO"><strong>Descripci&oacute;n:</strong></label>
                <textarea class="text-input textarea" id="DESCRIPCION_PRODUCTO" name="DESCRIPCION_PRODUCTO" rows="5" cols="75"></textarea>
                <span class="smltxt">(Ejemplo para colocar descripcion del campo)</span>
            </p>
            
            <input type="submit" value="Submit" class="btn" id="enviar"/>     
    </form>     
       
    </div>
    
   
       
        
   
     
</div>