<section id="content_registro">
    <span id="titulo">bienvenido</span>
    <form id="form_registro" action="<?php echo ROOT_PATH;?>frontend/create" method="POST">
        <ul id="lista_formulario">
            <li><label for="NOMBRES_USUARIO" class="etiqueta_flecha">mi nombre</label><input name="NOMBRES_USUARIO" id="NOMBRES_USUARIO" type="text" value="<?php echo $_POST['NOMBRES_USUARIO'];?>" class="form_login required"/></li>
            <li><label for="APELLIDOS_USUARIO" class="etiqueta_flecha">mi apellido</label><input name="APELLIDOS_USUARIO" id="APELLIDOS_USUARIO" type="text" value="<?php echo $_POST['APELLIDOS_USUARIO'];?>" class="form_login required"/></li>
            <li><label for="FECHANAC_USUARIO" class="etiqueta_flecha">fecha de nacimiento</label><input name="FECHANAC_USUARIO" id="FECHANAC_USUARIO" type="text" value="<?php echo $_POST['FECHANAC_USUARIO'];?>" class="form_login required date"/></li>
            <li><label for="EMAIL_USUARIO" class="etiqueta_flecha">mi mail</label><input name="EMAIL_USUARIO" id="EMAIL_USUARIO" type="text" value="<?php echo $_POST['EMAIL_USUARIO'];?>" class="form_login required email"/></li>
            <li><label for="EMAILP_USUARIO" class="etiqueta_flecha">mail de uno de mis padres</label><input name="EMAILP_USUARIO" id="EMAILP_USUARIO" type="text" value="<?php echo $_POST['EMAILP_USUARIO'];?>" class="form_login required email"/></li>
            <li><label for="PASS_USUARIO" class="etiqueta_flecha">contrase&ntilde;a</label><input name="PASS_USUARIO" id="PASS_USUARIO" type="password" class="form_login required"/></li>
            <li><label for="REPASS_USUARIO" class="etiqueta_flecha">confirmar contrase&ntilde;a</label><input name="REPASS_USUARIO" id="REPASS_USUARIO" type="password" class="form_login required"/></li>
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
                   if(dato == 'Ya existe ese e-mail'){
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
