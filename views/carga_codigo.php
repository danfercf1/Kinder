<style type="text/css">
    .titulo{
        padding-top: 10px;
        font-size: 35px !important;
    }
</style>
<section id="content_codigo" class="content_login">
    <div class="wrap_login">
        <span class="titulo">Carga de c&oacute;digo</span>
        <form id="form_codigo" name="form_codigo" action="<?php echo ROOT_PATH;?>loginFrontend/addSurprises" method="POST">
            <ul id="lista_formulario">
                <li><label for="CODIGO_SORPRESA">N&uacute;mero de c&oacute;digo de la sorpresa</label></li>
                <li><input id="CODIGO_SORPRESA" name="CODIGO_SORPRESA" type="text" class="form_login required" value="<?php echo $_POST['CODIGO_SORPRESA'];?>"/></li>
            </ul>
            <button class="boton_registro"></button>
        </form>
        <span class="error_registro" id="loginUsuario"></span>
    </div>
</section>

<script>
    var iteracion= null;
    jQuery(function(){
        jQuery('#form_codigo').validate({errorClass: "error_validregistro"});
        jQuery('#form_codigo').submit(function(){
            if(jQuery('#form_codigo').valid()){
                jQuery.post(jQuery(this).attr('action'),jQuery(this).serialize(),function(dato){
                    if(dato === 'C&oacute;digo incorrecto'){
                        jQuery('#fancybox-content #loginUsuario').html(dato);
                    }else if(dato != ''){
                        jQuery.fancybox({'href':'loginFrontend/loadComplete'});
                        placa_usuario.obj.removeChildAt(1);
                        stage.clear();
                        stage.update();
                        placa_usuario.initCantidadSorpresas();
                        sorpresas_arbol.initRemoveSurprises();
                        jQuery.post('loginFrontend/retrieveQsurprises', function(data){

                            var cantidad = data[0].cantidad;
                            if(cantidad == 0){
                                iteracion = 0;
                            }
                            else if(cantidad == 1){
                                iteracion = 1;
                            }else if(cantidad == 2){
                                iteracion = 2;
                            }else if(cantidad == 3){
                                iteracion = 3;
                            }else{
                                iteracion = 4;
                            }
                            sorpresas_arbol.initAddPag(0, iteracion);
                        },'json');

                        animacion_home.botones(cursor_derecha.obj);
                        animacion_home.botones(cursor_izquierda.obj);
                    }
                });

            }
            return false;
        });
    });
</script>
