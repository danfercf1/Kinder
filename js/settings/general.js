$(document).ready(function(){
    $("#testForm").validate({    
    	rules: {		
    		PASS_USUARIO: "required",
            
            REPASS_USUARIO: "required",

            REPASS_USUARIO: {

                equalTo: "#PASS_USUARIO"
            
            }
    	},    
    	messages: {		
    		PASS_USUARIO: {
    			required: "Es requerido"
    		},
            REPASS_USUARIO: {
    			required: "Es requerido"
    		},
            REPASS_USUARIO: {
                equalTo: "Deben ser iguales"
            }
    	}
    });
});