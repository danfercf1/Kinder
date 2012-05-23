<?php
/*
    $status_message=array(
                        "title"=>"Titulo del mensaje",
                        "message"=>"Cuerpo del mensaje",
                        "status"=>"Tipo de mensaje");    
    Tipos de mensaje:
    - warning (amarillo)
    - success (verde)
    - error (rojo)
    - info (azul)
*/
?>
<?php if(isset($status_message) and $status_message["message"]!="" and $status_message["status"]!=""):?>
<div class="status <?php echo $status_message["status"];?>">
	<p class="closestatus"><a href="javascript:void(0);" title="Close">x</a></p>
	<p><img src="<?php echo IMAGES_PATH;?>icons/icon_<?php echo $status_message["status"];?>.png" alt="<?php echo ucfirst($status_message["status"]);?>" /><span><?php echo $status_message["title"];?></span> <?php echo $status_message["message"];?></p>
</div>
<?php endif;?> 