<section id="content_registro">
    <span id="titulo">Bienvenido</span>
    <form id="form_registro" action="<?php echo ROOT_PATH;?>frontend/create" method="POST">
        <ul id="lista_formulario">
            <li><label for="NOMBRES_USUARIO" class="etiqueta_flecha">Nombre</label><input name="NOMBRES_USUARIO" id="NOMBRES_USUARIO" type="text" value="<?php echo $_POST['NOMBRES_USUARIO'];?>" class="form_login required"/></li>
            <li><label for="APELLIDOS_USUARIO" class="etiqueta_flecha">Apellido</label><input name="APELLIDOS_USUARIO" id="APELLIDOS_USUARIO" type="text" value="<?php echo $_POST['APELLIDOS_USUARIO'];?>" class="form_login required"/></li>
            <li><label for="EMAIL_USUARIO" class="etiqueta_flecha">Mi mail</label><input name="EMAIL_USUARIO" id="EMAIL_USUARIO" type="text" value="<?php echo $_POST['EMAIL_USUARIO'];?>" class="form_login required email"/></li>
            <li><label for="EMAILP_USUARIO" class="etiqueta_flecha">Mail de pap&aacute;</label><input name="EMAILP_USUARIO" id="EMAILP_USUARIO" type="text" value="<?php echo $_POST['EMAILP_USUARIO'];?>" class="form_login required email"/></li>
            <li><label for="PASS_USUARIO" class="etiqueta_flecha">Contrase&ntilde;a</label><input name="PASS_USUARIO" id="PASS_USUARIO" type="password" class="form_login required"/></li>
        </ul>
        <button class="boton_registro"></button>
    </form>
    
</section>

<script>
    jQuery(function(){
       jQuery('#form_registro').validate({errorClass: "error_validregistro"}); 
       jQuery('#form_registro').submit(function(){
           if(jQuery('#form_registro').valid()){
               jQuery.post(jQuery(this).attr('action'),jQuery(this).serialize(),function(dato){
                    jQuery('#fancybox-content').html(dato);
               });
               
           }
        return false;
       }); 
    });
</script>
