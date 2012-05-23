<div id="logincontainer">
	<div id="loginbox">
    	<div id="loginheader">
        	<img src="<?php echo CSS_PATH;?>themes/green/img/cp_logo_login.png" alt="Control Panel Login" />
        </div>
        <div id="innerlogin">
        	<form method="post" action="<?php echo ROOT_PATH ?>login/access">
            	<p>Usuario:</p>
            	<input name="login" type="text" class="logininput" />
                <p>Contrase&ntilde;a:</p>
            	<input name="pass" type="password" class="logininput" />
               
               	<input type="submit" class="loginbtn" value="Submit" /><br />
                <p><a href="#" title="Forgoteen Password?">Forgotten Password?</a></p>
            </form>
        </div>
    </div>
    <img src="<?php echo IMAGES_PATH;?>login_fade.png" alt="Fade" />
</div>