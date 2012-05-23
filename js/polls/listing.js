$(document).ready(function(){
    $("#polls_listing").dataTable({
        "sScrollY":380,
        "sPaginationType": "full_numbers",
        "bProcessing": true,
     "bServerSide": true,             
     "sAjaxSource": ROOT_PATH+'bridge/bridge',
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
});