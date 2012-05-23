<!DOCTYPE HTML>
<head>
	<meta http-equiv="content-type" content="text/html" />
    <title>Registro Padres</title>
    <link href="<?php echo CSS_PATH;?>main.css" rel="stylesheet" type="text/css" />
    <link href="<?php echo CSS_PATH;?>datePickerf.css" rel="stylesheet" type="text/css" />
    <link href="<?php echo CSS_PATH;?>jquery-ui-1.8.9.custom.css" rel="stylesheet" type="text/css" />
    
    
    <!--<link href="<?php echo CSS_PATH;?>layout.css" rel="stylesheet" type="text/css" />-->
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
    <script type="text/javascript" src="<?php echo JS_PATH;?>jquery.validate.min.js"></script>
    <script type="text/javascript" src="<?php echo JS_PATH;?>datepicker.js"></script>
    <style>
        body{
            background: #808080;
        }
        .error_registro{
             left: 590px;
             top: 980px;
             z-index: 5;
        }
    </style>
</head>
<body>
<section id="content_confirmacion">
    <form id="registro_padres" name="registro_padres" action="" method="POST">
    <section class="fondo_ipad">
        <div class="datos">
            <div class="titulo_principal">CONFIRMACI&Oacute;N DE REGISTRO PARA EL SITIO MAGIC KINDER</div>
            <p class="texto_confirmacion">
                Su hijo se ha registrado en el sitio www.Kinder.com.ar y necesita que usted active su cuenta para empezar a coleccionar las sorpresas virtuales.
            </p>
            <div class="datos_login">
                <p>Los datos de la cuenta de su hijo son los siguientes:</p>
                <ul>
                    <li>
                        <label for="LOGIN_USUARIO" class="texto_rojo">Usuario:</label>
                        <input id="LOGIN_USUARIO" name="LOGIN_USUARIO" type="text" class="class_input required" value="<?php echo $_POST['LOGIN_USUARIO'];?>"/>
                    </li>
                    <li>
                        <label for="PASS_USUARIO" class="texto_rojo">Contrase&ntilde;a:</label>
                        <input id="PASS_USUARIO" name="PASS_USUARIO" type="password" class="class_input required"/>
                    </li>
                </ul>
            </div>
            <div class="datos_usuario">
                <p>También podés dejarnos tus datos, así podemos informarte acerca de las novedades del Mundo Kinder</p>
                <ul>
                         <li>
                                <label for="NOMBRESP_USUARIO" class="texto_rojo">Nombre:</label>
                                <input id="NOMBRESP_USUARIO" name="NOMBRESP_USUARIO" type="text" class="class_input required" value="<?php echo $_POST['NOMBRESP_USUARIO']?>"/>
                         </li> 
                         <li>
                            <label for="EMAILP_USUARIO" class="texto_rojo">Email:</label>
                            <input id="EMAILP_USUARIO" name="EMAILP_USUARIO" type="text" class="class_input required" value="<?php echo $_POST['EMAILP_USUARIO']?>"/>
                         </li>
                         <li>
                            <label for="FECHANACP_USUARIO" class="texto_rojo">Fecha de nacimiento:</label>
                            <input id="FECHANACP_USUARIO" id="FECHANACP_USUARIO" type="text" class="class_input required" value="<?php echo $_POST['FECHANACP_USUARIO']?>"/>
                         </li>
                 </ul>
            </div>
            <div class="informe_legal">
                <p>Lee el informe legal sobre el tratamiento de los datos personales</p>
                <textarea id="texto_legal" name="texto_legal" readonly="readonly"></textarea>
                <p>Doy consentimiento para la activación del registro al Sitio para acceder a las áreas y participar en las iniciativas reservadas a los inscritos al Sitio; para el envío de la newsletter con contenidos editoriales e información relacionada con la actividad del Sitio, la participación en concursos y operaciones promocionales;:</p>
                
                <section class="radios">
                    
                    <input type="radio" name="NEWSLETTER_USUARIO" value="1" class="input_radios" /><label class="confirmacion">SI</label>
                    
                                         
                    <input type="radio" name="NEWSLETTER_USUARIO" value="0" class="input_radios" checked="checked"/><label class="confirmacion">NO</label>
                </section>
            
                <p>Doy consentimiento para el envío, incluso a través de correo electrónico (e-mail) de información y ofertas comerciales, newsletter, material publicitario e informativo de MPG, de otras sociedades pertenecientes al Grupo Ferrero y de sociedades terceras asociadas al Grupo Ferrero;:</p>
                
                <section class="radios">
                    <input type="radio" name="OFERTAS_USUARIO" value="1" /><label class="confirmacion">SI</label> 
                    <input type="radio" name="OFERTAS_USUARIO" value="0" checked="checked"/><label class="confirmacion">NO</label>
                </section>
                
                <p>Doy consentimiento para la recopilación de datos e información en general y particular sobre orientaciones y preferencias de consumo para la definición de perfiles individuales y de grupo con fines estadísticos y comerciales, que tenga como objetivo mejorar la oferta de nuestros servicios y productos.:</p>
                <section class="radios">
                    <input type="radio" name="INFORMACION_USUARIO" value="1"/><label class="confirmacion">SI</label> 
                    <input type="radio" name="INFORMACION_USUARIO" value="0" checked="checked"/><label class="confirmacion">NO</label>
                </section>
                
            </div>
            
            <div class="botones_formulario">
                <button id="reset" type="reset">ANULAR</button>
                <button id="submit" type="submit">CONFIRMAR</button>
            </div>
            
        </div>
       </form>
    </section>
    
</section>

</body>

<script>
    jQuery(document).ready(function(){
        
        jQuery('#FECHANAC_USUARIO').datepicker({changeYear: true,yearRange:'-90:+0'});
        
        jQuery('#FECHANACP_USUARIO').datepicker({changeYear: true,yearRange:'-90:+0'});
        
        
        jQuery.fn.resetForm = function () {
            $(this).each (function() { this.reset(); });
        }
        
        jQuery('#reset').click(function(){
            jQuery('#registro_padres').resetForm();
        });
        
        jQuery('#registro_padres').validate({errorClass: "error_validregistro"});
    });
</script>
</html>