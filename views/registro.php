<section id="content_registro">
    <span id="titulo">bienvenido</span>
    <form id="form_registro" action="<?php echo ROOT_PATH;?>frontend/create" method="POST">
        <ul id="lista_formulario">
            <li><label for="LOGIN_USUARIO" class="etiqueta_flecha">mi nombre de usuario</label><input name="LOGIN_USUARIO" id="LOGIN_USUARIO" type="text" value="<?php echo $_POST['LOGIN_USUARIO'];?>" class="form_login required"/></li>
            <li><label for="EDAD_USUARIO" class="etiqueta_flecha">mi edad</label><input name="EDAD_USUARIO" id="EDAD_USUARIO" type="text" value="<?php echo $_POST['EDAD_USUARIO'];?>" class="form_login required"/></li>
            <li><label for="PASS_USUARIO" class="etiqueta_flecha">contrase&ntilde;a</label><input name="PASS_USUARIO" id="PASS_USUARIO" type="password" class="form_login required"/></li>
            <li><label for="REPASS_USUARIO" class="etiqueta_flecha">confirmar contrase&ntilde;a</label><input name="REPASS_USUARIO" id="REPASS_USUARIO" type="password" class="form_login required"/></li>
            <li class="mensaje_activacion">Aqu&iacute; te enviaremos la activaci&oacute;n de tu cuenta, para que puedas comenzar a jugar:</li>
            <li><label for="EMAILP_USUARIO" class="etiqueta_flecha">mail de uno de mis padres</label><input name="EMAILP_USUARIO" id="EMAILP_USUARIO" type="text" value="<?php echo $_POST['EMAILP_USUARIO'];?>" class="form_login required email"/></li>
        </ul>
        <button class="boton_registro"></button>
    </form>
    <span class="error_registro" id="mostrar_registro"></span>
</section>

<script>
    jQuery(function(){
       jQuery('#form_registro').validate({errorClass: "error_validregistro"});
       jQuery('#FECHANAC_USUARIO').datepicker({changeYear: true,yearRange:'-90:+0'});
       jQuery('#form_registro').submit(function(){
           if(jQuery('#form_registro').valid()){
               jQuery.post(jQuery(this).attr('action'),jQuery(this).serialize(),function(dato){
                   if(dato == 'Ya existe ese usuario'){
                       jQuery('#fancybox-content #mostrar_registro').html(dato);
                   }else{
                       jQuery('#fancybox-content').html(dato);
                   }

               });
               
           }
        return false;
       }); 
    });
</script>
