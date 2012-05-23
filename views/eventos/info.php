<?php 
    function cambiaf_a_normal($fecha){ 
       	ereg( "([0-9]{2,4})-([0-9]{1,2})-([0-9]{1,2})", $fecha, $mifecha); 
       	$lafecha=$mifecha[3]."/".$mifecha[2]."/".$mifecha[1]; 
       	return $lafecha; 
    }
?>
<script>
$(".input_date").datePicker({clickInput:true}).bind('dateSelected',function(e, selectedDate, $td, state){        
        var fecha=selectedDate.getDate()+"/"+Date.monthNum[selectedDate.getMonth()]+"/"+selectedDate.getFullYear();
        $("#"+$(this).attr("rel")).val(fecha);
});
</script>
<div class="contentcontainer">
    <div class="headings alt">
        <h2>Informaci&oacute;n Evento</h2>
    </div>
    <div class="contentbox info_form">
        <form id="form_edit" action="<?php echo ROOT_PATH;?>events/edit" method="POST">  
        <p>
        <span>Nombre Evento</span><br/><br/>
        <input id="NOMBRE_EVENTO" name="NOMBRE_EVENTO" value="<?php echo $evento->nombre_evento;?>" type="text" class="inputbox" <?php if($editar=="info"){echo "readonly";}?>/>
        </p>
        <p>
        <span>Descripci&oacute;n Evento</span><br/><br/>
        <textarea class="text-input textarea" id="DESCRIPCION_EVENTO" name="DESCRIPCION_EVENTO" rows="5" cols="65" <?php if($editar=="info"){echo "readonly";}?>><?php echo $evento->descripcion_evento;?></textarea>
        </p>
        <p>
        <span>Lugar Evento</span><br/><br/>
        <input id="LUGAR_EVENTO" name="LUGAR_EVENTO" value="<?php echo $evento->lugar_evento;?>" type="text" class="inputbox" <?php if($editar=="info"){echo "readonly";}?>/>
        </p>
        
        <p>
        <div class="div_fecha_inicio">
                <span id="fecha_inicio">
                <label for="FECHA_EVENTO"><strong>Fecha</strong></label><br/>
                <input type="text" id="FECHA_EVENTO" class="<?php if($editar=="editar"){echo "input_date";}?> date-picker-text required" name="FECHA_EVENTO" value="<?php echo cambiaf_a_normal($evento->fecha_evento);?>" <?php if($editar=="info"){echo "readonly";}?>/>
                </span>
        </div>
        </p>
        <?php if($editar=="editar"){?>
        <p>
            <input type="submit" value="Actualizar" class="btn" id="enviar"/>
            <input type="hidden" id="ID_EVENTO" name="ID_EVENTO" value="<?php echo $evento->id_evento;?>"/>
        </p>
        <?php }?>
        </form>
   </div>
</div>