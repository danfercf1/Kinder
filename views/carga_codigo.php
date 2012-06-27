<section id="content_codigo">
    <span id="titulo">Carga de c&oacute;digo</span>
    <form id="form_codigo" name="form_codigo" action="<?php echo ROOT_PATH;?>loginFrontend/addSurprises" method="POST">
        <ul id="lista_formulario">
            <li><label for="CODIGO_SORPRESA">N&uacute;mero de c&oacute;digo de la sorpresa</label></li>
            <li><input id="CODIGO_SORPRESA" name="CODIGO_SORPRESA" type="text" class="form_login required" value="<?php echo $_POST['CODIGO_SORPRESA'];?>"/></li>
        </ul>
        <button class="boton_registro"></button>
    </form>
    <span class="error_registro" id="loginUsuario"></span>
</section>

<script>

    jQuery(function(){
        jQuery('#register').click(function(){
            jQuery.fancybox({'href':'frontend/load_register','showCloseButton':true,'opacity':true});
        });
    });
    jQuery(function(){
        jQuery('#form_codigo').validate({errorClass: "error_validregistro"});
        jQuery('#form_codigo').submit(function(){
            if(jQuery('#form_codigo').valid()){
                jQuery.post(jQuery(this).attr('action'),jQuery(this).serialize(),function(dato){
                    if(dato === 'Datos incorrectos!'){
                        jQuery('#fancybox-content #loginUsuario').html(dato);
                    }else if(dato != ''){
                        jQuery.fancybox.close();
                    }
                });

            }
            return false;
        });
    });
</script>
