<section id="content_login">
    <span id="titulo">Login</span>
    <form id="form_login" action="<?php echo ROOT_PATH;?>loginFrontend/access" method="POST">
        <ul id="lista_formulario">
            <li><label for="LOGIN_USUARIO">Usuario</label></li>
            <li><input id="LOGIN_USUARIO" name="LOGIN_USUARIO" type="text" class="form_login required" value="<?php echo $_POST['LOGIN_USUARIO'];?>"/></li>
            <li><label for="PASS_USUARIO">Password</label></li>
            <li><input id="PASS_USUARIO" name="PASS_USUARIO" type="password" class="form_login required"/></li>
        </ul>
        <a class="links" id="lost_password">Olvidaste tu password</a>
        <br />
        <a class="links" id="register">Registrarse</a>
        <button class="boton_registro"></button>
    </form>
    
</section>

<script>
var s = "<?php echo $confirmacion;?>"; 
jQuery(function(){
    jQuery('#register').click(function(){
       jQuery.fancybox({'href':'frontend/load_register','showCloseButton':true,'opacity':true}); 
    });  
});
jQuery(function(){
jQuery('#form_login').validate({errorClass: "error_validregistro"}); 
       jQuery('#form_login').submit(function(){
           if(jQuery('#form_login').valid()){
               jQuery.post(jQuery(this).attr('action'),jQuery(this).serialize(),function(dato){
                    jQuery('#fancybox-content').html(dato);
                    if(s == 'correcto'){
                       jQuery.fancybox.close(); 
                    }
               });
               
           }
        return false;
       });
});
</script>