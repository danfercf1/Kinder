$(document).ready(function(){
     $.extend($.validator.defaults,{
        errorClass: "errorbox",
        validClass:"correctbox",
        errorElement: "span",
        errorPlacement: function(error, element,errorClass){        
            labelTmp=element.attr("id");//Busca por id        
            $('label[for="'+labelTmp+'"]').wrapInner('<span class="red" />');
            element.after(error.before("<img class=\"errorboxImg\" src=\""+ROOT_PATH+"images/icons/icon_missing.png\" alt=\"Error\" />"+"<br />"));
                    
        },
        success: function(label,element, errorClass, validClass) {
            $('.errorboxImg').css('display','none');
            $('label span').removeClass('red');
            label.parent("p").children("img.errorboxImg").hide();
        },
        highlight: function(element, errorClass, validClass) {        
            $(element).removeClass(validClass);
            $(element).addClass(errorClass);
            $(element).parent("p").children("img.errorboxImg").show();
        }
    });
});