$(document).ready(function(){
    //$('#DESCRIPCION_EVENTO').wysiwyg();
    $('#poll_create').submit(function(){
         var nom_evento = $('#NOMBRE_EVENTO').valid();
         var desc_evento = $('#DESCRIPCION_EVENTO').valid();
         var lug_evento = $('#LUGAR_EVENTO').valid();
         var fecha_evento = $('#FECHA_EVENTO').valid();
         
         if(fecha_evento != ''){
            $('.errorboxImg').css('display','none');
         }
         if(nom_evento == true && desc_evento == true && lug_evento == true && fecha_evento == true){
            
            return true;
         }else{
            return false;
         }
         
    });
});