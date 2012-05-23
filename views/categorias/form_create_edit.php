<div class="contentcontainer" id="graphs">
    <div class="headings alt">
        <h2 class="left">Crear Categoria</h2>
        <ul class="smltabs">
        	<li><a href="#details">Detalles Categoria</a></li>
        </ul>
    </div>
 
    <div class="contentbox" id="details">
    <form action="<?php echo ROOT_PATH;?>categories/create"  method="POST" name="poll_create" id="poll_create" enctype='multipart/form-data'>	   
       
            <p>
                <label for="NOMBRE_CATEGORIA"><strong>Nombre:</strong></label>
                <input type="text" id="NOMBRE_CATEGORIA" class="inputbox required" name="NOMBRE_CATEGORIA" value="<?php echo $_POST['NOMBRE_CATEGORIA'];?>"/> <br />  
                <label class="smltxt">(Ejemplo para colocar descripcion del campo)</label>              
            </p>
            
            <p>
            <input type="submit" value="Registrar" class="btn" id="enviar"/>
            </p>
                 
    </form>     
       
    </div>
 
</div>