<div class="contentcontainer med left">
    <div class="headings alt">
        <h2>Ajustes Generales</h2>
    </div>
    <div class="contentbox">
    	<form action="<?php echo ROOT_PATH;?>settings/general" id="testForm" method="POST" >
            <h2><strong>Cambiar contrase&ntilde;a</strong></h2>
    		<p>
                <label for="PASS_USUARIO"><strong>Contrase&ntilde;a:</strong></label>
                <input type="password" id="PASS_USUARIO" class="inputbox" name="PASS_USUARIO" /> <br />                
            </p>
            <p>
                <label for="REPASS_USUARIO"><strong>Repetir Contrase&ntilde;a:</strong></label>
                <input type="password" id="REPASS_USUARIO" class="inputbox" name="REPASS_USUARIO" /> <br />                
            </p>            
            <p><input type="submit" value="Actualizar" class="btn" /></p>
            
        </form>         
	</div>
</div>