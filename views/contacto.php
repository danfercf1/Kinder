<section id="content_contacto">
    <!--<span id="titulo">Bienvenido</span>-->
    <form id="form_contacto" action="<?php echo ROOT_PATH;?>frontend/contacts" method="POST">
        <ul id="lista_formulario">
            <li><label for="NOMBRES_USUARIO">Nombre y Apellido:</label></li>
            <li><input name="NOMBRES_USUARIO" id="NOMBRES_USUARIO" type="text" value="<?php echo $_POST['NOMBRES_USUARIO'];?>" class="form_login"/></li>
            <li><label for="EMAIL_USUARIO">Mail:</label></li>
            <li><input name="EMAIL_USUARIO" id="EMAIL_USUARIO" type="text" value="<?php echo $_POST['EMAIL_USUARIO'];?>" class="form_login"/></li>
            <li><label for="MENSAJE_USUARIO">Mensaje:</label></li>
            <li><textarea name="MENSAJE_USUARIO" id="MENSAJE_USUARIO" class="form_login"><?php echo $_POST['APELLIDOS_USUARIO'];?></textarea></li>
        </ul>
        <!--</a><button class="boton_registro"></button>-->
    </form>
</section>
<script>
    jQuery(function()){
        alert('asd');
        jQuery('#form_contacto').validate();
    }
</script>