<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Login</title>
<link href="<?php echo CSS_PATH;?>styles/layout.css" rel="stylesheet" type="text/css" />
<?php foreach($css as $c):?>
    <link href="<?php echo CSS_PATH.$c;?>.css" rel="stylesheet" type="text/css" />
<?php endforeach;?>
<link href="<?php echo CSS_PATH;?>themes/blue/styles.css" rel="stylesheet" type="text/css" />
</head>
<body>
    
	<?php echo $contentView;?>
</body>
</html>