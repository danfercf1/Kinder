$(document).ready(function(){
    
    $('#generar').click(function(){
        var nombre_valido =$("#NOMBRE_ENCUESTA").valid();
        var cantidad_valido =$("#CANTIDAD_OPCIONES").valid();
        var descripcion_valido = $('#DESCRIPCION_ENCUESTA').valid();
        if(nombre_valido==true && cantidad_valido==true && $('#CANTIDAD_OPCIONES').val() > 0 && descripcion_valido == true){
            var valor = $('#CANTIDAD_OPCIONES').val();
            var enable = $( "#tabs, #graphs" ).tabs( "option", "disabled", "false");
            $('#CANTIDAD_OPCIONES').change(function(){
                var nuevo = $('#CANTIDAD_OPCIONES').val();
                if(nuevo>0){
                    $('#formulario_opciones').empty();
                    for(i = 1; i <= nuevo ; i++){
                        $('#formulario_opciones').append($("<p><label for='NOMBRE_OPCION"+i+"'><strong>Opcion "+i+":</strong></label><input type='text' id='NOMBRE_OPCION"+i+"' class='nombre_opc inputbox required' name='NOMBRE_OPCION[]' /></p>"));     
                    }
                    $( "#tabs, #graphs").tabs({ selected: 1});
                }else{alert("Debe ingresar una cantidad de respuestas valida");}
            });
            
            for(i = 1; i <= valor ; i++){
                $('#formulario_opciones').append($("<p><label for='NOMBRE_OPCION"+i+"'><strong>Opcion "+i+":</strong></label><input type='text' id='NOMBRE_OPCION"+i+"' class='nombre_opc inputbox required' name='NOMBRE_OPCION[]' /></p>"));     
            }
            $('#tabs, #graphs').tabs({ selected: 1});
            
        }if($('#CANTIDAD_OPCIONES').val() == 0){
            alert("Debe ingresar una cantidad de respuestas valida");
        }
    });
    //$('#poll_create').validate();
    $('#poll_create').submit(function(){
        var tamano = $('.nombre_opc').valid();
        if(tamano==true){
            return true;
        }else{return false;}
        
    });
   
   
});