<!DOCTYPE HTML>
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>Registro Padres</title>
    <link href="<?php echo CSS_PATH;?>main.css" rel="stylesheet" type="text/css" />
    <link href="<?php echo CSS_PATH;?>datePickerf.css" rel="stylesheet" type="text/css" />
    <link href="<?php echo CSS_PATH;?>jquery-ui-1.8.9.custom.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" type="text/css" media="all" href="<?php echo CSS_PATH;?>jScrollPane.css" />



    <!--<link href="<?php echo CSS_PATH;?>layout.css" rel="stylesheet" type="text/css" />-->
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
    <script type="text/javascript" src="<?php echo JS_PATH;?>jquery.validate.min.js"></script>
    <script type="text/javascript" src="<?php echo JS_PATH;?>jquery.ui.datepicker-es.js"></script>
    <script type="text/javascript" src="<?php echo JS_PATH;?>datepicker.js"></script>
    <script type="text/javascript" src="<?php echo JS_PATH;?>jquery.mousewheel.js"></script>
    <script type="text/javascript" src="<?php echo JS_PATH;?>jScrollPane.js"></script>

    <style>
        body{
            background: #808080;
            overflow-y: scroll;
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

            <div class="informe_legal">
                <p>Lee y acepta la pol&iacute;tica de privacidad sobre el tratamiento de los datos: </p>
                <textarea id="texto_legal" name="texto_legal" readonly="readonly">
                    La utilizaci&oacute;n del presente sitio web por parte de Uds. o de sus hijos est&aacute; sujeta a estos T&eacute;rminos de Uso y pol&iacute;tica de privacidad. Estos T&eacute;rminos de Uso podr&aacute;n ser alterados en cualquier momento sin necesidad de comunicaci&oacute;n alguna. La continuidad en el uso del sitio despu&eacute;s que se haya realizado cualquier modificaci&oacute;n de las presentes condiciones de uso significar&aacute; la aceptaci&oacute;n de la versi&oacute;n actualizada de los nuevos T&eacute;rminos de Uso. Por esta raz&oacute;n, recomendamos revisar estos T&eacute;rminos de Uso cada vez que utilice este sitio web.
                    El presente sitio de internet contiene informaci&oacute;n espec&iacute;fica como as&iacute; tambi&eacute;n contenidos para ser descargados. El titular de este sitio se reserva el derecho de cesar en la operaci&oacute;n del mismo, total o parcialmente.
                    Al registrarse se les solicita los siguientes datos: Nombre de usuario, La edad, una contrase&ntilde;a y el correo electr&oacute;nico de unos de los padres para realizar la activaci&oacute;n de la cuenta. La falta de veracidad de estos datos implicar&aacute; dejar sin efecto la registraci&oacute;n.
                    Para activar la cuenta se enviar&aacute; un correo electr&oacute;nico al padre del usuario en donde se le comunica que su hijo se est&aacute; registrando en ww.kinder.com.ar, y se le muestra el nombre de usuario y contrase&ntilde;a. El nombre de usuario y contrase&ntilde;a son personales y solo podr&aacute;n ser usados por el menor o por sus padres para verificar el funcionamiento de la cuenta. El activar la cuenta implica la aceptaci&oacute;n las condiciones legales y la pol&iacute;tica de privacidad
                    Los datos que Uds. nos facilita se usaran para permitir su participaci&oacute;n en el sitio, y para hacerle ofertas de productos de la empresa. NO ser&aacute;n compartidos con terceros. La base de datos de Ferrero est&aacute; registrada en la Direcci&oacute;n Nacional de Protecci&oacute; de Datos personales.
                    El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un inter&eacute;s leg&iacute;timo al efecto conforme lo establecido en el art&iacute;culo 14, inciso 3 de la Ley N&deg; 25.326.
                    La DIRECCION NACIONAL DE PROTECCION DE DATOS PERSONALES, Organo de Control de la Ley N&deg; 25.326, tiene la atribuci&oacute;n de atender las denuncias y reclamos que se interpongan con relaci&oacute;n al incumplimiento de las normas sobre protecci&oacute;n de datos personales.
                    Ferrero de reserva el derecho de borrar una cuenta en cualquier motivo sin explicaci&oacute;n de causa.
                    Los contenidos provistos en este sitio, incluyendo toda la informaci&oacute;n, videos, fotograf&iacute;as, ilustraciones, nombres y logos son propiedad de FERRERO y/o sus contratistas y est&aacute;n protegidos por derechos de autor, la legislaci&oacute;n marcaria y otros derechos de propiedad intelectual e industrial. Los contenidos son &uacute;nicamente para uso personal y no comercial. Los contenidos del sitio web descriptos arriba no pueden ser modificados, copiados, reproducidos, vendidos, alquilados, licenciados, usados, ampliados o utilizados de cualquier forma sin el previo consentimiento escrito del titular de los derechos.
                    Cualquier acuerdo complementario requiere que se realice en forma escrita. El usuario acuerda someterse por cualquier divergencia respecto del uso del sitio y/o sus contenidos a los Tribunales Ordinarios de la Capital Federal.

                </textarea>
                <!--<div id="texto_legal" class="scroll-pane">
                    La utilizaci&oacute;n del presente sitio web por parte de Uds. o de sus hijos est&aacute; sujeta a estos T&eacute;rminos de Uso y pol&iacute;tica de privacidad. Estos T&eacute;rminos de Uso podr&aacute;n ser alterados en cualquier momento sin necesidad de comunicaci&oacute;n alguna. La continuidad en el uso del sitio despu&eacute;s que se haya realizado cualquier modificaci&oacute;n de las presentes condiciones de uso significar&aacute; la aceptaci&oacute;n de la versi&oacute;n actualizada de los nuevos T&eacute;rminos de Uso. Por esta raz&oacute;n, recomendamos revisar estos T&eacute;rminos de Uso cada vez que utilice este sitio web.
                    El presente sitio de internet contiene informaci&oacute;n espec&iacute;fica como as&iacute; tambi&eacute;n contenidos para ser descargados. El titular de este sitio se reserva el derecho de cesar en la operaci&oacute;n del mismo, total o parcialmente.
                    Al registrarse se les solicita los siguientes datos: Nombre de usuario, La edad, una contrase&ntilde;a y el correo electr&oacute;nico de unos de los padres para realizar la activaci&oacute;n de la cuenta. La falta de veracidad de estos datos implicar&aacute; dejar sin efecto la registraci&oacute;n.
                    Para activar la cuenta se enviar&aacute; un correo electr&oacute;nico al padre del usuario en donde se le comunica que su hijo se est&aacute; registrando en ww.kinder.com.ar, y se le muestra el nombre de usuario y contrase&ntilde;a. El nombre de usuario y contrase&ntilde;a son personales y solo podr&aacute;n ser usados por el menor o por sus padres para verificar el funcionamiento de la cuenta. El activar la cuenta implica la aceptaci&oacute;n las condiciones legales y la pol&iacute;tica de privacidad
                    Los datos que Uds. nos facilita se usaran para permitir su participaci&oacute;n en el sitio, y para hacerle ofertas de productos de la empresa. NO ser&aacute;n compartidos con terceros. La base de datos de Ferrero est&aacute; registrada en la Direcci&oacute;n Nacional de Protecci&oacute; de Datos personales.
                    El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un inter&eacute;s leg&iacute;timo al efecto conforme lo establecido en el art&iacute;culo 14, inciso 3 de la Ley N&deg; 25.326.
                    La DIRECCION NACIONAL DE PROTECCION DE DATOS PERSONALES, Organo de Control de la Ley N&deg; 25.326, tiene la atribuci&oacute;n de atender las denuncias y reclamos que se interpongan con relaci&oacute;n al incumplimiento de las normas sobre protecci&oacute;n de datos personales.
                    Ferrero de reserva el derecho de borrar una cuenta en cualquier motivo sin explicaci&oacute;n de causa.
                    Los contenidos provistos en este sitio, incluyendo toda la informaci&oacute;n, videos, fotograf&iacute;as, ilustraciones, nombres y logos son propiedad de FERRERO y/o sus contratistas y est&aacute;n protegidos por derechos de autor, la legislaci&oacute;n marcaria y otros derechos de propiedad intelectual e industrial. Los contenidos son &uacute;nicamente para uso personal y no comercial. Los contenidos del sitio web descriptos arriba no pueden ser modificados, copiados, reproducidos, vendidos, alquilados, licenciados, usados, ampliados o utilizados de cualquier forma sin el previo consentimiento escrito del titular de los derechos.
                    Cualquier acuerdo complementario requiere que se realice en forma escrita. El usuario acuerda someterse por cualquier divergencia respecto del uso del sitio y/o sus contenidos a los Tribunales Ordinarios de la Capital Federal.

                </div>-->
                <p><input type="checkbox" name="acepto_politicas" id="acepto_politicas" class="required"/><span>ACEPTO LAS POLITICAS DE PRIVACIDAD</span></p>
            </div>
            
            <div class="botones_formulario">
                <button id="submit" type="submit">ACTIVAR</button>
            </div>
            
        </div>
    </section>
    </form>

    
</section>

</body>

<script>
    jQuery(document).ready(function(){

        jQuery('#registro_padres').validate({errorClass: "error_validregistro"});

        //jQuery('#texto_legal').jScrollPane();
    });
</script>
</html>