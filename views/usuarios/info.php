<div class="contentcontainer">
    <div class="headings alt">
        <h2>Informaci&oacute;n Usuario</h2>
    </div>
    <div class="contentbox info_form">
        <form id="form_edit" action="<?php echo ROOT_PATH;?>users/edit" method="POST">  
        <table>
            <tr>
                <td>
                <p>
                <span>Nombres</span><br/><br/>
                <input id="NOMBRES_USUARIO" name="NOMBRES_USUARIO" value="<?php echo $usuario->nombres_usuario;?>" type="text" class="inputbox" <?php if($editar=="info"){echo "readonly";}?>/>
                </p>
                </td>
                <td>
                <p>
                <span>Apellidos</span><br/><br/>
                <input id="APELLIDOS_USUARIO" name="APELLIDOS_USUARIO" value="<?php echo $usuario->apellidos_usuario;?>" type="text" class="inputbox" <?php if($editar=="info"){echo "readonly";}?>/>
                </p>
                </td>
            </tr>
            <tr>
                <td>
                <p>
                <span>Fecha Nacimiento</span><br/><br/>
                <input id="FECHANAC_USUARIO" name="FECHANAC_USUARIO" value="<?php echo $usuario->fechanac_usuario;?>" type="text" class="inputbox" <?php if($editar=="info"){echo "readonly";}?>/>
                </p>
                </td>
                <td>
                <p>
                <span>Email</span><br/><br/>
                <input id="EMAIL_USUARIO" name="EMAIL_USUARIO" value="<?php echo $usuario->email_usuario;?>" type="text" class="inputbox" <?php if($editar=="info"){echo "readonly";}?>/>
                </p>        
                </td>
            </tr>
            <tr>
                <td>
                <p>
                <span>Localidad</span><br/><br/>
                <input id="LOCALIDAD_USUARIO" name="LOCALIDAD_USUARIO" value="<?php echo $usuario->localidad_usuario;?>" type="text" class="inputbox" <?php if($editar=="info"){echo "readonly";}?>/>
                </p>
                </td>
                <td>
                <p>
                <span>Provincia</span><br/><br/>
                <input id="PROVINCIA_USUARIO" name="PROVINCIA_USUARIO" value="<?php echo $usuario->provincia_usuario;?>" type="text" class="inputbox" <?php if($editar=="info"){echo "readonly";}?>/>
                </p>
                </td>
            </tr>
            <tr>
                <td>
                <p>
                <span>Login</span><br/><br/>
                <input id="LOGIN_USUARIO" name="LOGIN_USUARIO" value="<?php echo $usuario->login_usuario;?>" type="text" class="inputbox" <?php if($editar=="info"){echo "readonly";}?>/>
                </p>
                </td>
                <td>
                <p>
                <span>G&eacute;nero</span><br/><br/>
                <label for="GENERO_USUARIOM">Masculino</label><input id="GENERO_USUARIOM" name="GENERO_USUARIO" class="check_boxgenero" value="1" type="radio" <?php if($usuario->genero_usuario==1){echo "checked";}?> />
                <label for="GENERO_USUARIOF">Femenino</label><input id="GENERO_USUARIOF" name="GENERO_USUARIO" class="check_boxgenero" value="2" type="radio" <?php if($usuario->genero_usuario==2){echo "checked";}?>/>
                </p>
                </td>
            </tr>
            <tr>
                <td>
                <p>
                <span>Suscrito a newsletter</span>
                <input id="NEWSLETTER_USUARIO" name="NEWSLETTER_USUARIO" value="" <?php if($usuario->newsletter_usuario==1){echo "checked";}?> type="checkbox" <?php if($editar=="info"){echo "readonly";}?>/>
                </p>
                </td>
            </tr>
        </table>
        
        <?php if($editar=="editar"){?>
        <p>
            <input type="submit" value="Actualizar" class="btn" id="enviar"/>
            <input type="hidden" id="ID_USUARIO" name="ID_USUARIO" value="<?php echo $usuario->id_usuario;?>"/>
        </p>
        <?php }?>
        </form>
   </div>
</div>