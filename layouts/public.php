<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" xmlns:v="urn:schemas-microsoft-com:vml" lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
    <title>FastDevelPHP</title>
    <link href="<?= IMAGES_PATH ?>favicon.ico" rel="shortcut icon"/>
    <link href="<?= CSS_PATH ?>style.css" rel="stylesheet" type="text/css" />
    <link href="<?= CSS_PATH ?>reset.css" rel="stylesheet" type="text/css" />
    <script> var ROOT_PATH = "<?= ROOT_PATH ?>"; </script>
    <script src="<?= JS_PATH ?>jquery.js"></script>
</head>
<body>
    <div class="main">
        <div class="header" id="header">
            <h1><a href="<?echo ROOT_PATH?>"><img alt="" src="<?echo IMAGES_PATH?>logo.png" /></a></h1>
            <a class="main_header_img" href="<?echo ROOT_PATH?>"><img alt="" src="<?echo IMAGES_PATH?>image_fastdevel.png" /></a>
            <div class="slogan">
                Framework de codigo libre para agilizar y estructurar el Desarrollo de Aplicaciones Web 
            </div>
        </div>        
        <div class="body">            
            <div class="sidebar">
                
            </div>
            
            <div class="view_content">
                <?= $contentView ?>
            </div>
            
        </div>
        <div class="footer">
            FastDevelPHP &copy; 2010  - Systems Development Company srl. todos los derechos reservados.
        </div>
    </div>    
</body>
</html>
