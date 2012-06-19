$(document).ready(function(){
    $(".input_date").datePicker({startDate:'01/01/2000',clickInput:true}).bind('dateSelected',function(e, selectedDate, $td, state){
        var fecha=selectedDate.getDate()+"/"+Date.monthNum[selectedDate.getMonth()]+"/"+selectedDate.getFullYear();
        $("#"+$(this).attr("rel")).val(fecha);
    });
    $(".input_date").keypress(function(){
        return false;
    });
});