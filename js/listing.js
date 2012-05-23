$(document).ready(function(){
    
    $('#listado').submit(function(){
        var sData = $('#listado').serialize();
        
        if($('#opciones').val()==1){
               
               if($(".check_list").is(':checked')) {  
                   if(varlist.borrar=="users/delete"){
                        var confirmar = confirm("Desea eliminar el/los usuario/s?");
                   }else{
                        var confirmar = confirm("Desea eliminar el/los registro/s?"); 
                   }
                   
                   if(confirmar){
                        $.post(ROOT_PATH+varlist.borrar,sData,function(msg){
                          //alert(msg);
                          location.reload();
                        });
                   }      
               }else{
                    alert("Necesita seleccionar al menos un registro");
               }
              return false;
           
        }if($('#opciones').val()==2){
            if($(".check_list").is(':checked')) {
                $.post(ROOT_PATH+varlist.publicar,sData,function(msg){
                    //alert(msg);
                    location.reload();
                });
            }else{
                    alert("No realizo ninguna seleccion");
            }
           return false;
           
        }if($('#opciones').val()==0){
            alert("Debe escoger una opcion");
            location.reload();
            return false;
        }
        
        //return false;
    });
    
    var oTable = $('#listado_paquete').dataTable({
        /*"sScrollY":380,*/
        "aaSorting": [[ 1, "asc" ]],
        "oLanguage": {
            "sLengthMenu": "Mostrando _MENU_ registros por p&aacute;gina",
            "sZeroRecords": "No se encontr&oacute; ning&uacute;n registro",
            "sInfo": "Mostrando _START_ a _END_ de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando 0 a 0 de 0 registros",
            "sInfoFiltered": "(filtered from _MAX_ total records)",
            "oPaginate": {
            "sFirst": "Primera P&aacute;gina",
            "sLast": "Ultima P&aacute;gina",
            "sNext": "Siguiente",
            "sPrevious": "Anterior"
            }
        },
        "sPaginationType": "full_numbers",
        "bProcessing": true,
        "bServerSide": true,             
        "sAjaxSource": ROOT_PATH+'bridge/bridge/'+varlist.funcion,
        "fnServerData": function ( sSource, aoData, fnCallback ) {
            $.ajax({
        "dataType": 'json', 
        "type": "POST", 
        "url": sSource, 
        "data": aoData, 
        "success": fnCallback
        });
     },
		"fnDrawCallback": function() 
        {
            $('.paquete_delete').click(function(){
               var confirmar = confirm("Desea eliminar este registro?");
               if(confirmar==false){
                   return false; 
               }
            });
            $('.paquete_ver').fancybox({
                'autoDimensions':   true,
                'transitionIn'  :   'elastic',
                'transitionOut' :   'elastic',
                'speedIn'       :   600, 
                'speedOut'      :   200, 
                'overlayShow'   :   true,
                'hideOnOverlayClick' : true,
                'titleShow'     : false
            });
            $('.paquete_update').fancybox({
                'autoDimensions':   true,
                'transitionIn'  :   'elastic',
                'transitionOut' :   'elastic',
                'speedIn'       :   600, 
                'speedOut'      :   200, 
                'overlayShow'   :   true,
                'hideOnOverlayClick' : true,
                'titleShow'     : false
            });
            
            $('.table_fancy').fancybox({
                'autoDimensions':   true,
                'transitionIn'  :   'elastic',
                'transitionOut' :   'elastic',
                'speedIn'       :   600, 
                'speedOut'      :   200, 
                'overlayShow'   :   true,
                'hideOnOverlayClick' : true,
                'titleShow'     : false
            });
            
        }
     
    });
});

/*$(document).ready(function(){
    
    
    $('#listado_paquete').dataTable({
        "sScrollY":380,
        "sPaginationType": "full_numbers",
        "bProcessing": true,
     "bServerSide": true,             
     "sAjaxSource": ROOT_PATH+'bridge/bridge/'+varlist.url,
        "fnServerData": function ( sSource, aoData, fnCallback ) {
            $.ajax({
       "dataType": 'json', 
       "type": "POST", 
       "url": sSource, 
       "data": aoData, 
       "success": fnCallback
        });
     }
    });
});*/